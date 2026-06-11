/**
 * 自动编译的Vue组件: gztLeftMessageEditComponent
 * 适配低代码平台，不使用import/export语法
 */
(function () {
  const componentOptions = {
    setup() {
      const rootData = inject('root');
      const global = reactive({
        ...toRefs(rootData),
      });
      // 表单引用
      const formRef = ref(null);
      // 解构全局传入的参数，包含操作类型和数据
      const {
        dialogParams: { type, data },
      } = global;
      // 表单数据，编辑时初始化为传入的数据，新增时初始化为空
      const formData = reactive(
        type === 'add'
          ? { ntitle: '', code_ntype: '', ncontent: '' }
          : {
              n_id: data.N_ID,
              ntitle: data.NTITLE,
              ncontent: data.NCONTENT,
              code_ntype: data.CODE_NTYPE,
              code_ntop: data.CODE_NTOP,
              pub_time: data.PUB_TIME,
              adduser: data.ADDUSER,
              addtime: data.ADDTIME,
              code_adduser: data.CODE_ADDUSER,
              isornodelete: data.ISORNODELETE,
              update_time: data.UPDATE_TIME,
              code_ntype_name: data.CODE_NTYPE_NAME,
            }
      );
      // 表单验证规则
      const rules = reactive({
        ntitle: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        code_ntype: [{ required: true, message: '请选择类型', trigger: 'change' }],
        ncontent: [{ required: true, message: '请输入内容', trigger: 'blur' }],
      });

      // 关闭弹窗
      const handleClose = () => {
        global.dialogInstance.close();
      };

      // 获取主键
      const getPrimaryKey = async () => {
        try {
          const params = {
            interfaceId: '5afe7f17eadd89c7e69b448b609b1191',
          };
          const {
            data: {
              head: { statusCode },
              data,
            },
          } = await axios.get(`${global.npServiceBaseUrl}${global.serviceBasePath}`, {
            params,
          });
          if (statusCode !== '200') {
            throw new Error(`主键接口请求失败，状态码: ${statusCode}`);
          }
          return data?.[0]?.pkid || '';
        } catch (error) {
          console.error('获取主键失败:', error);
          throw error;
        }
      };
      // 新增保存
      const saveAdd = async () => {
        try {
          if (!formData.n_id) {
            const pkid = await getPrimaryKey();
            formData.n_id = pkid;
          }
          const params = {
            n_id: formData.n_id,
            ntitle: formData.ntitle,
            code_ntype: formData.code_ntype,
            ncontent: formData.ncontent,
            pub_time: dateFormat(new Date(), 'yyyy-MM-dd'),
          };
          const {
            data: {
              head: { statusCode },
            },
          } = await axios.post(
            `${global.npServiceBaseUrl}${global.serviceBasePath}&interfaceId=b58ad4a3e063f4f17ed1918f20c27837`,
            params
          );
          if (statusCode !== '200') {
            throw new Error(`新增保存接口请求失败，状态码: ${statusCode}`);
          }
        } catch (error) {
          throw error;
        }
      };

      // 编辑保存
      const saveEdit = async () => {
        try {
          const params = {
            ...formData,
          };
          const {
            data: {
              head: { statusCode },
            },
          } = await axios.post(
            `${global.npServiceBaseUrl}${global.serviceBasePath}&interfaceId=16018ef35acacace555799b3c13f0680`,
            params
          );
          if (statusCode !== '200') {
            throw new Error(`编辑保存接口请求失败，状态码: ${statusCode}`);
          }
        } catch (error) {
          throw error;
        }
      };
      // 提交表单
      const handleSubmit = async () => {
        const valid = await formRef.value.validate().catch(() => false);
        if (!valid) return;
        try {
          if (type === 'add') {
            await saveAdd();
          } else {
            await saveEdit();
          }
          ElementPlus.ElMessage.success('保存成功');
          rootData.rootSocket.emit(
            // 固定的消息名称，不能修改
            'message',
            {
              // 键名不能改 房间号，这里为默认值，一般无需修改，如果变量名称自己定义的则需要修改
              room: global.socketRoom,
              // 键名不能改 消息名称
              type: 'refreshNoticeList',
              // 键名不能改 消息内容 对象格式
              data: {},
            }
          );
          global.dialogInstance.close();
        } catch (error) {
          ElementPlus.ElMessage.error('保存失败');
          console.error('保存失败:', error);
        }
      };
      return {
        formRef,
        formData,
        rules,
        type,
        handleClose,
        handleSubmit,
      };
    },
  };

  const _hoisted_1 = { class: 'message-container' };
  const _hoisted_2 = {
    key: 0,
    class: 'operation',
  };

  function render(_ctx, _cache) {
    const _component_el_input = resolveComponent('el-input');
    const _component_el_form_item = resolveComponent('el-form-item');
    const _component_el_col = resolveComponent('el-col');
    const _component_el_option = resolveComponent('el-option');
    const _component_el_select = resolveComponent('el-select');
    const _component_el_row = resolveComponent('el-row');
    const _component_el_form = resolveComponent('el-form');

    return (
      openBlock(),
      createElementBlock('div', _hoisted_1, [
        createVNode(
          _component_el_form,
          {
            'label-width': '70px',
            model: _ctx.formData,
            rules: _ctx.type !== 'view' ? _ctx.rules : {},
            ref: 'formRef',
            disabled: _ctx.type === 'view',
          },
          {
            default: withCtx(() => [
              createVNode(_component_el_row, null, {
                default: withCtx(() => [
                  createVNode(_component_el_col, null, {
                    default: withCtx(() => [
                      createVNode(
                        _component_el_form_item,
                        {
                          label: '标题',
                          prop: 'ntitle',
                        },
                        {
                          default: withCtx(() => [
                            createVNode(
                              _component_el_input,
                              {
                                modelValue: _ctx.formData.ntitle,
                                'onUpdate:modelValue':
                                  _cache[0] ||
                                  (_cache[0] = ($event) => (_ctx.formData.ntitle = $event)),
                                placeholder: '请输入标题',
                                maxlength: '100',
                              },
                              null,
                              8 /* PROPS */,
                              ['modelValue']
                            ),
                          ]),
                          _: 1 /* STABLE */,
                        }
                      ),
                    ]),
                    _: 1 /* STABLE */,
                  }),
                  createVNode(_component_el_col, null, {
                    default: withCtx(() => [
                      createVNode(
                        _component_el_form_item,
                        {
                          label: '类型',
                          prop: 'code_ntype',
                        },
                        {
                          default: withCtx(() => [
                            createVNode(
                              _component_el_select,
                              {
                                'popper-append-to-body': false,
                                modelValue: _ctx.formData.code_ntype,
                                'onUpdate:modelValue':
                                  _cache[1] ||
                                  (_cache[1] = ($event) => (_ctx.formData.code_ntype = $event)),
                                placeholder: '请选择类型',
                              },
                              {
                                default: withCtx(() => [
                                  createVNode(_component_el_option, {
                                    label: '常规',
                                    value: '1',
                                  }),
                                  createVNode(_component_el_option, {
                                    label: '重要',
                                    value: '2',
                                  }),
                                ]),
                                _: 1 /* STABLE */,
                              },
                              8 /* PROPS */,
                              ['modelValue']
                            ),
                          ]),
                          _: 1 /* STABLE */,
                        }
                      ),
                    ]),
                    _: 1 /* STABLE */,
                  }),
                  createVNode(_component_el_col, null, {
                    default: withCtx(() => [
                      createVNode(
                        _component_el_form_item,
                        {
                          label: '内容',
                          prop: 'ncontent',
                        },
                        {
                          default: withCtx(() => [
                            createVNode(
                              _component_el_input,
                              {
                                type: 'textarea',
                                modelValue: _ctx.formData.ncontent,
                                'onUpdate:modelValue':
                                  _cache[2] ||
                                  (_cache[2] = ($event) => (_ctx.formData.ncontent = $event)),
                                maxlength: '1024',
                                'show-word-limit': '',
                                resize: 'none',
                                rows: '9',
                                placeholder: '请输入内容',
                              },
                              null,
                              8 /* PROPS */,
                              ['modelValue']
                            ),
                          ]),
                          _: 1 /* STABLE */,
                        }
                      ),
                    ]),
                    _: 1 /* STABLE */,
                  }),
                ]),
                _: 1 /* STABLE */,
              }),
            ]),
            _: 1 /* STABLE */,
          },
          8 /* PROPS */,
          ['model', 'rules', 'disabled']
        ),
        _ctx.type !== 'view'
          ? (openBlock(),
            createElementBlock('div', _hoisted_2, [
              createElementVNode(
                'div',
                {
                  class: 'btn',
                  onClick:
                    _cache[3] ||
                    (_cache[3] = (...args) => _ctx.handleClose && _ctx.handleClose(...args)),
                },
                '取消'
              ),
              createElementVNode(
                'div',
                {
                  class: 'btn',
                  onClick:
                    _cache[4] ||
                    (_cache[4] = (...args) => _ctx.handleSubmit && _ctx.handleSubmit(...args)),
                },
                '确定'
              ),
            ]))
          : createCommentVNode('v-if', true),
      ])
    );
  } // 动态加载依赖组件
  async function loadComponent(pageCode) {
    if (!window[`gztLeftMessageEditComponent`]) {
      try {
        await window.ComponentLoader.loadComponent(pageCode);
      } catch (error) {
        console.error(`加载依赖组件 gztLeftMessageEditComponent 失败:`, error);
        // 返回一个兜底组件
        window[`gztLeftMessageEditComponent`] = { template: '<div>Failed to load component</div>' };
      }
    }
  }

  // 注册组件到全局
  window.gztLeftMessageEditComponent = {
    ...componentOptions,
    render,
  };
})();
