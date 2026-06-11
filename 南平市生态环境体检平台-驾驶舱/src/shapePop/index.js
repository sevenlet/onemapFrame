window.shapePopComponent = {
template: 
`<div id="t-l-c-shapePop" class="t-l-c-shapePop" >` +
`<t-rect id="t-rect-3c13.6e224e776" class="shapePop-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-2cd7.52675fc69" class="shapePop-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle" @click="onclick1740548332151">` +
`</t-rect>` +
`<t-image-base id="t-image-base-ec39.f27e7b9d" class="shapePop-t-image-base-0-2"  :src="tImageBasex0x2ComputedData.src" :fit="tImageBasex0x2ComputedData.fit" :c-style="tImageBasex0x2ComputedData.cStyle" @click="onclick1740548271944">` +
`</t-image-base>` +
`<t-text id="t-text-9c3c.d2567349c" class="shapePop-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle" @click="onclick1740548150268">` +
`</t-text>` +
`<t-rect id="t-rect-39ea.51f8eb66d" class="shapePop-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle" @mouseout="onmouseout1739860368382" @click="onclick1739860539449">` +
`</t-rect>` +
`<t-rect id="t-rect-5094.9a9212dbc" class="shapePop-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle" @mouseover="onmouseover1739345261051">` +
`</t-rect>` +
`<t-table v-if="global.isTable === false" id="t-table-cd94.07e04356d" class="shapePop-t-table-0-6"  :height="tTablex0x6ComputedData.height" :stripe="tTablex0x6ComputedData.stripe" :border="tTablex0x6ComputedData.border" :auto-scroll="tTablex0x6ComputedData.autoScroll" :speed="tTablex0x6ComputedData.speed" :columns="state.clmData" :data="state.cityData" :default-sort="tTablex0x6ComputedData.defaultSort" :c-style="tTablex0x6ComputedData.cStyle" :highlight-current-row="tTablex0x6ComputedData.highlightCurrentRow" @cell-click="oncellClick1740373920320">` +
`</t-table>` +
`<t-text id="t-text-0849.df06c90a6" class="shapePop-t-text-0-7"  :label="tTextx0x7ComputedData.label" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle">` +
`</t-text>` +
`<t-component v-if="global.isTable === true" id="t-component-5861.721508ded" class="shapePop-t-component-0-8"  :name="tComponentx0x8ComputedData.name" :c-style="tComponentx0x8ComputedData.cStyle" :src="tComponentx0x8ComputedData.src" :component-name="tComponentx0x8ComputedData.componentName">` +
`</t-component>` +
`</div>` +
'',
setup() {
// 页面内注入全局变量和事件
const rootData = inject('root');
const global = reactive({
...toRefs(rootData)
});
// 路由
const route = useRoute();
// 创建 DOM 引用

// 当前页面使用的变量
const state = Vue.reactive({
   screenSize: "",
   code: "",
   clmData: [],
   isClose: false,
   cityData: [],
});
// 选中的图表主题
const activeChartTheme = computed(() => {
const activeTheme = _.cloneDeep(themes.find((item) => item.name === global.activeTheme));
return activeTheme.chartVariables;
});
// 选中的图表主题的options
const activeChartThemeOptions = computed(() => {
if (activeChartTheme.value) {
// 公用的主题配置
const themeConfig = {
backgroundColor: activeChartTheme.value.backgroundColor, // 背景色
color: activeChartTheme.value.color, // 系列颜色
title: activeChartTheme.value.title, // 标题
legend: activeChartTheme.value.legend, // 图例
tooltip: activeChartTheme.value.tooltip, // 提示框
xAxis: activeChartTheme.value.categoryAxis, // x轴
yAxis: activeChartTheme.value.valueAxis, // y轴
};
return themeConfig;
} else {
return {};
}
});
// 当前页面中组件的属性
const componentState = Vue.reactive({
tRectx0x0: {
defaultStyle: {
            default: {"width":"964px","height":"583px","position":"unset","left":"478px","top":"249px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"964px 583px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"964px","height":"583px","position":"unset","left":"478px","top":"249px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"964px 583px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"120px","height":"32px","borderLeft":"1px solid var(--select-mb-color)","borderTop":"1px solid var(--select-mb-color)","borderRight":"1px solid var(--select-mb-color)","borderBottom":"1px solid var(--select-mb-color)","backgroundColor":"var(--select-bg-color)","top":"270px","position":"unset","left":"1219px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"32px","borderLeft":"1px solid var(--select-mb-color)","borderTop":"1px solid var(--select-mb-color)","borderRight":"1px solid var(--select-mb-color)","borderBottom":"1px solid var(--select-mb-color)","backgroundColor":"var(--select-bg-color)","top":"270px","position":"unset","left":"1219px","cursor":"pointer"}}}, 
 },
},
tImageBasex0x2: {
defaultStyle: {
            default: {"width":"20px","height":"20px","backgroundImage":"","-webkit-mask-image":"var(--t-shape-pz-tb)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"20px 20px","backgroundPosition":"","-webkit-mask-position":"0% 0%","position":"unset","left":"1229px","top":"276px","backgroundColor":"var(--t-color-text-green)","cursor":"pointer"},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"20px","height":"20px","backgroundImage":"","-webkit-mask-image":"var(--t-shape-pz-tb)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"20px 20px","backgroundPosition":"","-webkit-mask-position":"0% 0%","position":"unset","left":"1229px","top":"276px","backgroundColor":"var(--t-color-text-green)","cursor":"pointer"}}}, 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"69px","height":"18px","color":"var(--t-color-text-green)","lineHeight":"18px","top":"277px","left":"1258px","position":"unset","cursor":"pointer"},
            
            },
 default: { 
 
label:"指标配置",
editable:false,
cStyle:{"wrapper":{"default":{"width":"69px","height":"18px","color":"var(--t-color-text-green)","lineHeight":"18px","top":"277px","left":"1258px","position":"unset","cursor":"pointer"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-hg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1379px","top":"248px","animationName":"","cursor":"pointer","opacity":"100% !important"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-hg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1379px","top":"248px","animationName":"","cursor":"pointer","opacity":"100% !important"}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-mr)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1379px","top":"248px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-mr)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1379px","top":"248px","cursor":"pointer"}}}, 
 },
},
tTablex0x6: {
defaultStyle: {
            default: {"width":"auto","height":"462px","backgroundColor":"rgba(24, 37, 64, 0)","position":"unset","left":"501px","top":"345px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","paddingLeft":"0px","borderTop":"1px solid rgba(0,255,246,0.5)","max-width":"916px"},
            
            },
 default: { 
 
height:"462",
stripe:true,
border:false,
autoScroll:"rowScroll",
speed:3,
columns:[],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"auto","height":"462px","backgroundColor":"rgba(24, 37, 64, 0)","position":"unset","left":"501px","top":"345px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","paddingLeft":"0px","borderTop":"1px solid rgba(0,255,246,0.5)","max-width":"916px"}},"headerCell":{"default":{"borderBottom":"2px none rgba(26,27,31,1)","borderLeft":"1px none ","borderRight":"0px solid ","borderTop":"0px solid ","color":"rgba(255, 255, 255, 1)","width":"418px","height":"38px","backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","fontWeight":"400","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px","paddingLeft":"7px","paddingRight":"0px"}},"bodyCell":{"default":{"backgroundColor":"","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px none ","borderRight":"0px solid ","borderTop":"0px solid ","color":"rgba(255, 255, 255, 1)","height":"auto","paddingTop":"7px","paddingBottom":"7px","fontSize":"16px","paddingLeft":"7px","paddingRight":"0px","lineHeight":"24px"},"hover":{"backgroundColor":"rgba(48, 72, 173, 0)","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","fontSize":"16px","lineHeight":"24px"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(218, 24, 24, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},"hover":{"backgroundColor":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"headerRowWrapper":{"default":{"backgroundColor":"rgba(223, 44, 44, 0)","paddingLeft":"0px","paddingRight":"0px","paddingTop":"0px","backgroundImage":"var(--t-norm-dia-head)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","height":"45px"}},"rowWrapper":{"default":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","height":"41px","backgroundColor":"var(--table-bm-color)"},"hover":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"","height":"41px","box-shadow":"rgba(0, 255, 246, 1) 0px 0px 0px 1px inset"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(59, 182, 151, 0)","backgroundImage":"unset !important","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none "},"hover":{"borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","backgroundColor":"","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""}},"bodyCellInner":{"default":{"height":"22px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"highlightRow":{"default":{"height":"auto"}}},
highlightCurrentRow:false, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"280px","height":"32px","color":"#fff","fontSize":"28px","lineHeight":"32px","top":"270px","left":"558px","fontFamily":"方正综艺","position":"unset","letterSpacing":"1px"},
            
            },
 default: { 
 
label:"达到或优于Ⅲ类比例",
editable:false,
cStyle:{"wrapper":{"default":{"width":"280px","height":"32px","color":"#fff","fontSize":"28px","lineHeight":"32px","top":"270px","left":"558px","fontFamily":"方正综艺","position":"unset","letterSpacing":"1px"}}}, 
 },
},
tComponentx0x8: {
defaultStyle: {
            default: {"width":"916px","height":"470px","margin":"0 auto","backgroundColor":"rgba(0,0,0,0)","position":"unset","left":"502px","top":"339px"},
            
            },
 default: { 
 
name:"sectionDiaPopComponent",
cStyle:{"wrapper":{"default":{"width":"916px","height":"470px","margin":"0 auto","backgroundColor":"rgba(0,0,0,0)","position":"unset","left":"502px","top":"339px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/sectionDiaPop",
componentName:"sectionDiaPopComponent", 
 },
},
});
const goPage = (row,column) => {
console.log(column, row, row.xing_zheng_qu_bian_ma, '8888888888888')
if (column.property === "duan_mian_shu_liang_ge_") {
  global.isTable = true;
  global.waterCode = row.xing_zheng_qu_bian_ma;
}
};
const setDom = () => {

setTimeout(() => {
  if (document.querySelector('.el-table__empty-text')) {
    document.querySelector('.el-table__empty-text').style.display = 'block';
    document.querySelector('.el-table__empty-text').style.color = 'rgba(255,255,255,0.9)';
    document.querySelector('.el-table__empty-text').style.fontSize = '14px';
  }

},0)


};
const initParams = () => {
function removeTrailingZeros(code) {
  return code.replace(/0+$/, '');
}
state.code = removeTrailingZeros(global.REGION_CODE);
setTimeout(async () => {
  if (document.querySelector('.el-table__empty-text')) {
    document.querySelector('.el-table__empty-text').style.display = 'none';
    document.querySelector('.el-table__empty-text').style.color = 'rgba(255,255,255,0)';
  }
  await getClmData();
  setDom();
})

};
const onclick1740548332151 = () => {

window.open('http://192.168.0.202:7777/vue3-backstage-base3.0/?jdpAppCode=JDP.IDATA#/idatamicro/indicator-app/report-list');
};
const onclick1740548271944 = () => {

window.open('http://192.168.0.202:7777/vue3-backstage-base3.0/?jdpAppCode=JDP.IDATA#/idatamicro/indicator-app/report-list');
};
const onclick1740548150268 = () => {

window.open('http://192.168.0.202:7777/idata-micro/#/report-edit/3cc3980a22fc4d7aaf49a8fbda1bd829');
};
const onmouseout1739860368382 = () => {

// 显示元素并加动画
document.getElementById('t-rect-5094.9a9212dbc').style.display = 'block';
runAnimation('t-rect-5094.9a9212dbc', [""]);

// 隐藏元素并加动画
runAnimation('t-rect-39ea.51f8eb66d', [""], 'none');
};
const onclick1739860539449 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'showPop',
                    value:false,
                    data: {
                      showPop: false
                    },
                  });
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'isTable',
                    value:false,
                    data: {
                      isTable: false
                    },
                  });
};
const onmouseover1739345261051 = () => {

// 显示元素并加动画
document.getElementById('t-rect-39ea.51f8eb66d').style.display = 'block';
runAnimation('t-rect-39ea.51f8eb66d', [""]);

// 隐藏元素并加动画
runAnimation('t-rect-5094.9a9212dbc', [""], 'none');
};
const oncellClick1740373920320 = (row,column,cell,event) => {
// 执行自定义方法
goPage(row,column);
};
// 接口函数
const getClmData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"monitortime":global.waterTime,"interfaceId":"b983a1e528d0e896c7f5f14dcee885dc","region_code":state.code},}).then((res) => {
     // 成功的操作
     if (res?.data?.data) {
  state.clmData = [];
  state.cityData = res.data.data.dataPage.list;
  // 隐藏列key数组值
  const hiddenedColumnKey = res.data.data?.actions?.hiddeRowCol?.colUniqueKeyList || [];
  res.data.data.apiResultMapList.forEach((item) => {
    // 没在隐藏列里的，才添加配置
    if (!hiddenedColumnKey.includes(item.uniqueKey)) {
      if (item.resCode === "duan_mian_shu_liang_ge_") {
        state.clmData.push({
          "label": item.resName,
          "type": "default",
          "key": item.resCode,
          "stateKey": "",
          "width": "auto",
          "minWidth": "",
          "align": "center",
          "headerAlign": "center",
          "sortable": false,
          "showOverflowTooltip": false,
          "style": {
            "imageStyle": {
              "backgroundImage": "",
              "width": "14PX",
              "height": "16PX",
              "margin": "4px 0 0 0"
            },
            "fontStyle": {
              "margin": "0 2px",
              "padding": "",
              "fontWeight": "normal",
              "fontSize": "14PX",
              "color": "#00FFFF",
              "textDecoration": "underline",
              "text-underline-offset": "2px"
            },
            "cellStyle": {
              "cursor": "pointer"
            }
          },
          "infoPosition": "right"
        })
      } else {
        state.clmData.push({
          "label": item.resName,
          "type": "default",
          "key": item.resCode,
          "stateKey": "",
          "width": "auto",
          "minWidth": "",
          "align": "center",
          "headerAlign": "center",
          "sortable": false,
          "showOverflowTooltip": true,
          "style": {
            "imageStyle": {
              "backgroundImage": "",
              "width": "14PX",
              "height": "16PX",
              "margin": "4px 0 0 0"
            },
            "fontStyle": {
              "margin": "",
              "padding": "",
              "fontWeight": "normal"
            }
          },
          "infoPosition": "left",
          "infoStyle": {
            "fontStyle": {
              "color": "rgba(255, 255, 255, 1)"
            }
          }
        })
      }
    }

  })
  // state.sclmData.unshift({
  //   DICTIONARY_CODE: "",
  //   DICTIONARY_NAME: "全部",
  //   EXT1: "NULL",
  //   EXT2: "NULL",
  //   EXT3: "NULL",
  //   EXT4: "NULL"
  // })
  console.log(res, '列头');
} else {
  state.clmData = [];
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-shapePop', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onBeforeMount(() => {
// 执行自定义方法
initParams();
});
onMounted(() => {
setPageScale('t-l-c-shapePop', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tImageBasex0x2ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x2.default, componentState.tImageBasex0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tTablex0x6ComputedData = computed(() => _.merge({}, componentState.tTablex0x6.default, componentState.tTablex0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tComponentx0x8ComputedData = computed(() => _.merge({}, componentState.tComponentx0x8.default, componentState.tComponentx0x8?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tImageBasex0x2ComputedData,
tTextx0x3ComputedData,
tRectx0x4ComputedData,
tRectx0x5ComputedData,
tTablex0x6ComputedData,
tTextx0x7ComputedData,
tComponentx0x8ComputedData,
onclick1740548332151,
onclick1740548271944,
onclick1740548150268,
onmouseout1739860368382,
onclick1739860539449,
onmouseover1739345261051,
oncellClick1740373920320,
};
},
};