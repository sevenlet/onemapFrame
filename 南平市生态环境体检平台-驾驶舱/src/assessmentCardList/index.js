/**
 * 自动编译的Vue组件: assessmentCardListComponent
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
      return {
        state,
      };
    },
  };

  const _hoisted_1 = { class: 'card-list-container' };
  const _hoisted_2 = {
    key: 0,
    class: 'card-icon',
  };
  const _hoisted_3 = { class: 'card-info' };
  const _hoisted_4 = { class: 'card-title' };
  const _hoisted_5 = { class: 'card-content' };
  const _hoisted_6 = { class: 'card-num' };
  const _hoisted_7 = {
    key: 0,
    class: 'card-total',
  };
  const _hoisted_8 = { class: 'card-unit' };
  const _hoisted_9 = {
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
                  class: 'card-list-item',
                  key: item.title,
                  style: normalizeStyle({
                    '--card-icon': `url(${item.icon})`,
                    '--num-color': item.numColor,
                  }),
                },
                [
                  item.title === '责任单位' ||
                  item.title === '牵头单位' ||
                  item.title === '整改责任单位'
                    ? (openBlock(), createElementBlock('div', _hoisted_2))
                    : createCommentVNode('v-if', true),
                  _cache[0] ||
                    (_cache[0] = createElementVNode(
                      'img',
                      {
                        class: 'img1',
                        src: '/lego-generated-apps/lego_file/res/2026-01-26/189213e6224c4d1b9303ccbeefadb612.png',
                        alt: '',
                      },
                      null,
                      -1 /* CACHED */
                    )),
                  _cache[1] ||
                    (_cache[1] = createElementVNode(
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
                    createElementVNode('div', _hoisted_5, [
                      createElementVNode(
                        'span',
                        _hoisted_6,
                        toDisplayString(item.num),
                        1 /* TEXT */
                      ),
                      ![undefined, null, ''].includes(item.total)
                        ? (openBlock(),
                          createElementBlock(
                            'span',
                            _hoisted_7,
                            toDisplayString(item.total),
                            1 /* TEXT */
                          ))
                        : createCommentVNode('v-if', true),
                      createElementVNode(
                        'span',
                        _hoisted_8,
                        toDisplayString(item.unit),
                        1 /* TEXT */
                      ),
                    ]),
                  ]),
                ],
                4 /* STYLE */
              )
            );
          }),
          128 /* KEYED_FRAGMENT */
        )),
        !_ctx.state.cardList?.length
          ? (openBlock(), createElementBlock('div', _hoisted_9, '暂无数据'))
          : createCommentVNode('v-if', true),
      ])
    );
  } // 动态加载依赖组件
  async function loadComponent(pageCode) {
    if (!window[`assessmentCardListComponent`]) {
      try {
        await window.ComponentLoader.loadComponent(pageCode);
      } catch (error) {
        console.error(`加载依赖组件 assessmentCardListComponent 失败:`, error);
        // 返回一个兜底组件
        window[`assessmentCardListComponent`] = { template: '<div>Failed to load component</div>' };
      }
    }
  }

  // 注册组件到全局
  window.assessmentCardListComponent = {
    ...componentOptions,
    render,
  };
})();
