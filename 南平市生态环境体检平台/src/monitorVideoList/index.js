/**
 * 自动编译的Vue组件: monitorVideoListComponent
 * 适配低代码平台，不使用import/export语法
 */
(function () {
  const componentOptions = {
    components: {},
    props: {
      // 视频通道ID
      channelCode: {
        type: String,
        default: '',
        // default: 'c8f5c34494b146d68bee995f61623933'
      },
      // 视频播放类型
      playType: {
        type: String,
        default: 'live', // playBack || live
      },
      // 新增props：是否使用模拟数据
      useMockData: {
        type: Boolean,
        default: true,
      },
      // 新增props：模拟视频数量
      mockVideoCount: {
        type: Number,
        default: 0,
      },
    },

    setup(props, { emit }) {
      console.log(props);
      const rootData = inject('root');
      const global = reactive({
        ...toRefs(rootData),
      });

      const state = reactive({
        videoList: [],
        videoToken: '',
        isLoading: true,
        channelIds: '',
        isMockData: props.useMockData,
      });

      // 根据视频数量计算容器类名
      const containerClass = computed(() => {
        const count = state.videoList.length;
        if (count === 1) return 'single-video';
        if (count <= 4) return 'up-to-four'; // 2-4个视频
        if (count <= 6) return 'up-to-six'; // 5-6个视频
        if (count <= 9) return 'up-to-nine'; // 7-9个视频
        return 'more-than-nine'; // 大于9个视频
      });

      // 生成模拟数据
      const generateMockData = () => {
        const mockData = [];
        const locations = [
          '大门入口',
          '停车场',
          '办公楼大厅',
          '生产车间',
          '仓库',
          '电梯口',
          '走廊',
          '后门出口',
          '机房',
          '食堂',
        ];
        const statuses = ['online', 'offline', 'warning'];

        for (let i = 0; i < props.mockVideoCount; i++) {
          const location = locations[i % locations.length];
          const status = statuses[i % statuses.length];

          mockData.push({
            id: i + 1,
            channelCode: `CH${String(i + 1).padStart(4, '0')}`,
            name: `${location}监控点`,
            location: location,
            status: status,
            src: null, // 模拟数据时没有真实视频源
            lastUpdate: `2024-01-${String(15 + (i % 10)).padStart(2, '0')} ${String(
              8 + (i % 10)
            ).padStart(2, '0')}:${String(30 + (i % 30)).padStart(2, '0')}:00`,
          });
        }
        return mockData;
      };

      // 获取token
      const getToken = async () => {
        try {
          // 模拟API请求延迟
          await new Promise((resolve) => setTimeout(resolve, 800));

          const response = await axios.get(
            `${global.businessServiceBaseUrl}/spzc/openapi/v1/getToken`,
            {
              params: {
                random: '',
                appKey: 'a92010ffdbd14e1babe65f2278b48b39',
                secret: '7a015473eb6440a5973d8c980c59fb56',
              },
            }
          );
          state.videoToken = response.data.data;
          return response.data.data;
        } catch (error) {
          console.error('获取token失败:', error);
          // 失败时返回模拟token
          state.videoToken = 'mock-token-error';
          return 'mock-token-error';
        }
      };

      // 获取视频列表
      const getVideoList = async (token) => {
        try {
          if (props.channelCode) {
            const iframeSrc = `${global.businessServiceBaseUrl}/spzc/openapi/v4/${
              props.playType
            }?channelCode=${props.channelCode || '-1'}&controller=1&token=${
              token || state.videoToken
            }`;
            state.videoList = [{ src: iframeSrc }];
            state.isLoading = false;
          } else {
            if (!state.channelIds) {
              state.videoList = [];
              return;
            }
            const response = await axios.get(
              `${global.businessServiceBaseUrl}/service/serviceinterface/search/run.action`,
              {
                params: {
                  token: 'dcp',
                  CHANNEL_IDS: state.channelIds,
                  interfaceId: '1e45dd8c2e02a16d7e2ef390f30f6477',
                },
              }
            );

            const videoData = response.data?.data || [];

            // 构造新的视频项列表（保留原有结构）
            const newVideoList = videoData.map((item) => {
              const iframeSrc = `${global.businessServiceBaseUrl}/spzc/openapi/v4/${
                props.playType
              }?channelCode=${item.channelcode || '-1'}&controller=1&token=${
                token || state.videoToken
              }`;

              return {
                ...item,
                src: iframeSrc,
                // 补充唯一标识（用于精准对比）
                key:
                  item.channelcode ||
                  `video-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
              };
            });

            // 🌟 核心逻辑：对比新旧列表，只做增/删/改，不替换整个数组
            // 1. 先找出需要删除的项（原列表有、新列表没有的）
            const newVideoKeys = newVideoList.map((v) => v.key);
            // 倒序删除，避免数组索引错乱
            for (let i = state.videoList.length - 1; i >= 0; i--) {
              const oldKey = state.videoList[i].key;
              if (!newVideoKeys.includes(oldKey)) {
                state.videoList.splice(i, 1); // 删除单个项
              }
            }

            // 2. 处理需要新增/更新的项
            newVideoList.forEach((newItem) => {
              const existingIndex = state.videoList.findIndex(
                (oldItem) => oldItem.key === newItem.key
              );
              if (existingIndex > -1) {
                // 已有项：只更新非src字段（src不变则iframe不重渲染）
                const oldItem = state.videoList[existingIndex];
                state.videoList[existingIndex] = {
                  ...oldItem, // 保留原有src
                  ...newItem, // 更新其他字段（name/channelcode等）
                  src: oldItem.src, // 强制保留原有src，避免iframe重加载
                };
              } else {
                // 新增项：push到原数组末尾
                state.videoList.push(newItem);
              }
            });
            // videoData = response.data?.data || [];

            // // 构造视频列表
            // state.videoList = videoData.map(item => {
            //   const iframeSrc = `${global.businessServiceBaseUrl}/spzc/openapi/v4/${props.playType}?channelCode=${item.channelcode || '-1'}&controller=1&token=${token || state.videoToken}`;

            //   return {
            //     ...item,
            //     src: iframeSrc
            //   };
            // });

            state.isLoading = false;
          }
        } catch (error) {
          console.error('获取视频列表失败:', error);
          // 失败时使用模拟数据
          state.videoList = generateMockData();
          state.isMockData = true;
          state.isLoading = false;
        }
      };

      // 获取状态样式类
      const getStatusClass = (status) => {
        switch (status) {
          case 'online':
            return 'online';
          case 'offline':
            return 'offline';
          case 'warning':
            return 'warning';
          default:
            return 'offline';
        }
      };

      // 获取状态文本
      const getStatusText = (status) => {
        switch (status) {
          case 'online':
            return '在线';
          case 'offline':
            return '离线';
          case 'warning':
            return '告警';
          default:
            return '未知';
        }
      };

      // 初始化数据
      const initData = async () => {
        state.isLoading = true;
        const token = await getToken();
        if (token) {
          await getVideoList(token);
        }
      };

      onMounted(() => {
        initData();
      });

      rootData.rootOn('rootSocket:change', (data) => {
        if (data.type === 'changeChannelIds') {
          state.channelIds = data.data;
          // 处理逻辑
          if (state.videoToken) {
            getVideoList(state.videoToken);
          }
        }
        console.log(data); // data 消息内容
      });

      watch([() => props.channelCode, () => props.playType], () => {
        console.log('排查重复请求数据-monitorVideoList', props.channelCode, props.playType);
        if (props.channelCode && state.videoToken) {
          getVideoList(state.videoToken);
        }
      });
      return {
        ...toRefs(state),
        containerClass,
        getStatusClass,
        getStatusText,
      };
    },
  };

  const _hoisted_1 = ['src'];
  const _hoisted_2 = {
    key: 1,
    class: 'mock-video-placeholder',
  };
  const _hoisted_3 = { class: 'placeholder-content' };
  const _hoisted_4 = { class: 'video-name' };
  const _hoisted_5 = { class: 'video-code' };
  const _hoisted_6 = {
    key: 0,
    class: 'loading-text',
  };
  const _hoisted_7 = {
    key: 1,
    class: 'mock-status',
  };

  function render(_ctx, _cache) {
    return (
      openBlock(),
      createElementBlock(
        'div',
        {
          id: 'monitorVideoList',
          class: normalizeClass(_ctx.containerClass),
        },
        [
          (openBlock(true),
          createElementBlock(
            Fragment,
            null,
            renderList(_ctx.videoList, (video, index) => {
              return (
                openBlock(),
                createElementBlock(
                  'div',
                  {
                    class: 'video-item',
                    key: video.key,
                  },
                  [
                    createCommentVNode(' 如果有视频地址则显示iframe，否则显示色块 '),
                    video.src && _ctx.videoToken
                      ? (openBlock(),
                        createElementBlock(
                          'iframe',
                          {
                            key: 0,
                            src: video.src,
                            frameborder: '0',
                            allowfullscreen: '',
                          },
                          null,
                          8 /* PROPS */,
                          _hoisted_1
                        ))
                      : (openBlock(),
                        createElementBlock('div', _hoisted_2, [
                          createElementVNode('div', _hoisted_3, [
                            _cache[0] ||
                              (_cache[0] = createElementVNode(
                                'div',
                                { class: 'camera-icon' },
                                '📹',
                                -1 /* CACHED */
                              )),
                            createElementVNode(
                              'div',
                              _hoisted_4,
                              toDisplayString(video.name || `监控点 ${index + 1}`),
                              1 /* TEXT */
                            ),
                            createElementVNode(
                              'div',
                              _hoisted_5,
                              toDisplayString(
                                video.channelCode || `CH${String(index + 1).padStart(4, '0')}`
                              ),
                              1 /* TEXT */
                            ),
                            _ctx.isLoading
                              ? (openBlock(), createElementBlock('div', _hoisted_6, '加载中...'))
                              : (openBlock(),
                                createElementBlock('div', _hoisted_7, [
                                  createElementVNode(
                                    'span',
                                    {
                                      class: normalizeClass([
                                        'status-dot',
                                        _ctx.getStatusClass(video.status),
                                      ]),
                                    },
                                    null,
                                    2 /* CLASS */
                                  ),
                                  createTextVNode(
                                    ' ' + toDisplayString(_ctx.getStatusText(video.status)),
                                    1 /* TEXT */
                                  ),
                                ])),
                          ]),
                        ])),
                  ]
                )
              );
            }),
            128 /* KEYED_FRAGMENT */
          )),
        ],
        2 /* CLASS */
      )
    );
  } // 动态加载依赖组件
  async function loadComponent(pageCode) {
    if (!window[`monitorVideoListComponent`]) {
      try {
        await window.ComponentLoader.loadComponent(pageCode);
      } catch (error) {
        console.error(`加载依赖组件 monitorVideoListComponent 失败:`, error);
        // 返回一个兜底组件
        window[`monitorVideoListComponent`] = { template: '<div>Failed to load component</div>' };
      }
    }
  }

  // 注册组件到全局
  window.monitorVideoListComponent = {
    ...componentOptions,
    render,
  };
})();
