/**
 * 自动编译的Vue组件: previewFileComponent
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
      const parentData = inject('onSiteFeedback') || {};

      const activeFile = ref({});

      watch(
        () => parentData.activeFile,
        () => {
          activeFile.value = parentData.activeFile;
          console.log('111111activeFile.value1', activeFile.value);
        },
        { immediate: true, deep: true }
      );

      // 预览相关
      const previewVisible = ref(false);
      const currentPreview = ref({});

      // 判断文件类型
      const isImage = (file) => {
        console.log('111111file', file);
        console.log('111111file!', !file);
        if (!file) return false;
        const extension = file?.fileSuffix?.toLowerCase();
        return ['jpg', 'jpeg', 'png'].includes(extension);
      };
      const isVideo = (file) => {
        if (!file) return false;
        const extension = file?.fileSuffix?.toLowerCase();
        return extension === 'mp4';
      };

      const previewMedia = (file) => {
        currentPreview.value = file;
        previewVisible.value = true;
      };

      return {
        parentData,
        previewVisible,
        currentPreview,
        previewMedia,
        isImage,
        isVideo,
        activeFile,
      };
    },
  };

  const _hoisted_1 = { class: 'dialog-content' };
  const _hoisted_2 = ['src'];
  const _hoisted_3 = ['src'];
  const _hoisted_4 = { class: 'content' };
  const _hoisted_5 = { key: 0 };
  const _hoisted_6 = ['src'];
  const _hoisted_7 = {
    key: 2,
    class: 'empty',
  };

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
              width: '70vw',
              'align-center': '',
              title: _ctx.currentPreview.fileName,
              'show-close': true,
            },
            {
              default: withCtx(() => [
                createElementVNode('div', _hoisted_1, [
                  createCommentVNode(' 图片 '),
                  _ctx.isImage(_ctx.currentPreview)
                    ? (openBlock(),
                      createElementBlock(
                        'img',
                        {
                          key: 0,
                          src: _ctx.currentPreview.url,
                          class: 'preview-image',
                          alt: '预览',
                        },
                        null,
                        8 /* PROPS */,
                        _hoisted_2
                      ))
                    : _ctx.isVideo(_ctx.currentPreview)
                    ? (openBlock(),
                      createElementBlock(
                        Fragment,
                        { key: 1 },
                        [
                          createCommentVNode(' 视频 '),
                          createElementVNode(
                            'video',
                            {
                              src: _ctx.currentPreview.url,
                              class: 'preview-image',
                              controls: '',
                              autoplay: '',
                            },
                            ' 您的浏览器不支持视频播放 ',
                            8 /* PROPS */,
                            _hoisted_3
                          ),
                        ],
                        2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                      ))
                    : createCommentVNode('v-if', true),
                ]),
              ]),
              _: 1 /* STABLE */,
            },
            8 /* PROPS */,
            ['modelValue', 'title']
          ),
          createElementVNode('div', _hoisted_4, [
            createCommentVNode(' 图片 '),
            _ctx.isImage(_ctx.activeFile)
              ? (openBlock(),
                createElementBlock('div', _hoisted_5, [
                  createElementVNode(
                    'img',
                    {
                      src: _ctx.activeFile.url,
                      alt: '现场记录图片',
                      class: 'feedback-record-image',
                      onClick:
                        _cache[1] || (_cache[1] = ($event) => _ctx.previewMedia(_ctx.activeFile)),
                    },
                    null,
                    8 /* PROPS */,
                    _hoisted_6
                  ),
                ]))
              : _ctx.isVideo(_ctx.activeFile)
              ? (openBlock(),
                createElementBlock(
                  Fragment,
                  { key: 1 },
                  [
                    createCommentVNode(' MP4 '),
                    createElementVNode('div', null, [
                      createElementVNode('img', {
                        src: '/lego-generated-apps/lego_file/res/2025-12-23/d9e385346c664bb6a4a34e4cac0d3e9b.png',
                        class: 'feedback-record-image',
                        onClick:
                          _cache[2] || (_cache[2] = ($event) => _ctx.previewMedia(_ctx.activeFile)),
                      }),
                    ]),
                  ],
                  2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                ))
              : (openBlock(),
                createElementBlock(
                  'div',
                  _hoisted_7,
                  _cache[3] ||
                    (_cache[3] = [createElementVNode('span', null, '暂无数据', -1 /* CACHED */)])
                )),
          ]),
        ],
        64 /* STABLE_FRAGMENT */
      )
    );
  } // 动态加载依赖组件
  async function loadComponent(pageCode) {
    if (!window[`previewFileComponent`]) {
      try {
        await window.ComponentLoader.loadComponent(pageCode);
      } catch (error) {
        console.error(`加载依赖组件 previewFileComponent 失败:`, error);
        // 返回一个兜底组件
        window[`previewFileComponent`] = { template: '<div>Failed to load component</div>' };
      }
    }
  }

  // 注册组件到全局
  window.previewFileComponent = {
    ...componentOptions,
    render,
  };
})();
