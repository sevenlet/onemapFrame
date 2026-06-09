/**
 * 自动编译的Vue组件: checkRecordFileListComponent
 * 适配低代码平台，不使用import/export语法
 */
(function () {
  const componentOptions = {
    props: {
      // params: {
      //   type: String,
      //   default: '111',
      // },
    },

    setup() {
      // 根上下文（包含 socket、全局变量等）
      const rootData = inject('root');
      const global = reactive({
        ...toRefs(rootData),
      });
      // 外层页面注入的状态，包含表格数据等
      const state = inject('state') ?? {};

      // {
      //     "fileId": "cd7fada13b8848359a2a7d540834cf6e",
      //     "fileName": "注册邮箱.txt",
      //     "filePath": "{jdp.eform.file.path}\\2026-02-03\\cd7fada13b8848359a2a7d540834cf6e.txt",
      //     "businessKey": "checkRecordBase",
      //     "inputFileId": null,
      //     "createTime": "2026-02-03 11:39:16",
      //     "createUser": "超级管理员",
      //     "fileSuffix": "txt",
      //     "subBusinessKey": "INS20250129004",
      //     "fileSize": "56",
      //     "fileStatus": null,
      //     "fileMd5": null,
      //     "fileHash": null,
      //     "ext1": null,
      //     "ext2": null,
      //     "ext3": null,
      //     "ext4": null
      // }

      /**
       * 处理按钮点击事件
       * @param action
       * @param row
       */
      const handleAction = (action, row) => {
        console.log(`点击按钮: ${action}`, row);
        if (action === '下载') {
          window.open(
            `${global.foshanServiceBaseUrl}/waterevaluate/api/components/file/download/${row.fileId}`,
            '_self'
          );
        } else if (action === '删除') {
          if (rootData && rootData.rootSocket && global.socketRoom) {
            rootData.rootSocket.emit('message', {
              room: global.socketRoom,
              type: 'deleteCheckRecordFile',
              data: {
                row: row, // 当前行数据
                action: action, // 操作
              },
            });
          }
        }
      };

      onMounted(() => {
        //
      });

      onBeforeUnmount(() => {
        //
      });

      const qzContext = global.foshanServiceBaseUrl;
      return {
        state,
        handleAction,
        qzContext,
      };
    },
  };

  const _hoisted_1 = { class: 'check-record-file-wrapper' };
  const _hoisted_2 = ['onClick'];
  const _hoisted_3 = { class: 'check-record-file-name' };
  const _hoisted_4 = ['onClick'];

  function render(_ctx, _cache) {
    return (
      openBlock(),
      createElementBlock('div', _hoisted_1, [
        (openBlock(true),
        createElementBlock(
          Fragment,
          null,
          renderList(_ctx.state.tableData, (elem, eIndex) => {
            return (
              openBlock(),
              createElementBlock(
                'div',
                {
                  key: eIndex,
                  class: 'check-record-file-item',
                  onClick: ($event) => _ctx.handleAction('下载', elem),
                },
                [
                  createElementVNode(
                    'span',
                    _hoisted_3,
                    toDisplayString(elem.fileName),
                    1 /* TEXT */
                  ),
                  !_ctx.state.isView
                    ? (openBlock(),
                      createElementBlock(
                        'button',
                        {
                          key: 0,
                          type: 'button',
                          class: 'check-record-file-delete-btn',
                          onClick: withModifiers(
                            ($event) => _ctx.handleAction('删除', elem),
                            ['stop']
                          ),
                        },
                        [
                          ...(_cache[0] ||
                            (_cache[0] = [
                              createElementVNode(
                                'span',
                                { class: 'check-record-file-delete-icon' },
                                '✕',
                                -1 /* CACHED */
                              ),
                            ])),
                        ],
                        8 /* PROPS */,
                        _hoisted_4
                      ))
                    : createCommentVNode('v-if', true),
                ],
                8 /* PROPS */,
                _hoisted_2
              )
            );
          }),
          128 /* KEYED_FRAGMENT */
        )),
      ])
    );
  } // 动态加载依赖组件
  async function loadComponent(pageCode) {
    if (!window[`checkRecordFileListComponent`]) {
      try {
        await window.ComponentLoader.loadComponent(pageCode);
      } catch (error) {
        console.error(`加载依赖组件 checkRecordFileListComponent 失败:`, error);
        // 返回一个兜底组件
        window[`checkRecordFileListComponent`] = {
          template: '<div>Failed to load component</div>',
        };
      }
    }
  }

  // 注册组件到全局
  window.checkRecordFileListComponent = {
    ...componentOptions,
    render,
  };
})();
