window.waterToolComponent = {
template: 
`<div id="t-l-c-waterTool" class="t-l-c-waterTool" >` +
`<t-rect id="t-rect-45af.01032752f" class="waterTool-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-f3ba.93cf9e9cd" class="waterTool-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-image-base id="t-image-base-92aa.488dda203" class="waterTool-t-image-base-0-2"  :src="tImageBasex0x2ComputedData.src" :fit="tImageBasex0x2ComputedData.fit" :c-style="tImageBasex0x2ComputedData.cStyle" @click="onclick1743409464277">` +
`</t-image-base>` +
`<t-text id="t-text-d70d.c56fc6b5b" class="waterTool-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-a042.54ffa9fb9" class="waterTool-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-c0ac.fb11f9839" class="waterTool-t-text-0-5"  :label="tTextx0x5ComputedData.label" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-1f3a.3dd871dfb" class="waterTool-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-576a.2329f43c7" class="waterTool-t-text-0-7"  :label="tTextx0x7ComputedData.label" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-a468.88b80669a" class="waterTool-t-text-0-8"  :label="tTextx0x8ComputedData.label" :editable="tTextx0x8ComputedData.editable" :c-style="tTextx0x8ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-8b35.73f8fb526" class="waterTool-t-text-0-9"  :label="tTextx0x9ComputedData.label" :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-abdd.34e5eb83f" class="waterTool-t-text-0-10"  :label="tTextx0x10ComputedData.label" :editable="tTextx0x10ComputedData.editable" :c-style="tTextx0x10ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-0bb7.44bc3e505" class="waterTool-t-text-0-11"  :label="tTextx0x11ComputedData.label" :editable="tTextx0x11ComputedData.editable" :c-style="tTextx0x11ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-16a1.b56e4d49" class="waterTool-t-text-0-12"  :label="tTextx0x12ComputedData.label" :editable="tTextx0x12ComputedData.editable" :c-style="tTextx0x12ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-392d.966a8f4f6" class="waterTool-t-text-0-13"  :label="tTextx0x13ComputedData.label" :editable="tTextx0x13ComputedData.editable" :c-style="tTextx0x13ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-5bde.850813ac3" class="waterTool-t-text-0-14"  :label="tTextx0x14ComputedData.label" :editable="tTextx0x14ComputedData.editable" :c-style="tTextx0x14ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-984c.6f6a220f6" class="waterTool-t-text-0-15"  :label="tTextx0x15ComputedData.label" :editable="tTextx0x15ComputedData.editable" :c-style="tTextx0x15ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-e008.c9cd44427" class="waterTool-t-text-0-16"  :label="tTextx0x16ComputedData.label" :editable="tTextx0x16ComputedData.editable" :c-style="tTextx0x16ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-2c12.d3a33fc31" class="waterTool-t-text-0-17"  :label="tTextx0x17ComputedData.label" :editable="tTextx0x17ComputedData.editable" :c-style="tTextx0x17ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-1516.e6d52d7f7" class="waterTool-t-text-0-18"  :label="tTextx0x18ComputedData.label" :editable="tTextx0x18ComputedData.editable" :c-style="tTextx0x18ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-a771.587e67d8d" class="waterTool-t-text-0-19"  :label="global.toolName" :editable="tTextx0x19ComputedData.editable" :c-style="tTextx0x19ComputedData.cStyle">` +
`</t-text>` +
`<t-image-base id="t-image-base-c90e.b04feffff" class="waterTool-t-image-base-0-20"  :src="tImageBasex0x20ComputedData.src" :fit="tImageBasex0x20ComputedData.fit" :c-style="tImageBasex0x20ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base id="t-image-base-8cac.2e6184d7a" class="waterTool-t-image-base-0-21"  :src="tImageBasex0x21ComputedData.src" :fit="tImageBasex0x21ComputedData.fit" :c-style="tImageBasex0x21ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base id="t-image-base-42b4.378ee15dd" class="waterTool-t-image-base-0-22"  :src="tImageBasex0x22ComputedData.src" :fit="tImageBasex0x22ComputedData.fit" :c-style="tImageBasex0x22ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base id="t-image-base-0338.36dd94b22" class="waterTool-t-image-base-0-23"  :src="tImageBasex0x23ComputedData.src" :fit="tImageBasex0x23ComputedData.fit" :c-style="tImageBasex0x23ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base id="t-image-base-f475.44667ac9f" class="waterTool-t-image-base-0-24"  :src="tImageBasex0x24ComputedData.src" :fit="tImageBasex0x24ComputedData.fit" :c-style="tImageBasex0x24ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base id="t-image-base-28b5.e5d64edcd" class="waterTool-t-image-base-0-25"  :src="tImageBasex0x25ComputedData.src" :fit="tImageBasex0x25ComputedData.fit" :c-style="tImageBasex0x25ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base id="t-image-base-27e7.7e59010af" class="waterTool-t-image-base-0-26"  :src="tImageBasex0x26ComputedData.src" :fit="tImageBasex0x26ComputedData.fit" :c-style="tImageBasex0x26ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base id="t-image-base-8d27.06004c651" class="waterTool-t-image-base-0-27"  :src="tImageBasex0x27ComputedData.src" :fit="tImageBasex0x27ComputedData.fit" :c-style="tImageBasex0x27ComputedData.cStyle">` +
`</t-image-base>` +
`<t-rect id="t-rect-0b36.8dfdb5a98" class="waterTool-t-rect-0-28"  :tip="tRectx0x28ComputedData.tip" :label="tRectx0x28ComputedData.label" :active="tRectx0x28ComputedData.active" :c-style="tRectx0x28ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-27bd.ce0172d7e" class="waterTool-t-rect-0-29"  :tip="tRectx0x29ComputedData.tip" :label="tRectx0x29ComputedData.label" :active="tRectx0x29ComputedData.active" :c-style="tRectx0x29ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-967c.6ac42b7ae" class="waterTool-t-rect-0-30"  :tip="tRectx0x30ComputedData.tip" :label="tRectx0x30ComputedData.label" :active="tRectx0x30ComputedData.active" :c-style="tRectx0x30ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-1ebd.e3776e2f6" class="waterTool-t-rect-0-31"  :tip="tRectx0x31ComputedData.tip" :label="tRectx0x31ComputedData.label" :active="tRectx0x31ComputedData.active" :c-style="tRectx0x31ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-45c6.4ae3c7f99" class="waterTool-t-rect-0-32"  :tip="tRectx0x32ComputedData.tip" :label="tRectx0x32ComputedData.label" :active="tRectx0x32ComputedData.active" :c-style="tRectx0x32ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-0de0.4fe5fb6a7" class="waterTool-t-rect-0-33"  :tip="tRectx0x33ComputedData.tip" :label="tRectx0x33ComputedData.label" :active="tRectx0x33ComputedData.active" :c-style="tRectx0x33ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-4d1f.c3b37e9a2" class="waterTool-t-rect-0-34"  :tip="tRectx0x34ComputedData.tip" :label="tRectx0x34ComputedData.label" :active="tRectx0x34ComputedData.active" :c-style="tRectx0x34ComputedData.cStyle">` +
`</t-rect>` +
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
   isTool: true,
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
            default: {"width":"270px","height":"333px","position":"unset","left":"0px","top":"0px","borderTopLeftRadius":"16px !important","borderTopRightRadius":"16px !important","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--t-tool-border-small)","borderTop":"1px solid var(--t-tool-border-small)","borderRight":"1px solid var(--t-tool-border-small)","borderBottom":"1px solid var(--t-tool-border-small)","backgroundColor":"var(--t-tool-small-bg)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"270px","height":"333px","position":"unset","left":"0px","top":"0px","borderTopLeftRadius":"16px !important","borderTopRightRadius":"16px !important","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--t-tool-border-small)","borderTop":"1px solid var(--t-tool-border-small)","borderRight":"1px solid var(--t-tool-border-small)","borderBottom":"1px solid var(--t-tool-border-small)","backgroundColor":"var(--t-tool-small-bg)"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"270px","height":"40px","borderLeft":"0px none","borderTop":"0px none","borderRight":"0px none","borderBottom":"1px solid var(--t-tool-border-small)","borderImage":"var(--t-tool-fgx) 0 0 1 0","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"270px","height":"40px","borderLeft":"0px none","borderTop":"0px none","borderRight":"0px none","borderBottom":"1px solid var(--t-tool-border-small)","borderImage":"var(--t-tool-fgx) 0 0 1 0","position":"unset","left":"0px","top":"0px"}}}, 
 },
},
tImageBasex0x2: {
defaultStyle: {
            default: {"width":"20px","height":"20px","position":"unset","left":"236px","top":"10px","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-03-31/0176f3574d5c43fb9b0405556b7aac7a.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"20px","height":"20px","position":"unset","left":"236px","top":"10px","animationName":"","cursor":"pointer"}}}, 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"52px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"155px","top":"270px","animationName":""},
            
            },
 default: { 
 
label:"劣Ⅴ类",
editable:false,
cStyle:{"wrapper":{"default":{"width":"52px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"155px","top":"270px","animationName":""}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"32px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"155px","top":"238px","animationName":""},
            
            },
 default: { 
 
label:"Ⅳ类",
editable:false,
cStyle:{"wrapper":{"default":{"width":"32px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"155px","top":"238px","animationName":""}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"32px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"155px","top":"206px","animationName":""},
            
            },
 default: { 
 
label:"Ⅱ类",
editable:false,
cStyle:{"wrapper":{"default":{"width":"32px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"155px","top":"206px","animationName":""}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"52px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"57px","top":"302px","animationName":""},
            
            },
 default: { 
 
label:"无数据",
editable:false,
cStyle:{"wrapper":{"default":{"width":"52px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"57px","top":"302px","animationName":""}}}, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"32px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"57px","top":"270px","animationName":""},
            
            },
 default: { 
 
label:"Ⅴ类",
editable:false,
cStyle:{"wrapper":{"default":{"width":"32px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"57px","top":"270px","animationName":""}}}, 
 },
},
tTextx0x8: {
defaultStyle: {
            default: {"width":"32px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"57px","top":"238px","animationName":""},
            
            },
 default: { 
 
label:"Ⅲ类",
editable:false,
cStyle:{"wrapper":{"default":{"width":"32px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"57px","top":"238px","animationName":""}}}, 
 },
},
tTextx0x9: {
defaultStyle: {
            default: {"width":"32px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"57px","top":"206px","animationName":""},
            
            },
 default: { 
 
label:"Ⅰ类",
editable:false,
cStyle:{"wrapper":{"default":{"width":"32px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"57px","top":"206px","animationName":""}}}, 
 },
},
tTextx0x10: {
defaultStyle: {
            default: {"width":"64px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"148px","top":"174px","animationName":""},
            
            },
 default: { 
 
label:"其他报警",
editable:false,
cStyle:{"wrapper":{"default":{"width":"64px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"148px","top":"174px","animationName":""}}}, 
 },
},
tTextx0x11: {
defaultStyle: {
            default: {"width":"32px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"49px","top":"174px","animationName":""},
            
            },
 default: { 
 
label:"其他",
editable:false,
cStyle:{"wrapper":{"default":{"width":"32px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"49px","top":"174px","animationName":""}}}, 
 },
},
tTextx0x12: {
defaultStyle: {
            default: {"width":"64px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"148px","top":"109px","animationName":""},
            
            },
 default: { 
 
label:"省控报警",
editable:false,
cStyle:{"wrapper":{"default":{"width":"64px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"148px","top":"109px","animationName":""}}}, 
 },
},
tTextx0x13: {
defaultStyle: {
            default: {"width":"32px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"49px","top":"110px","animationName":""},
            
            },
 default: { 
 
label:"省控",
editable:false,
cStyle:{"wrapper":{"default":{"width":"32px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"49px","top":"110px","animationName":""}}}, 
 },
},
tTextx0x14: {
defaultStyle: {
            default: {"width":"64px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"148px","top":"142px","animationName":""},
            
            },
 default: { 
 
label:"市控报警",
editable:false,
cStyle:{"wrapper":{"default":{"width":"64px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"148px","top":"142px","animationName":""}}}, 
 },
},
tTextx0x15: {
defaultStyle: {
            default: {"width":"32px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"50px","top":"142px","animationName":""},
            
            },
 default: { 
 
label:"市控",
editable:false,
cStyle:{"wrapper":{"default":{"width":"32px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"50px","top":"142px","animationName":""}}}, 
 },
},
tTextx0x16: {
defaultStyle: {
            default: {"width":"64px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"148px","top":"78px","animationName":""},
            
            },
 default: { 
 
label:"国控报警",
editable:false,
cStyle:{"wrapper":{"default":{"width":"64px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"148px","top":"78px","animationName":""}}}, 
 },
},
tTextx0x17: {
defaultStyle: {
            default: {"width":"32px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"49px","top":"78px","animationName":""},
            
            },
 default: { 
 
label:"国控",
editable:false,
cStyle:{"wrapper":{"default":{"width":"32px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"49px","top":"78px","animationName":""}}}, 
 },
},
tTextx0x18: {
defaultStyle: {
            default: {"width":"32px","height":"16px","color":"#fff","fontSize":"16px","lineHeight":"16px","position":"unset","left":"16px","top":"12px"},
            
            },
 default: { 
 
label:"图例",
editable:false,
cStyle:{"wrapper":{"default":{"width":"32px","height":"16px","color":"#fff","fontSize":"16px","lineHeight":"16px","position":"unset","left":"16px","top":"12px"}}}, 
 },
},
tTextx0x19: {
defaultStyle: {
            default: {"width":"238px","height":"16px","color":"#00FFFF","fontSize":"14px","lineHeight":"16px","position":"unset","left":"18px","top":"50px","animationName":""},
            
            },
 default: { 
 
label:"大气监测站",
editable:false,
cStyle:{"wrapper":{"default":{"width":"238px","height":"16px","color":"#00FFFF","fontSize":"14px","lineHeight":"16px","position":"unset","left":"18px","top":"50px","animationName":""}}}, 
 },
},
tImageBasex0x20: {
defaultStyle: {
            default: {"width":"26px","height":"26px","position":"unset","left":"116px","top":"168px","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-03-31/97417125b0cc47ea96ea7ca4e1cafefc.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"26px","height":"26px","position":"unset","left":"116px","top":"168px","animationName":""}}}, 
 },
},
tImageBasex0x21: {
defaultStyle: {
            default: {"width":"26px","height":"26px","position":"unset","left":"18px","top":"168px","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-03-31/71bd3cde0b3845cf9476ad5ee0db5d6b.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"26px","height":"26px","position":"unset","left":"18px","top":"168px","animationName":""}}}, 
 },
},
tImageBasex0x22: {
defaultStyle: {
            default: {"width":"26px","height":"26px","position":"unset","left":"116px","top":"136px","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-03-31/38ee756227a6477f81685220f26acbeb.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"26px","height":"26px","position":"unset","left":"116px","top":"136px","animationName":""}}}, 
 },
},
tImageBasex0x23: {
defaultStyle: {
            default: {"width":"26px","height":"26px","position":"unset","left":"116px","top":"103px","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-03-31/8423b77adf9240babe14357811545389.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"26px","height":"26px","position":"unset","left":"116px","top":"103px","animationName":""}}}, 
 },
},
tImageBasex0x24: {
defaultStyle: {
            default: {"width":"26px","height":"26px","position":"unset","left":"18px","top":"104px","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-03-31/a47bce78a174404ab2d72c977482f9cf.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"26px","height":"26px","position":"unset","left":"18px","top":"104px","animationName":""}}}, 
 },
},
tImageBasex0x25: {
defaultStyle: {
            default: {"width":"26px","height":"26px","position":"unset","left":"19px","top":"136px","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-03-31/9a63b87457374f46a146edd95a3dbd0c.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"26px","height":"26px","position":"unset","left":"19px","top":"136px","animationName":""}}}, 
 },
},
tImageBasex0x26: {
defaultStyle: {
            default: {"width":"26px","height":"26px","position":"unset","left":"116px","top":"72px","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-03-31/72b99233cd9044fc9d332776e70b79df.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"26px","height":"26px","position":"unset","left":"116px","top":"72px","animationName":""}}}, 
 },
},
tImageBasex0x27: {
defaultStyle: {
            default: {"width":"26px","height":"26px","position":"unset","left":"18px","top":"72px"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-03-31/c6479eb8974d4cf19eb9f21bd5c985b0.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"26px","height":"26px","position":"unset","left":"18px","top":"72px"}}}, 
 },
},
tRectx0x28: {
defaultStyle: {
            default: {"width":"26px","height":"26px","backgroundColor":"rgba(247, 108, 89, 1)","borderLeft":"1px solid #fff","borderTop":"1px solid #fff","borderRight":"1px solid #fff","borderBottom":"1px solid #fff","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","position":"unset","left":"116px","top":"264px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"26px","height":"26px","backgroundColor":"rgba(247, 108, 89, 1)","borderLeft":"1px solid #fff","borderTop":"1px solid #fff","borderRight":"1px solid #fff","borderBottom":"1px solid #fff","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","position":"unset","left":"116px","top":"264px","animationName":""}}}, 
 },
},
tRectx0x29: {
defaultStyle: {
            default: {"width":"26px","height":"26px","backgroundColor":"rgba(254, 201, 50, 1)","borderLeft":"1px solid #fff","borderTop":"1px solid #fff","borderRight":"1px solid #fff","borderBottom":"1px solid #fff","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","position":"unset","left":"116px","top":"232px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"26px","height":"26px","backgroundColor":"rgba(254, 201, 50, 1)","borderLeft":"1px solid #fff","borderTop":"1px solid #fff","borderRight":"1px solid #fff","borderBottom":"1px solid #fff","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","position":"unset","left":"116px","top":"232px","animationName":""}}}, 
 },
},
tRectx0x30: {
defaultStyle: {
            default: {"width":"26px","height":"26px","backgroundColor":"rgba(14, 143, 235, 1)","borderLeft":"1px solid #fff","borderTop":"1px solid #fff","borderRight":"1px solid #fff","borderBottom":"1px solid #fff","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","position":"unset","left":"116px","top":"200px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"26px","height":"26px","backgroundColor":"rgba(14, 143, 235, 1)","borderLeft":"1px solid #fff","borderTop":"1px solid #fff","borderRight":"1px solid #fff","borderBottom":"1px solid #fff","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","position":"unset","left":"116px","top":"200px","animationName":""}}}, 
 },
},
tRectx0x31: {
defaultStyle: {
            default: {"width":"26px","height":"26px","backgroundColor":"rgba(171, 170, 170, 1)","borderLeft":"1px solid #fff","borderTop":"1px solid #fff","borderRight":"1px solid #fff","borderBottom":"1px solid #fff","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","position":"unset","left":"18px","top":"296px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"26px","height":"26px","backgroundColor":"rgba(171, 170, 170, 1)","borderLeft":"1px solid #fff","borderTop":"1px solid #fff","borderRight":"1px solid #fff","borderBottom":"1px solid #fff","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","position":"unset","left":"18px","top":"296px","animationName":""}}}, 
 },
},
tRectx0x32: {
defaultStyle: {
            default: {"width":"26px","height":"26px","backgroundColor":"rgba(254, 138, 94, 1)","borderLeft":"1px solid #fff","borderTop":"1px solid #fff","borderRight":"1px solid #fff","borderBottom":"1px solid #fff","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","position":"unset","left":"18px","top":"264px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"26px","height":"26px","backgroundColor":"rgba(254, 138, 94, 1)","borderLeft":"1px solid #fff","borderTop":"1px solid #fff","borderRight":"1px solid #fff","borderBottom":"1px solid #fff","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","position":"unset","left":"18px","top":"264px","animationName":""}}}, 
 },
},
tRectx0x33: {
defaultStyle: {
            default: {"width":"26px","height":"26px","backgroundColor":"rgba(100, 201, 120, 1)","borderLeft":"1px solid #fff","borderTop":"1px solid #fff","borderRight":"1px solid #fff","borderBottom":"1px solid #fff","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","position":"unset","left":"18px","top":"232px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"26px","height":"26px","backgroundColor":"rgba(100, 201, 120, 1)","borderLeft":"1px solid #fff","borderTop":"1px solid #fff","borderRight":"1px solid #fff","borderBottom":"1px solid #fff","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","position":"unset","left":"18px","top":"232px","animationName":""}}}, 
 },
},
tRectx0x34: {
defaultStyle: {
            default: {"width":"26px","height":"26px","backgroundColor":"rgba(116, 191, 247, 1)","borderLeft":"1px solid #fff","borderTop":"1px solid #fff","borderRight":"1px solid #fff","borderBottom":"1px solid #fff","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","position":"unset","left":"18px","top":"200px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"26px","height":"26px","backgroundColor":"rgba(116, 191, 247, 1)","borderLeft":"1px solid #fff","borderTop":"1px solid #fff","borderRight":"1px solid #fff","borderBottom":"1px solid #fff","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","position":"unset","left":"18px","top":"200px"}}}, 
 },
},
});
const onclick1743409464277 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'isTool',
                    value:true,
                    data: {
                      isTool: true
                    },
                  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-waterTool', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-waterTool', global.appScaleMode, 'normal');
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

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tTextx0x8ComputedData = computed(() => _.merge({}, componentState.tTextx0x8.default, componentState.tTextx0x8?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tTextx0x10ComputedData = computed(() => _.merge({}, componentState.tTextx0x10.default, componentState.tTextx0x10?.[state.screenSize]));

 const tTextx0x11ComputedData = computed(() => _.merge({}, componentState.tTextx0x11.default, componentState.tTextx0x11?.[state.screenSize]));

 const tTextx0x12ComputedData = computed(() => _.merge({}, componentState.tTextx0x12.default, componentState.tTextx0x12?.[state.screenSize]));

 const tTextx0x13ComputedData = computed(() => _.merge({}, componentState.tTextx0x13.default, componentState.tTextx0x13?.[state.screenSize]));

 const tTextx0x14ComputedData = computed(() => _.merge({}, componentState.tTextx0x14.default, componentState.tTextx0x14?.[state.screenSize]));

 const tTextx0x15ComputedData = computed(() => _.merge({}, componentState.tTextx0x15.default, componentState.tTextx0x15?.[state.screenSize]));

 const tTextx0x16ComputedData = computed(() => _.merge({}, componentState.tTextx0x16.default, componentState.tTextx0x16?.[state.screenSize]));

 const tTextx0x17ComputedData = computed(() => _.merge({}, componentState.tTextx0x17.default, componentState.tTextx0x17?.[state.screenSize]));

 const tTextx0x18ComputedData = computed(() => _.merge({}, componentState.tTextx0x18.default, componentState.tTextx0x18?.[state.screenSize]));

 const tTextx0x19ComputedData = computed(() => _.merge({}, componentState.tTextx0x19.default, componentState.tTextx0x19?.[state.screenSize]));

 const tImageBasex0x20ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x20.default, componentState.tImageBasex0x20?.[state.screenSize]));

 const tImageBasex0x21ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x21.default, componentState.tImageBasex0x21?.[state.screenSize]));

 const tImageBasex0x22ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x22.default, componentState.tImageBasex0x22?.[state.screenSize]));

 const tImageBasex0x23ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x23.default, componentState.tImageBasex0x23?.[state.screenSize]));

 const tImageBasex0x24ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x24.default, componentState.tImageBasex0x24?.[state.screenSize]));

 const tImageBasex0x25ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x25.default, componentState.tImageBasex0x25?.[state.screenSize]));

 const tImageBasex0x26ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x26.default, componentState.tImageBasex0x26?.[state.screenSize]));

 const tImageBasex0x27ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x27.default, componentState.tImageBasex0x27?.[state.screenSize]));

 const tRectx0x28ComputedData = computed(() => _.merge({}, componentState.tRectx0x28.default, componentState.tRectx0x28?.[state.screenSize]));

 const tRectx0x29ComputedData = computed(() => _.merge({}, componentState.tRectx0x29.default, componentState.tRectx0x29?.[state.screenSize]));

 const tRectx0x30ComputedData = computed(() => _.merge({}, componentState.tRectx0x30.default, componentState.tRectx0x30?.[state.screenSize]));

 const tRectx0x31ComputedData = computed(() => _.merge({}, componentState.tRectx0x31.default, componentState.tRectx0x31?.[state.screenSize]));

 const tRectx0x32ComputedData = computed(() => _.merge({}, componentState.tRectx0x32.default, componentState.tRectx0x32?.[state.screenSize]));

 const tRectx0x33ComputedData = computed(() => _.merge({}, componentState.tRectx0x33.default, componentState.tRectx0x33?.[state.screenSize]));

 const tRectx0x34ComputedData = computed(() => _.merge({}, componentState.tRectx0x34.default, componentState.tRectx0x34?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tImageBasex0x2ComputedData,
tTextx0x3ComputedData,
tTextx0x4ComputedData,
tTextx0x5ComputedData,
tTextx0x6ComputedData,
tTextx0x7ComputedData,
tTextx0x8ComputedData,
tTextx0x9ComputedData,
tTextx0x10ComputedData,
tTextx0x11ComputedData,
tTextx0x12ComputedData,
tTextx0x13ComputedData,
tTextx0x14ComputedData,
tTextx0x15ComputedData,
tTextx0x16ComputedData,
tTextx0x17ComputedData,
tTextx0x18ComputedData,
tTextx0x19ComputedData,
tImageBasex0x20ComputedData,
tImageBasex0x21ComputedData,
tImageBasex0x22ComputedData,
tImageBasex0x23ComputedData,
tImageBasex0x24ComputedData,
tImageBasex0x25ComputedData,
tImageBasex0x26ComputedData,
tImageBasex0x27ComputedData,
tRectx0x28ComputedData,
tRectx0x29ComputedData,
tRectx0x30ComputedData,
tRectx0x31ComputedData,
tRectx0x32ComputedData,
tRectx0x33ComputedData,
tRectx0x34ComputedData,
onclick1743409464277,
};
},
};