/**
 * 自动编译的Vue组件: previewImgComponent
 * 适配低代码平台，不使用import/export语法
 */
(function () {
  const componentOptions = {
    setup() {
      /* ******** 如果要使用应用内部的全局变量、全局函数、socket消息 必须注入全局变量和事件 ******** */
      const rootData = inject('root');
      const global = reactive({
        ...toRefs(rootData),
      });
      /* ********************************************************************************  */
      // 从父组件获取state数据
      const parentData = inject('recentlyVideoWarningReal') || {};
      console.log('111parentData', parentData);

      // 预览相关
      const previewVisible = ref(true);

      const handleClose = () => {
        parentData.isShowImg = false;
        previewVisible.value = false;
      };

      return {
        parentData,
        previewVisible,
        handleClose,
      };
    },
  };

  const _hoisted_1 = { class: 'img-dialog-content' };
  const _hoisted_2 = ['src'];

  function render(_ctx, _cache) {
    const _component_el_dialog = resolveComponent('el-dialog');

    return (
      openBlock(),
      createElementBlock(
        Fragment,
        null,
        [
          createCommentVNode(' 预览弹窗 '),
          createVNode(
            _component_el_dialog,
            {
              modelValue: _ctx.previewVisible,
              'onUpdate:modelValue':
                _cache[0] || (_cache[0] = ($event) => (_ctx.previewVisible = $event)),
              width: 'auto',
              'align-center': '',
              title: '图片预览',
              'show-close': true,
              onClose: _ctx.handleClose,
            },
            {
              default: withCtx(() => [
                createElementVNode('div', _hoisted_1, [
                  createCommentVNode(' 图片 '),
                  createElementVNode(
                    'img',
                    {
                      src: _ctx.parentData.currentImgUrl,
                      class: 'image-preview',
                      alt: '预览',
                    },
                    null,
                    8 /* PROPS */,
                    _hoisted_2
                  ),
                ]),
              ]),
              _: 1 /* STABLE */,
            },
            8 /* PROPS */,
            ['modelValue', 'onClose']
          ),
        ],
        2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )
    );
  } // 动态加载依赖组件
  async function loadComponent(pageCode) {
    if (!window[`previewImgComponent`]) {
      try {
        await window.ComponentLoader.loadComponent(pageCode);
      } catch (error) {
        console.error(`加载依赖组件 previewImgComponent 失败:`, error);
        // 返回一个兜底组件
        window[`previewImgComponent`] = { template: '<div>Failed to load component</div>' };
      }
    }
  }

  // 注册组件到全局
  window.previewImgComponent = {
    ...componentOptions,
    render,
  };
})();
