/**
 * 调试基座 DialogService。
 *
 * RPC 方法、返回值、默认行为尽量与 visual-building template/3.0.0 保持一致；
 * 渲染层使用 el-dialog，生产环境使用 TDialog + LEGO 动态组件。
 */
import { reactive } from 'vue';

let dialogSequence = 0;
let microAppInstanceSequence = 0;

const DEFAULT_OPTIONS = {
  title: '',
  component: '',
  content: null,
  headerComponent: '',
  params: {},
  context: {},
  initialSize: 'large',
  locked: false,
  showLockButton: true,
  showSizeButton: true,
  showMask: false,
  contentScale: false,
  closeOtherUnlocked: true,
  cancelText: '',
  confirmText: '',
  dialogStyle: {},
  cStyle: {},
  // 调试模板 el-dialog 专用；生产通过 dialogStyle.maxPosition 控制。
  width: '',
};

function createDialogId() {
  dialogSequence += 1;
  return `t-dialog-${Date.now()}-${dialogSequence}`;
}

function createMicroAppInstanceToken() {
  microAppInstanceSequence += 1;
  return `instance-${Date.now()}-${microAppInstanceSequence}`;
}

function clonePlain(value) {
  if (value == null) return value;
  try {
    return JSON.parse(JSON.stringify(value));
  } catch {
    return value;
  }
}

function hasOwn(target, propertyName) {
  return Object.prototype.hasOwnProperty.call(target, propertyName);
}

function normalizeMicroAppContent(content) {
  if (content == null) return null;
  if (!content || typeof content !== 'object' || Array.isArray(content)) {
    throw new Error('[DialogService] content must be an object');
  }
  if (content.type !== 'micro-app') {
    throw new Error(`[DialogService] unsupported content type: ${content.type || ''}`);
  }

  const route = typeof content.route === 'string' ? content.route.trim() : '';
  const hasProtocol = /^[a-z][a-z\d+.-]*:/i.test(route);
  if (!route || !route.startsWith('/') || route.startsWith('//') || hasProtocol) {
    throw new Error('[DialogService] micro-app content.route must be a safe internal route starting with "/"');
  }

  return { type: 'micro-app', route };
}

function normalizeSourceMicroApp(sourceMicroApp) {
  if (!sourceMicroApp || typeof sourceMicroApp !== 'object') return null;
  const instanceName = typeof sourceMicroApp.instanceName === 'string'
    ? sourceMicroApp.instanceName.trim()
    : '';
  const url = typeof sourceMicroApp.url === 'string' ? sourceMicroApp.url.trim() : '';
  if (!instanceName || !url) return null;
  return { instanceName, url };
}

function validateContentMode(component, content, sourceMicroApp) {
  if (component && content) {
    throw new Error('[DialogService] component and content cannot be used together');
  }
  if (content && !sourceMicroApp) {
    throw new Error('[DialogService] unable to resolve the calling micro-app');
  }
}

function canAccessRecord(record, runtimeContext = {}) {
  const ownerMicroAppName = runtimeContext.ownerMicroAppName;
  if (!ownerMicroAppName) return true;
  return record?.sourceMicroApp?.instanceName === ownerMicroAppName;
}

function assertContentUpdateAllowed(currentRecord, partialOptions) {
  if (!hasOwn(partialOptions, 'content')) return;
  const nextContent = normalizeMicroAppContent(partialOptions.content);
  const currentContent = currentRecord.content || null;
  if (JSON.stringify(nextContent) !== JSON.stringify(currentContent)) {
    throw new Error('[DialogService] content type or route cannot be changed while the dialog is open');
  }
}

function createRecord(options = {}, existingRecord = null, runtimeContext = {}) {
  const previous = existingRecord || {};
  const choose = (key) => (
    hasOwn(options, key)
      ? options[key]
      : (hasOwn(previous, key) ? previous[key] : DEFAULT_OPTIONS[key])
  );

  const component = choose('component') || '';
  const content = normalizeMicroAppContent(choose('content'));
  const sourceMicroApp = normalizeSourceMicroApp(
    runtimeContext.sourceMicroApp || previous.sourceMicroApp,
  );
  validateContentMode(component, content, sourceMicroApp);

  return {
    id: options.id || previous.id || createDialogId(),
    title: choose('title') || '',
    component,
    content,
    sourceMicroApp,
    microAppInstanceToken: content
      ? (runtimeContext.microAppInstanceToken || previous.microAppInstanceToken)
      : '',
    headerComponent: choose('headerComponent') || '',
    params: clonePlain(choose('params') || {}),
    context: clonePlain(choose('context') || {}),
    initialSize: choose('initialSize') === 'small' ? 'small' : 'large',
    locked: Boolean(choose('locked')),
    showLockButton: Boolean(choose('showLockButton')),
    showSizeButton: Boolean(choose('showSizeButton')),
    showMask: Boolean(choose('showMask')),
    contentScale: Boolean(choose('contentScale')),
    closeOtherUnlocked: Boolean(choose('closeOtherUnlocked')),
    cancelText: choose('cancelText') || '',
    confirmText: choose('confirmText') || '',
    dialogStyle: clonePlain(choose('dialogStyle') || {}),
    cStyle: clonePlain(choose('cStyle') || {}),
    width: choose('width') || '',
    visible: true,
    closeResolver: previous.closeResolver || null,
  };
}

