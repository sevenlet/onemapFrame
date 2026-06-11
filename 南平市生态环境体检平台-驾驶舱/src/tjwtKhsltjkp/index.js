/**
 * 自动编译的Vue组件: tjwtKhsltjkpComponent
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
      const state = inject('state') ?? {};

      const maxVisible = 5;
      const startIndex = ref(0);

      const toNum = (v) => {
        const n = Number(v);
        return Number.isNaN(n) ? 0 : n;
      };

      const mappedCards = computed(() => {
        const list = state.cardList || [];
        return list.map((item) => {
          const total = toNum(item.undone) + toNum(item.doing) + toNum(item.done);
          return {
            ...item,
            total,
          };
        });
      });

      const totalCount = computed(() => mappedCards.value.length);

      const hasData = computed(() => totalCount.value > 0);

      // const totalSummary = computed(() => {
      //   const list = state.cardList || [];
      //   if (!list.length) {
      //     return {
      //       total: '--',
      //       doing: '--',
      //       done: '--',
      //       undone: '--',
      //     };
      //   }
      //   let doing = 0;
      //   let done = 0;
      //   let undone = 0;
      //   list.forEach((item) => {
      //     doing += toNum(item.doing);
      //     done += toNum(item.done);
      //     undone += toNum(item.undone);
      //   });
      //   return {
      //     total: doing + done + undone,
      //     doing,
      //     done,
      //     undone,
      //   };
      // });

      const visibleCards = computed(() => {
        if (!mappedCards.value.length) {
          return [];
        }
        return mappedCards.value.slice(startIndex.value, startIndex.value + maxVisible);
      });

      const canPrev = computed(() => startIndex.value > 0);
      const canNext = computed(() => {
        if (!mappedCards.value.length) {
          return false;
        }
        return startIndex.value + maxVisible < totalCount.value;
      });

      const handlePrev = () => {
        if (!canPrev.value) return;
        startIndex.value -= 1;
      };

      const handleNext = () => {
        if (!canNext.value) return;
        startIndex.value += 1;
      };

      return {
        state,
        visibleCards,
        canPrev,
        canNext,
        handlePrev,
        handleNext,
        hasData,
        // totalSummary,
      };
    },
  };

  const _hoisted_1 = { class: 'card-list-root' };
  const _hoisted_2 = { class: 'summary-wrapper' };
  const _hoisted_3 = { class: 'summary-card summary-card-total' };
  const _hoisted_4 = { class: 'summary-card-main' };
  const _hoisted_5 = { class: 'summary-card-value' };
  const _hoisted_6 = { class: 'summary-number summary-number-dept' };
  const _hoisted_7 = { class: 'summary-card summary-card-total' };
  const _hoisted_8 = { class: 'summary-card-main' };
  const _hoisted_9 = { class: 'summary-card-value' };
  const _hoisted_10 = { class: 'summary-number summary-number-total' };
  const _hoisted_11 = { class: 'summary-card summary-card-done' };
  const _hoisted_12 = { class: 'summary-card-main' };
  const _hoisted_13 = { class: 'summary-card-value' };
  const _hoisted_14 = { class: 'summary-number summary-number-done' };
  const _hoisted_15 = { class: 'summary-card summary-card-doing' };
  const _hoisted_16 = { class: 'summary-card-main' };
  const _hoisted_17 = { class: 'summary-card-value' };
  const _hoisted_18 = { class: 'summary-number summary-number-doing' };
  const _hoisted_19 = {
    key: 1,
    class: 'summary-empty-row',
  };
  const _hoisted_20 = {
    key: 0,
    class: 'card-list-wrapper',
  };
  const _hoisted_21 = { class: 'card-list-container' };
  const _hoisted_22 = { class: 'card-info box1' };
  const _hoisted_23 = { class: 'card-title card-title-main' };
  const _hoisted_24 = { class: 'card-info box3' };
  const _hoisted_25 = { class: 'card-content card-content-multi' };
  const _hoisted_26 = { class: 'card-line' };
  const _hoisted_27 = { class: 'card-num num2' };
  const _hoisted_28 = { class: 'card-line' };
  const _hoisted_29 = { class: 'card-num num3' };
  const _hoisted_30 = { class: 'card-line' };
  const _hoisted_31 = { class: 'card-num num1' };
  const _hoisted_32 = {
    key: 1,
    class: 'card-empty',
  };

  function render(_ctx, _cache) {
    return (
      openBlock(),
      createElementBlock('div', _hoisted_1, [
        createElementVNode('div', _hoisted_2, [
          _ctx.hasData
            ? (openBlock(),
              createElementBlock(
                Fragment,
                { key: 0 },
                [
                  createElementVNode('div', _hoisted_3, [
                    _cache[4] ||
                      (_cache[4] = createElementVNode(
                        'div',
                        { class: 'summary-card-icon summary-card-icon-dept' },
                        [createElementVNode('span', { class: 'summary-card-icon-inner' }, '责')],
                        -1 /* CACHED */
                      )),
                    createElementVNode('div', _hoisted_4, [
                      _cache[3] ||
                        (_cache[3] = createElementVNode(
                          'div',
                          { class: 'summary-card-title' },
                          '责任单位',
                          -1 /* CACHED */
                        )),
                      createElementVNode('div', _hoisted_5, [
                        createElementVNode(
                          'span',
                          _hoisted_6,
                          toDisplayString(_ctx.state.totalData.DEPT_NUM ?? '--'),
                          1 /* TEXT */
                        ),
                        _cache[2] ||
                          (_cache[2] = createElementVNode(
                            'span',
                            { class: 'summary-unit' },
                            '个',
                            -1 /* CACHED */
                          )),
                      ]),
                    ]),
                  ]),
                  createElementVNode('div', _hoisted_7, [
                    _cache[7] ||
                      (_cache[7] = createElementVNode(
                        'div',
                        { class: 'summary-card-icon summary-card-icon-total' },
                        [createElementVNode('span', { class: 'summary-card-icon-inner' }, '总')],
                        -1 /* CACHED */
                      )),
                    createElementVNode('div', _hoisted_8, [
                      _cache[6] ||
                        (_cache[6] = createElementVNode(
                          'div',
                          { class: 'summary-card-title' },
                          '任务总数',
                          -1 /* CACHED */
                        )),
                      createElementVNode('div', _hoisted_9, [
                        createElementVNode(
                          'span',
                          _hoisted_10,
                          toDisplayString(_ctx.state.totalData.NUM ?? '--'),
                          1 /* TEXT */
                        ),
                        _cache[5] ||
                          (_cache[5] = createElementVNode(
                            'span',
                            { class: 'summary-unit' },
                            '个',
                            -1 /* CACHED */
                          )),
                      ]),
                    ]),
                  ]),
                  createElementVNode('div', _hoisted_11, [
                    _cache[10] ||
                      (_cache[10] = createElementVNode(
                        'div',
                        { class: 'summary-card-icon summary-card-icon-done' },
                        [createElementVNode('span', { class: 'summary-card-icon-inner' }, '结')],
                        -1 /* CACHED */
                      )),
                    createElementVNode('div', _hoisted_12, [
                      _cache[9] ||
                        (_cache[9] = createElementVNode(
                          'div',
                          { class: 'summary-card-title' },
                          '已办结',
                          -1 /* CACHED */
                        )),
                      createElementVNode('div', _hoisted_13, [
                        createElementVNode(
                          'span',
                          _hoisted_14,
                          toDisplayString(_ctx.state.totalData.STATUS_TWO ?? '--'),
                          1 /* TEXT */
                        ),
                        _cache[8] ||
                          (_cache[8] = createElementVNode(
                            'span',
                            { class: 'summary-unit' },
                            '个',
                            -1 /* CACHED */
                          )),
                      ]),
                    ]),
                  ]),
                  createElementVNode('div', _hoisted_15, [
                    _cache[13] ||
                      (_cache[13] = createElementVNode(
                        'div',
                        { class: 'summary-card-icon summary-card-icon-doing' },
                        [createElementVNode('span', { class: 'summary-card-icon-inner' }, '办')],
                        -1 /* CACHED */
                      )),
                    createElementVNode('div', _hoisted_16, [
                      _cache[12] ||
                        (_cache[12] = createElementVNode(
                          'div',
                          { class: 'summary-card-title' },
                          '办理中',
                          -1 /* CACHED */
                        )),
                      createElementVNode('div', _hoisted_17, [
                        createElementVNode(
                          'span',
                          _hoisted_18,
                          toDisplayString(_ctx.state.totalData.STATUS_ONE ?? '--'),
                          1 /* TEXT */
                        ),
                        _cache[11] ||
                          (_cache[11] = createElementVNode(
                            'span',
                            { class: 'summary-unit' },
                            '个',
                            -1 /* CACHED */
                          )),
                      ]),
                    ]),
                  ]),
                ],
                64 /* STABLE_FRAGMENT */
              ))
            : (openBlock(),
              createElementBlock(
                'div',
                _hoisted_19,
                _cache[14] ||
                  (_cache[14] = [
                    createElementVNode(
                      'span',
                      { class: 'summary-label' },
                      '任务总数',
                      -1 /* CACHED */
                    ),
                    createElementVNode('span', { class: 'summary-value' }, '--', -1 /* CACHED */),
                  ])
              )),
        ]),
        _ctx.hasData
          ? (openBlock(),
            createElementBlock('div', _hoisted_20, [
              createElementVNode(
                'button',
                {
                  class: normalizeClass(['nav-btn nav-btn-left', { disabled: !_ctx.canPrev }]),
                  onClick:
                    _cache[0] ||
                    (_cache[0] = (...args) => _ctx.handlePrev && _ctx.handlePrev(...args)),
                },
                ' ‹ ',
                2 /* CLASS */
              ),
              createElementVNode('div', _hoisted_21, [
                (openBlock(true),
                createElementBlock(
                  Fragment,
                  null,
                  renderList(_ctx.visibleCards, (item) => {
                    return (
                      openBlock(),
                      createElementBlock(
                        'div',
                        {
                          class: 'card-list-elem',
                          key: item.title,
                          style: normalizeStyle({
                            '--card-icon': `url(${item.icon})`,
                            '--num-color': item.numColor,
                          }),
                        },
                        [
                          _cache[17] ||
                            (_cache[17] = createElementVNode(
                              'img',
                              {
                                class: 'img1',
                                src: '/lego-generated-apps/lego_file/res/2026-01-26/189213e6224c4d1b9303ccbeefadb612.png',
                                alt: '',
                              },
                              null,
                              -1 /* CACHED */
                            )),
                          _cache[18] ||
                            (_cache[18] = createElementVNode(
                              'img',
                              {
                                class: 'img2',
                                src: '/lego-generated-apps/lego_file/res/2026-01-26/017061f2383d49698d517b6ff2bd482b.png',
                                alt: '',
                              },
                              null,
                              -1 /* CACHED */
                            )),
                          createElementVNode('div', _hoisted_22, [
                            createElementVNode(
                              'div',
                              _hoisted_23,
                              toDisplayString(item.title),
                              1 /* TEXT */
                            ),
                          ]),
                          createElementVNode('div', _hoisted_24, [
                            createElementVNode('div', _hoisted_25, [
                              createElementVNode('div', _hoisted_26, [
                                createElementVNode(
                                  'span',
                                  _hoisted_27,
                                  toDisplayString(item.doing ?? '-'),
                                  1 /* TEXT */
                                ),
                              ]),
                              _cache[15] ||
                                (_cache[15] = createElementVNode(
                                  'div',
                                  { class: 'card-line' },
                                  [
                                    createElementVNode('span', { class: 'split-line' }, [
                                      createTextVNode('/'),
                                      createElementVNode('span'),
                                    ]),
                                  ],
                                  -1 /* CACHED */
                                )),
                              createElementVNode('div', _hoisted_28, [
                                createElementVNode(
                                  'span',
                                  _hoisted_29,
                                  toDisplayString(item.done ?? '-'),
                                  1 /* TEXT */
                                ),
                              ]),
                              _cache[16] ||
                                (_cache[16] = createElementVNode(
                                  'div',
                                  { class: 'card-line' },
                                  [
                                    createElementVNode('span', { class: 'split-line' }, [
                                      createTextVNode('/'),
                                      createElementVNode('span'),
                                    ]),
                                  ],
                                  -1 /* CACHED */
                                )),
                              createElementVNode('div', _hoisted_30, [
                                createElementVNode(
                                  'span',
                                  _hoisted_31,
                                  toDisplayString(item.total ?? '-'),
                                  1 /* TEXT */
                                ),
                              ]),
                            ]),
                          ]),
                        ],
                        4 /* STYLE */
                      )
                    );
                  }),
                  128 /* KEYED_FRAGMENT */
                )),
              ]),
              createElementVNode(
                'button',
                {
                  class: normalizeClass(['nav-btn nav-btn-right', { disabled: !_ctx.canNext }]),
                  onClick:
                    _cache[1] ||
                    (_cache[1] = (...args) => _ctx.handleNext && _ctx.handleNext(...args)),
                },
                ' › ',
                2 /* CLASS */
              ),
            ]))
          : (openBlock(), createElementBlock('div', _hoisted_32, '暂无数据')),
      ])
    );
  } // 动态加载依赖组件
  async function loadComponent(pageCode) {
    if (!window[`tjwtKhsltjkpComponent`]) {
      try {
        await window.ComponentLoader.loadComponent(pageCode);
      } catch (error) {
        console.error(`加载依赖组件 tjwtKhsltjkpComponent 失败:`, error);
        // 返回一个兜底组件
        window[`tjwtKhsltjkpComponent`] = { template: '<div>Failed to load component</div>' };
      }
    }
  }

  // 注册组件到全局
  window.tjwtKhsltjkpComponent = {
    ...componentOptions,
    render,
  };
})();
