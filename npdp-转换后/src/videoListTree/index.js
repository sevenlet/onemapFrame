/**
 * 自动编译的Vue组件: videoListTreeComponent
 * 适配低代码平台，不使用import/export语法
 */
(function () {
  // 自主编码的页面

  const componentOptions = {
    components: {},
    // 在这里接收父组件的参数
    props: {
      params: {
        type: String,
        default: '111',
      },
    },

    /* 这里可以正常使用props和emit，仅限于父子组件均为自主编码方式编写的页面 */
    setup(props, { emit }) {
      /* ******** 如果要使用应用内部的全局变量、全局函数、socket消息 必须注入全局变量和事件 ******** */
      const rootData = inject('root');
      const global = reactive({
        ...toRefs(rootData),
      });
      /* ********************************************************************************  */

      // 配置选项的映射
      const propsMap = {
        children: 'children',
        label: 'name',
      };

      // 菜单树DOM
      const treeRef = ref();
      const state = reactive({
        // 树形菜单数据
        data: [],
        // 当前勾选上的菜单项的id列表
        checkedIds: [],
        // 当前勾选上的菜单项的数据列表
        checkedData: [],
        //？当前勾选上的在页面上不显示的菜单项的id列表
        otherCheckedData: [],
      });

      /**
       * 获取title
       * @param treeData - 当前树节点数据
       */
      function getTitle(treeData) {
        return treeData[propsMap.label];
      }

      /**
       * 增强版数组转树函数
       * @param {Array} data - 平面数组数据
       * @param {Object} options - 配置选项
       * @returns {Array} 树形结构数组
       */
      function arrayToTreeEnhanced(data, options = {}) {
        const {
          idKey = 'ID',
          parentKey = 'PARENT_ID',
          childrenKey = 'children',
          rootParentId = 'null',
          sortChildren = false,
          sortKey = 'NAME',
        } = options;

        const idMap = new Map();
        const tree = [];

        // 1. 创建所有节点的映射
        data.forEach((item) => {
          idMap.set(item[idKey], {
            ...item,
            [childrenKey]: [],
          });
        });

        // 2. 构建树结构
        data.forEach((item) => {
          const node = idMap.get(item[idKey]);
          const parentId = item[parentKey];

          if (parentId === rootParentId || parentId === null) {
            tree.push(node);
          } else if (idMap.has(parentId)) {
            const parentNode = idMap.get(parentId);
            parentNode[childrenKey].push(node);
          } else {
            // 如果父节点不存在，仍将其作为根节点
            tree.push(node);
          }
        });

        // 3. 可选：对子节点排序
        if (sortChildren) {
          function sortNodes(nodes) {
            nodes.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
            nodes.forEach((node) => {
              if (node[childrenKey] && node[childrenKey].length > 0) {
                sortNodes(node[childrenKey]);
              }
            });
          }
          sortNodes(tree);
        }

        console.log(tree);
        return tree;
      }

      axios
        .get('http://192.168.24.106:10157/service/serviceinterface/search/run.action', {
          params: {
            token: 'dcp',
            interfaceId: 'df469005fa8539bfb02772ee856d5aa9',
          },
        })
        .then((res) => {
          // 使用增强版
          state.data = arrayToTreeEnhanced(res?.data?.data || [], {
            sortChildren: false,
            sortKey: 'NAME',
          });
          if (res?.data?.data?.length) {
            const firstNode = state.data
              .find((item) => item.children?.length)
              ?.children?.find((item) => item.IS_CHANNEL === '1');
            // 更新当前勾选上的菜单项的id列表
            state.checkedIds = firstNode.ID;
            // 更新当前勾选上的菜单项的数据列表
            state.checkedData = [firstNode];
            if (firstNode.ID) {
              rootData.rootSocket.emit(
                'message', // 固定的消息名称，不能修改
                {
                  room: global.socketRoom, // 房间号，一般使用全局变量socketRoom
                  type: 'changeChannelIds', // 消息类型名称
                  data: firstNode.ID,
                }
              );
            }
          }
        });

      /**
       * 触发复选
       * @param {*} data - 传递给 data 属性的数组中该节点所对应的对象
       * @param {*} statusObject - 树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性
       */
      function handleCheck(data, statusObject) {
        // console.log(data, statusObject, '图层html-handleCheck');

        // 勾选上的图层
        const checkedLayer = statusObject.checkedNodes.filter(
          (item) => !item[propsMap.children] || !item[propsMap.children]?.length
        );

        /* 若是取消勾选 且 当前菜单项不是高亮项 */
        if (checkedLayer.length < state.checkedIds.length) {
          // 发送setLayersAR消息
          // sendSetLayersARMsg(data, 'remove');
        } else if (checkedLayer.length > state.checkedIds.length) {
          // 发送setLayersAR消息
          // sendSetLayersARMsg(data, 'add');
        }

        // 更新当前勾选上的菜单项的id列表
        state.checkedIds = checkedLayer
          .filter((item) => item.IS_CHANNEL === '1')
          .map((item) => item.ID);
        // 更新当前勾选上的菜单项的数据列表
        state.checkedData = checkedLayer;

        console.log(state.checkedData, state.checkedIds);

        rootData.rootSocket.emit(
          'message', // 固定的消息名称，不能修改
          {
            room: global.socketRoom, // 房间号，一般使用全局变量socketRoom
            type: 'changeChannelIds', // 消息类型名称
            data: state.checkedIds.join(','),
          }
        );
      }

      return {
        ...toRefs(state),
        propsMap,
        treeRef,
        getTitle,
        handleCheck,
        global,
      };
    },
  };

  const _hoisted_1 = { class: 'layer' };
  const _hoisted_2 = { class: 'custom-tree-node' };
  const _hoisted_3 = ['title'];

  function render(_ctx, _cache) {
    const _component_el_tree = resolveComponent('el-tree');
    const _component_el_scrollbar = resolveComponent('el-scrollbar');

    return (
      openBlock(),
      createElementBlock('div', _hoisted_1, [
        createVNode(
          _component_el_scrollbar,
          { 'max-height': '100%' },
          {
            default: withCtx(() => [
              createVNode(
                _component_el_tree,
                {
                  ref: 'treeRef',
                  'default-checked-keys': [_ctx.checkedIds],
                  'highlight-current': '',
                  'node-key': 'ID',
                  'empty-text': '无数据',
                  'show-checkbox': '',
                  props: _ctx.propsMap,
                  data: _ctx.data,
                  indent: 22,
                  'expand-on-click-node': false,
                  onCheck: _ctx.handleCheck,
                },
                {
                  default: withCtx(({ node, data }) => [
                    createElementVNode('span', _hoisted_2, [
                      createElementVNode(
                        'span',
                        {
                          class: 'custom-tree-node-text flex-align-items-center',
                          title: _ctx.getTitle(data),
                        },
                        [
                          createTextVNode(toDisplayString(data.NAME), 1 /* TEXT */),
                          createElementVNode(
                            'span',
                            {
                              class: normalizeClass(`online-status${data.STATUS}`),
                            },
                            '（' + toDisplayString(data.STATUS === '1' ? '在线' : '离线') + '）',
                            3 /* TEXT, CLASS */
                          ),
                        ],
                        8 /* PROPS */,
                        _hoisted_3
                      ),
                    ]),
                  ]),
                  _: 1 /* STABLE */,
                },
                8 /* PROPS */,
                ['default-checked-keys', 'props', 'data', 'onCheck']
              ),
            ]),
            _: 1 /* STABLE */,
          }
        ),
      ])
    );
  } // 动态加载依赖组件
  async function loadComponent(pageCode) {
    if (!window[`videoListTreeComponent`]) {
      try {
        await window.ComponentLoader.loadComponent(pageCode);
      } catch (error) {
        console.error(`加载依赖组件 videoListTreeComponent 失败:`, error);
        // 返回一个兜底组件
        window[`videoListTreeComponent`] = { template: '<div>Failed to load component</div>' };
      }
    }
  }

  // 注册组件到全局
  window.videoListTreeComponent = {
    ...componentOptions,
    render,
  };
})();