function createPublicSnapshot(record) {
  if (!record) return undefined;
  return clonePlain({
    id: record.id,
    title: record.title,
    component: record.component,
    content: record.content,
    headerComponent: record.headerComponent,
    params: record.params,
    context: record.context,
    initialSize: record.initialSize,
    locked: record.locked,
    showLockButton: record.showLockButton,
    showSizeButton: record.showSizeButton,
    showMask: record.showMask,
    contentScale: record.contentScale,
    closeOtherUnlocked: record.closeOtherUnlocked,
    cancelText: record.cancelText,
    confirmText: record.confirmText,
    dialogStyle: record.dialogStyle,
    cStyle: record.cStyle,
    width: record.width,
  });
}

export function createDialogService() {
  /** @type {Array<Object>} */
  const dialogs = reactive([]);
  let isDestroyed = false;

  function assertAlive() {
    if (isDestroyed) throw new Error('Dialog service has been destroyed');
  }

  function findIndex(dialogId) {
    return dialogs.findIndex((item) => item.id === dialogId);
  }

  function findRecord(dialogId) {
    return dialogs.find((item) => item.id === dialogId);
  }

  function isOpen(dialogId, runtimeContext = {}) {
    const record = findRecord(dialogId);
    return Boolean(record && canAccessRecord(record, runtimeContext));
  }

  function get(dialogId, runtimeContext = {}) {
    const record = findRecord(dialogId);
    return canAccessRecord(record, runtimeContext) ? createPublicSnapshot(record) : undefined;
  }

  // 生产：不存在时返回空对象。
  function getParams(dialogId, runtimeContext = {}) {
    const record = findRecord(dialogId);
    return canAccessRecord(record, runtimeContext) ? clonePlain(record?.params || {}) : {};
  }

  // 生产：不存在时返回 false。
  function setLocked(dialogId, locked, runtimeContext = {}) {
    const record = findRecord(dialogId);
    if (!record || !canAccessRecord(record, runtimeContext)) return false;
    record.locked = Boolean(locked);
    return true;
  }

  // 生产：不存在时返回 false。
  function close(dialogId, result = null, runtimeContext = {}) {
    const index = findIndex(dialogId);
    if (index < 0) return false;
    const record = dialogs[index];
    if (!canAccessRecord(record, runtimeContext)) return false;
    if (typeof record.closeResolver === 'function') {
      record.closeResolver(result);
      record.closeResolver = null;
    }
    dialogs.splice(index, 1);
    return true;
  }

  // 生产默认 includeLocked=true，且无返回值。
  function closeAll(options = {}, runtimeContext = {}) {
    const includeLocked = options.includeLocked !== false;
    const targets = dialogs.filter((record) => (
      canAccessRecord(record, runtimeContext) && (includeLocked || !record.locked)
    ));
    targets.forEach((record) => close(record.id));
  }

  // 生产：不存在 / 已 destroy 返回 false，成功返回 true。
  function update(dialogId, partialOptions = {}, runtimeContext = {}) {
    const index = findIndex(dialogId);
    if (index < 0 || isDestroyed) return false;
    const current = dialogs[index];
    if (!canAccessRecord(current, runtimeContext)) return false;
    assertContentUpdateAllowed(current, partialOptions);
    const next = createRecord({ ...partialOptions, id: dialogId }, current);
    // 未明确更新时保留运行中的 size / lock。
    if (!hasOwn(partialOptions, 'initialSize')) next.initialSize = current.initialSize;
    if (!hasOwn(partialOptions, 'locked')) next.locked = current.locked;
    dialogs.splice(index, 1, next);
    return true;
  }

  function closeOtherUnlockedDialogs(dialogId, sourceMicroApp) {
    dialogs
      .filter((record) => (
        record.id !== dialogId
        && !record.locked
        && (!sourceMicroApp || record.sourceMicroApp?.instanceName === sourceMicroApp.instanceName)
      ))
      .forEach((record) => close(record.id));
  }

  function createUniqueDialogId(requestedId) {
    if (!isOpen(requestedId)) return requestedId;
    let uniqueId;
    do {
      uniqueId = `${requestedId}-${createDialogId()}`;
    } while (isOpen(uniqueId));
    return uniqueId;
  }

  function open(options = {}, runtimeContext = {}) {
    assertAlive();
    const sourceMicroApp = normalizeSourceMicroApp(runtimeContext.sourceMicroApp);
    const requestedExisting = options.id ? findRecord(options.id) : null;
    const canReplaceExisting = requestedExisting
      && !requestedExisting.locked
      && (!sourceMicroApp
        || requestedExisting.sourceMicroApp?.instanceName === sourceMicroApp.instanceName);
    const existing = canReplaceExisting ? requestedExisting : null;
    const nextOptions = requestedExisting && !canReplaceExisting
      ? { ...options, id: createUniqueDialogId(options.id) }
      : options;
    const next = createRecord(nextOptions, existing, {
      sourceMicroApp,
      microAppInstanceToken: nextOptions.content?.type === 'micro-app'
        ? createMicroAppInstanceToken()
        : '',
    });

    if (next.closeOtherUnlocked) {
      closeOtherUnlockedDialogs(next.id, sourceMicroApp);
    }

    const existingIndex = findIndex(next.id);
    if (existingIndex >= 0) {
      dialogs.splice(existingIndex, 1, next);
    } else {
      dialogs.push(next);
    }
    return next.id;
  }

  // 宿主级方法，仅用于基座自身；微应用 RPC 白名单不暴露。
  function configure() { return {}; }
  function getConfig() { return {}; }
  function resetConfig() { return {}; }

  function destroy() {
    if (isDestroyed) return;
    closeAll();
    dialogs.splice(0, dialogs.length);
    isDestroyed = true;
  }

  // 调试兼容旧 showDialog：生产 dialogService.open 本身仍只返回 id。
  function openAndWait(options = {}) {
    const dialogId = open(options);
    const record = findRecord(dialogId);
    return new Promise((resolve) => {
      record.closeResolver = resolve;
    });
  }

  return {
    dialogs,
    open,
    update,
    close,
    closeAll,
    setLocked,
    isOpen,
    get,
    getParams,
    configure,
    getConfig,
    resetConfig,
    destroy,
    openAndWait,
  };
}

