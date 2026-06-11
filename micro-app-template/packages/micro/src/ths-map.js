/**
 * TMap 代理 —— 子应用侧
 *
 * 子应用中直接调用 TMap.goTo({center: { x:114, y:26 }})
 * 自动通过 bridge 转发到基座，执行真实的 xxx.TMap.goTo(...)
 *
 * 原理：用 ES Proxy 拦截所有属性访问，
 *       访问方法名 → 返回一个函数 → 调用时 callBase('tmapCall', { method, params })
 *       基座侧 registerMethod('tmapCall') 拿到 method + params，
 *       执行真实地图实例的 TMap[method](...params)
 */

import { useBaseBridge } from '@/bridge.js';

const { callBase } = useBaseBridge();

/**
 * 调用基座侧的 TMap 方法
 * @param {string} method 方法名，如 'goTo'
 * @param  {...any} params 参数
 * @returns {Promise<any>}
 */
function callTMap(method, ...params) {
  return callBase('tmapCall', { method, params });
}

/**
 * TMap 代理对象
 *
 * 用法跟真实 TMap 一样：
 *   import { TMap } from 'ths-map.js';
 *   TMap.goTo({ center: { x: 114, y: 26 } });
 *   TMap.setZoom(12);
 *   TMap.addMarker({ ... });
 *
 * 任意方法名都会自动转发到基座侧的真实 TMap
 */
export const TMap = new Proxy({}, {
  get(_target, prop) {
    // 返回一个函数，调用时转发到基座
    return (...params) => callTMap(prop, ...params);
  }
});

/**
 * Layer 代理对象工厂
 *
 * 用法：
 *   import { createLayer } from 'ths-map.js';
 *   const pointLayer = createLayer('pointLayer');
 *   pointLayer.show();
 *   pointLayer.hide();
 */
export function createLayer(name) {
  return new Proxy({}, {
    get(_target, prop) {
      return (...params) => callTMap('layer_' + prop, name, ...params);
    }
  });
}
