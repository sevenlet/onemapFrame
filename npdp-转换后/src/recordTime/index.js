/**
 * 自动编译的Vue组件: recordTimeComponent
 * 适配低代码平台，不使用import/export语法
 */
(function () {
  const componentOptions = {
    components: {},
    props: {
      params: {
        type: String,
        default: '111',
      },
      initialDates: {
        type: Array,
        default: () => [],
      },
    },
    setup(props, { emit }) {
      const rootData = inject('root', {});
      const state = inject('state');
      const global = reactive({
        ...toRefs(rootData),
      });
      console.log(state.timeData, state, state.isView, '接到的时间数组');

      // 基础数据：对象数组存日期+唯一索引，防重复选中
      const dateList = ref([]);

      // 【修复1】先声明activeIndex，再定义使用它的函数
      const activeIndex = ref(-1);
      const dropdownVisible = ref(false);
      const searchKeyword = ref('');

      // 初始化dateList
      const initDateList = () => {
        if (!state?.timeData || !Array.isArray(state.timeData)) {
          dateList.value = [];
          activeIndex.value = -1; // 直接赋值，不再提前访问未初始化的变量
          return;
        }

        // 基于state.timeData初始化，为每个项生成唯一index
        dateList.value = state.timeData.map((item, idx) => ({
          ...item,
          date: item.sort,
          time: item.monitortime,
          index: idx, // 使用数组索引作为唯一标识（基于当前selectId的timeData）
          id: item.inspect_id,
          detail_id: item.detail_id,
        }));

        // 初始化激活状态为最后一项
        activeIndex.value =
          dateList.value.length > 0 ? dateList.value[dateList.value.length - 1].index : -1;
      };

      // 初始化执行（现在activeIndex已经声明，可安全调用）
      initDateList();

      // DOM引用：容器、可视区、所有标签项
      const tabsShowRef = ref(null); // 标签展示区（核心：计算这个容器的可容纳宽度）
      const tabsWrapperRef = ref(null);
      const tabItemRefs = ref([]); // 数组：存储所有可视标签的DOM元素

      // 调整预留宽度：精准匹配按钮实际宽度
      const reserveBtnWidth = ref(70); // 下拉按钮34 + 添加按钮34 + 间距2 = 70（精准值）

      // 【核心修复】计算标签展示区的**实际可容纳宽度**
      const calcAvaliableWidth = () => {
        if (!tabsShowRef.value || !tabsWrapperRef.value) return 0;

        // 修复1：获取父容器总宽度 - 按钮区固定宽度 = 标签可使用宽度
        const wrapperWidth = tabsWrapperRef.value.clientWidth;
        const btnAreaWidth = 70; // 下拉按钮+添加按钮+间距的总宽度

        // 修复2：减去父容器的左右padding，避免计算偏差
        const wrapperPadding = 20; // 父容器padding: 6px 10px → 左右共20px

        // 最终可容纳宽度 = 父容器可用宽度 - 按钮区宽度
        const avaliableWidth = wrapperWidth - wrapperPadding - btnAreaWidth;

        return avaliableWidth > 0 ? avaliableWidth : 0;
      };

      // 【核心修复】精准拆分可视/隐藏标签
      const visibleDateList = computed(() => {
        if (dateList.value.length === 0) return [];

        // 先获取精准的可容纳宽度
        const avaliableWidth = calcAvaliableWidth();
        if (avaliableWidth <= 0) return [];

        const visible = [];
        let totalWidth = 0; // 累加已放入标签的总宽度
        const tabGap = 6; // 标签之间的间距（和style中的gap一致）

        for (let i = 0; i < dateList.value.length; i++) {
          const item = dateList.value[i];
          // 模拟创建标签DOM，计算真实渲染宽度
          const tempEl = document.createElement('div');
          tempEl.className = 'date-tab-item';
          tempEl.innerHTML = `<span class="date-text">${item.date}</span><span class="tab-close">×</span>`;
          // 完全继承实际样式，保证宽度计算100%准确
          tempEl.style.cssText = `
          position: absolute; visibility: hidden; display: flex; align-items: center; gap: 4px;
          background: var(--business-show-bg30); font-size: var(--business-text-size-14); padding: 16px 12px;
          white-space: nowrap; flex-shrink: 0; height: 24px; color: #fff;
          font-family: "Microsoft Yahei", sans-serif;
        `;
          document.body.appendChild(tempEl);
          const itemWidth = tempEl.getBoundingClientRect().width;
          document.body.removeChild(tempEl);

          // 修复3：精准计算累加宽度（第一个标签不加间距）
          const currentItemTotal = itemWidth + (visible.length > 0 ? tabGap : 0);

          // 修复4：严格判断是否超出，无额外偏移
          if (totalWidth + currentItemTotal <= avaliableWidth) {
            visible.push(item);
            totalWidth += currentItemTotal;
          } else {
            // 超出宽度，停止循环
            break;
          }
        }

        // 边界处理：至少保留1个标签在可视区
        return visible.length > 0 ? visible : [dateList.value[0]];
      });

      // 隐藏标签计算（保持不变）
      const hiddenDateList = computed(() => {
        if (dateList.value.length === 0 || visibleDateList.value.length === 0) return [];
        const visibleIndexSet = new Set(visibleDateList.value.map((item) => item.index));
        return dateList.value.filter((item) => !visibleIndexSet.has(item.index));
      });

      // 搜索过滤隐藏日期（保持不变）
      const filteredHiddenDates = computed(() => {
        if (!searchKeyword.value) return hiddenDateList.value;
        return hiddenDateList.value.filter((item) => item.date.includes(searchKeyword.value));
      });

      // 窗口resize时重新计算（保持不变）
      const handleResize = () => {
        nextTick(() => {
          // 触发computed重新计算
        });
      };

      // 外层点击关闭下拉（保持不变）
      const closeDropdownByOuter = (e) => {
        if (tabsWrapperRef.value && !tabsWrapperRef.value.contains(e.target)) {
          dropdownVisible.value = false;
        }
      };

      // 切换日期（保持不变）
      const switchDate = (targetIndex) => {
        if (activeIndex.value === targetIndex) return;
        activeIndex.value = targetIndex;
        const targetItem = dateList.value.find((item) => item.index === targetIndex);
        emit('dateChange', targetItem?.date || '');
        nextTick(handleResize);

        if (rootData.rootSocket && global.socketRoom) {
          rootData.rootSocket.emit('message', {
            room: global.socketRoom,
            type: 'switchDateMsg',
            data: {
              selectId: state.selectId,
              timeData: [{ ...targetItem }],
            },
          });
        }
      };

      // 删除日期（修改默认选中逻辑）
      const removeDate = (targetIndex) => {
        if (dateList.value.length <= 1) return;

        const delItem = dateList.value.find((item) => item.index === targetIndex);
        if (!delItem) return;
        const delRealIndex = dateList.value.findIndex((item) => item.index === targetIndex);

        console.log('被删除项的完整信息：', delItem);

        const isActiveDel = activeIndex.value === targetIndex;
        dateList.value.splice(delRealIndex, 1);
        state.timeData = state.timeData.filter((item) => item.detail_id !== delItem.detail_id);

        dateList.value.forEach((item, idx) => {
          item.index = idx;
        });

        // 删除当前激活项时，选中最后一项
        if (isActiveDel) {
          activeIndex.value =
            dateList.value.length > 0 ? dateList.value[dateList.value.length - 1].index : -1;
          emit(
            'dateChange',
            dateList.value.length > 0 ? dateList.value[dateList.value.length - 1].date : ''
          );
        }

        emit('dateRemove', delItem);

        if (rootData.rootSocket && global.socketRoom) {
          rootData.rootSocket.emit('message', {
            room: global.socketRoom,
            type: 'removeDateMsg',
            data: {
              selectId: state.selectId,
              delItem: { ...delItem },
            },
          });
        }

        nextTick(handleResize);
      };

      // 生成带后缀的日期（修复重复后缀问题）
      const generateSuffixDate = (baseDate) => {
        // 1. 先找出所有 date 文本中，原始日期（monitortime）与当前 baseDate 相同的项
        const sameBaseDateItems = dateList.value.filter((item) => {
          // 从现有项的 date 中提取原始日期（去掉后缀）
          const existingBase = item.date.replace(/\(\d+\)$/, '');
          // 同时满足：原始日期相同，且 monitortime 也相同
          return existingBase === baseDate && item.time === baseDate;
        });

        if (sameBaseDateItems.length === 0) {
          return baseDate;
        }
        console.log(sameBaseDateItems, dateList.value, '相同的项');
        // 2. 后缀从 1 开始递增，使用现有数量作为下一个后缀
        const nextSuffix = sameBaseDateItems.length; // 数组非空时，后缀为长度+1
        return `${baseDate}(${nextSuffix})`;
      };

      // 获取当前年月日（保持不变）
      const getCurrentYMD = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };
      function isObjectKeysMatchInArray(targetObj, targetArray) {
        // 遍历数组中的每一个对象
        return targetArray.some((item) => {
          // 只校验targetObj中存在的键，逐一比较对应的值是否相等
          return Object.keys(targetObj).every((key) => {
            // 只要item中存在该键且值相等，就满足条件
            return item[key] === targetObj[key];
          });
        });
      }

      // 添加新日期（保持不变，已默认选中最后一项） !state.isSave && (dateList.value.length >= 1 || state.timeData.length > 0) &&
      const addNewDate = () => {
        console.log(
          dateList.value,
          state,
          state.selectObj,
          state.oldData,
          state.checkQuesRow,
          '添加前0'
        );
        const isAdd = isObjectKeysMatchInArray(state.selectObj, state.oldData);
        const isSaved = state.selectObj?.detailId === undefined;
        console.log(isAdd, '判断');
        if (!isSaved && !isAdd && state.timeData.length > 0) {
          if (rootData.rootSocket && global.socketRoom) {
            rootData.rootSocket.emit('message', {
              room: global.socketRoom,
              type: 'saveMsg',
              data: {
                selectId: state.selectId,
                isSave: false,
              },
            });
          }
          return;
        }

        const baseDate = getCurrentYMD();
        console.log(baseDate, '添加时间基数');
        const newSuffixDate = generateSuffixDate(baseDate);
        const newDetailId = `DET${Date.now()}${Math.floor(Math.random() * 1000)}`;
        const newInspectId = `CHECK_INS_${Date.now()}.${Math.random().toFixed(6)}`;

        const newItem = {
          detail_id: newDetailId,
          zg_content: '',
          zg_company: '',
          zg_replay: '',
          inspect_id: newInspectId,
          inspect_flag: '0',
          monitortime: baseDate,
          sort: newSuffixDate,
          date: newSuffixDate,
          index: dateList.value.length,
          time: baseDate,
          id: newInspectId,
        };

        console.log(dateList.value, '添加');
        dateList.value.push(newItem);
        state.timeData.push({
          detail_id: newDetailId,
          zg_content: '',
          zg_company: '',
          zg_replay: '',
          inspect_id: newInspectId,
          inspect_flag: '0',
          monitortime: baseDate,
          sort: newSuffixDate,
        });

        activeIndex.value = newItem.index;
        emit('dateChange', newSuffixDate);

        nextTick(handleResize);

        if (rootData.rootSocket && global.socketRoom) {
          rootData.rootSocket.emit('message', {
            room: global.socketRoom,
            type: 'addNewDateMsg',
            data: {
              selectId: state.selectId,
              timeData: [...dateList.value],
            },
          });
        }
      };

      // 下拉相关方法（保持不变）
      const toggleDropdown = () => {
        dropdownVisible.value = !dropdownVisible.value;
      };

      const handleDropdownDateClick = (targetIndex) => {
        switchDate(targetIndex);
        dropdownVisible.value = false;
      };

      // 监听selectId变化（保持不变）
      watch(
        () => state.selectId,
        () => {
          console.log('selectId变化，重新初始化日期列表');
          initDateList();
          nextTick(handleResize);
        },
        { immediate: true, deep: true }
      );

      // 监听state.timeData变化（保持不变）
      watch(
        () => state.timeData,
        () => {
          console.log('timeData变化，同步更新dateList');
          initDateList();
          nextTick(handleResize);
        },
        { deep: true }
      );

      // 生命周期（保持不变）
      onMounted(() => {
        nextTick(handleResize);
        window.addEventListener('resize', handleResize);
        document.addEventListener('click', closeDropdownByOuter);
      });

      onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('click', closeDropdownByOuter);
      });

      // 监听dateList变化（保持不变）
      watch(
        dateList,
        () => {
          nextTick(handleResize);
        },
        { deep: true }
      );

      return {
        state,
        dateList,
        activeIndex,
        visibleDateList,
        hiddenDateList,
        filteredHiddenDates,
        dropdownVisible,
        searchKeyword,
        switchDate,
        removeDate,
        addNewDate,
        toggleDropdown,
        handleDropdownDateClick,
        global,
        tabsShowRef,
        tabsWrapperRef,
        tabItemRefs,
      };
    },
  };

  const _hoisted_1 = { class: 'date-container' };
  const _hoisted_2 = {
    class: 'date-tabs-wrapper',
    ref: 'tabsWrapperRef',
  };
  const _hoisted_3 = {
    class: 'date-tabs-show',
    ref: 'tabsShowRef',
  };
  const _hoisted_4 = ['onClick'];
  const _hoisted_5 = { class: 'date-text' };
  const _hoisted_6 = ['onClick'];
  const _hoisted_7 = {
    key: 1,
    class: 'tab-close',
  };
  const _hoisted_8 = { class: 'dropdown-list' };
  const _hoisted_9 = ['onClick'];

  function render(_ctx, _cache) {
    const _component_el_input = resolveComponent('el-input');

    return (
      openBlock(),
      createElementBlock(
        Fragment,
        null,
        [
          createCommentVNode(' 模板部分保持不变 '),
          createElementVNode('div', _hoisted_1, [
            createElementVNode(
              'div',
              _hoisted_2,
              [
                createElementVNode(
                  'div',
                  _hoisted_3,
                  [
                    (openBlock(true),
                    createElementBlock(
                      Fragment,
                      null,
                      renderList(_ctx.visibleDateList, (item, index) => {
                        return (
                          openBlock(),
                          createElementBlock(
                            'div',
                            {
                              class: normalizeClass([
                                'date-tab-item',
                                { active: _ctx.activeIndex === item.index },
                              ]),
                              key: `${item.detail_id}-${item.index}-${index}`,
                              onClick: ($event) => _ctx.switchDate(item.index),
                              ref_for: true,
                              ref: 'tabItemRefs',
                            },
                            [
                              createElementVNode(
                                'span',
                                _hoisted_5,
                                toDisplayString(item.date),
                                1 /* TEXT */
                              ),
                              !_ctx.state.isView && _ctx.activeIndex !== item.index
                                ? (openBlock(),
                                  createElementBlock(
                                    'span',
                                    {
                                      key: 0,
                                      class: 'tab-close',
                                      onClick: withModifiers(
                                        ($event) => _ctx.removeDate(item.index),
                                        ['stop']
                                      ),
                                    },
                                    '×',
                                    8 /* PROPS */,
                                    _hoisted_6
                                  ))
                                : (openBlock(), createElementBlock('span', _hoisted_7)),
                            ],
                            10 /* CLASS, PROPS */,
                            _hoisted_4
                          )
                        );
                      }),
                      128 /* KEYED_FRAGMENT */
                    )),
                  ],
                  512 /* NEED_PATCH */
                ),
                _ctx.dateList.length > _ctx.visibleDateList.length
                  ? (openBlock(),
                    createElementBlock(
                      'div',
                      {
                        key: 0,
                        class: 'date-dropdown-btn',
                        onClick:
                          _cache[0] ||
                          (_cache[0] = withModifiers(
                            (...args) => _ctx.toggleDropdown && _ctx.toggleDropdown(...args),
                            ['stop']
                          )),
                      },
                      ' ^ '
                    ))
                  : createCommentVNode('v-if', true),
                _ctx.dropdownVisible
                  ? (openBlock(),
                    createElementBlock(
                      'div',
                      {
                        key: 1,
                        class: 'date-dropdown-panel',
                        onClick: _cache[4] || (_cache[4] = withModifiers(() => {}, ['stop'])),
                      },
                      [
                        createVNode(
                          _component_el_input,
                          {
                            class: 'dropdown-search',
                            placeholder: '搜索',
                            clearable: '',
                            modelValue: _ctx.searchKeyword,
                            'onUpdate:modelValue':
                              _cache[1] || (_cache[1] = ($event) => (_ctx.searchKeyword = $event)),
                            onClick: _cache[2] || (_cache[2] = withModifiers(() => {}, ['stop'])),
                            onClear:
                              _cache[3] || (_cache[3] = ($event) => (_ctx.searchKeyword = '')),
                          },
                          null,
                          8 /* PROPS */,
                          ['modelValue']
                        ),
                        createElementVNode('div', _hoisted_8, [
                          (openBlock(true),
                          createElementBlock(
                            Fragment,
                            null,
                            renderList(_ctx.filteredHiddenDates, (item, index) => {
                              return (
                                openBlock(),
                                createElementBlock(
                                  'div',
                                  {
                                    class: normalizeClass([
                                      'dropdown-item',
                                      { active: _ctx.activeIndex === item.index },
                                    ]),
                                    key: `${item.detail_id}-${item.index}-${index}`,
                                    onClick: ($event) => _ctx.handleDropdownDateClick(item.index),
                                  },
                                  toDisplayString(item.date),
                                  11 /* TEXT, CLASS, PROPS */,
                                  _hoisted_9
                                )
                              );
                            }),
                            128 /* KEYED_FRAGMENT */
                          )),
                        ]),
                      ]
                    ))
                  : createCommentVNode('v-if', true),
                !_ctx.state.isView
                  ? (openBlock(),
                    createElementBlock(
                      'div',
                      {
                        key: 2,
                        class: 'date-add-btn',
                        onClick:
                          _cache[5] ||
                          (_cache[5] = withModifiers(
                            (...args) => _ctx.addNewDate && _ctx.addNewDate(...args),
                            ['stop']
                          )),
                      },
                      '+'
                    ))
                  : createCommentVNode('v-if', true),
              ],
              512 /* NEED_PATCH */
            ),
          ]),
        ],
        2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )
    );
  } // 动态加载依赖组件
  async function loadComponent(pageCode) {
    if (!window[`recordTimeComponent`]) {
      try {
        await window.ComponentLoader.loadComponent(pageCode);
      } catch (error) {
        console.error(`加载依赖组件 recordTimeComponent 失败:`, error);
        // 返回一个兜底组件
        window[`recordTimeComponent`] = { template: '<div>Failed to load component</div>' };
      }
    }
  }

  // 注册组件到全局
  window.recordTimeComponent = {
    ...componentOptions,
    render,
  };
})();