export const DIALOG_SERVICE_RPC_ACTIONS = new Set([
  'open',
  'update',
  'close',
  'closeAll',
  'setLocked',
  'isOpen',
  'get',
  'getParams',
]);

export function createDialogServiceRpcFacade(dialogService) {
  return (action, ...params) => {
    if (typeof action !== 'string' || action.trim() === '') {
      throw new Error('[DialogService RPC] action must be a non-empty string');
    }
    if (!DIALOG_SERVICE_RPC_ACTIONS.has(action)) {
      throw new Error(`[DialogService RPC] Unknown or disallowed action: ${action}`);
    }
    return dialogService[action](...params);
  };
}

export function createContextualDialogServiceRpcFacade(dialogService, resolveSourceMicroApp) {
  return (rpcContext, action, ...params) => {
    if (typeof action !== 'string' || action.trim() === '') {
      throw new Error('[DialogService RPC] action must be a non-empty string');
    }
    if (!DIALOG_SERVICE_RPC_ACTIONS.has(action)) {
      throw new Error(`[DialogService RPC] Unknown or disallowed action: ${action}`);
    }

    const ownerMicroAppName = rpcContext.ownerMicroAppName || rpcContext.microAppName;
    const accessContext = { ownerMicroAppName };
    if (action === 'update') return dialogService.update(params[0], params[1], accessContext);
    if (action === 'close') return dialogService.close(params[0], null, accessContext);
    if (action === 'closeAll') return dialogService.closeAll(params[0], accessContext);
    if (action === 'setLocked') return dialogService.setLocked(params[0], params[1], accessContext);
    if (action === 'isOpen') return dialogService.isOpen(params[0], accessContext);
    if (action === 'get') return dialogService.get(params[0], accessContext);
    if (action === 'getParams') return dialogService.getParams(params[0], accessContext);

    const dialogOptions = params[0] || {};
    const sourceMicroApp = resolveSourceMicroApp?.(rpcContext);
    return dialogService.open(dialogOptions, { sourceMicroApp });
  };
}
