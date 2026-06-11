/**
 * 自动编译的Vue组件: gztLeftCommonAppListEditComponent
 * 适配低代码平台，不使用import/export语法
 */
(function () {
  // 自主编码的页面

  const componentOptions = {
    components: {},

    setup() {
      /* ******** 如果要使用应用内部的全局变量、全局函数、socket消息 必须注入全局变量和事件 ******** */
      const rootData = inject('root');
      const global = reactive({
        ...toRefs(rootData),
      });
      /* ********************************************************************************  */

      const state = reactive({
        keyword: '',
      });

      const selectId = ref([]);

      const search = () => {
        state.searchTriggered = true;

        if (!state.keyword.trim()) {
          // 重置显示状态
          dynamicSections.forEach((section) => {
            section.cards.forEach((card) => {
              card.visible = true;
            });
          });
          return;
        }

        // 过滤三级菜单内容
        dynamicSections.forEach((section) => {
          section.cards.forEach((card) => {
            card.visible = card.text.includes(state.keyword);
          });
        });
      };

      // 卡片数据
      const cardData = reactive({
        cards: [],
      });

      // 切换卡片激活状态
      const toggleCard = (id) => {
        cardData.cards.forEach((card) => {
          card.active = card.id === id;
        });

        // 检查是否点击的是"全部"卡片（匹配其固定ID）
        if (id === 'ae5e75d3-9d9e-4811-96a4-b5353b57d445') {
          // 显示所有内容区域
          dynamicSections.forEach((section) => {
            section.visible = true;
          });
        } else {
          // 只显示对应的内容区域
          const selectedSection = dynamicSections.find((section) => section.id === id);
          if (selectedSection) {
            dynamicSections.forEach((section) => {
              section.visible = section.id === id;
            });
          }
        }
      };

      const dynamicSections = reactive([]);

      const handleStatusClick = async (cardId) => {
        // 找到对应的卡片并切换状态
        dynamicSections.forEach((section) => {
          const card = section.cards.find((c) => c.id === cardId);
          if (card) {
            card.status = !card.status;
          }
        });

        // 获取所有status为true的卡片ID
        const inactiveIds = dynamicSections
          .flatMap((section) => section.cards.filter((card) => card.status).map((card) => card.id))
          .join(',');

        const userId = localStorage.getItem('lastUserId');
        if (userId) {
          const requestUrl = `${global.serviceBaseUrl}${global.serviceBasePath}&interfaceId=6dd770b4a4842e8740695016d0d4f1c8&userId=${userId}&appId=FJSTY.OVERVIEW&menuIds=${inactiveIds}`;
          try {
            const response = await axios.get(requestUrl);
            console.log('保存成功', response);
          } catch (error) {
            console.error('GET请求失败', error);
          }
        }
      };

      function convertParamsToUrlString(url, params) {
        const temParams = [];
        let afterUrl = '';
        if (!url) return '';
        if (Object.keys(params).length <= 0) return url;

        Object.keys(params).forEach((key) => {
          temParams.push(`${key}=${params[key]}`);
        });

        // 检查URL是否包含锚点(#)
        const hashIndex = url.indexOf('#');

        if (hashIndex !== -1) {
          // 分离URL为基础部分和锚点部分
          const baseUrl = url.substring(0, hashIndex);
          let hashPart = url.substring(hashIndex + 1);

          // 处理锚点部分的参数
          if (hashPart.indexOf('?') !== -1) {
            hashPart = `${hashPart}&${temParams.join('&')}`;
          } else {
            hashPart = `${hashPart}?${temParams.join('&')}`;
          }

          afterUrl = `${baseUrl}#${hashPart}`;
        } else {
          // 原有的逻辑，处理不包含锚点的URL
          if (url.indexOf('?') !== -1) {
            afterUrl = `${url}&${temParams.join('&')}`;
          } else {
            afterUrl = `${url}?${temParams.join('&')}`;
          }
        }

        return afterUrl;
      }

      const handleClick = (item) => {
        console.log(item);
        // 拼接参数
        const linkUrl = convertParamsToUrlString(item.menuUrl, {
          userToken: localStorage.getItem('token'),
        });
        window.open(linkUrl, '_blank');
      };

      // 处理树形结构数据的函数
      const buildTreeData = (data) => {
        const nodeMap = new Map();
        // dynamicSections = []

        // 1. 收集一级菜单ID (PARENT为null的节点)
        const firstLevelNodes = data
          .filter((item) => item.PARENT === null)
          .map((item) => ({
            id: item.MENU_ID,
            title: item.MENU_NAME || '',
            content: item.CONTENT || '',
          }));

        // console.log(firstLevelNodes, 'firstLevelNodes');

        // 2. 初始化所有节点
        data.forEach((item) => {
          let backgroundImg = '';
          let desc = '';

          // 解析EXT4
          if (item.EXT4) {
            try {
              const ext4Data = JSON.parse(item.EXT4.replace(/'/g, '"'));
              backgroundImg = ext4Data.backgroundImg || '';
              desc = ext4Data.desc || '';
            } catch (e) {
              console.error('解析EXT4失败:', e);
            }
          }
          nodeMap.set(item.MENU_ID, {
            id: item.MENU_ID,
            PARENT: item.PARENT,
            title: item.MENU_NAME || '',
            menuUrl: item.MENU_URL || '',
            content: item.CONTENT || '',
            backgroundImg: backgroundImg,
            desc: desc,
            children: [],
          });
        });

        // 3. 构建父子关系
        data.forEach((item) => {
          const currentNode = nodeMap.get(item.MENU_ID);
          if (!currentNode) return;

          if (item.PARENT) {
            const parentNode = nodeMap.get(item.PARENT);
            if (parentNode) {
              parentNode.children.push(currentNode);
            }
          }
        });
        console.log(nodeMap, 'nodeMap');
        console.log(nodeMap.values(), 'nodeMap');

        // 4. 一级菜单作为卡片数据
        // cardData.cards = firstLevelNodes.map((node, index) => ({
        //   id: node.id,
        //   name: node.title,
        //   active: index === 0
        // }));
        // 5. 默认显示第一个二级菜单的内容
        if (cardData.cards.length > 0) {
          const firstCardId = cardData.cards[0].id;
          dynamicSections.forEach((section) => {
            section.visible = section.id === firstCardId;
          });
        }

        const secondLevelNodes = Array.from(nodeMap.values()).filter((node) =>
          firstLevelNodes.some((first) => first.id === node.PARENT)
        );

        const allCardNodes = [...firstLevelNodes, ...secondLevelNodes];
        cardData.cards = allCardNodes.map((node, index) => ({
          id: node.id,
          name: node.title,
          active: index === 0,
        }));

        secondLevelNodes.forEach((node) => {
          dynamicSections.push({
            id: node.id,
            title: node.title,
            visible: true,
            cards: node.children.map((child) => ({
              id: child.id,
              imageUrl: child.backgroundImg,
              menuUrl: child.menuUrl,
              text: child.title,
              status: selectId.value.includes(child.id) ? true : false, // 根据selectId设置status
              visible: true,
            })),
          });
        });

        console.log(cardData);
        console.log(dynamicSections);
      };

      const getSelected = async () => {
        const userId = localStorage.getItem('lastUserId');
        if (userId) {
          const requestUrl = `${global.serviceBaseUrl}${global.serviceBasePath}&interfaceId=b2d5d1fb8183b7ff6b9699b9ca99ba14&userId=${userId}&appId=FJSTY.OVERVIEW`;
          try {
            const response = await axios.get(requestUrl);
            console.log('GET请求成功', response.data);
            selectId.value = response.data.map((item) => item.menuId);
            console.log('selectId.value', selectId.value);
          } catch (error) {
            console.error('GET请求失败', error);
          }
        }
      };

      onMounted(async () => {
        getSelected().then(async () => {
          const loginName = localStorage.getItem('lastLoginName');
          if (loginName) {
            const requestUrl = `${global.serviceBaseUrl}${global.serviceBasePath}&interfaceId=c304153ba8ff7bd613564260a9afd9fd&loginName=${loginName}&menuId=ae5e75d3-9d9e-4811-96a4-b5353b57d445`;
            try {
              const response = await axios.get(requestUrl);
              console.log('GET请求成功', response.data);
              // 可以在这里添加响应数据处理逻辑
              // 处理树形结构数据
              response.data = response.data.filter(
                (node) => node.MENU_ID !== 'ae5e75d3-9d9e-4811-96a4-b5353b57d445'
              );

              response.data.unshift({
                TARGET: '2',
                STATUS: 1,
                EXT4: null,
                MENU_URL: null,
                PARENT: null,
                SORT: 1,
                MENU_ID: 'ae5e75d3-9d9e-4811-96a4-b5353b57d445',
                RES_ID: null,
                MENU_NAME: '全部',
                MENU_ICON: null,
                BASE_URL: null,
              });

              const listData = buildTreeData(response.data);
              console.log('树形结构数据', listData);
            } catch (error) {
              console.error('GET请求失败', error);
            }
          }
        });
      });

      // 发送消息 socket
      // rootData.rootSocket.emit(
      //   // 固定的消息名称，不能修改
      //   'message',
      //   {
      //     // 键名不能改 房间号，这里为默认值，一般无需修改，如果变量名称自己定义的则需要修改
      //     room: global.socketRoom,
      //     // 键名不能改 消息名称
      //     type: 'speed',
      //     // 键名不能改 消息内容 对象格式
      //     data: {
      //       monitorTime: '',
      //     },
      //   },
      // );

      // 接收socket消息
      rootData.rootOn('rootSocket:change', (data) => {
        if (data.type === 'showLegoDialog') {
          // 显示lego里的弹框
          console.log('收到消息了');
        } else if (data.type === 'hideLegoDialog' || data.type === 'closePopup') {
          // 关闭lego里的弹窗
          global.businessDialog.dialogName = '';
        }
      });

      return {
        ...toRefs(state),
        handleClick,
        search,
        cardData,
        toggleCard,
        dynamicSections,
        handleStatusClick,
      };
    },
  };

  const _hoisted_1 = { class: 'container' };
  const _hoisted_2 = { class: 'custom-rectangle' };
  const _hoisted_3 = { class: 'card-container' };
  const _hoisted_4 = ['onClick'];
  const _hoisted_5 = { class: 'section-title' };
  const _hoisted_6 = { class: 'dynamic-card-container' };
  const _hoisted_7 = ['onClick'];
  const _hoisted_8 = ['src'];
  const _hoisted_9 = { class: 'card-text' };
  const _hoisted_10 = ['onClick'];

  function render(_ctx, _cache) {
    const _component_el_input = resolveComponent('el-input');
    const _component_el_button = resolveComponent('el-button');

    return (
      openBlock(),
      createElementBlock('div', _hoisted_1, [
        createElementVNode('div', _hoisted_2, [
          createVNode(
            _component_el_input,
            {
              modelValue: _ctx.keyword,
              'onUpdate:modelValue': _cache[0] || (_cache[0] = ($event) => (_ctx.keyword = $event)),
              class: 'custom-input',
              placeholder: '请输入内容',
              clearable: '',
            },
            null,
            8 /* PROPS */,
            ['modelValue']
          ),
          createVNode(
            _component_el_button,
            {
              class: 'custom-button',
              onClick: _ctx.search,
            },
            {
              default: withCtx(() => _cache[1] || (_cache[1] = [createTextVNode('查询')])),
              _: 1 /* STABLE */,
              __: [1],
            },
            8 /* PROPS */,
            ['onClick']
          ),
        ]),
        createElementVNode('div', _hoisted_3, [
          (openBlock(true),
          createElementBlock(
            Fragment,
            null,
            renderList(_ctx.cardData.cards, (card) => {
              return (
                openBlock(),
                createElementBlock(
                  'div',
                  {
                    key: card.id,
                    class: normalizeClass(['card-item', { active: card.active }]),
                    onClick: ($event) => _ctx.toggleCard(card.id),
                  },
                  toDisplayString(card.name),
                  11 /* TEXT, CLASS, PROPS */,
                  _hoisted_4
                )
              );
            }),
            128 /* KEYED_FRAGMENT */
          )),
        ]),
        (openBlock(true),
        createElementBlock(
          Fragment,
          null,
          renderList(_ctx.dynamicSections, (section) => {
            return (
              openBlock(),
              createElementBlock(
                'div',
                {
                  key: section.id,
                  class: 'dynamic-section',
                },
                [
                  section.visible && section.cards.length
                    ? (openBlock(),
                      createElementBlock(
                        Fragment,
                        { key: 0 },
                        [
                          createCommentVNode(' 标题背景 '),
                          _cache[2] ||
                            (_cache[2] = createElementVNode(
                              'div',
                              { class: 'title-background' },
                              null,
                              -1 /* CACHED */
                            )),
                          createCommentVNode(' 标题文字 '),
                          createElementVNode(
                            'div',
                            _hoisted_5,
                            toDisplayString(section.title),
                            1 /* TEXT */
                          ),
                          createCommentVNode(' 卡片容器 '),
                          createElementVNode('div', _hoisted_6, [
                            (openBlock(true),
                            createElementBlock(
                              Fragment,
                              null,
                              renderList(section.cards, (card) => {
                                return (
                                  openBlock(),
                                  createElementBlock(
                                    'div',
                                    {
                                      key: card.id,
                                      class: 'dynamic-card',
                                      style: normalizeStyle({
                                        display: card.visible ? '' : 'none',
                                      }),
                                      onClick: ($event) => _ctx.handleClick(card),
                                    },
                                    [
                                      createElementVNode(
                                        'img',
                                        {
                                          src: card.imageUrl,
                                          class: 'card-image',
                                        },
                                        null,
                                        8 /* PROPS */,
                                        _hoisted_8
                                      ),
                                      createElementVNode(
                                        'span',
                                        _hoisted_9,
                                        toDisplayString(card.text),
                                        1 /* TEXT */
                                      ),
                                      createElementVNode(
                                        'div',
                                        {
                                          class: 'status-icon',
                                          style: normalizeStyle(
                                            card.status
                                              ? { 'background-image': 'var(--gzt-btn-remove)' }
                                              : { 'background-image': 'var(--gzt-btn-add)' }
                                          ),
                                          onClick: withModifiers(
                                            ($event) => _ctx.handleStatusClick(card.id),
                                            ['stop']
                                          ),
                                        },
                                        null,
                                        12 /* STYLE, PROPS */,
                                        _hoisted_10
                                      ),
                                    ],
                                    12 /* STYLE, PROPS */,
                                    _hoisted_7
                                  )
                                );
                              }),
                              128 /* KEYED_FRAGMENT */
                            )),
                          ]),
                        ],
                        64 /* STABLE_FRAGMENT */
                      ))
                    : createCommentVNode('v-if', true),
                ]
              )
            );
          }),
          128 /* KEYED_FRAGMENT */
        )),
      ])
    );
  } // 动态加载依赖组件
  async function loadComponent(pageCode) {
    if (!window[`gztLeftCommonAppListEditComponent`]) {
      try {
        await window.ComponentLoader.loadComponent(pageCode);
      } catch (error) {
        console.error(`加载依赖组件 gztLeftCommonAppListEditComponent 失败:`, error);
        // 返回一个兜底组件
        window[`gztLeftCommonAppListEditComponent`] = {
          template: '<div>Failed to load component</div>',
        };
      }
    }
  }

  // 注册组件到全局
  window.gztLeftCommonAppListEditComponent = {
    ...componentOptions,
    render,
  };
})();
