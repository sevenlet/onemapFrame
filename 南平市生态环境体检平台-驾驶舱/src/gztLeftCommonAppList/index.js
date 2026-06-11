/**
 * 自动编译的Vue组件: gztLeftCommonAppListComponent
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

      const text = ref('加载中');
      const listData = ref([]);

      const allData = ref([]);

      const allDataMap = new Map();

      const handleClick = (item) => {
        console.log(item);
        // 拼接参数

        const linkUrl = convertParamsToUrlString(item.menuUrl, {
          userToken: localStorage.getItem('token'),
        });
        window.open(linkUrl, '_blank');
      };

      // 发送消息 socket
      rootData.rootSocket.emit(
        // 固定的消息名称，不能修改
        'message',
        {
          // 键名不能改 房间号，这里为默认值，一般无需修改，如果变量名称自己定义的则需要修改
          room: global.socketRoom,
          // 键名不能改 消息名称
          type: 'gztLeftCommonAppListMounted',
          // 键名不能改 消息内容 对象格式
          data: {
            monitorTime: '',
          },
        }
      );

      /**
       * 将参数拼接在地址后
       * @param url url地址 string
       * @param params 参数 {[key: string]: unknown}
       * @returns 拼接后的url地址字符串
       */
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

      // 处理树形结构数据的函数
      const buildTreeData = (data) => {
        const nodeMap = new Map();
        const rootNodes = [];

        // 1. 初始化所有节点(仅基础信息，不解析EXT4)
        data.forEach((item) => {
          nodeMap.set(item.MENU_ID, {
            id: item.MENU_ID,
            title: item.MENU_NAME || '',
            content: item.CONTENT || '',
            children: [],
          });
        });

        // 2. 构建父子关系
        data.forEach((item) => {
          const currentNode = nodeMap.get(item.MENU_ID);
          if (!currentNode) return;

          // 如果PARENT存在，则尝试寻找父节点
          if (item.PARENT) {
            const parentNode = nodeMap.get(item.PARENT);
            if (parentNode) {
              // 解析子节点的EXT4
              let ext4Data = {};
              try {
                if (!item.EXT4) {
                  ext4Data = { backgroundImg: '', businessType: '', desc: '' };
                } else {
                  ext4Data = JSON.parse(item.EXT4.replace(/'/g, '"'));
                }
              } catch (e) {
                console.error('解析子节点EXT4失败:', e);
                ext4Data = { backgroundImg: '', businessType: '', desc: '' };
              }

              const { backgroundImg, businessType, desc } = ext4Data;
              // 使用Object.assign创建新对象确保属性绑定
              const childNode = Object.assign(
                {},
                {
                  id: item.MENU_ID,
                  imageUrl: backgroundImg || '默认图片URL',
                  childName: item.MENU_NAME || '',
                  desc: desc || '',
                  // 跳转地址
                  menuUrl: item.MENU_URL || '',
                }
              );

              parentNode.children.push(childNode);
              return; // 已添加为子节点，无需再加入顶级节点
            }
          }

          // 如果没有父节点或父节点不存在，则作为顶级节点
          rootNodes.push(currentNode);
        });

        return rootNodes;
      };

      const getAllData = async () => {
        const loginName = localStorage.getItem('lastLoginName');
        if (loginName) {
          const requestUrl = `${global.serviceBaseUrl}${global.serviceBasePath}&interfaceId=c304153ba8ff7bd613564260a9afd9fd&loginName=${loginName}&menuId=ae5e75d3-9d9e-4811-96a4-b5353b57d445`;
          try {
            const response = await axios.get(requestUrl);
            console.log('GET请求成功', response.data);

            // 处理树形结构数据

            // const targetParentId = 'ae5e75d3-9d9e-4811-96a4-b5353b57d445';
            allData.value = response.data;

            response.data.forEach((item) => {
              allDataMap.set(item.MENU_ID, item);
            });
          } catch (error) {
            console.error('GET请求失败', error);
          }
        }
      };

      const setData = async () => {
        getAllData().then(async () => {
          const userId = localStorage.getItem('lastUserId');
          if (userId) {
            const requestUrl = `${global.serviceBaseUrl}${global.serviceBasePath}&interfaceId=b2d5d1fb8183b7ff6b9699b9ca99ba14&userId=${userId}&appId=FJSTY.OVERVIEW`;
            try {
              const response = await axios.get(requestUrl);
              console.log('GET请求成功', response.data);

              // 处理树形结构数据

              const targetMenuIds = response.data.map((item) => item.menuId);

              const matchedNodes = new Map();
              targetMenuIds.forEach((menuId) => {
                const matchedNode = allDataMap.get(menuId);
                if (matchedNode) {
                  // 添加匹配节点
                  matchedNodes.set(matchedNode.MENU_ID, matchedNode);

                  // 添加父节点
                  if (matchedNode.PARENT) {
                    const parentNode = allDataMap.get(matchedNode.PARENT);
                    console.log(targetMenuIds, parentNode);
                    if (parentNode) {
                      matchedNodes.set(parentNode.MENU_ID, parentNode);
                    }
                  }
                }
              });

              // 新增: 将结果转换为数组
              const resultNodes = Array.from(matchedNodes.values());
              console.log('匹配节点及其父节点:', resultNodes);

              // 原有树形结构处理逻辑
              const filteredData = resultNodes;
              listData.value = buildTreeData(filteredData);
              console.log('树形结构数据', listData.value);
            } catch (error) {
              console.error('GET请求失败', error);
            } finally {
              text.value = '暂无数据';
            }
          }
        });
      };

      onMounted(() => {
        setData();
      });

      // 接收socket消息
      rootData.rootOn('rootSocket:change', (data) => {
        if (data.type === 'appRefresh') {
          // 显示lego里的弹框
          console.log('收到消息了', data);
          setData();
        }
      });

      // // 直接使用全局变量
      // const unionid = global.socketIp;

      // // 修改全局变量
      // rootData.rootEmit(
      //   // 固定的消息名称，不能修改
      //   'rootData:change',
      //   {
      //     // 全局变量的键名
      //     key: 'socketRoom',
      //     // 将要修改的全局变量的键值
      //     value: `chengdu_car${unionid}`,
      //   },
      // );

      return {
        text,
        handleClick,
        listData,
      };
    },
  };

  const _hoisted_1 = { class: 'container' };
  const _hoisted_2 = { class: 'list-container' };
  const _hoisted_3 = ['id'];
  const _hoisted_4 = {
    class: 'list-container-item-header',
    tip: 'false',
    label: '',
  };
  const _hoisted_5 = { class: 'children-container' };
  const _hoisted_6 = ['onClick', 'title'];
  const _hoisted_7 = ['src', 'alt'];
  const _hoisted_8 = { class: 'child-text-container' };
  const _hoisted_9 = ['title'];
  const _hoisted_10 = {
    key: 1,
    class: 'no-data',
  };

  function render(_ctx, _cache) {
    return (
      openBlock(),
      createElementBlock('div', _hoisted_1, [
        createElementVNode('div', _hoisted_2, [
          _ctx.listData.length
            ? (openBlock(true),
              createElementBlock(
                Fragment,
                { key: 0 },
                renderList(_ctx.listData, (item) => {
                  return (
                    openBlock(),
                    createElementBlock(
                      'div',
                      {
                        key: item.id,
                        class: 'list-container-item',
                        id: `t-rect-${item.id}`,
                        tip: 'false',
                        label: '',
                      },
                      [
                        createElementVNode(
                          'div',
                          _hoisted_4,
                          toDisplayString(item.title),
                          1 /* TEXT */
                        ),
                        createElementVNode('div', _hoisted_5, [
                          (openBlock(true),
                          createElementBlock(
                            Fragment,
                            null,
                            renderList(item.children, (child) => {
                              return (
                                openBlock(),
                                createElementBlock(
                                  'div',
                                  {
                                    key: child.id,
                                    class: 'child-item',
                                    onClick: ($event) => _ctx.handleClick(child),
                                    title: child.desc,
                                  },
                                  [
                                    createElementVNode(
                                      'img',
                                      {
                                        src: child.imageUrl,
                                        class: 'child-image',
                                        alt: child.title,
                                      },
                                      null,
                                      8 /* PROPS */,
                                      _hoisted_7
                                    ),
                                    createElementVNode('div', _hoisted_8, [
                                      createElementVNode(
                                        'div',
                                        {
                                          class: 'child-text-line',
                                          title: child.childName,
                                        },
                                        toDisplayString(child.childName),
                                        9 /* TEXT, PROPS */,
                                        _hoisted_9
                                      ),
                                    ]),
                                  ],
                                  8 /* PROPS */,
                                  _hoisted_6
                                )
                              );
                            }),
                            128 /* KEYED_FRAGMENT */
                          )),
                        ]),
                      ],
                      8 /* PROPS */,
                      _hoisted_3
                    )
                  );
                }),
                128 /* KEYED_FRAGMENT */
              ))
            : (openBlock(),
              createElementBlock('div', _hoisted_10, toDisplayString(_ctx.text), 1 /* TEXT */)),
        ]),
      ])
    );
  } // 动态加载依赖组件
  async function loadComponent(pageCode) {
    if (!window[`gztLeftCommonAppListComponent`]) {
      try {
        await window.ComponentLoader.loadComponent(pageCode);
      } catch (error) {
        console.error(`加载依赖组件 gztLeftCommonAppListComponent 失败:`, error);
        // 返回一个兜底组件
        window[`gztLeftCommonAppListComponent`] = {
          template: '<div>Failed to load component</div>',
        };
      }
    }
  }

  // 注册组件到全局
  window.gztLeftCommonAppListComponent = {
    ...componentOptions,
    render,
  };
})();
