/**
 * 基座侧通信桥（三通道）
 *
 * micro-app 提供三套互补的通信通道，本文件全部封装：
 *
 *   1. data + datachange（props 风格，每个子应用一份） ── useChildBridge(name)
 *   2. dispatch + datachange（事件 / RPC 风格）          ── useChildBridge(name)
 *   3. setGlobalData + addGlobalDataListener（全局共享） ── useGlobalData()
 *
 * 通道 3 是与生产基座对齐的关键：原项目通过 globalData 把整个 global 对象
 * 下发给所有子应用，子应用也通过 setGlobalData 修改回来。
 *
 * 用法（按 micro-app name 多实例隔离）：
 *
 *   // 通道 1+2 — 必须传 name，对应 <micro-app name="...">
 *   const { dataToChild, handleChildData, setData, registerHandler, registerMethod }
 *     = useChildBridge('child')
 *   setData({ userName: '张三' })
 *   registerHandler('form-submit', payload => { ... })
 *   registerMethod('showToast', msg => alert(msg))
 *
 *   // 同 name 多次调用 → 返回同一实例；不同 name → 各自独立
 *   const same = useChildBridge('child')          // === 上面那个
 *   const other = useChildBridge('child-b')       // 全新一份，不共享 data/methods
 *
 *   // 通道 3 — 跨所有子应用共享，仍是单例
 *   const { globalData, setGlobalData, watchGlobalData } = useGlobalData()
 */
import { reactive, ref, computed, watch } from 'vue';
import microApp from '@micro-zoe/micro-app';

// ===================================================================
// 通道 1+2: data + dispatch（按 <micro-app name> 隔离的多实例）
// ===================================================================

// name → bridge 实例缓存（同 name 多次调用复用，不同 name 完全独立）
const bridgeInstances = new Map();

export function useChildBridge(name) {
  if (!name || typeof name !== 'string') {
    throw new Error('[bridge] useChildBridge(name) 必须传入字符串 name，与 <micro-app name="..."> 对齐');
  }
  if (bridgeInstances.has(name)) return bridgeInstances.get(name);

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

  function registerMethod(methodName, fn) {
    methods.set(methodName, fn);
    return () => methods.delete(methodName);
  }

  // 子应用通过 dispatch 发来的消息 → @datachange 事件
  function handleChildData(e) {
    const payload = e?.detail?.data;
    if (!payload || typeof payload !== 'object') return;
    const { type } = payload;

    // ===== RPC 调用：type === '__CALL_BASE__'（子应用 callBase 发起）=====
    if (type === '__CALL_BASE__') {
      const { method, params = [], requestId } = payload;

      // 1. 优先匹配 registerMethod 注册的方法
      // 2. 否则 fallback 到 window[method] —— 与原项目一致，可调用 globals/functions 下的全局函数
      const fn = methods.get(method) || (typeof window[method] === 'function' ? window[method] : null);

      if (typeof fn !== 'function') {
        console.warn(`[bridge:${name}] 子应用调用了未知方法: ${method}`);
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
        console.error(`[bridge:${name}] RPC method "${method}" 抛出异常:`, err);
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
      handler(payload.payload ?? payload, payload);
    } else if (handlers.size > 0) {
      // 仅在已注册过 handler 但 type 没匹配时提示，避免初始化噪音
      console.log(`[bridge:${name}] 未注册的消息类型:`, type, payload);
    }
  }

  // 通过 microApp.setData 给子应用回传 RPC 结果
  // 关键：必须合并当前 dataToChild，否则会覆盖基座下发的其它字段
  // name 由闭包持有，不会被其它实例覆盖
  function sendRpcResponse(requestId, result, error) {
    const responsePayload = {
      ...dataToChild.value,
      __CALL_RESPONSE__: { requestId, result, error, __t: Date.now() },
    };
    microApp.setData(name, responsePayload);
  }

  const instance = {
    data,              // reactive，业务直接写：data.userName = '李四'
    dataToChild,       // computed ref，传给 <micro-app :data="dataToChild">
    setData,           // 批量更新：setData({ userName: '李四', theme: 'dark' })
    handleChildData,
    registerHandler,
    registerMethod,
    name,              // 暴露 name 方便调试，业务一般用不到
  };
  bridgeInstances.set(name, instance);
  return instance;
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

/**
 * 把基座的 reactive 对象与 micro-app 的 globalData 双向绑定
 *
 *   - 基座修改 reactiveObj 任意字段 → 自动推到 globalData（所有子应用都能收到）
 *   - 子应用 setGlobalData → 自动合并回 reactiveObj
 *   - 内部用标志位防 "基座推 → 子应用回调 → 基座再推" 的回环
 *   - 自动拉取挂载前已有的 globalData 初始值
 *
 * 用法（在 setup 里）：
 *   const global = reactive({})
 *   const unbind = bindReactiveToGlobal(global)
 *   onUnmounted(unbind)
 *
 * 绑定后基座代码可以直接 `global.xxx = yyy`，无需手写 microApp.setGlobalData
 *
 * @returns 取消绑定函数（请在 onUnmounted 中调用）
 */
export function bindReactiveToGlobal(reactiveObj) {
  let syncingFromChild = false;

  // 子应用 → 基座：合并回 reactiveObj
  const listener = (data) => {
    if (!data) return;
    syncingFromChild = true;
    Object.assign(reactiveObj, data);
    // 在下一个微任务释放标志位，避免本次合并触发的 watch 又把数据推回去
    Promise.resolve().then(() => { syncingFromChild = false; });
  };

  // 防止挂载前子应用已经写过 globalData
  const init = microApp.getGlobalData();
  if (init && Object.keys(init).length > 0) listener(init);
  microApp.addGlobalDataListener(listener);

  // 基座 → 子应用：watch reactiveObj 整体快照
  // ⚠️ 用 () => ({ ...reactiveObj }) 而不是直接 watch reactiveObj —— 每次返回新对象引用，
  //    micro-app 的 setGlobalData 才能识别为新数据
  const stopWatch = watch(
    () => ({ ...reactiveObj }),
    (val) => {
      if (syncingFromChild) return;                       // 来自子应用的变更不要再推回去
      if (!val || Object.keys(val).length === 0) return;  // 空对象不推（避免覆盖子应用已有数据）
      microApp.setGlobalData(val);
    },
    { deep: true, immediate: true }
  );

  return () => {
    stopWatch();
    microApp.removeGlobalDataListener(listener);
  };
}