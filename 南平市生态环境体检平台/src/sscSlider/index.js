/**
 * 自动编译的Vue组件: sscSliderComponent
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
      const state = reactive({
        count: 0,
        step: 1,
        imagePath:
          '/lego-generated-apps/lego_file/res/2023-12-11/97390acbab3a4cb4a2930625ca16ed43.svg',
        lastTime: '-',
        isPlay: false,
        trajectoryData: [],
        trajectoryIndex: 0,
        trajectoryDataLength: 0,
        playInterval: 1000,
        hasSentTrajectoryData: false,
      });

      let playTimer = null;
      /* ********************************************************************************  */
      /**
       * 更新地图轨迹
       */
      const updateMapTrajectory = (index, status = true) => {
        // 判断是否需要发送完整的轨迹数据
        const points = !state.hasSentTrajectoryData ? state.trajectoryData : [];

        // 如果是第一次发送，标记为已发送
        if (!state.hasSentTrajectoryData) {
          state.hasSentTrajectoryData = true;
        }

        // 发送消息给地图更新位置
        rootData.rootSocket.emit('message', {
          room: global.socketRoom,
          type: 'updateSprinklerTruckTrajectoryStatus',
          data: {
            index: index,
            points: points,
            lineIsNotFollowPoint: status,
          },
        });
      };
      /**
       * 播放暂停
       */
      const handlePlay = () => {
        // 轨迹数据为空，不能播放
        if (state.trajectoryData.length === 0) {
          return;
        }
        state.isPlay = !state.isPlay;
        if (state.isPlay) {
          // 播放完成后再点击，重新开始播放
          if (state.count === state.trajectoryDataLength - 1) {
            state.count = 0;
          }
          updateMapTrajectory(state.count);
          state.imagePath =
            '/lego-generated-apps/lego_file/res/2023-12-11/396833cf885047cb848c0325268489ab.svg';
          // 启动定时器，自动播放
          playTimer = setInterval(() => {
            if (state.count < state.trajectoryDataLength - 1) {
              state.count++;
              updateMapTrajectory(state.count);
            } else {
              // 播放结束
              state.isPlay = false;
              state.imagePath =
                '/lego-generated-apps/lego_file/res/2023-12-11/97390acbab3a4cb4a2930625ca16ed43.svg';
              clearInterval(playTimer);
            }
          }, state.playInterval);
        } else {
          state.imagePath =
            '/lego-generated-apps/lego_file/res/2023-12-11/97390acbab3a4cb4a2930625ca16ed43.svg';
          clearInterval(playTimer);
        }
      };

      /**
       * 格式化滑块提示
       */
      const formatTooltip = (val) => {
        if (state.trajectoryData.length > 0 && state.trajectoryData[val]) {
          return state.trajectoryData[val].monitortime || val;
        }
        return val;
      };

      /**
       * 滑块变化事件
       */
      const handleSliderChange = (val) => {
        // 如果之前是播放状态，从当前位置继续播放
        if (state.isPlay) {
          // 清除之前的定时器
          if (playTimer) {
            clearInterval(playTimer);
          }

          // 重新启动定时器，从当前位置继续播放
          playTimer = setInterval(() => {
            if (state.count < state.trajectoryDataLength - 1) {
              state.count++;
            } else {
              // 播放结束
              state.isPlay = false;
              state.imagePath =
                '/lego-generated-apps/lego_file/res/2023-12-11/97390acbab3a4cb4a2930625ca16ed43.svg';
              clearInterval(playTimer);
            }
          }, state.playInterval);
        }
      };
      /**
       * 获取轨迹数据
       */
      const getTrajectoryData = async () => {
        axios
          .get(`${global.foshanServiceBaseUrl}${global.serviceBasePath}`, {
            params: {
              interfaceId: '6a93842740cb5c2e1db0424e965c5832',
              device_id: global.airGlobalVariables.waterSprinklerTruck.VMN,
              START_TIME: global.airGlobalVariables.waterSprinklerTruck.startTime,
              END_TIME: global.airGlobalVariables.waterSprinklerTruck.endTime,
            },
          })
          .then(function (response) {
            state.trajectoryData = response.data.data;
            state.trajectoryDataLength = response.data.data.length;
            // 重置轨迹数据发送状态，确保第一次操作会发送完整数据
            state.hasSentTrajectoryData = false;

            // 重置地图轨迹，确保轨迹从起点开始
            updateMapTrajectory(state.count, false);
          })
          .catch(function (error) {
            console.log(error);
          });
      };

      // 接收socket消息
      rootData.rootOn('rootSocket:change', (data) => {
        if (data.type === 'changeSlider') {
          // 清空计时器
          if (playTimer) {
            clearInterval(playTimer);
          }
          // 重置播放状态
          state.isPlay = false;
          state.imagePath =
            '/lego-generated-apps/lego_file/res/2023-12-11/97390acbab3a4cb4a2930625ca16ed43.svg';
          // 重置轨迹数据发送状态
          state.hasSentTrajectoryData = false;
          // 重置滑块
          state.count = 0;
          // 获取轨迹数据
          getTrajectoryData();
        }
      });

      // 监听 count 变化
      watch(
        () => state.count,
        (newVal) => {
          if (state.trajectoryData.length > 0) {
            updateMapTrajectory(newVal);
          }
        }
      );

      // onMounted(() => {
      //   // 获取轨迹数据
      //   getTrajectoryData();
      // });

      onUnmounted(() => {
        // 组件卸载时清除定时器
        if (playTimer) {
          clearInterval(playTimer);
        }
      });
      return {
        ...toRefs(state),
        handlePlay,
        formatTooltip,
        handleSliderChange,
        updateMapTrajectory,
      };
    },
  };

  const _hoisted_1 = { class: 'container' };
  const _hoisted_2 = { class: 'content' };
  const _hoisted_3 = { class: 'play' };
  const _hoisted_4 = ['src'];
  const _hoisted_5 = { class: 'slider' };

  function render(_ctx, _cache) {
    const _component_el_slider = resolveComponent('el-slider');

    return (
      openBlock(),
      createElementBlock('div', _hoisted_1, [
        createElementVNode('div', _hoisted_2, [
          createElementVNode('div', _hoisted_3, [
            createElementVNode(
              'img',
              {
                src: _ctx.imagePath,
                alt: '',
                onClick:
                  _cache[0] ||
                  (_cache[0] = (...args) => _ctx.handlePlay && _ctx.handlePlay(...args)),
              },
              null,
              8 /* PROPS */,
              _hoisted_4
            ),
          ]),
          createElementVNode('div', _hoisted_5, [
            createVNode(
              _component_el_slider,
              {
                modelValue: _ctx.count,
                'onUpdate:modelValue': _cache[1] || (_cache[1] = ($event) => (_ctx.count = $event)),
                'format-tooltip': _ctx.formatTooltip,
                step: 1,
                max: Math.max(0, _ctx.trajectoryDataLength - 1),
                onChange: _ctx.handleSliderChange,
              },
              null,
              8 /* PROPS */,
              ['modelValue', 'format-tooltip', 'max', 'onChange']
            ),
          ]),
        ]),
        createCommentVNode(' <div class="time">{{ lastTime }}</div> '),
      ])
    );
  } // 动态加载依赖组件
  async function loadComponent(pageCode) {
    if (!window[`sscSliderComponent`]) {
      try {
        await window.ComponentLoader.loadComponent(pageCode);
      } catch (error) {
        console.error(`加载依赖组件 sscSliderComponent 失败:`, error);
        // 返回一个兜底组件
        window[`sscSliderComponent`] = { template: '<div>Failed to load component</div>' };
      }
    }
  }

  // 注册组件到全局
  window.sscSliderComponent = {
    ...componentOptions,
    render,
  };
})();
