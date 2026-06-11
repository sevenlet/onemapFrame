/**
 * 自动编译的Vue组件: indicatorStructureContentComponent
 * 适配低代码平台，不使用import/export语法
 */
(function () {
  // 自主编码的页面

  const componentOptions = {
    components: {},

    setup() {
      /* ******** 如果要使用应用内部的全局变量、全局函数、socket消息 必须注入全局变量和事件 ******** */
      console.log(echarts);
      const rootData = inject('root');
      const global = reactive({
        ...toRefs(rootData),
      });
      /* ********************************************************************************  */

      let chart;
      let historyStack = [];

      // 修正后的数据结构（去除多余根节点）
      const dataSource = {
        name: 'root',
        children: [],
      };

      // 配置生成函数
      function getOption(data) {
        return {
          backgroundColor: 'transparent',
          series: [
            {
              type: 'treemap',
              data: data,
              leafDepth: 1,
              roam: false,
              nodeClick: false,
              left: 0,
              top: 10,
              right: 0,
              bottom: 0,
              levels: [
                {
                  itemStyle: {
                    borderColor: 'transparent',
                    borderWidth: 2,
                  },
                },
                {
                  itemStyle: {
                    borderColor: 'transparent',
                    borderWidth: 1.5,
                  },
                },
                {
                  itemStyle: {
                    borderColor: 'transparent',
                    borderWidth: 1,
                  },
                },
              ],
              label: {
                show: true,
                color: 'white',
                fontSize: 16,
                formatter: ({ name, value }) => (name === '暂无数据' ? name : `${name}\n${value}`),
              },
              breadcrumb: { show: false },
            },
          ],
        };
      }

      // 将扁平数据转换为树形结构
      function buildTree(data) {
        const nodesMap = {};
        const rootNodes = [];

        data.forEach((node) => {
          nodesMap[node.node_code] = {
            name: node.node_name,
            value: node.data_num ? parseInt(node.data_num) : 0,
            originalValue: node.data_num,
            code: node.node_code,
            children: [],
          };
        });

        function calculateParentValues(nodes) {
          nodes.forEach((node) => {
            // 如果当前节点有子节点
            if (node.children && node.children.length > 0) {
              // 先递归计算子节点
              calculateParentValues(node.children);

              // 计算所有子节点value的和
              let sum = 0;
              node.children.forEach((child) => {
                sum += child.value || 0;
              });

              // 始终使用子节点的和作为父节点的值
              node.value = sum;
            }
          });
        }

        // 构建树结构
        data.forEach((node) => {
          if (node.node_parent_code && nodesMap[node.node_parent_code]) {
            // 有父节点，添加到父节点的children中
            nodesMap[node.node_parent_code].children.push(nodesMap[node.node_code]);
          } else {
            // 没有父节点，是根节点
            rootNodes.push(nodesMap[node.node_code]);
          }
        });

        calculateParentValues(rootNodes);

        // 递归过滤函数，只保留值大于0的节点
        function filterZeroValueNodes(nodes) {
          return nodes.filter((node) => {
            // 递归过滤子节点
            if (node.children && node.children.length > 0) {
              node.children = filterZeroValueNodes(node.children);
              // 如果子节点过滤后还有内容，即使父节点自身值为0，也应该保留
              return node.children.length > 0 || node.value > 0;
            }
            // 没有子节点的节点，只有值大于0才保留
            return node.value > 0;
          });
        }

        // 过滤掉所有值为0且没有有效子节点的节点
        return filterZeroValueNodes(rootNodes);

        return rootNodes;
      }

      // 面包屑导航更新函数
      function updateBreadcrumb() {
        const container = document.getElementById('breadcrumb');
        container.innerHTML = '';

        // 根节点（显示为"生态环境主题库"但对应三大模块）
        const rootSpan = document.createElement('span');
        rootSpan.textContent = '生态环境指标';
        rootSpan.onclick = () => {
          historyStack = [];
          showData(dataSource.children);
        };
        container.appendChild(rootSpan);

        // 历史路径
        historyStack.forEach((node, index) => {
          const sep = document.createElement('span');
          sep.className = 'separator';
          sep.textContent = '>';
          container.appendChild(sep);

          const nodeSpan = document.createElement('span');
          nodeSpan.textContent = node.name;
          if (index === historyStack.length - 1) {
            nodeSpan.className = 'current';
          } else {
            nodeSpan.onclick = () => {
              historyStack = historyStack.slice(0, index + 1);
              showData(historyStack[index].children);
            };
          }
          container.appendChild(nodeSpan);
        });
      }

      // 数据显示函数
      function showData(data) {
        // 检查数据是否为空或没有有效内容
        let displayData = data;

        // 过滤掉值为0的节点
        if (data) {
          displayData = data.filter((node) => node.value > 0);
        }

        if (!displayData || displayData.length === 0) {
          // 当数据为空时，显示一个提示性的节点
          displayData = [
            {
              name: '暂无数据',
              value: 1, // 小值以避免影响比例
              itemStyle: {
                color: '#999999', // 设置灰色背景
              },
              label: {
                color: '#ffffff', // 文字颜色为白色
                fontSize: 16, // 文字大小
              },
            },
          ];
        }

        console.log(getOption(displayData));
        chart.setOption(getOption(displayData), true);
        updateBreadcrumb();
      }

      onMounted(async () => {
        const dataType = global.indicatorType || 'DW';
        const requestUrl = `${global.serviceBaseUrl}${global.serviceBasePath}&interfaceId=804d353c7561b765eb1498579c6a48ac&dataType=${dataType}`;
        try {
          const response = await axios.get(requestUrl);
          if (
            response.data &&
            response.data.head &&
            response.data.head.state === 'true' &&
            response.data.data
          ) {
            // 使用接口数据构建树形结构
            dataSource.children = buildTree(response.data.data);

            // 初始化显示根节点数据
            chart = echarts.init(document.getElementById('chart'));
            showData(dataSource.children);

            // 点击事件处理
            chart.on('click', (params) => {
              const data = params.data;
              console.log(data);
              if (data.children && data.children.length) {
                historyStack.push(data);
                showData(data.children);
              } else if (data.link) {
                window.open(data.link, '_blank');
              }
            });

            // ESC键返回逻辑
            document.addEventListener('keydown', (e) => {
              if (e.key === 'Escape' && historyStack.length > 0) {
                historyStack.pop();
                showData(
                  historyStack.length
                    ? historyStack[historyStack.length - 1].children
                    : dataSource.children
                );
              }
            });

            // 窗口自适应
            window.addEventListener('resize', () => chart.resize());
          }
        } catch (error) {
          console.log('请求数据失败:', error);
          // 显示错误提示或使用默认数据
          chart = echarts.init(document.getElementById('chart'));
          showData([{ name: '数据加载失败', value: 100 }]);
        }
      });

      // // 发送消息 socket
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

      // // 接收socket消息
      // rootData.rootOn('rootSocket:change', (data) => {
      //   if (data.type === 'showLegoDialog') {
      //     // 显示lego里的弹框
      //     console.log('收到消息了');
      //   } else if (data.type === 'hideLegoDialog' || data.type === 'closePopup') {
      //     // 关闭lego里的弹窗
      //     global.businessDialog.dialogName = '';
      //   }
      // });

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

      return {};
    },
  };

  const _hoisted_1 = { class: 'indicatorStructureContent' };

  function render(_ctx, _cache) {
    return (
      openBlock(),
      createElementBlock(
        'div',
        _hoisted_1,
        _cache[0] ||
          (_cache[0] = [
            createElementVNode('div', { id: 'breadcrumb' }, null, -1 /* CACHED */),
            createElementVNode('div', { id: 'chart' }, null, -1 /* CACHED */),
          ])
      )
    );
  } // 动态加载依赖组件
  async function loadComponent(pageCode) {
    if (!window[`indicatorStructureContentComponent`]) {
      try {
        await window.ComponentLoader.loadComponent(pageCode);
      } catch (error) {
        console.error(`加载依赖组件 indicatorStructureContentComponent 失败:`, error);
        // 返回一个兜底组件
        window[`indicatorStructureContentComponent`] = {
          template: '<div>Failed to load component</div>',
        };
      }
    }
  }

  // 注册组件到全局
  window.indicatorStructureContentComponent = {
    ...componentOptions,
    render,
  };
})();
