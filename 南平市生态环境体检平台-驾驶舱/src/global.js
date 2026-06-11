/**
 * 这里定义全局使用的变量、方法
 */
const {
 // 应用相关
 createApp,
 createSSRApp,
 version,

 // 响应式系统
 reactive,
 ref,
 computed,
 readonly,
 watch,
 watchEffect,
 watchPostEffect,
 watchSyncEffect,
 isRef,
 unref,
 toRef,
 toRefs,
 isProxy,
 isReactive,
 isReadonly,
 shallowRef,
 triggerRef,
 customRef,
 shallowReactive,
 shallowReadonly,
 markRaw,
 toRaw,
 renderList,

 // 生命周期
 onBeforeMount,
 onMounted,
 onBeforeUpdate,
 onUpdated,
 onBeforeUnmount,
 onUnmounted,
 onActivated,
 onDeactivated,
 onErrorCaptured,
 onRenderTracked,
 onRenderTriggered,
 onServerPrefetch,

 // 依赖注入
 provide,
 inject,

 // 组件相关
 defineComponent,
 defineAsyncComponent,
 getCurrentInstance,
 resolveComponent,
 resolveDynamicComponent,

 // 渲染函数
 h,
 createVNode,
 createTextVNode,
 createCommentVNode,
 createElementVNode,
 createElementBlock,
 createStaticVNode,
 openBlock,
 createBlock,
 withCtx,
 withDirectives,
 withModifiers,
 mergeProps,
 normalizeProps,
 normalizeClass,
 normalizeStyle,

 // 指令
 vShow,
 vModelText,
 vModelCheckbox,
 vModelRadio,
 vModelSelect,
 vModelDynamic,
 withModels,

 // 特殊组件
 KeepAlive,
 Teleport,
 Transition,
 TransitionGroup,
 Suspense,
 Fragment,

 // 服务端渲染
 render,
 hydrate,
 renderToString,
 renderToNodeStream,
 renderToWebStream,
 renderToStaticMarkup,
 renderToStaticNodeStream,

 // 编译器宏 (SFC 中使用)
 defineProps,
 defineEmits,
 defineExpose,
 defineSlots,
 defineOptions,
 defineModel,
 withDefaults,

 // 工具函数
 toDisplayString,
 nextTick,
 useCssModule,
 useCssVars,
 useSSRContext,
 useTransitionState,

 // 类型判断
 isVNode
} = Vue;

const {
 useRoute,
 createWebHashHistory,
 createRouter
} = VueRouter;
