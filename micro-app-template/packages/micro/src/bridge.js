/**
 * 子应用侧通信桥（三通道）
 *
 * 与基座的 packages/base/src/bridge.js 对称封装：
 *
 *   1. data + datachange ─ 通过 window.microApp.getData / addDataListener
 *      → useBaseBridge()
 *   2. dispatch          ─ 通过 window.microApp.dispatch
 *      → useBaseBridge() 中的 sendToBase / callBase
 *   3. setGlobalData + addGlobalDataListener
 *      → useGlobalData() / useGlobalDataKey('regionaQuery.regionCode')
 *
 * 三个函数都做了独立运行降级：当 window.microApp 不存在（直接访问 5175）时,
 * 钩子返回安全的空值/no-op，不会报错。
 *
 * 术语说明：
 *   • 基座（base）— 嵌入子应用的那个主应用，对应 micro-app 官方术语 "base application"
 *   • 子应用（child / micro app）— 被嵌入的应用，本文件所在的项目
 */
import { ref, watch, onUnmounted, getCurrentInstance } from 'vue';

// windows.microApp 存在 = 被基座嵌入
function getMicroApp() {
  return typeof window !== 'undefined' ? window.microApp || null : null;
}

// ===================================================================
// 通道 1+2: baseData + dispatch
// ===================================================================

/**
 * 子应用 → 基座：发送普通消息（基座需提前 registerHandler）
 *
 * ⚠️ micro-app 的 dispatch() 内部会自动包装为 { data: payload }，
 *    基座 @datachange 收到的 e.detail.data 就是 payload 本体。
 *    所以这里直接传 payload，不要额外包 { data: payload }。
 */
export function sendToBase(payload) {
  const ma = getMicroApp();
  if (ma && typeof ma.dispatch === 'function') {
    ma.dispatch(payload);
  } else {
    console.log('[bridge] 独立运行下 dispatch 消息（仅调试可见）:', payload);
  }
}

/**
 * 子应用 → 基座：调用基座的方法（RPC，支持返回值 / await）
 *
 * 基座侧 bridge.js 会：
 *   1. 优先匹配 registerMethod 注册的方法
 *   2. 找不到则 fallback 到 window[method]（即生产基座 globals/functions 下注册的全局函数）
 *
 * 返回 Promise —— 基座通过 setData 回传 __CALL_RESPONSE__ 后 resolve。
 *
 * 用法：
 *   const token = await callBase('getToken')
 *   await callBase('showToast', '你好')   // 无返回值时也可 await
 */
let rpcSeq = 0;
const pendingRpc = new Map(); // requestId → { resolve, reject, timer }

export function callBase(method, ...params) {
  const ma = getMicroApp();
  if (!ma || typeof ma.dispatch !== 'function') {
    console.log('[bridge] 独立运行下 callBase（仅调试可见）:', method, params);
    return Promise.resolve(undefined);
  }

  const requestId = `rpc_${Date.now()}_${++rpcSeq}`;
  const promise = new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      pendingRpc.delete(requestId);
      reject(new Error(`[callBase] RPC timeout: ${method}`));
    }, 10_000);
    pendingRpc.set(requestId, { resolve, reject, timer });
  });

  ma.dispatch({
    type: '__CALL_BASE__',
    method,
    params,
    requestId,
  });

  return promise;
}

// 接收基座通过 setData 回传的 __CALL_RESPONSE__
function handleRpcResponse(rpc) {
  if (!rpc || !rpc.requestId) return;
  const pending = pendingRpc.get(rpc.requestId);
  if (!pending) return;
  clearTimeout(pending.timer);
  pendingRpc.delete(rpc.requestId);
  if (rpc.error) {
    pending.reject(new Error(rpc.error));
  } else {
    pending.resolve(rpc.result);
  }
}

let baseDataRef = null;
let baseDataListenerAttached = false;

