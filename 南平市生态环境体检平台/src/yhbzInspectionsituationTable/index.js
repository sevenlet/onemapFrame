/**
 * 自动编译的Vue组件: yhbzInspectionsituationTableComponent
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
      const parentData = inject('yhbzInspectionsituation') || {};
      console.log('parentData', parentData);

      // 预览相关
      const previewVisible = ref(false);
      const currentPreview = ref('');
      const currentFileList = ref([]);
      const currentFileIndex = ref(0);

      // 判断文件类型
      const isImage = (file) => {
        if (!file) return false;
        const extension = file.fileSuffix.toLowerCase();
        return ['jpg', 'jpeg', 'png'].includes(extension);
      };
      const isVideo = (file) => {
        if (!file) return false;
        const extension = file.fileSuffix.toLowerCase();
        return extension === 'mp4';
      };

      const previewMedia = (file, fileList) => {
        currentFileList.value = fileList || [];
        currentFileIndex.value = fileList ? fileList.findIndex((f) => f === file) : 0;
        currentPreview.value = file;
        previewVisible.value = true;
      };

      const prevFile = () => {
        if (currentFileList.value.length <= 1) return;
        currentFileIndex.value =
          (currentFileIndex.value - 1 + currentFileList.value.length) %
          currentFileList.value.length;
        currentPreview.value = currentFileList.value[currentFileIndex.value];
      };

      const nextFile = () => {
        if (currentFileList.value.length <= 1) return;
        currentFileIndex.value = (currentFileIndex.value + 1) % currentFileList.value.length;
        currentPreview.value = currentFileList.value[currentFileIndex.value];
      };

      const handlelLcation = (row) => {
        console.log('row', row);
        const { longitude, latitude } = row;
        // 图层消息
        rootData.rootSocket.emit('message', {
          room: global.socketRoom,
          type: 'updatePatrolReportStatus',
          data: {
            visible: true,
            startTime: parentData.timeStart,
            endTime: parentData.timeEnd,
          },
        });
        /* 关闭弹窗 */
        if (global.dialogInstance) {
          global.dialogInstance.close();
        }
        // 定位消息
        rootData.rootSocket.emit('message', {
          room: global.socketRoom,
          type: 'gotoPoint',
          data: {
            longitude,
            latitude,
          },
        });
      };

      return {
        parentData,
        previewVisible,
        currentPreview,
        currentFileList,
        currentFileIndex,
        previewMedia,
        prevFile,
        nextFile,
        isImage,
        isVideo,
        handlelLcation,
      };
    },
  };

  const _hoisted_1 = { class: 'dialog-content' };
  const _hoisted_2 = { class: 'preview-container' };
  const _hoisted_3 = { class: 'preview-media' };
  const _hoisted_4 = ['src'];
  const _hoisted_5 = ['src'];
  const _hoisted_6 = { class: 'position-icon' };
  const _hoisted_7 = ['src', 'onClick'];
  const _hoisted_8 = {
    key: 0,
    class: 'file-list',
  };
  const _hoisted_9 = { key: 0 };
  const _hoisted_10 = ['src', 'alt', 'onClick'];
  const _hoisted_11 = ['onClick'];
  const _hoisted_12 = { key: 1 };

  function render(_ctx, _cache) {
    const _component_el_dialog = resolveComponent('el-dialog');
    const _component_el_table_column = resolveComponent('el-table-column');
    const _component_el_table = resolveComponent('el-table');

    return (
      openBlock(),
      createElementBlock(
        Fragment,
        null,
        [
          createCommentVNode(' 图片预览弹窗 '),
          createVNode(
            _component_el_dialog,
            {
              modelValue: _ctx.previewVisible,
              'onUpdate:modelValue':
                _cache[2] || (_cache[2] = ($event) => (_ctx.previewVisible = $event)),
              width: '70%',
              'align-center': '',
              title: _ctx.currentPreview.fileName,
              'show-close': true,
            },
            {
              default: withCtx(() => [
                createElementVNode('div', _hoisted_1, [
                  createElementVNode('div', _hoisted_2, [
                    withDirectives(
                      createElementVNode(
                        'div',
                        {
                          class: 'nav-button nav-left',
                          onClick:
                            _cache[0] ||
                            (_cache[0] = (...args) => _ctx.prevFile && _ctx.prevFile(...args)),
                        },
                        _cache[3] ||
                          (_cache[3] = [createElementVNode('span', null, '<', -1 /* CACHED */)]),
                        512 /* NEED_PATCH */
                      ),
                      [[vShow, _ctx.currentFileList.length > 1]]
                    ),
                    createElementVNode('div', _hoisted_3, [
                      _ctx.isImage(_ctx.currentPreview)
                        ? (openBlock(),
                          createElementBlock(
                            'img',
                            {
                              key: 0,
                              src: _ctx.currentPreview.url,
                              class: 'yhbz-preview-image',
                              alt: '预览',
                            },
                            null,
                            8 /* PROPS */,
                            _hoisted_4
                          ))
                        : _ctx.isVideo(_ctx.currentPreview)
                        ? (openBlock(),
                          createElementBlock(
                            'video',
                            {
                              src: _ctx.currentPreview.url,
                              class: 'yhbz-preview-video',
                              controls: '',
                              autoplay: '',
                              key: _ctx.currentPreview.url,
                            },
                            ' 您的浏览器不支持视频播放 ',
                            8 /* PROPS */,
                            _hoisted_5
                          ))
                        : createCommentVNode('v-if', true),
                    ]),
                    withDirectives(
                      createElementVNode(
                        'div',
                        {
                          class: 'nav-button nav-right',
                          onClick:
                            _cache[1] ||
                            (_cache[1] = (...args) => _ctx.nextFile && _ctx.nextFile(...args)),
                        },
                        _cache[4] ||
                          (_cache[4] = [createElementVNode('span', null, '>', -1 /* CACHED */)]),
                        512 /* NEED_PATCH */
                      ),
                      [[vShow, _ctx.currentFileList.length > 1]]
                    ),
                  ]),
                ]),
              ]),
              _: 1 /* STABLE */,
            },
            8 /* PROPS */,
            ['modelValue', 'title']
          ),
          createVNode(
            _component_el_table,
            {
              data: _ctx.parentData.listData,
              stripe: '',
              style: { width: '100%' },
              class: 'custom-status-table',
              'empty-text': '暂无数据',
            },
            {
              default: withCtx(() => [
                createVNode(
                  _component_el_table_column,
                  {
                    label: '定位',
                    align: 'center',
                    'header-align': 'center',
                    width: '50',
                  },
                  {
                    default: withCtx(({ row }) => [
                      createElementVNode('div', _hoisted_6, [
                        createElementVNode(
                          'img',
                          {
                            src: _ctx.parentData.locationUrl,
                            alt: '定位',
                            style: {
                              width: '14px',
                              height: '16px',
                              'vertical-align': '-3px',
                              cursor: 'pointer',
                            },
                            onClick: ($event) => _ctx.handlelLcation(row),
                          },
                          null,
                          8 /* PROPS */,
                          _hoisted_7
                        ),
                      ]),
                    ]),
                    _: 1 /* STABLE */,
                  }
                ),
                createVNode(_component_el_table_column, {
                  prop: 'inspectionLocation',
                  label: '位置',
                  align: 'left',
                  'header-align': 'center',
                  width: '220',
                  'show-overflow-tooltip': '',
                }),
                createVNode(_component_el_table_column, {
                  prop: 'inspector',
                  label: '负责人',
                  align: 'left',
                  'header-align': 'center',
                  width: '80',
                  'show-overflow-tooltip': '',
                }),
                createVNode(_component_el_table_column, {
                  prop: 'inspectionTime',
                  label: '上传时间',
                  align: 'center',
                  'header-align': 'center',
                  width: '170',
                  'show-overflow-tooltip': '',
                }),
                createVNode(_component_el_table_column, {
                  prop: 'onSiteDescription',
                  label: '情况说明',
                  align: 'left',
                  'header-align': 'center',
                  width: '280',
                  'show-overflow-tooltip': '',
                }),
                createVNode(
                  _component_el_table_column,
                  {
                    label: '现场记录',
                    align: 'center',
                    'header-align': 'center',
                    width: 'auto',
                  },
                  {
                    default: withCtx(({ row }) => [
                      row.fileList && row.fileList.length > 0
                        ? (openBlock(),
                          createElementBlock('div', _hoisted_8, [
                            (openBlock(true),
                            createElementBlock(
                              Fragment,
                              null,
                              renderList(row.fileList, (file, index) => {
                                return (
                                  openBlock(),
                                  createElementBlock(
                                    'div',
                                    {
                                      key: index,
                                      class: 'file-item',
                                    },
                                    [
                                      createCommentVNode(' 图片 '),
                                      _ctx.isImage(file)
                                        ? (openBlock(),
                                          createElementBlock('div', _hoisted_9, [
                                            createElementVNode(
                                              'img',
                                              {
                                                src: file.url,
                                                alt: '现场记录图片' + (index + 1),
                                                class: 'record-image',
                                                onClick: ($event) =>
                                                  _ctx.previewMedia(file, row.fileList),
                                              },
                                              null,
                                              8 /* PROPS */,
                                              _hoisted_10
                                            ),
                                          ]))
                                        : _ctx.isVideo(file)
                                        ? (openBlock(),
                                          createElementBlock(
                                            Fragment,
                                            { key: 1 },
                                            [
                                              createCommentVNode(' MP4 '),
                                              createElementVNode('div', null, [
                                                createElementVNode(
                                                  'img',
                                                  {
                                                    src: '/lego-generated-apps/lego_file/res/2025-12-23/d9e385346c664bb6a4a34e4cac0d3e9b.png',
                                                    class: 'record-image',
                                                    onClick: ($event) =>
                                                      _ctx.previewMedia(file, row.fileList),
                                                  },
                                                  null,
                                                  8 /* PROPS */,
                                                  _hoisted_11
                                                ),
                                              ]),
                                            ],
                                            2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                                          ))
                                        : createCommentVNode('v-if', true),
                                    ]
                                  )
                                );
                              }),
                              128 /* KEYED_FRAGMENT */
                            )),
                          ]))
                        : (openBlock(), createElementBlock('span', _hoisted_12, '--')),
                    ]),
                    _: 1 /* STABLE */,
                  }
                ),
              ]),
              _: 1 /* STABLE */,
            },
            8 /* PROPS */,
            ['data']
          ),
        ],
        64 /* STABLE_FRAGMENT */
      )
    );
  } // 动态加载依赖组件
  async function loadComponent(pageCode) {
    if (!window[`yhbzInspectionsituationTableComponent`]) {
      try {
        await window.ComponentLoader.loadComponent(pageCode);
      } catch (error) {
        console.error(`加载依赖组件 yhbzInspectionsituationTableComponent 失败:`, error);
        // 返回一个兜底组件
        window[`yhbzInspectionsituationTableComponent`] = {
          template: '<div>Failed to load component</div>',
        };
      }
    }
  }

  // 注册组件到全局
  window.yhbzInspectionsituationTableComponent = {
    ...componentOptions,
    render,
  };
})();
