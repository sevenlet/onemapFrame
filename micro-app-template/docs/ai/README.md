# LEGO capability search

This directory contains generated AI development artifacts. Do not edit the index or search runtime directly.

Search before answering or implementing LEGO map, dialog, bridge, or framework capability questions:

```powershell
npm run ai:search -- "微应用怎么打开弹窗"
npm run ai:search -- "自带 TGisMap 怎么隐藏图层" --context micro-app-local-map
```

The project default is `micro-app`. Typical results use:

```js
import { callBase } from '@/bridge.js';

const dialogId = await callBase('dialogService', 'open', options);
```

Map questions may resolve to different contexts:

- Base map supplied by the host: `mapRef.value.Layer.*`
- Local `<TGisMap>`: `realMapRef.value.Layer.*`

Generated files:

- `lego-capability-index.json`
- `capability-search.mjs`
- `search-lego-capabilities.mjs`

They are rebuilt from the canonical capability records in the LEGO AI workspace.