/**
 * 订阅基座通过 :data 下发的数据
 * 独立运行时 baseData 为空对象，安全降级
 *
 * 同时在内部拦截 __CALL_RESPONSE__ 字段，用于 callBase() 的返回值通道
 */
export function useBaseBridge() {
  if (!baseDataRef) {
    baseDataRef = ref({});
  }
  if (!baseDataListenerAttached) {
    const ma = getMicroApp();
    if (ma && typeof ma.addDataListener === 'function') {
      const handler = (data) => {
        if (!data) return;
        // 拦截 RPC 响应（不暴露给业务层）
        if (data.__CALL_RESPONSE__) {
          handleRpcResponse(data.__CALL_RESPONSE__);
        }
        baseDataRef.value = { ...data };
      };
      // 第二个参数 true：立即用当前 data 触发一次（拿到初始值）
      ma.addDataListener(handler, true);
      baseDataListenerAttached = true;
    }
  }
  return {
    baseData: baseDataRef,
    sendToBase,
    callBase,
  };
}

// ===================================================================
// 通道 3: globalData（全局共享）
// ===================================================================

let globalDataRef = null;
let globalDataListenerAttached = false;

/**
 * 获取全局共享数据（基座 + 所有子应用共用一份）
 *
 * 返回的 globalData 是 Vue ref，模板里用 `globalData.regionaQuery?.regionCode` 即可。
 * 修改请通过 setGlobalData() —— 直接改 globalData.value.xxx 不会同步到基座。
 */
export function useGlobalData() {
  if (!globalDataRef) {
    globalDataRef = ref({});
  }
  if (!globalDataListenerAttached) {
    const ma = getMicroApp();
    if (ma && typeof ma.addGlobalDataListener === 'function') {
      // 第二个参数 true：立即用当前 globalData 触发一次（拿到初始值）
      ma.addGlobalDataListener((data) => {
        if (data) globalDataRef.value = { ...data };
      }, true);
      globalDataListenerAttached = true;
    }
  }
  return {
    globalData: globalDataRef,
    setGlobalData,
  };
}

/**
 * 合并式更新全局数据（推荐：避免覆盖其它字段）
 * 用法：setGlobalData({ activeTheme: '蓝色版' })
 *
 * 注意：micro-app 的 setGlobalData 是**整体替换**语义，所以这里先 get 再 merge。
 */
export function setGlobalData(patch) {
  if (!patch || typeof patch !== 'object') return;
  const ma = getMicroApp();
  if (!ma || typeof ma.setGlobalData !== 'function') {
    console.log('[bridge] 独立运行下 setGlobalData（仅调试可见）:', patch);
    return;
  }
  const current = ma.getGlobalData() || {};
  ma.setGlobalData({ ...current, ...patch });
}

/**
 * 订阅 globalData 中单个字段（支持 lodash 路径 'a.b.c'），返回响应式 ref
 *
 * 用法：
 *   const regionCode = useGlobalDataKey('regionaQuery.regionCode')
 *   console.log(regionCode.value)      // 当前值
 *   watch(regionCode, v => console.log('变了', v))
 *
 * 比 useGlobalData().globalData.value.regionaQuery.regionCode 更安全（中间字段缺失不报错）
 */
export function useGlobalDataKey(path) {
  const { globalData } = useGlobalData();
  const keys = Array.isArray(path) ? path : String(path).split('.');
  const valueRef = ref(getByPath(globalData.value, keys));
  const stop = watch(
    globalData,
    (data) => {
      valueRef.value = getByPath(data, keys);
    },
    { deep: true },
  );
  // 若在组件内调用，组件卸载时自动解除监听
  if (getCurrentInstance()) {
    onUnmounted(stop);
  }
  return valueRef;
}

function getByPath(obj, keys) {
  let cur = obj;
  for (const k of keys) {
    if (cur == null) return undefined;
    cur = cur[k];
  }
  return cur;
}
