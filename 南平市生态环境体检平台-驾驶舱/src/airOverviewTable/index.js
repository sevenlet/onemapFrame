/**
 * 自动编译的Vue组件: airOverviewTableComponent
 * 适配低代码平台，不使用import/export语法
 */
(function () {
  const componentOptions = {
    setup() {
      /* ******** 如果要使用应用内部的全局变量、全局函数、socket消息 必须注入全局变量和事件 ******** */
      const rootData = inject('root');
      const global = reactive({
        ...toRefs(rootData),
      });
      /* ********************************************************************************  */
      // 从父组件获取state数据
      const state = inject('state') || {};
      console.log(state.tableData, 'stattableDatatableDatae');
      return {
        state,
      };
    },
  };

  const _hoisted_1 = { style: { color: '#fff' } };

  function render(_ctx, _cache) {
    const _component_el_table_column = resolveComponent('el-table-column');
    const _component_el_table = resolveComponent('el-table');

    return (
      openBlock(),
      createBlock(
        _component_el_table,
        {
          data: _ctx.state.tableData,
          stripe: '',
          style: { width: '100%' },
          class: 'custom-status-table',
          'empty-text': '暂无数据',
        },
        {
          default: withCtx(() => [
            createVNode(_component_el_table_column, {
              prop: 'REGION_NAME',
              label: '指标',
              align: 'center',
              'header-align': 'center',
              width: '290',
              'show-overflow-tooltip': '',
            }),
            createVNode(
              _component_el_table_column,
              {
                prop: 'TOTAL_NUM',
                label: _ctx.state.clm1,
                align: 'center',
                'header-align': 'center',
                width: '290',
                'show-overflow-tooltip': '',
              },
              {
                default: withCtx(({ row }) => [
                  createElementVNode(
                    'span',
                    null,
                    toDisplayString(row.TOTAL_NUM) + ' ' + toDisplayString(row.STANDARDRATE),
                    1 /* TEXT */
                  ),
                ]),
                _: 1 /* STABLE */,
              },
              8 /* PROPS */,
              ['label']
            ),
            createVNode(
              _component_el_table_column,
              {
                prop: 'CWQI_VAL',
                label: _ctx.state.clm2,
                align: 'center',
                'header-align': 'center',
                width: '290',
                'show-overflow-tooltip': '',
              },
              {
                default: withCtx(({ row }) => [
                  createElementVNode(
                    'span',
                    _hoisted_1,
                    toDisplayString(row.CWQI_VAL) + ' ' + toDisplayString(row.STANDARDRATE),
                    1 /* TEXT */
                  ),
                ]),
                _: 1 /* STABLE */,
              },
              8 /* PROPS */,
              ['label']
            ),
            createVNode(
              _component_el_table_column,
              {
                prop: 'COMPLETE_NUM_RATIO',
                label: _ctx.state.clm3,
                align: 'center',
                'header-align': 'center',
                'min-width': '290',
                'show-overflow-tooltip': '',
              },
              {
                default: withCtx(({ row }) => [
                  _cache[0] ||
                    (_cache[0] = createElementVNode('span', null, null, -1 /* CACHED */)),
                  createTextVNode(
                    toDisplayString(row.COMPLETE_NUM_RATIO) +
                      ' ' +
                      toDisplayString(row.STANDARDRATE),
                    1 /* TEXT */
                  ),
                ]),
                _: 1 /* STABLE */,
              },
              8 /* PROPS */,
              ['label']
            ),
            createVNode(
              _component_el_table_column,
              {
                prop: 'PROGRESS_NUM',
                label: _ctx.state.clm4,
                align: 'center',
                'header-align': 'center',
                width: '290',
                'show-overflow-tooltip': '',
              },
              {
                default: withCtx(({ row }) => [
                  createElementVNode(
                    'span',
                    null,
                    toDisplayString(row.PROGRESS_NUM) + ' ' + toDisplayString(row.STANDARDRATE),
                    1 /* TEXT */
                  ),
                ]),
                _: 1 /* STABLE */,
              },
              8 /* PROPS */,
              ['label']
            ),
          ]),
          _: 1 /* STABLE */,
        },
        8 /* PROPS */,
        ['data']
      )
    );
  } // 动态加载依赖组件
  async function loadComponent(pageCode) {
    if (!window[`airOverviewTableComponent`]) {
      try {
        await window.ComponentLoader.loadComponent(pageCode);
      } catch (error) {
        console.error(`加载依赖组件 airOverviewTableComponent 失败:`, error);
        // 返回一个兜底组件
        window[`airOverviewTableComponent`] = { template: '<div>Failed to load component</div>' };
      }
    }
  }

  // 注册组件到全局
  window.airOverviewTableComponent = {
    ...componentOptions,
    render,
  };
})();
