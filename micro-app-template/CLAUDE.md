# LEGO micro-app capability retrieval

Treat this repository as `developmentContext=micro-app`.

For LEGO map, dialog, bridge, or framework questions, first run:

```powershell
node docs/ai/search-lego-capabilities.mjs "<question>" --context micro-app
```

Answer from the returned records and constraints. Do not invent an API when no record matches. Distinguish host map references (`mapRef.value`) from local `<TGisMap>` references (`realMapRef.value`). Host services are called through `@/bridge.js` `callBase`.
