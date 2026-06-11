/**
 * 自动编译的Vue组件: zgtMessagesListComponent
 * 适配低代码平台，不使用import/export语法
 */
(function () {
  const componentOptions = {
    setup() {
      const rootData = inject('root');
      const global = reactive({
        ...toRefs(rootData),
      });
      const gztLeftMessagesDialogState = inject('gztLeftMessagesDialogState');
      // 查看按钮点击处理函数
      const onView = (item) => {
        global.dialogParams = {
          type: 'view',
          data: { ...item },
        };
        rootData.rootSocket.emit(
          'message', // 固定的消息名称，不能修改
          {
            room: global.socketRoom, // 房间号，一般使用全局变量socketRoom
            type: 'createDialog', // 消息类型名称
            data: {
              data: {
                headerComName: '',
                contentComName: 'gztLeftMessageEditComponent',
                maxWidth: '635px',
                maxHeight: '441px',
                minWidth: '635px',
                minHeight: '441px',
                isScalse: false,
                title: '查看消息通知',
              },
            },
          }
        );
      };
      // 编辑按钮点击处理函数
      const onEdit = (item) => {
        global.dialogParams = {
          type: 'edit',
          data: { ...item },
        };
        rootData.rootSocket.emit(
          'message', // 固定的消息名称，不能修改
          {
            room: global.socketRoom, // 房间号，一般使用全局变量socketRoom
            type: 'createDialog', // 消息类型名称
            data: {
              data: {
                headerComName: '',
                contentComName: 'gztLeftMessageEditComponent',
                maxWidth: '635px',
                maxHeight: '441px',
                minWidth: '635px',
                minHeight: '441px',
                isScalse: false,
                title: '编辑消息通知',
              },
            },
          }
        );
      };
      // 删除按钮点击处理函数
      const onDelete = async ({ N_ID }) => {
        try {
          const params = {
            interfaceId: 'b8b253050afdf798f715757097a1a958',
            nId: N_ID,
          };
          const {
            data: {
              head: { statusCode },
            },
          } = await axios.get(`${global.npServiceBaseUrl}${global.serviceBasePath}`, {
            params,
          });
          if (statusCode !== '200') {
            ElementPlus.ElMessage.error('删除失败');
            return;
          }
          ElementPlus.ElMessage.success('删除成功');
          rootData.rootSocket.emit(
            // 固定的消息名称，不能修改
            'message',
            {
              // 键名不能改 房间号，这里为默认值，一般无需修改，如果变量名称自己定义的则需要修改
              room: global.socketRoom,
              // 键名不能改 消息名称
              type: 'refreshNoticeList',
              // 键名不能改 消息内容 对象格式
              data: {},
            }
          );
        } catch (error) {
          console.error('删除消息通知失败:', error);
          ElementPlus.ElMessage.error('删除失败');
        }
      };
      return {
        gztLeftMessagesDialogState,
        onView,
        onEdit,
        onDelete,
      };
    },
  };

  const _hoisted_1 = { class: 'bulletin-page' };
  const _hoisted_2 = ['onClick'];
  const _hoisted_3 = { class: 'card-header' };
  const _hoisted_4 = { class: 'header-left' };
  const _hoisted_5 = ['title'];
  const _hoisted_6 = ['title'];
  const _hoisted_7 = ['title'];
  const _hoisted_8 = { class: 'card-actions' };
  const _hoisted_9 = ['onClick'];
  const _hoisted_10 = ['onClick'];
  const _hoisted_11 = {
    key: 0,
    class: 'empty-data',
  };

  function render(_ctx, _cache) {
    return (
      openBlock(),
      createElementBlock('div', _hoisted_1, [
        (openBlock(true),
        createElementBlock(
          Fragment,
          null,
          renderList(_ctx.gztLeftMessagesDialogState.listData, (item) => {
            return (
              openBlock(),
              createElementBlock(
                'div',
                {
                  key: item.N_ID,
                  class: 'bulletin-card',
                  onClick: ($event) => _ctx.onView(item),
                },
                [
                  createElementVNode('div', _hoisted_3, [
                    createElementVNode('div', _hoisted_4, [
                      createElementVNode(
                        'span',
                        {
                          class: normalizeClass([
                            'level-tag',
                            `level-${item.CODE_NTYPE === '1' ? 'normal' : 'important'}`,
                          ]),
                        },
                        toDisplayString(item.CODE_NTYPE_NAME),
                        3 /* TEXT, CLASS */
                      ),
                      createElementVNode(
                        'span',
                        {
                          class: 'card-title',
                          title: item.NTITLE,
                        },
                        toDisplayString(item.NTITLE),
                        9 /* TEXT, PROPS */,
                        _hoisted_5
                      ),
                    ]),
                    createElementVNode(
                      'time',
                      {
                        class: 'card-date',
                        title: item.PUB_TIME,
                      },
                      toDisplayString(item.PUB_TIME),
                      9 /* TEXT, PROPS */,
                      _hoisted_6
                    ),
                  ]),
                  createElementVNode(
                    'div',
                    {
                      class: 'card-content',
                      title: item.NCONTENT,
                    },
                    toDisplayString(item.NCONTENT),
                    9 /* TEXT, PROPS */,
                    _hoisted_7
                  ),
                  createElementVNode('div', _hoisted_8, [
                    createElementVNode(
                      'button',
                      {
                        type: 'button',
                        class: 'action-btn',
                        onClick: withModifiers(($event) => _ctx.onEdit(item), ['stop']),
                      },
                      [
                        ...(_cache[0] ||
                          (_cache[0] = [
                            createElementVNode(
                              'div',
                              {
                                class: 'icon',
                                style: { '--icon': 'var(--gzt-edit-btn)' },
                              },
                              null,
                              -1 /* CACHED */
                            ),
                            createTextVNode(' 编辑 '),
                          ])),
                      ],
                      8 /* PROPS */,
                      _hoisted_9
                    ),
                    createElementVNode(
                      'button',
                      {
                        type: 'button',
                        class: 'action-btn',
                        onClick: withModifiers(($event) => _ctx.onDelete(item), ['stop']),
                      },
                      [
                        ...(_cache[1] ||
                          (_cache[1] = [
                            createElementVNode(
                              'div',
                              {
                                class: 'icon',
                                style: { '--icon': 'var(--gzt-delete-btn)' },
                              },
                              null,
                              -1 /* CACHED */
                            ),
                            createTextVNode(' 删除 '),
                          ])),
                      ],
                      8 /* PROPS */,
                      _hoisted_10
                    ),
                  ]),
                ],
                8 /* PROPS */,
                _hoisted_2
              )
            );
          }),
          128 /* KEYED_FRAGMENT */
        )),
        !_ctx.gztLeftMessagesDialogState.listData.length
          ? (openBlock(), createElementBlock('span', _hoisted_11, '暂无数据'))
          : createCommentVNode('v-if', true),
      ])
    );
  } // 动态加载依赖组件
  async function loadComponent(pageCode) {
    if (!window[`zgtMessagesListComponent`]) {
      try {
        await window.ComponentLoader.loadComponent(pageCode);
      } catch (error) {
        console.error(`加载依赖组件 zgtMessagesListComponent 失败:`, error);
        // 返回一个兜底组件
        window[`zgtMessagesListComponent`] = { template: '<div>Failed to load component</div>' };
      }
    }
  }

  // 注册组件到全局
  window.zgtMessagesListComponent = {
    ...componentOptions,
    render,
  };
})();
