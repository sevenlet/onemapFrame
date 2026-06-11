/**
 * 自动编译的Vue组件: descriptionsComponent
 * 适配低代码平台，不使用import/export语法
 */
(function () {
  const componentOptions = {
    components: {
      fooComponent: defineAsyncComponent(
        () =>
          new Promise((resolve) => {
            loadComponent('foo').then(() => resolve(window.fooComponent));
          })
      ),
    },

    setup() {
      /* ******** 注入全局变量和事件 ******** */
      const rootData = inject('root');
      const global = reactive({
        ...toRefs(rootData),
      });
      /* ********************************** */

      // 状态管理
      const title = ref('组件开发示例');
      const currentComponent = ref('FooComponent');
      const currentComponentName = ref('Foo');
      const socketKey = ref(null); // 存储外部socket传入的key
      const groupedDataObj = ref({}); // 按key存储不同实例的数据
      // const componentKey = ref('comp_' + Date.now() + '_' + Math.floor(Math.random() * 1000));

      const instance = getCurrentInstance();
      //获取所有非 props 属性
      console.log(instance.attrs);
      const componentKey = instance.attrs['component-key'];

      // 计算属性 - 当前实例的数据
      const groupedData = computed(() => {
        console.log('当前实例computed数据', componentKey);
        return componentKey ? groupedDataObj.value[componentKey]?.data || [] : [];
      });

      const labelWidth = computed(() => {
        return componentKey ? groupedDataObj.value[componentKey]?.labelWidth || 120 : 120;
      });

      // 组件切换方法
      const switchComponent = (name) => {
        currentComponent.value = name + 'Component';
        currentComponentName.value = name;
      };

      // Socket消息处理
      const handleSocketMessage = (data) => {
        console.log(data);
        if (data.type === 'descriptionsData' && data.data.key === componentKey) {
          // 存储当前key对应的最新数据
          socketKey.value = data.data.key;
          groupedDataObj.value[data.data.key] = data.data;
          console.log('收到数据并更新 - key:', data.data.key);
          console.log('groupedDataObj', groupedDataObj.value);
        }
      };

      // 生命周期 - 挂载
      onMounted(() => {
        // 注册socket事件监听
        rootData.rootOn('rootSocket:change', handleSocketMessage);
        rootData.rootSocket.emit(
          // 固定的消息名称，不能修改
          'message',
          {
            // 键名不能改 房间号，这里为默认值，一般无需修改，如果变量名称自己定义的则需要修改
            room: global.socketRoom,
            // 键名不能改 消息名称
            type: 'descriptionsMounted',
            // 键名不能改 消息内容 对象格式
            data: {},
          }
        );
        console.log('组件已挂载，等待socket传入key...');
      });

      // 生命周期 - 卸载
      onUnmounted(() => {
        // 移除socket事件监听
        rootData.rootOff('rootSocket:change', handleSocketMessage);
        // 清理当前实例数据
        if (componentKey) {
          delete groupedDataObj.value[componentKey];
          console.log('组件卸载，清理数据 - key:', componentKey);
        }
      });

      return {
        title,
        groupedData,
        labelWidth,
        currentComponent,
        currentComponentName,
        switchComponent,
      };
    },
  };

  const _hoisted_1 = { class: 'container' };
  const _hoisted_2 = { class: 'form-container' };
  const _hoisted_3 = { class: 'cell-container' };
  const _hoisted_4 = ['title', 'innerHTML'];

  function render(_ctx, _cache) {
    return (
      openBlock(),
      createElementBlock('div', _hoisted_1, [
        createElementVNode('div', _hoisted_2, [
          (openBlock(true),
          createElementBlock(
            Fragment,
            null,
            renderList(_ctx.groupedData, (row, rowIndex) => {
              return (
                openBlock(),
                createElementBlock(
                  'div',
                  {
                    key: rowIndex,
                    class: 'form-row',
                  },
                  [
                    (openBlock(true),
                    createElementBlock(
                      Fragment,
                      null,
                      renderList(row, (item, itemIndex) => {
                        return (
                          openBlock(),
                          createElementBlock(
                            'div',
                            {
                              key: itemIndex,
                              class: 'form-item',
                              style: normalizeStyle({ width: `${100 / row.length}%` }),
                            },
                            [
                              createElementVNode('div', _hoisted_3, [
                                createElementVNode(
                                  'span',
                                  {
                                    class: 'cell-title',
                                    style: normalizeStyle({ width: `${_ctx.labelWidth}px` }),
                                  },
                                  toDisplayString(item.label),
                                  5 /* TEXT, STYLE */
                                ),
                                createElementVNode(
                                  'span',
                                  {
                                    class: 'cell-value',
                                    title: item.value,
                                    innerHTML: item.value,
                                  },
                                  null,
                                  8 /* PROPS */,
                                  _hoisted_4
                                ),
                              ]),
                            ],
                            4 /* STYLE */
                          )
                        );
                      }),
                      128 /* KEYED_FRAGMENT */
                    )),
                  ]
                )
              );
            }),
            128 /* KEYED_FRAGMENT */
          )),
        ]),
      ])
    );
  } // 动态加载依赖组件
  async function loadComponent(pageCode) {
    if (!window[`descriptionsComponent`]) {
      try {
        await window.ComponentLoader.loadComponent(pageCode);
      } catch (error) {
        console.error(`加载依赖组件 descriptionsComponent 失败:`, error);
        // 返回一个兜底组件
        window[`descriptionsComponent`] = { template: '<div>Failed to load component</div>' };
      }
    }
  }

  // 注册组件到全局
  window.descriptionsComponent = {
    ...componentOptions,
    render,
  };
})();
