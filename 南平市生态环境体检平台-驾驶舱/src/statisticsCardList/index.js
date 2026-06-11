/**
 * 自动编译的Vue组件: statisticsCardListComponent
 * 适配低代码平台，不使用import/export语法
 */
(function () {
  const componentOptions = {
    // 在这里接收父组件的参数 <img v-if="Number(item.num4)>0" class="jt1" src="/lego-generated-apps/lego_file/res/2026-01-26/2a4315a17c2f4db2abc112f521a57344.png" alt=""><img v-if="Number(item.num4)<0" class="jt2" src="/lego-generated-apps/lego_file/res/2026-01-26/8c1a04eaae124611b75fe50223d3577a.png" alt="">
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
  const _hoisted_2 = { class: 'card-info box1' };
  const _hoisted_3 = { class: 'card-title' };
  const _hoisted_4 = { class: 'card-content' };
  const _hoisted_5 = { class: 'card-num num1' };
  const _hoisted_6 = { class: 'unit' };
  const _hoisted_7 = { class: 'card-info box2' };
  const _hoisted_8 = { class: 'card-content' };
  const _hoisted_9 = { class: 'card-num num2' };
  const _hoisted_10 = { class: 'unit' };
  const _hoisted_11 = { class: 'card-info box3' };
  const _hoisted_12 = { class: 'card-content' };
  const _hoisted_13 = { class: 'card-num num3' };

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
                  _cache[3] ||
                    (_cache[3] = createElementVNode(
                      'img',
                      {
                        class: 'img1',
                        src: '/lego-generated-apps/lego_file/res/2026-01-26/189213e6224c4d1b9303ccbeefadb612.png',
                        alt: '',
                      },
                      null,
                      -1 /* CACHED */
                    )),
                  _cache[4] ||
                    (_cache[4] = createElementVNode(
                      'img',
                      {
                        class: 'img2',
                        src: '/lego-generated-apps/lego_file/res/2026-01-26/017061f2383d49698d517b6ff2bd482b.png',
                        alt: '',
                      },
                      null,
                      -1 /* CACHED */
                    )),
                  createElementVNode('div', _hoisted_2, [
                    createElementVNode(
                      'div',
                      _hoisted_3,
                      toDisplayString(item.title),
                      1 /* TEXT */
                    ),
                    createElementVNode('div', _hoisted_4, [
                      createElementVNode(
                        'span',
                        _hoisted_5,
                        toDisplayString(item.num1 || '-'),
                        1 /* TEXT */
                      ),
                      createElementVNode(
                        'span',
                        _hoisted_6,
                        toDisplayString(item.unit),
                        1 /* TEXT */
                      ),
                    ]),
                  ]),
                  _cache[5] ||
                    (_cache[5] = createElementVNode('div', { class: 'sx' }, null, -1 /* CACHED */)),
                  createElementVNode('div', _hoisted_7, [
                    _cache[0] ||
                      (_cache[0] = createElementVNode(
                        'div',
                        { class: 'card-title' },
                        '去年同期',
                        -1 /* CACHED */
                      )),
                    createElementVNode('div', _hoisted_8, [
                      createElementVNode(
                        'span',
                        _hoisted_9,
                        toDisplayString(item.num2 || '-'),
                        1 /* TEXT */
                      ),
                      createElementVNode(
                        'span',
                        _hoisted_10,
                        toDisplayString(item.unit),
                        1 /* TEXT */
                      ),
                    ]),
                  ]),
                  createElementVNode('div', _hoisted_11, [
                    _cache[2] ||
                      (_cache[2] = createElementVNode(
                        'div',
                        { class: 'card-title' },
                        '同比',
                        -1 /* CACHED */
                      )),
                    createElementVNode('div', _hoisted_12, [
                      createElementVNode(
                        'span',
                        _hoisted_13,
                        toDisplayString(item.num3 || '-'),
                        1 /* TEXT */
                      ),
                      _cache[1] ||
                        (_cache[1] = createElementVNode(
                          'span',
                          { class: 'unit' },
                          '%',
                          -1 /* CACHED */
                        )),
                    ]),
                  ]),
                ],
                4 /* STYLE */
              )
            );
          }),
          128 /* KEYED_FRAGMENT */
        )),
      ])
    );
  } // 动态加载依赖组件
  async function loadComponent(pageCode) {
    if (!window[`statisticsCardListComponent`]) {
      try {
        await window.ComponentLoader.loadComponent(pageCode);
      } catch (error) {
        console.error(`加载依赖组件 statisticsCardListComponent 失败:`, error);
        // 返回一个兜底组件
        window[`statisticsCardListComponent`] = { template: '<div>Failed to load component</div>' };
      }
    }
  }

  // 注册组件到全局
  window.statisticsCardListComponent = {
    ...componentOptions,
    render,
  };
})();
