/**
 * 自动编译的Vue组件: measureCardComponent
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
      const state = inject('state') ?? [];
      const selectedCard = ref('');

      watch(
        () => state.cardList,
        () => {
          selectedCard.value = state.cardList[0].num;
          console.log(selectedCard.value, state.cardList, 'test');
        },
        { immediate: true, deep: true } // 立即执行+深度监听，确保初始数据和数组变化都能触发
      );
      // 点击卡片
      const addCard = (item) => {
        console.log(item, 'test');
        const obj = { ...item };
        selectedCard.value = obj.num;
        if (rootData && rootData.rootSocket && global.socketRoom) {
          rootData.rootSocket.emit('message', {
            room: global.socketRoom,
            type: 'addCardMsg',
            data: {
              row: obj,
            },
          });
        }
      };
      return {
        addCard,
        state,
        selectedCard,
      };
    },
  };

  const _hoisted_1 = { class: 'card-list-container' };
  const _hoisted_2 = ['onClick'];
  const _hoisted_3 = { class: 'card-info' };
  const _hoisted_4 = { class: 'card-title' };
  const _hoisted_5 = {
    key: 0,
    class: 'no-data',
  };

  function render(_ctx, _cache) {
    return (
      openBlock(),
      createElementBlock('div', _hoisted_1, [
        (openBlock(true),
        createElementBlock(
          Fragment,
          null,
          renderList(_ctx.state.cardList, (item) => {
            return (
              openBlock(),
              createElementBlock(
                'div',
                {
                  class: normalizeClass([
                    'card-list-item',
                    { 'card-list-item-active': _ctx.selectedCard === item.num },
                  ]),
                  key: item.title,
                  style: normalizeStyle({
                    '--card-icon': `url(${item.icon})`,
                    '--num-color': item.numColor,
                  }),
                  onClick: ($event) => _ctx.addCard(item),
                },
                [
                  _cache[0] ||
                    (_cache[0] = createElementVNode(
                      'div',
                      { class: 'card-icon' },
                      null,
                      -1 /* CACHED */
                    )),
                  _cache[1] ||
                    (_cache[1] = createElementVNode(
                      'img',
                      {
                        class: 'img1',
                        src: '/lego-generated-apps/lego_file/res/2026-01-26/189213e6224c4d1b9303ccbeefadb612.png',
                        alt: '',
                      },
                      null,
                      -1 /* CACHED */
                    )),
                  _cache[2] ||
                    (_cache[2] = createElementVNode(
                      'img',
                      {
                        class: 'img2',
                        src: '/lego-generated-apps/lego_file/res/2026-01-26/017061f2383d49698d517b6ff2bd482b.png',
                        alt: '',
                      },
                      null,
                      -1 /* CACHED */
                    )),
                  createElementVNode('div', _hoisted_3, [
                    createElementVNode(
                      'div',
                      _hoisted_4,
                      toDisplayString(item.title),
                      1 /* TEXT */
                    ),
                  ]),
                ],
                14 /* CLASS, STYLE, PROPS */,
                _hoisted_2
              )
            );
          }),
          128 /* KEYED_FRAGMENT */
        )),
        !_ctx.state.cardList?.length
          ? (openBlock(), createElementBlock('div', _hoisted_5, '暂无数据'))
          : createCommentVNode('v-if', true),
      ])
    );
  } // 动态加载依赖组件
  async function loadComponent(pageCode) {
    if (!window[`measureCardComponent`]) {
      try {
        await window.ComponentLoader.loadComponent(pageCode);
      } catch (error) {
        console.error(`加载依赖组件 measureCardComponent 失败:`, error);
        // 返回一个兜底组件
        window[`measureCardComponent`] = { template: '<div>Failed to load component</div>' };
      }
    }
  }

  // 注册组件到全局
  window.measureCardComponent = {
    ...componentOptions,
    render,
  };
})();
