const RIPPLE_STYLE_ID = 'html-effect-style';
const DEFAULT_LAYER_ID = 'HTML渲染图层';

const RIPPLE_STYLE =
  '.ripple-box { margin: 100px; display: inline-block; width: 50px; height: 50px; border-radius: 50%; position: relative;}' +
  '.ripple-box span { position: absolute; top: 0; left: 0; right: 0; bottom: 0; border-radius: 50%; border: 1px solid #00ffff;box-shadow: 0 0 6px #00ffff inset;transition: all 1s;transform: scale(0, 0)}' +
  '.ripple1 { animation: rippleAnimation 2s infinite linear; }' +
  '.ripple2 { animation: rippleAnimation 2s infinite linear; animation-delay: 0.6s; }' +
  '.ripple3 { animation: rippleAnimation 2s infinite linear; animation-delay: 1.2s; }' +
  ' @keyframes rippleAnimation { from { opacity: 1; transform: scale(0, 0); } to { opacity: 0.1; transform: scale(2, 2); } }';

/**
 * 添加涟漪 HTML 图层
 * @param {Object} options
 * @param {Object} options.TMap 基座地图 TMap 对象
 * @param {Document} options.mapDocument 地图 DOM 所在的 document
 * @param {string} [options.layerId]
 * @param {Array<Object>} [options.data]
 */
export function addRippleHTMLLayer({
  TMap,
  mapDocument,
  layerId = DEFAULT_LAYER_ID,
  data = [{ LONGITUDE: 114.66, LATITUDE: 32.115 }],
}) {
  if (!TMap || !mapDocument) return null;

  if (TMap.getLayer?.(layerId)) {
    TMap.removeLayer(layerId);
  }

  let styleDom = mapDocument.querySelector(`#${RIPPLE_STYLE_ID}`);
  if (!styleDom) {
    styleDom = mapDocument.createElement('style');
    styleDom.id = RIPPLE_STYLE_ID;
    mapDocument.head.appendChild(styleDom);
  }
  styleDom.innerHTML = RIPPLE_STYLE;

  return TMap.addLayer('Vector', {
    id: layerId,
    dataSource: {
      type: 'API',
      data,
      xField: 'LONGITUDE',
      yField: 'LATITUDE',
      path: '',
    },
    geometryType: 'point',
    renderer: {
      type: 'simple',
      symbol: {
        html: {
          htmlTemplate: '<div style="width: 40px; height:40px; margin: 20px 20px;" class="ripple-box">' +
            '<span class="ripple1"></span>' +
            '<span class="ripple2"></span>' +
            '<span class="ripple3"></span>' +
            '</div>',
          templateParams: {},
          xoffset: 0,
          yoffset: 0,
        },
      },
    },
  });
}

/**
 * 移除涟漪 HTML 图层
 */
export function removeRippleHTMLLayer({ TMap, mapDocument, layerId = DEFAULT_LAYER_ID }) {
  if (TMap?.getLayer?.(layerId)) {
    TMap.removeLayer(layerId);
  }
  mapDocument?.querySelector(`#${RIPPLE_STYLE_ID}`)?.remove();
}
