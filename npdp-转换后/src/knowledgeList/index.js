/**
 * 自动编译的Vue组件: knowledgeListComponent
 * 适配低代码平台，不使用import/export语法
 */
(function () {
  const componentOptions = {
    setup() {
      // 根上下文（包含 socket、全局变量等）
      const rootData = inject('root');
      const global = reactive({ ...toRefs(rootData || {}) });
      // 外层注入的表格数据状态
      const state = inject('state') ?? {};

      // 实例引用
      const wrapperRef = ref(null);
      const tableRef = ref(null);

      // 分页参数
      const pageSize = ref(15);
      const currentPage = ref(15);
      // 翻页标记（忽略翻页的selection-change）
      const isPageChanging = ref(false);
      // 核心：阻止selection-change无限循环的锁（关键新增）
      const isManualSelecting = ref(false);
      // 单选：存储唯一选中行
      const selectedRow = ref(null);

      // 当前页数据（加非空判断，避免报错）
      const pagedData = computed(() => {
        if (!Array.isArray(state.tableData)) return [];
        const start = (currentPage.value - 1) * pageSize.value;
        const end = start + pageSize.value;
        return state.tableData.slice(start, end);
      });

      // 同步当前页勾选状态（仅翻页用）
      const syncPageSelection = () => {
        const table = tableRef.value;
        if (!table) return;
        // 清空后再勾选，保证单选
        table.clearSelection();
        if (selectedRow.value && pagedData.value.some((r) => r.id === selectedRow.value.id)) {
          table.toggleRowSelection(selectedRow.value, true);
        }
      };

      // 翻页处理
      const handlePageChange = (page) => {
        isPageChanging.value = true;
        currentPage.value = page;
        nextTick(() => {
          syncPageSelection();
          isPageChanging.value = false;
        });
      };

      // 发送socket选中通知（原有逻辑不变）
      const emitSelectionChange = () => {
        const plainSelected = selectedRow.value ? [{ ...selectedRow.value }] : [];
        console.log('当前唯一选中项:', plainSelected);
        if (rootData && rootData.rootSocket && global.socketRoom) {
          rootData.rootSocket.emit('message', {
            room: global.socketRoom,
            type: 'historyTaskTableSelectionChange',
            data: { selected: plainSelected },
          });
        }
      };

      /**
       * 处理选中变化 - 终极修复：加锁防循环+强制单选
       * @param {Array} selection 表格当前勾选数组
       */
      const handleSelectionChange = (selection) => {
        // 1. 翻页/手动控制时，直接返回（阻断循环/无效触发）
        if (isPageChanging.value || isManualSelecting.value) return;
        const table = tableRef.value;
        if (!table) return;

        // 2. 取最后勾选的行作为唯一选中行（兼容误点）
        const latestRow = selection.length > 0 ? selection[selection.length - 1] : null;
        // 3. 标记手动控制，阻止toggleRowSelection触发二次事件
        isManualSelecting.value = true;
        // 4. 强制清空所有，再勾选唯一行（彻底解决界面多选）
        table.clearSelection();
        if (latestRow) {
          table.toggleRowSelection(latestRow, true);
        }
        // 5. 同步选中数据
        selectedRow.value = latestRow;
        // 6. 解锁+发送通知
        nextTick(() => {
          isManualSelecting.value = false;
          emitSelectionChange();
        });
      };

      /**
       * 行点击处理 - 优化：点击已选中行可取消，且不触发循环
       * @param {Object} row 点击的行数据
       */
      const handleRowClick = (row) => {
        const table = tableRef.value;
        if (!table || isPageChanging.value || isManualSelecting.value) return;

        isManualSelecting.value = true;
        // 点击已选中行 → 取消所有选中；否则 → 清空后勾选当前行
        if (selectedRow.value && selectedRow.value.id === row.id) {
          table.clearSelection();
          selectedRow.value = null;
        } else {
          table.clearSelection();
          table.toggleRowSelection(row, true);
          selectedRow.value = row;
        }
        // 解锁+发送通知+更新视图
        nextTick(() => {
          isManualSelecting.value = false;
          emitSelectionChange();
        });
      };

      // 操作按钮点击（原有逻辑不变）
      const handleAction = (action, row) => {
        console.log(`点击按钮: ${action}`, row);
        if (rootData && rootData.rootSocket && global.socketRoom) {
          window.open(
            `${global.foshanServiceBaseUrl}/waterevaluate/api/components/file/download/${row.fileId}`,
            '_self'
          );
        }
      };

      // 监听容器大小变化，重新布局
      let resizeObserver = null;
      onMounted(() => {
        const wrapper = wrapperRef.value;
        nextTick(() => {
          tableRef.value?.doLayout();
          syncPageSelection();
        });
        if (window.ResizeObserver && wrapper) {
          resizeObserver = new ResizeObserver(() => tableRef.value?.doLayout());
          resizeObserver.observe(wrapper);
        }
      });

      // 销毁时取消监听
      onBeforeUnmount(() => {
        if (resizeObserver && wrapperRef.value) {
          resizeObserver.unobserve(wrapperRef.value);
          resizeObserver.disconnect();
        }
      });

      // 监听外部数据变化，重置单选状态（原有逻辑优化）
      watch(
        () => state.tableData,
        () => {
          if (!Array.isArray(state.tableData)) return;
          currentPage.value = 1;
          selectedRow.value = null;
          const table = tableRef.value;
          if (table) {
            isPageChanging.value = true;
            table.clearSelection();
            isPageChanging.value = false;
          }
          emitSelectionChange();
          nextTick(() => tableRef.value?.doLayout());
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
        handleRowClick,
      };
    },
  };

  const _hoisted_1 = {
    ref: 'wrapperRef',
    class: 'table-wrapper knowledge-table',
  };
  const _hoisted_2 = { class: 'operation-buttons' };
  const _hoisted_3 = ['onClick'];

  function render(_ctx, _cache) {
    const _component_el_table_column = resolveComponent('el-table-column');
    const _component_el_table = resolveComponent('el-table');

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
              'row-key': 'id',
              style: { width: '100%' },
              onSelectionChange: _ctx.handleSelectionChange,
              onRowClick: _ctx.handleRowClick,
              'select-on-indeterminate': false,
            },
            {
              default: withCtx(() => [
                createVNode(_component_el_table_column, {
                  type: 'selection',
                  align: 'center',
                  width: '40',
                }),
                createVNode(_component_el_table_column, {
                  prop: 'fileName',
                  label: '文件名称',
                  align: 'left',
                  'show-overflow-tooltip': '',
                }),
                createVNode(_component_el_table_column, {
                  prop: 'createTime',
                  label: '上传时间',
                  align: 'center',
                  width: '200',
                  'show-overflow-tooltip': '',
                }),
                createVNode(_component_el_table_column, {
                  prop: 'createUser',
                  label: '上传人员',
                  width: '200',
                  'show-overflow-tooltip': '',
                }),
                createVNode(
                  _component_el_table_column,
                  {
                    label: '操作',
                    align: 'center',
                    width: '120',
                  },
                  {
                    default: withCtx(({ row }) => [
                      createElementVNode('div', _hoisted_2, [
                        createElementVNode(
                          'div',
                          {
                            class: 'operation-buttons-item',
                            onClick: withModifiers(
                              ($event) => _ctx.handleAction('下载', row),
                              ['stop']
                            ),
                          },
                          ' 下载 ',
                          8 /* PROPS */,
                          _hoisted_3
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
            ['data', 'onSelectionChange', 'onRowClick']
          ),
        ],
        512 /* NEED_PATCH */
      )
    );
  } // 动态加载依赖组件
  async function loadComponent(pageCode) {
    if (!window[`knowledgeListComponent`]) {
      try {
        await window.ComponentLoader.loadComponent(pageCode);
      } catch (error) {
        console.error(`加载依赖组件 knowledgeListComponent 失败:`, error);
        // 返回一个兜底组件
        window[`knowledgeListComponent`] = { template: '<div>Failed to load component</div>' };
      }
    }
  }

  // 注册组件到全局
  window.knowledgeListComponent = {
    ...componentOptions,
    render,
  };
})();
