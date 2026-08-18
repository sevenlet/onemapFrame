const DEFAULT_TOP_K = 5;
const DEFAULT_MIN_SCORE = 28;

function normalizeText(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function truncateText(value, maxLength = 600) {
  const text = String(value || '');
  return text.length <= maxLength ? text : `${text.slice(0, maxLength)}...`;
}

function unique(items, limit = Number.POSITIVE_INFINITY) {
  const result = [];
  const seen = new Set();
  for (const item of items || []) {
    const value = String(item || '').trim();
    if (!value || seen.has(value)) continue;
    seen.add(value);
    result.push(value);
    if (result.length >= limit) break;
  }
  return result;
}

function includesIgnoreCase(haystack, needle) {
  if (!needle) return false;
  return normalizeText(haystack).toLowerCase().includes(normalizeText(needle).toLowerCase());
}

function splitQuestionSegments(question) {
  const segments = String(question || '')
    .split(/[\r\n]+|[？?；;]+/)
    .map((item) => normalizeText(item))
    .filter(Boolean);
  return segments.length ? segments : [normalizeText(question)].filter(Boolean);
}

function extractQueryTerms(question) {
  const text = normalizeText(question).toLowerCase();
  const asciiTerms = text.split(/[^a-z0-9_.-]+/i).filter((item) => item.length >= 2);
  const knownTerms = [
    '地图', '图层', '隐藏', '显示', '显隐', '可见', '透明', '缩放', '定位', '范围', '中心',
    '控件', '图例', '弹窗', '对话框', '打开', '关闭', '更新', '锁定', '解锁', '参数', '销毁',
    '提示', '标注', '查询', '过滤', '绘制', '测距', '面积', '缓冲', '微应用', '基座', '宿主',
  ].filter((term) => text.includes(term));
  return unique([text, ...asciiTerms, ...knownTerms], 50);
}

export function detectCapabilityDomains(index, question) {
  const text = normalizeText(question).toLowerCase();
  if (!text) return [];
  const domains = [];
  for (const [domainId, domain] of Object.entries(index?.domains || {})) {
    const keywords = domain.intentKeywords || [];
    if (keywords.some((keyword) => includesIgnoreCase(text, keyword))) domains.push(domainId);
  }
  return domains;
}

function detectDefaultContext(pageContext) {
  const codeText = normalizeText(JSON.stringify(pageContext?.codeEditor || pageContext || {})).toLowerCase();
  if (/(realmapref|tgismap)/i.test(codeText)) return 'micro-app-local-map';
  if (/(callbase|@\/bridge|dialogservice.*open)/i.test(codeText)) return 'micro-app';
  if (/(basedata|globaldata|usebasebridge|mapref)/i.test(codeText)) return 'micro-app-base-map';
  return 'lego-platform';
}

function detectExplicitContext(segment, domains) {
  const text = normalizeText(segment).toLowerCase();
  if (/(控制台|console|window\.__lego_root)/i.test(text)) return 'lego-console';
  if (/(realmapref|自带\s*tgismap|自带地图|内嵌地图|本地地图|tgismap)/i.test(text)) return 'micro-app-local-map';
  if (/(微应用|callbase|@\/bridge|基座|basedata|globaldata|usebasebridge|mapref)/i.test(text)) {
    return domains.includes('map') && !domains.includes('dialog') ? 'micro-app-base-map' : 'micro-app';
  }
  if (/(lego|低代码|rootdata|window|页面方法|运行时)/i.test(text)) return 'lego-platform';
  return '';
}

function contextFallbacks(contextId, entry) {
  const fallbacks = [contextId];
  if (contextId === 'micro-app') fallbacks.push('micro-app-base-map');
  if (contextId === 'micro-app-base-map') fallbacks.push('micro-app');
  if (contextId === 'lego-console') fallbacks.push('lego-platform');
  if (entry.domain === 'map') fallbacks.push('raw-sdk', 'lego-platform');
  else fallbacks.push('lego-platform');
  return unique(fallbacks);
}

function resolveEntryContext(entry, requestedContext) {
  for (const contextId of contextFallbacks(requestedContext, entry)) {
    if (entry.contexts?.[contextId]) return contextId;
  }
  return Object.keys(entry.contexts || {})[0] || requestedContext;
}

function scoreEntry(index, entry, question, terms, requestedContext, domains) {
  const text = normalizeText(question).toLowerCase();
  let score = 0;

  if (text.includes(String(entry.id || '').toLowerCase())) score += 120;
  if (text.includes(String(entry.signature || '').toLowerCase())) score += 120;
  if (text.includes(String(entry.method || '').toLowerCase())) score += 45;
  if (text.includes(String(entry.namespace || '').toLowerCase())) score += 25;
  if (domains.includes(entry.domain)) score += 12;

  for (const alias of entry.curatedAliases || []) {
    if (includesIgnoreCase(text, alias)) score += 70;
    else if (includesIgnoreCase(alias, text)) score += 20;
  }
  for (const alias of entry.aliases || []) {
    if (includesIgnoreCase(text, alias) || includesIgnoreCase(alias, text)) score += 12;
  }

  const searchable = [
    entry.id,
    entry.domain,
    entry.namespace,
    entry.method,
    entry.title,
    entry.signature,
    entry.description,
    ...(entry.aliases || []),
    ...(entry.curatedAliases || []),
    ...(entry.keywords || []),
    ...(entry.params || []).flatMap((param) => [param.name, param.type, param.description]),
    entry.returns?.type,
    entry.returns?.description,
    ...(entry.examples || []),
    ...(entry.constraints || []),
    ...Object.entries(entry.contexts || {}).flatMap(([contextId, context]) => [
      contextId,
      context.callPattern,
      context.reason,
      ...(context.constraints || []),
    ]),
    ...(index?.domains?.[entry.domain]?.intentKeywords || []),
  ].join(' ');

  for (const term of terms) {
    if (includesIgnoreCase(searchable, term)) score += 8;
  }

  const resolvedContext = resolveEntryContext(entry, requestedContext);
  if (entry.contexts?.[resolvedContext]) score += 5;
  return score;
}

function compactHit(entry, score, requestedContext, selectedContexts) {
  const selectedUsageContext = resolveEntryContext(entry, requestedContext);
  const selected = entry.contexts?.[selectedUsageContext] || {};
  const callPatterns = {};
  for (const contextId of selectedContexts || []) {
    const resolved = resolveEntryContext(entry, contextId);
    const context = entry.contexts?.[resolved];
    if (!context) continue;
    callPatterns[contextId] = {
      resolvedContext: resolved,
      available: context.available,
      callPattern: context.callPattern,
      reason: context.reason,
    };
  }

  return {
    id: entry.id,
    domain: entry.domain,
    title: entry.title,
    signature: entry.signature,
    description: entry.description,
    params: (entry.params || []).slice(0, 12),
    returns: entry.returns,
    examples: (entry.examples || []).slice(0, 3).map((example) => truncateText(example, 800)),
    constraints: unique([...(entry.constraints || []), ...(selected.constraints || [])]),
    selectedUsageContext,
    available: selected.available !== false,
    callPattern: selected.callPattern || null,
    unavailableReason: selected.reason || null,
    callPatterns,
    sourceUrl: entry.provenance?.sourceUrl || null,
    source: entry.provenance?.source || null,
    sourceSection: entry.provenance?.section || null,
    score,
  };
}

export function searchCapabilities(index, question, options = {}) {
  const topK = Number.isInteger(options.topK) ? options.topK : DEFAULT_TOP_K;
  const minScore = Number.isFinite(options.minScore) ? options.minScore : DEFAULT_MIN_SCORE;
  const requestedContext = options.context || 'lego-platform';
  const domains = options.domains?.length ? options.domains : detectCapabilityDomains(index, question);
  const terms = extractQueryTerms(question);
  const selectedContexts = unique([requestedContext, ...(options.contexts || [])]);

  const ranked = (index?.entries || [])
    .filter((entry) => !domains.length || domains.includes(entry.domain))
    .map((entry) => ({ entry, score: scoreEntry(index, entry, question, terms, requestedContext, domains) }))
    .filter((item) => item.score >= minScore)
    .sort((a, b) => b.score - a.score || String(a.entry.id).localeCompare(String(b.entry.id)));
  const relativeThreshold = ranked.length ? ranked[0].score * 0.35 : minScore;

  return ranked
    .filter((item) => item.score >= Math.max(minScore, relativeThreshold))
    .slice(0, topK)
    .map(({ entry, score }) => compactHit(entry, score, requestedContext, selectedContexts));
}

export function detectCapabilityUsageContexts(index, question, pageContext) {
  const defaultUsageContext = detectDefaultContext(pageContext);
  const segments = splitQuestionSegments(question).map((text) => {
    const domains = detectCapabilityDomains(index, text);
    const explicitUsageContext = detectExplicitContext(text, domains);
    return {
      text: truncateText(text, 240),
      domains,
      usageContext: explicitUsageContext || defaultUsageContext,
      explicit: Boolean(explicitUsageContext),
    };
  });
  const detectedUsageContexts = unique(segments.map((item) => item.usageContext));
  return {
    defaultUsageContext,
    primaryUsageContext: detectedUsageContexts.length === 1 ? detectedUsageContexts[0] : defaultUsageContext,
    detectedUsageContexts,
    hasMixedUsageContexts: detectedUsageContexts.length > 1,
    segments,
  };
}

export function buildCapabilityContext(index, question, pageContext, options = {}) {
  const detectedDomains = detectCapabilityDomains(index, question);
  if (!detectedDomains.length) return null;

  const usage = detectCapabilityUsageContexts(index, question, pageContext);
  const segmentHits = usage.segments.map((segment) => ({
    ...segment,
    hits: searchCapabilities(index, segment.text, {
      context: segment.usageContext,
      contexts: usage.detectedUsageContexts,
      domains: segment.domains.length ? segment.domains : detectedDomains,
      topK: options.segmentTopK || 3,
      minScore: options.minScore,
    }),
  }));

  const mergedHits = new Map();
  for (const segment of segmentHits) {
    for (const hit of segment.hits) {
      const existing = mergedHits.get(hit.id);
      if (!existing) {
        mergedHits.set(hit.id, hit);
        continue;
      }
      existing.score = Math.max(existing.score, hit.score);
      existing.callPatterns = { ...existing.callPatterns, ...hit.callPatterns };
    }
  }

  const hits = [...mergedHits.values()]
    .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id))
    .slice(0, options.topK || DEFAULT_TOP_K);

  return {
    detectedIntent: true,
    detectedDomains,
    detectedUsageContext: usage.primaryUsageContext,
    detectedUsageContexts: usage.detectedUsageContexts,
    defaultUsageContext: usage.defaultUsageContext,
    hasMixedUsageContexts: usage.hasMixedUsageContexts,
    contextSegments: usage.segments,
    segmentHits,
    usageContexts: usage.detectedUsageContexts.map((contextId) => ({
      id: contextId,
      label: index.contexts?.[contextId]?.label || contextId,
      setupHint: index.contexts?.[contextId]?.setupHint || '',
    })),
    sourceVersion: index.sourceVersion,
    generatedAt: index.generatedAt,
    hits,
    rules: [
      'LEGO 能力回答只能基于 capabilityContext.segmentHits 或 hits 中检索到的方法、参数、示例和限制。',
      '根据 contextSegments 为每个子问题选择对应调用写法，不要把一个显式场景套用到整条多问题消息。',
      'available 为 false 时必须说明该上下文不允许调用，并引用 unavailableReason，不要给出可执行调用代码。',
      '如果 hits 为空，明确说“当前 LEGO 能力库未找到匹配能力”，不要编造 API。',
      '不要推断文档中未提供的默认值、返回值、组件名或业务 ID。',
    ],
  };
}
