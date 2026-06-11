/**
 * 自动编译的Vue组件: historyTaskListComponent
 * 适配低代码平台，不使用import/export语法
 */
(function () {
  const componentOptions = {
    props: {
      // params: {
      //   type: String,
      //   default: '111',
      // },
    },

    setup() {
      // 根上下文（包含 socket、全局变量等）
      const rootData = inject('root');
      const global = reactive({
        ...toRefs(rootData),
      });
      // 外层页面注入的状态，包含表格数据等
      const state = inject('state') ?? {};

      // 外层容器和表格实例引用
      const wrapperRef = ref(null);
      const tableRef = ref(null);

      // 分页参数
      const pageSize = ref(10);
      const currentPage = ref(1);
      // 标记当前是否处于翻页过程中，用来忽略翻页导致的 selection-change 事件
      const isPageChanging = ref(false);

      // 使用 Map 存储所有选中的行，key 为 id，value 为行数据
      const selectedRowMap = ref(new Map());

      // 当前页显示的数据
      const pagedData = computed(() => {
        const start = (currentPage.value - 1) * pageSize.value;
        const end = start + pageSize.value;
        return state.tableData.slice(start, end);
      });

      /**
       * 同步当前页的勾选状态
       */
      const syncPageSelection = () => {
        const table = tableRef.value;
        if (!table) return;

        table.clearSelection();
        const map = selectedRowMap.value;
        pagedData.value.forEach((row) => {
          if (map.has(row.id)) {
            table.toggleRowSelection(row, true);
          }
        });
      };

      /**
       * 处理翻页
       * @param page
       */
      const handlePageChange = (page) => {
        // 翻页开始，忽略这一过程中由表格内部触发的 selection-change 事件
        isPageChanging.value = true;
        currentPage.value = page;
        nextTick(() => {
          syncPageSelection();
          // 同步完当前页勾选状态后，结束翻页标记
          isPageChanging.value = false;
        });
      };

      /**
       * 发送socket消息 - 告诉外面当前表格选中了哪些
       * @param allSelectedRows
       */
      const emitSelectionChange = (allSelectedRows) => {
        // 打印当前所有选中项（非响应式浅拷贝）
        const plainSelected = allSelectedRows.map((row) => ({ ...row }));
        console.log('当前所有选中项:', plainSelected);

        if (rootData && rootData.rootSocket && global.socketRoom) {
          rootData.rootSocket.emit('message', {
            room: global.socketRoom,
            type: 'historyTaskTableSelectionChange',
            data: {
              // 往外只发干净数据
              selected: plainSelected,
            },
          });
        }
      };

      /**
       * 处理表格选中
       * @param selection
       */
      const handleSelectionChange = (selection) => {
        // 如果是翻页引起的 selection 变化，不要动全局选中 Map
        if (isPageChanging.value) {
          return;
        }

        const map = selectedRowMap.value;
        console.log(
          '当前页 selection:',
          selection.map((r) => r.inspect_id)
        );
        console.log('Map 里的 key 列表:', Array.from(map.keys()));

        // 先移除当前页所有行的选中状态
        pagedData.value.forEach((row) => {
          map.delete(row.inspect_id);
        });

        // 再把当前 selection 中的行加入全局 Map
        selection.forEach((row) => {
          map.set(row.inspect_id, row);
        });

        // 从 Map 中汇总出所有选中行
        const allSelectedRows = Array.from(map.values());

        emitSelectionChange(allSelectedRows);
      };

      /**
       * 处理按钮点击事件
       * @param action
       * @param row
       */
      const handleAction = (action, row) => {
        console.log(`点击按钮: ${action}`, row);

        if (rootData && rootData.rootSocket && global.socketRoom) {
          rootData.rootSocket.emit('message', {
            room: global.socketRoom,
            type: 'openHistoryTaskRelativeDialog',
            data: {
              row: row, // 当前行数据
              action: action, // 操作
            },
          });
        }
      };

      // 监听外层容器宽度变化，自动让表格重新布局，避免嵌入容器时宽度不适配
      let resizeObserver = null;

      onMounted(() => {
        const wrapper = wrapperRef.value;
        const table = tableRef.value;

        // 初始时先做一次布局
        nextTick(() => {
          if (table && typeof table.doLayout === 'function') {
            table.doLayout();
          }
          syncPageSelection();
        });

        if (window.ResizeObserver && wrapper) {
          resizeObserver = new ResizeObserver(() => {
            const tbl = tableRef.value;
            if (tbl && typeof tbl.doLayout === 'function') {
              tbl.doLayout();
            }
          });
          resizeObserver.observe(wrapper);
        }
      });

      onBeforeUnmount(() => {
        if (resizeObserver && wrapperRef.value) {
          resizeObserver.unobserve(wrapperRef.value);
          resizeObserver.disconnect();
          resizeObserver = null;
        }
      });

      // 监听外部传入的表格数据变化：
      // 1）清空选中 Map
      // 2）清空表格勾选
      // 3）重置分页参数
      // 4）通过 socket 通知外层选中项已清空
      watch(
        () => state.tableData,
        () => {
          // 如果没有表格数据字段，直接返回
          if (!Array.isArray(state.tableData)) return;

          // 重置分页到第一页
          currentPage.value = 1;

          // 清空全局选中 Map
          selectedRowMap.value.clear();

          // 清空表格自身的勾选状态
          const table = tableRef.value;
          if (table && typeof table.clearSelection === 'function') {
            // 标记为翻页/重置过程，避免触发 handleSelectionChange 逻辑
            isPageChanging.value = true;
            table.clearSelection();
            isPageChanging.value = false;
          }

          // 通知外部当前选中项为空
          emitSelectionChange([]);

          // 表格数据量变化后，重新计算布局
          nextTick(() => {
            const tbl = tableRef.value;
            if (tbl && typeof tbl.doLayout === 'function') {
              tbl.doLayout();
            }
          });
        },
        { deep: true }
      );

      return {
        state,
        wrapperRef,
        tableRef,
        pagedData,
        pageSize,
        currentPage,
        handlePageChange,
        handleSelectionChange,
        handleAction,
      };
    },
  };

  const _hoisted_1 = {
    ref: 'wrapperRef',
    class: 'table-wrapper history-table',
  };
  const _hoisted_2 = { class: 'operation-buttons' };
  const _hoisted_3 = ['onClick'];
  const _hoisted_4 = ['onClick'];
  const _hoisted_5 = ['onClick'];
  const _hoisted_6 = { class: 'pagination-wrapper' };

  function render(_ctx, _cache) {
    const _component_el_table_column = resolveComponent('el-table-column');
    const _component_el_table = resolveComponent('el-table');
    const _component_el_pagination = resolveComponent('el-pagination');

    return (
      openBlock(),
      createElementBlock(
        'div',
        _hoisted_1,
        [
          createVNode(
            _component_el_table,
            {
              ref: 'tableRef',
              data: _ctx.pagedData,
              'row-key': 'inspect_id',
              style: { width: '100%' },
              onSelectionChange: _ctx.handleSelectionChange,
            },
            {
              default: withCtx(() => [
                createVNode(_component_el_table_column, {
                  type: 'selection',
                  align: 'center',
                  width: '40',
                }),
                createVNode(_component_el_table_column, {
                  prop: 'inspect_time',
                  label: '检查日期',
                  align: 'center',
                  width: '120',
                }),
                createVNode(_component_el_table_column, {
                  prop: 'inspect_user',
                  label: '检查人员',
                  align: 'center',
                  width: '120',
                }),
                createVNode(_component_el_table_column, {
                  prop: 'inspect_content',
                  label: '检查内容',
                  align: 'left',
                  'show-overflow-tooltip': '',
                }),
                createVNode(_component_el_table_column, {
                  prop: 'inspect_flag_name',
                  label: '是否存在问题',
                  align: 'center',
                }),
                createVNode(_component_el_table_column, {
                  prop: 'status_name',
                  label: '当前状态',
                  align: 'center',
                }),
                createVNode(
                  _component_el_table_column,
                  {
                    label: '操作',
                    align: 'center',
                    width: '240',
                  },
                  {
                    default: withCtx(({ row }) => [
                      createElementVNode('div', _hoisted_2, [
                        createElementVNode(
                          'div',
                          {
                            class: 'operation-buttons-item',
                            onClick: ($event) => _ctx.handleAction('查看', row),
                          },
                          ' 查看 ',
                          8 /* PROPS */,
                          _hoisted_3
                        ),
                        createElementVNode(
                          'div',
                          {
                            class: 'operation-buttons-item',
                            onClick: ($event) => _ctx.handleAction('编辑', row),
                          },
                          ' 编辑 ',
                          8 /* PROPS */,
                          _hoisted_4
                        ),
                        createElementVNode(
                          'div',
                          {
                            class: 'operation-buttons-item',
                            onClick: ($event) => _ctx.handleAction('反馈', row),
                          },
                          ' 反馈 ',
                          8 /* PROPS */,
                          _hoisted_5
                        ),
                      ]),
                    ]),
                    _: 1 /* STABLE */,
                  }
                ),
              ]),
              _: 1 /* STABLE */,
            },
            8 /* PROPS */,
            ['data', 'onSelectionChange']
          ),
          createElementVNode('div', _hoisted_6, [
            createVNode(
              _component_el_pagination,
              {
                background: '',
                layout: 'prev, pager, next, jumper, ->, total',
                total: _ctx.state.tableData.length,
                'page-size': _ctx.pageSize,
                'current-page': _ctx.currentPage,
                onCurrentChange: _ctx.handlePageChange,
              },
              null,
              8 /* PROPS */,
              ['total', 'page-size', 'current-page', 'onCurrentChange']
            ),
          ]),
        ],
        512 /* NEED_PATCH */
      )
    );
  } // 动态加载依赖组件
  async function loadComponent(pageCode) {
    if (!window[`historyTaskListComponent`]) {
      try {
        await window.ComponentLoader.loadComponent(pageCode);
      } catch (error) {
        console.error(`加载依赖组件 historyTaskListComponent 失败:`, error);
        // 返回一个兜底组件
        window[`historyTaskListComponent`] = { template: '<div>Failed to load component</div>' };
      }
    }
  }

  // 注册组件到全局
  window.historyTaskListComponent = {
    ...componentOptions,
    render,
  };
})();
