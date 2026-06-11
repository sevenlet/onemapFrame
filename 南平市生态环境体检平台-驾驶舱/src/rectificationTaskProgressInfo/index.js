/**
 * 自动编译的Vue组件: rectificationTaskProgressInfoComponent
 * 适配低代码平台，不使用import/export语法
 */
(function () {
  const componentOptions = {
    // 在这里接收父组件的参数
    props: {},

    /* 这里可以正常使用props和emit，仅限于父子组件均为自主编码方式编写的页面 */
    setup(props, { emit }) {
      /* ******** 如果要使用应用内部的全局变量、全局函数、socket消息 必须注入全局变量和事件 ******** */
      const rootData = inject('root');
      const global = reactive({
        ...toRefs(rootData),
      });
      // 注入父级state
      const rectificationTaskProgressState = inject('rectificationTaskProgressState');
      // 预览相关
      const previewVisible = ref(false);
      const currentPreview = ref('');
      // 判断文件类型
      const isImage = (file) => {
        if (!file) return false;
        const extension = file.fileSuffix.toLowerCase();
        return ['jpg', 'jpeg', 'png'].includes(extension);
      };
      const previewMedia = (file) => {
        currentPreview.value = file;
        previewVisible.value = true;
      };

      // 分组函数
      const groupBy = (array, getKey) => {
        return array.reduce((result, item, index, array) => {
          const key = getKey ? getKey(item, index, array) : item;
          if (!result[key]) {
            result[key] = [];
          }
          result[key].push(item);
          return result;
        }, {});
      };
      // 整改进度信息
      const info = computed(() => {
        if (!rectificationTaskProgressState.info) {
          return [];
        }
        // 根据整改措施分组
        const groupBydata = groupBy(
          rectificationTaskProgressState.info,
          (item) => item.measure_content
        );
        return (
          Object.values(groupBydata)
            .map((item) => {
              //每个整改进度单独请求文件列表,
              item.map((element) => {
                axios
                  .get('http://192.168.24.106:10157/waterevaluate/api/components/file/list', {
                    params: {
                      subBusinessKey: 'XFDC',
                      businessKey: element.pkid,
                      pageNum: 1,
                      pageSize: 9999,
                    },
                  })
                  .then(function (response) {
                    if (response.data.code !== 200) {
                      element.fileList = [];
                    } else element.fileList = response.data.data || [];
                    console.log(element.fileList, '附件列表');
                  })
                  .catch(function (error) {
                    console.log(error);
                    element.fileList = [];
                  });
              });
              // 分组内部排序
              return item.sort((a, b) => a.sort2 - b.sort2);
            })
            // 整体排序
            .sort((a, b) => a[0].sort1 - b[0].sort1)
        );
      });
      /* ********************************************************************************  */
      const activeNames = ref([]);

      const handleChange = (val) => {
        console.log('当前展开项的 name 数组: ', val);
      };
      return {
        activeNames,
        handleChange,
        info,
        previewVisible,
        currentPreview,
        isImage,
        previewMedia,
      };
    },
  };

  const _hoisted_1 = { class: 'dialog-content' };
  const _hoisted_2 = ['src'];
  const _hoisted_3 = { class: 'rectification-rogress-container' };
  const _hoisted_4 = ['title'];
  const _hoisted_5 = { class: 'item-status text-right' };
  const _hoisted_6 = { class: 'item-content' };
  const _hoisted_7 = { class: 'item-label text-right' };
  const _hoisted_8 = { class: 'item-content' };
  const _hoisted_9 = { key: 0 };
  const _hoisted_10 = ['src', 'alt', 'onClick'];
  const _hoisted_11 = {
    key: 1,
    class: 'item-content item-file',
  };
  const _hoisted_12 = ['href', 'download'];
  const _hoisted_13 = {
    key: 1,
    class: 'no-data',
  };

  function render(_ctx, _cache) {
    const _component_el_dialog = resolveComponent('el-dialog');
    const _component_el_col = resolveComponent('el-col');
    const _component_el_row = resolveComponent('el-row');
    const _component_el_collapse_item = resolveComponent('el-collapse-item');
    const _component_el_collapse = resolveComponent('el-collapse');

    return (
      openBlock(),
      createElementBlock(
        Fragment,
        null,
        [
          createVNode(
            _component_el_dialog,
            {
              modelValue: _ctx.previewVisible,
              'onUpdate:modelValue':
                _cache[0] || (_cache[0] = ($event) => (_ctx.previewVisible = $event)),
              width: '70%',
              'align-center': '',
              title: _ctx.currentPreview.fileName,
              'show-close': true,
            },
            {
              default: withCtx(() => [
                createElementVNode('div', _hoisted_1, [
                  _ctx.isImage(_ctx.currentPreview)
                    ? (openBlock(),
                      createElementBlock(
                        'img',
                        {
                          key: 0,
                          src: `http://192.168.24.106:10157/waterevaluate/api/components/file/download/${_ctx.currentPreview.fileId}`,
                          class: 'yhbz-preview-image',
                          alt: '预览',
                        },
                        null,
                        8 /* PROPS */,
                        _hoisted_2
                      ))
                    : createCommentVNode('v-if', true),
                ]),
              ]),
              _: 1 /* STABLE */,
            },
            8 /* PROPS */,
            ['modelValue', 'title']
          ),
          createElementVNode('div', _hoisted_3, [
            _ctx.info?.length
              ? (openBlock(),
                createBlock(
                  _component_el_collapse,
                  {
                    key: 0,
                    onChange: _ctx.handleChange,
                    'expand-icon-position': 'left',
                    modelValue: _ctx.activeNames,
                    'onUpdate:modelValue':
                      _cache[1] || (_cache[1] = ($event) => (_ctx.activeNames = $event)),
                  },
                  {
                    default: withCtx(() => [
                      (openBlock(true),
                      createElementBlock(
                        Fragment,
                        null,
                        renderList(_ctx.info, (item, index) => {
                          return (
                            openBlock(),
                            createBlock(
                              _component_el_collapse_item,
                              {
                                key: index,
                                name: index,
                              },
                              {
                                title: withCtx(() => [
                                  createVNode(
                                    _component_el_row,
                                    { class: 'item-header' },
                                    {
                                      default: withCtx(() => [
                                        createVNode(
                                          _component_el_col,
                                          { span: 21 },
                                          {
                                            default: withCtx(() => [
                                              createElementVNode(
                                                'div',
                                                {
                                                  class: 'item-title',
                                                  title: item?.[0].measure_content,
                                                },
                                                toDisplayString(item?.[0].measure_content || '--'),
                                                9 /* TEXT, PROPS */,
                                                _hoisted_4
                                              ),
                                            ]),
                                            _: 2 /* DYNAMIC */,
                                          },
                                          1024 /* DYNAMIC_SLOTS */
                                        ),
                                        createVNode(
                                          _component_el_col,
                                          {
                                            span: 3,
                                            style: { 'padding-left': '5px' },
                                          },
                                          {
                                            default: withCtx(() => [
                                              createElementVNode(
                                                'div',
                                                _hoisted_5,
                                                toDisplayString(
                                                  item?.[0].finish_status_name || '--'
                                                ),
                                                1 /* TEXT */
                                              ),
                                            ]),
                                            _: 2 /* DYNAMIC */,
                                          },
                                          1024 /* DYNAMIC_SLOTS */
                                        ),
                                      ]),
                                      _: 2 /* DYNAMIC */,
                                    },
                                    1024 /* DYNAMIC_SLOTS */
                                  ),
                                ]),
                                default: withCtx(() => [
                                  createVNode(
                                    _component_el_row,
                                    { style: { 'margin-bottom': '5px' } },
                                    {
                                      default: withCtx(() => [
                                        createVNode(
                                          _component_el_col,
                                          { span: 3 },
                                          {
                                            default: withCtx(() => [
                                              ...(_cache[2] ||
                                                (_cache[2] = [
                                                  createElementVNode(
                                                    'div',
                                                    { class: 'item-label text-right' },
                                                    '整改措施',
                                                    -1 /* CACHED */
                                                  ),
                                                ])),
                                            ]),
                                            _: 1 /* STABLE */,
                                            __: [2],
                                          }
                                        ),
                                        createVNode(
                                          _component_el_col,
                                          { span: 21 },
                                          {
                                            default: withCtx(() => [
                                              createElementVNode(
                                                'div',
                                                _hoisted_6,
                                                toDisplayString(item?.[0].measure_content || '--'),
                                                1 /* TEXT */
                                              ),
                                            ]),
                                            _: 2 /* DYNAMIC */,
                                          },
                                          1024 /* DYNAMIC_SLOTS */
                                        ),
                                      ]),
                                      _: 2 /* DYNAMIC */,
                                    },
                                    1024 /* DYNAMIC_SLOTS */
                                  ),
                                  (openBlock(true),
                                  createElementBlock(
                                    Fragment,
                                    null,
                                    renderList(item, (subItem, index) => {
                                      return (
                                        openBlock(),
                                        createBlock(
                                          _component_el_row,
                                          {
                                            key: item.pkid,
                                            style: normalizeStyle({
                                              'margin-bottom':
                                                index !== item.length - 1 ? '5px' : 'unset',
                                            }),
                                          },
                                          {
                                            default: withCtx(() => [
                                              createVNode(
                                                _component_el_col,
                                                { span: 3 },
                                                {
                                                  default: withCtx(() => [
                                                    createElementVNode(
                                                      'div',
                                                      _hoisted_7,
                                                      toDisplayString(
                                                        item?.length > 1
                                                          ? `整改进展${subItem.sort2}`
                                                          : '整改进展'
                                                      ),
                                                      1 /* TEXT */
                                                    ),
                                                  ]),
                                                  _: 2 /* DYNAMIC */,
                                                },
                                                1024 /* DYNAMIC_SLOTS */
                                              ),
                                              createVNode(
                                                _component_el_col,
                                                { span: 21 },
                                                {
                                                  default: withCtx(() => [
                                                    createVNode(
                                                      _component_el_row,
                                                      null,
                                                      {
                                                        default: withCtx(() => [
                                                          createElementVNode(
                                                            'div',
                                                            _hoisted_8,
                                                            toDisplayString(
                                                              subItem?.content || '--'
                                                            ),
                                                            1 /* TEXT */
                                                          ),
                                                        ]),
                                                        _: 2 /* DYNAMIC */,
                                                      },
                                                      1024 /* DYNAMIC_SLOTS */
                                                    ),
                                                    (openBlock(true),
                                                    createElementBlock(
                                                      Fragment,
                                                      null,
                                                      renderList(
                                                        subItem.fileList,
                                                        (file, index) => {
                                                          return (
                                                            openBlock(),
                                                            createBlock(
                                                              _component_el_row,
                                                              {
                                                                key: file.fileId,
                                                                class: 'image-box',
                                                              },
                                                              {
                                                                default: withCtx(() => [
                                                                  _ctx.isImage(file)
                                                                    ? (openBlock(),
                                                                      createElementBlock(
                                                                        'div',
                                                                        _hoisted_9,
                                                                        [
                                                                          createElementVNode(
                                                                            'img',
                                                                            {
                                                                              src: `http://192.168.24.106:10157/waterevaluate/api/components/file/download/${file.fileId}`,
                                                                              alt:
                                                                                '现场记录图片' +
                                                                                (index + 1),
                                                                              class: 'record-image',
                                                                              onClick: ($event) =>
                                                                                _ctx.previewMedia(
                                                                                  file
                                                                                ),
                                                                            },
                                                                            null,
                                                                            8 /* PROPS */,
                                                                            _hoisted_10
                                                                          ),
                                                                        ]
                                                                      ))
                                                                    : (openBlock(),
                                                                      createElementBlock(
                                                                        'div',
                                                                        _hoisted_11,
                                                                        [
                                                                          createElementVNode(
                                                                            'a',
                                                                            {
                                                                              href: `http://192.168.24.106:10157/waterevaluate/api/components/file/download/${file.fileId}`,
                                                                              download:
                                                                                file.fileName,
                                                                            },
                                                                            toDisplayString(
                                                                              file.fileName
                                                                            ),
                                                                            9 /* TEXT, PROPS */,
                                                                            _hoisted_12
                                                                          ),
                                                                        ]
                                                                      )),
                                                                ]),
                                                                _: 2 /* DYNAMIC */,
                                                              },
                                                              1024 /* DYNAMIC_SLOTS */
                                                            )
                                                          );
                                                        }
                                                      ),
                                                      128 /* KEYED_FRAGMENT */
                                                    )),
                                                    createVNode(_component_el_row, {
                                                      class: 'item-content item-img',
                                                    }),
                                                  ]),
                                                  _: 2 /* DYNAMIC */,
                                                },
                                                1024 /* DYNAMIC_SLOTS */
                                              ),
                                            ]),
                                            _: 2 /* DYNAMIC */,
                                          },
                                          1032 /* PROPS, DYNAMIC_SLOTS */,
                                          ['style']
                                        )
                                      );
                                    }),
                                    128 /* KEYED_FRAGMENT */
                                  )),
                                ]),
                                _: 2 /* DYNAMIC */,
                              },
                              1032 /* PROPS, DYNAMIC_SLOTS */,
                              ['name']
                            )
                          );
                        }),
                        128 /* KEYED_FRAGMENT */
                      )),
                    ]),
                    _: 1 /* STABLE */,
                  },
                  8 /* PROPS */,
                  ['onChange', 'modelValue']
                ))
              : (openBlock(), createElementBlock('div', _hoisted_13, '暂无数据')),
          ]),
        ],
        64 /* STABLE_FRAGMENT */
      )
    );
  } // 动态加载依赖组件
  async function loadComponent(pageCode) {
    if (!window[`rectificationTaskProgressInfoComponent`]) {
      try {
        await window.ComponentLoader.loadComponent(pageCode);
      } catch (error) {
        console.error(`加载依赖组件 rectificationTaskProgressInfoComponent 失败:`, error);
        // 返回一个兜底组件
        window[`rectificationTaskProgressInfoComponent`] = {
          template: '<div>Failed to load component</div>',
        };
      }
    }
  }

  // 注册组件到全局
  window.rectificationTaskProgressInfoComponent = {
    ...componentOptions,
    render,
  };
})();
