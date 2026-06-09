/**
 * 基座侧通信桥（三通道）
 *
 * micro-app 提供三套互补的通信通道，本文件全部封装：
 *
 *   1. data + datachange（props 风格，每个子应用一份） ── useChildBridge()
 *   2. dispatch + datachange（事件 / RPC 风格）          ── useChildBridge()
 *   3. setGlobalData + addGlobalDataListener（全局共享） ── useGlobalData()
 *
 * 通道 3 是与生产基座对齐的关键：原项目通过 globalData 把整个 global 对象
 * 下发给所有子应用，子应用也通过 setGlobalData 修改回来。
 *
 * 用法（在 App.vue 中只调用一次，单例）：
 *
 *   // 通道 1+2
 *   const { dataToChild, handleChildData, registerHandler, registerMethod } = useChildBridge()
 *   dataToChild.userName = '张三'
 *   registerHandler('form-submit', payload => { ... })
 *   registerMethod('showToast', msg => alert(msg))
 *
 *   // 通道 3
 *   const { globalData, setGlobalData, watchGlobalData } = useGlobalData()
 *   console.log(globalData.value.regionaQuery)
 *   setGlobalData({ activeTheme: '蓝色版' })
 *   watchGlobalData('regionaQuery.regionCode', code => console.log('区域变了', code))
 */
import { reactive, ref, computed, watch } from 'vue';
import microApp from '@micro-zoe/micro-app';

// ===================================================================
// 通道 1+2: data + dispatch（每个子应用定向通信）
// ===================================================================
let childBridgeSingleton = null;

export function useChildBridge() {
  if (childBridgeSingleton) return childBridgeSingleton;

  // 内部可写状态（reactive，业务代码直接写：data.userName = '张三'）
  const data = reactive({});

  // 对外的 dataToChild 是 computed —— 每次 data 字段变化返回新对象引用，
  // 这样 micro-app 的 :data 才能识别到变化并 setData 给子应用。
  // ⚠️ 关键：reactive 对象字段变化时引用不变，micro-app 不会更新，
  //    必须返回新对象（与原项目 root.vue 的 computed(() => ({ ...state })) 一致）。
  const dataToChild = computed(() => ({ ...data }));

  // 显式设置数据（也可以直接 data.xxx = yyy）
  function setData(patch) {
    if (patch && typeof patch === 'object') Object.assign(data, patch);
  }

  // type → handler 映射（普通消息）
  const handlers = new Map();
  // method → fn 映射（RPC 方法）
  const methods = new Map();

  function registerHandler(type, fn) {
    handlers.set(type, fn);
    return () => handlers.delete(type);
  }

  function registerMethod(name, fn) {
    methods.set(name, fn);
    return () => methods.delete(name);
  }

  // 子应用通过 dispatch 发来的消息 → @datachange 事件
  function handleChildData(e) {
    const data = e?.detail?.data;
    if (!data || typeof data !== 'object') return;
    const { type } = data;

    // ===== RPC 调用：type === '__CALL_HOST__' =====
    if (type === '__CALL_HOST__') {
      const { method, params = [], requestId } = data;

      // 1. 优先匹配 registerMethod 注册的方法
      // 2. 否则 fallback 到 window[method] —— 与原项目一致，可调用 globals/functions 下的全局函数
      const fn = methods.get(method) || (typeof window[method] === 'function' ? window[method] : null);

      if (typeof fn !== 'function') {
        console.warn(`[bridge] 子应用调用了未知方法: ${method}`);
        if (requestId) {
          sendRpcResponse(requestId, undefined, `Method not found: ${method}`);
        }
        return;
      }

      try {
        const result = fn(...params);
        // 如果子应用要返回值，通过 setData 回传
        if (requestId) {
          Promise.resolve(result)
            .then((finalResult) => sendRpcResponse(requestId, finalResult))
            .catch((err) => sendRpcResponse(requestId, undefined, err?.message || String(err)));
        }
      } catch (err) {
        console.error(`[bridge] RPC method "${method}" 抛出异常:`, err);
        if (requestId) {
          sendRpcResponse(requestId, undefined, err?.message || String(err));
        }
      }
      return;
    }

    // ===== 普通消息 =====
    // 兼容两种格式：handler 同时拿到 payload（首参）和原始 data（次参）
    const handler = handlers.get(type);
    if (typeof handler === 'function') {
      handler(data.payload ?? data, data);
    } else if (handlers.size > 0) {
      // 仅在已注册过 handler 但 type 没匹配时提示，避免初始化噪音
      console.log('[bridge] 未注册的消息类型:', type, data);
    }
  }

  // 通过 microApp.setData 给子应用回传 RPC 结果
  // 关键：必须合并当前 dataToChild，否则会覆盖基座下发的其它字段
  function sendRpcResponse(requestId, result, error) {
    const payload = {
      ...dataToChild.value,
      __RPC_RESPONSE__: { requestId, result, error, __t: Date.now() },
    };
    // 子应用 name 取自 <micro-app name="...">，这里需要知道目标子应用名
    // 简化：把 setData 调用提取给外部通过 setChildName 配置
    if (currentChildName) {
      microApp.setData(currentChildName, payload);
    } else {
      console.warn('[bridge] 未设置 childName，RPC 返回值无法回传。请在 useChildBridge() 后调用 setChildName(\'child\')');
    }
  }

  // 当前嵌入的子应用 name（用于 microApp.setData(name, data)）
  let currentChildName = null;
  function setChildName(name) {
    currentChildName = name;
  }

  childBridgeSingleton = {
    data,              // reactive，业务直接写：data.userName = '李四'
    dataToChild,       // computed ref，传给 <micro-app :data="dataToChild">
    setData,           // 批量更新：setData({ userName: '李四', theme: 'dark' })
    handleChildData,
    registerHandler,
    registerMethod,
    setChildName,
  };
  return childBridgeSingleton;
}

// ===================================================================
// 通道 3: globalData（全局共享，跨所有子应用）
// ===================================================================
let globalDataSingleton = null;

export function useGlobalData() {
  if (globalDataSingleton) return globalDataSingleton;

  // 镜像 microApp.getGlobalData()，每次 listener 触发就整体替换
  // 使用 ref 而非 reactive 是为了让监听更精准（深层 watch 在大对象上很贵）
  const globalData = ref(microApp.getGlobalData() || {});

  const listener = (data) => {
    if (!data) return;
    globalData.value = { ...data };
  };
  microApp.addGlobalDataListener(listener);

  /**
   * 合并式更新（不会覆盖未传入的字段）
   * @param {Object} patch 要合并的字段
   */
  function setGlobalData(patch) {
    if (!patch || typeof patch !== 'object') return;
    const current = microApp.getGlobalData() || {};
    microApp.setGlobalData({ ...current, ...patch });
  }

  /**
   * 订阅 globalData 中某个字段的变化（支持 'a.b.c' 路径）
   * @param {string|string[]} path lodash 路径
   * @param {Function} cb (newVal, oldVal) => void
   * @returns 取消订阅函数
   */
  function watchGlobalData(path, cb) {
    const getter = () => {
      const keys = Array.isArray(path) ? path : String(path).split('.');
      let cur = globalData.value;
      for (const k of keys) {
        if (cur == null) return undefined;
        cur = cur[k];
      }
      return cur;
    };
    return watch(getter, cb, { deep: true });
  }

  globalDataSingleton = {
    globalData,
    setGlobalData,
    watchGlobalData,
  };
  return globalDataSingleton;
}