/**
 * 自动编译的Vue组件: videoWarningPhotoListComponent
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
      /* ********************************************************************************  */
      const videoWarningDetaillPopState = inject('videoWarningDetaillPopState');
      // 用于存储最终要渲染的数据（带 photoList）
      const displayData = ref([]);
      // 监听注入的数据变化
      watch(
        () => videoWarningDetaillPopState.data,
        async (newData) => {
          if (!Array.isArray(newData)) return;
          displayData.value = [];
          // 清空或初始化
          displayData.value = newData.map((item) => ({
            ...item,
            photoList: [], // 初始为空
          }));

          // 并发请求所有 item 的图片
          const promises = newData.map((item, index) =>
            axios
              .get('http://192.168.24.106:10157/waterevaluate/api/components/file/list', {
                params: {
                  subBusinessKey: 'SPJK',
                  businessKey: item.ALARMID,
                  pageNum: 1,
                  pageSize: 1,
                },
              })
              .then((response) => {
                const photos = response.data.code === 200 ? response.data.data || [] : [];
                // 更新对应项的 photoList
                displayData.value[index].photoList = photos;
              })
              .catch((error) => {
                console.error('Failed to load photos for', item.PKID, error);
                displayData.value[index].photoList = [];
              })
          );
          //等待所有完成
          Promise.allSettled(promises);
        },
        { immediate: true, deep: true }
      );
      const handleDetail = (item) => {
        global.featureData = { ...item };
        rootData.rootSocket.emit(
          'message', // 固定的消息名称，不能修改
          {
            room: global.socketRoom, // 房间号，一般使用全局变量socketRoom
            type: 'createDialog', // 消息类型名称
            data: {
              params: {
                // 消息内容，对象格式
                title: '报警详情',
                maxWidth: '1000px',
                maxHeight: '690px',
                minWidth: '1000px',
                minHeight: '690px',
                contentComName: 'videoWarningCarouselPopComponent',
                hiddenScaleButton: true,
              },
            },
          }
        );
      };
      return { displayData, handleDetail };
    },
  };

  const _hoisted_1 = { class: 'photo-list' };
  const _hoisted_2 = ['onClick'];
  const _hoisted_3 = ['src', 'alt'];
  const _hoisted_4 = { class: 'photo-type' };
  const _hoisted_5 = {
    key: 0,
    class: 'photo-list no-data',
  };

  function render(_ctx, _cache) {
    return (
      openBlock(),
      createElementBlock(
        Fragment,
        null,
        [
          createElementVNode('div', _hoisted_1, [
            (openBlock(true),
            createElementBlock(
              Fragment,
              null,
              renderList(_ctx.displayData, (item) => {
                return (
                  openBlock(),
                  createElementBlock(
                    'div',
                    {
                      key: item.PKID,
                      class: 'photo-item',
                      onClick: ($event) => _ctx.handleDetail(item),
                    },
                    [
                      createElementVNode(
                        'img',
                        {
                          src: item.photoList?.[0]?.filePath,
                          alt: item.photoList?.[0]?.fileName,
                          class: 'photo-img',
                        },
                        null,
                        8 /* PROPS */,
                        _hoisted_3
                      ),
                      createElementVNode(
                        'span',
                        _hoisted_4,
                        toDisplayString(item.ALARMNAME),
                        1 /* TEXT */
                      ),
                    ],
                    8 /* PROPS */,
                    _hoisted_2
                  )
                );
              }),
              128 /* KEYED_FRAGMENT */
            )),
          ]),
          !_ctx.displayData?.length
            ? (openBlock(), createElementBlock('div', _hoisted_5, '暂无数据'))
            : createCommentVNode('v-if', true),
        ],
        64 /* STABLE_FRAGMENT */
      )
    );
  } // 动态加载依赖组件
  async function loadComponent(pageCode) {
    if (!window[`videoWarningPhotoListComponent`]) {
      try {
        await window.ComponentLoader.loadComponent(pageCode);
      } catch (error) {
        console.error(`加载依赖组件 videoWarningPhotoListComponent 失败:`, error);
        // 返回一个兜底组件
        window[`videoWarningPhotoListComponent`] = {
          template: '<div>Failed to load component</div>',
        };
      }
    }
  }

  // 注册组件到全局
  window.videoWarningPhotoListComponent = {
    ...componentOptions,
    render,
  };
})();
