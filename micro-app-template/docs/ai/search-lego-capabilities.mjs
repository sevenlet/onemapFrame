import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildCapabilityContext, searchCapabilities } from './capability-search.mjs';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const index = JSON.parse(await readFile(path.join(currentDir, 'lego-capability-index.json'), 'utf8'));
const args = process.argv.slice(2);
const contextIndex = args.indexOf('--context');
const context = contextIndex >= 0 ? args[contextIndex + 1] : 'micro-app';
const query = args
  .filter((_, index) => contextIndex < 0 || (index !== contextIndex && index !== contextIndex + 1))
  .join(' ')
  .trim();

if (!query) {
  console.error('Usage: node search-lego-capabilities.mjs <query> [--context micro-app]');
  process.exit(1);
}

const autoContext = contextIndex < 0
  ? buildCapabilityContext(index, query, { codeEditor: { projectContext: 'micro-app callBase @/bridge.js' } })
  : null;
const results = autoContext?.hits || searchCapabilities(index, query, { context, topK: 5 });
const resolvedContext = autoContext?.detectedUsageContext || context;
console.log(JSON.stringify({ query, context: resolvedContext, sourceVersion: index.sourceVersion, results }, null, 2));
