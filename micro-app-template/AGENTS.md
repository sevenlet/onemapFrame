# LEGO micro-app AI guidance

This repository is a LEGO micro-app project. The default LEGO capability context is `micro-app`.

Before answering or changing code for LEGO map, dialog, bridge, or framework capabilities, run:

```powershell
node docs/ai/search-lego-capabilities.mjs "<user question>" --context micro-app
```

Use only returned capabilities, parameters, constraints, and context call patterns. If no result is returned, state that the local LEGO capability library has no match instead of inventing an API.

Important context rules:

- Host services use `import { callBase } from '@/bridge.js'` and `await callBase(service, action, ...params)`.
- `dialogService.open` uses `await callBase('dialogService', 'open', options)` and returns the actual dialog instance ID.
- Dialog `component` is a host-registered LEGO component name, not a micro-app Vue file path.
- Function callbacks are not directly serializable through the current dialog RPC bridge.
- Host-supplied maps use `mapRef.value`; local `<TGisMap>` instances use `realMapRef.value`.
- Do not edit files under `docs/ai/`; they are generated.
