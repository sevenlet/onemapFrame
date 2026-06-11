
const setDomHeightValue = (domId,heightValue) => {
/**
 * 设置dom元素的高度值
 * domId: 元素id选择器值
 * heightValue：style属性中的height值（需要带单位）
 */
if (!domId || !heightValue) return;
const eleDom = document.getElementById(domId);
if (eleDom) {
  eleDom.style.height = heightValue;
}
};
const getForwardTimeList = (timeValue,forwardType,forwardCount) => {
/**
 * 往前推时间（包括当前时间）
 * timeValue: 当前时间值
 * forwardType：往前推的类型-hour、day、month、quarter、year
 * forwardCount：往前推的数值
 */
if (!timeValue) return [];
// 初始化一个数组来存储这个时间区间内的所有时间
let timesInPeriod = [];
const oneHourTime = 60 * 60 * 1000;
const oneMinuteTime = 60 * 1000;
if (forwardType === 'hour') {
  // 创建一个Date对象表示当前时间
  let currentDateTime = new Date(timeValue + ':00').getTime();
  // 循环forwardCount小时，包括当前时间
  for (let i = 0; i <= Math.abs(forwardCount); i++) {
    // 减少一小时
    let time = new Date(currentDateTime - i * oneHourTime);
    // 将每个时间点添加到数组中
    timesInPeriod.push(dateFormat(time, 'yyyy-MM-dd HH'));
  }
} else if (forwardType === 'day') {
  // 创建一个Date对象表示当前时间
  let currentDateTime = new Date(timeValue);
  // 循环forwardCount天，包括当前时间
  for (let i = 0; i <= Math.abs(forwardCount); i++) {
    // 减少一天
    let time = new Date(currentDateTime - i * 24 * oneHourTime);
    // 将每个时间点添加到数组中
    timesInPeriod.push(dateFormat(time, 'yyyy-MM-dd'));
  }
} else if (forwardType === 'month') {
  // 创建一个Date对象表示当前时间
  let currentDate = new Date(timeValue);
  let startYear = currentDate.getFullYear();
  let startMonth = currentDate.getMonth() + 1;
  // 循环forwardCount个月，包括起始月
  for (let i = 0; i <= forwardCount; i++) {
    // 计算当前的年份和月份
    let year = startYear;
    let month = startMonth - i;

    // 处理月份跨年的情况
    if (month < 1) {
      year -= 1;
      month += 12;
    }
    // 将每个月份的年月添加到数组中
    timesInPeriod.push(`${String(year)}-${String(month).padStart(2, '0')}`);
  }
} else if (forwardType === 'quarter') {
  let currentYear = Number(timeValue.split('-')[0]);
  let currentQuarter = Number(timeValue.split('-')[1]);
  // 循环forwardCount个季度，包括起始季度
  for (let i = 0; i <= forwardCount; i++) {
    // 将每个月份的年月添加到数组中
    timesInPeriod.push(`${String(currentYear)}-${String(currentQuarter)}`);
    // 如果当前季度减去1小于1，则年份减1，季度变为4
    if (currentQuarter === 1) {
      currentYear--;
      currentQuarter = 4;
    } else {
      currentQuarter--;
    }
  }
} else if (forwardType === 'year') {
  for (let i = 0; i <= Math.abs(forwardCount); i++) {
    let time = Number(timeValue) - i;
    timesInPeriod.push(dateFormat(new Date(String(time)), 'yyyy'));
  }
} else if (forwardType === 'minute') {
  // 处理分钟类型
  // 创建一个Date对象表示当前时间，注意传入的时间字符串可能没有分钟，所以我们补上":00"
  const timeStr = timeValue.length === 16 ? timeValue + ':00' : timeValue;
  let currentDateTime = new Date(timeStr).getTime();
  // 循环forwardCount个5分钟间隔，包括当前时间
  for (let i = 0; i <= Math.abs(forwardCount); i++) {
    // 减少5分钟
    let time = new Date(currentDateTime - i * 5 * oneMinuteTime);
    // 将每个时间点添加到数组中，格式为"yyyy-MM-dd HH:mm"
    timesInPeriod.push(dateFormat(time, 'yyyy-MM-dd HH:mm'));
  }
}
return timesInPeriod.reverse();
};
const getRegionLevel = (selectRegionCode) => {
/**
 * 获取行政区等级
 * @params selectRegionCode 行政区code
 */
let regionType;
if (selectRegionCode.substr(6, 3) !== '000') {
  // 镇街
  regionType = 'street';
} else if (selectRegionCode.substr(4, 2) !== '00') {
  // 县
  regionType = 'county';
} else if (selectRegionCode.substr(2, 2) !== '00') {
  // 市
  regionType = 'city';
} else {
  // 省
  regionType = 'province';
}
return regionType;
};
const getCssVariable = (key) => {
const element = document.querySelector('body'); // 获取元素
const styles = window.getComputedStyle(element); // 获取计算后的样式对象
const value = styles.getPropertyValue(key);

// let src = '';
// if(value){
//   src = value.replace('url(','').replace(')','');
// }
// return src;

if (!value) return '';

// 提取URL并修复转义 解决奇安信浏览器中地址出现转译的问题
// const url = value.replace(/^url\(["']?|["']?\)$/g, '')
//   .replace(/\\([:\/.])/g, '$1');
const url = value.replace(/^url\(["']?(.*?)["']?\)$/, '$1')
  .replace(/\\([:\/.])/g, '$1');

return url;



};
const getWaterLevelColor = (value) => {
let color = '';
// 水质级别
if (value === 'Ⅰ类' || value === 'I类') {
  color = '#ccffff';
} else if (value === 'Ⅱ类' || value === 'II类') {
  color = '#00ccff';
} else if (value === 'Ⅲ类' || value === 'III类') {
  color = '#00ff00';
} else if (value === 'Ⅳ类' || value === 'VI类') {
  color = '#ffff00';
} else if (value === 'Ⅴ类' || value === 'V类') {
  color = '#ff9b00';
} else if (value === '劣Ⅴ类' || value === '劣V类') {
  color = '#ff0000';
}

// 是否达标
if (value === '不达标') {
  color = '#FF2B2B';
} else if (value === '达标') {
  color = '#009914';
}
return color;
};
const handleNoVal = (value) => {
/**
 * @description: 处理无数据的情况
 * @param value 值
 * @return string - 返回值，如果值为空，则返回默认文本'-'
 */
const noValueText = '-';
// 如果值为 null、undefined、空字符串或 NaN，返回 '-'
if (value === null || value === undefined || value === '' || (typeof value === 'number' && isNaN(value))) {
  return noValueText;
}
return value; // 否则返回原值
};
const dateFormat = (date,sFormat) => {
/**
 * 日期对象转为日期字符串
 * @param date - 需要格式化的日期对象
 * @param sFormat - 输出格式, 默认为 yyyy-MM-dd 年：y，月：M，日：d，时：h，分：m，秒：s.
 * @example  dateFormat(new Date()) "2017-02-28"
 * @example  dateFormat(new Date(),'yyyy-MM-dd') "2017-02-28"
 * @example  dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss') "2017-02-28 09:24:00"
 * @example  dateFormat(new Date(),'hh:mm') "09:24"
 * @example  dateFormat(new Date(),'yyyy-MM-ddThh:mm:ss+08:00') "2017-02-28T09:24:00+08:00"
 * @returns {string}
 */
const time = {
  Year: 0,
  TYear: '0',
  Month: 0,
  TMonth: '0',
  Day: 0,
  TDay: '0',
  Hour: 0,
  THour: '0',
  hour: 0,
  Thour: '0',
  Minute: 0,
  TMinute: '0',
  Second: 0,
  TSecond: '0',
  Millisecond: 0,
};
if (date) {
  const tempDate = new Date(date);
  time.Year = tempDate.getFullYear();
  time.TYear = String(time.Year).substring(2);
  time.Month = tempDate.getMonth() + 1;
  time.TMonth = time.Month < 10 ? `0${time.Month}` : String(time.Month);
  time.Day = tempDate.getDate();
  time.TDay = time.Day < 10 ? `0${time.Day}` : String(time.Day);
  time.Hour = tempDate.getHours();
  time.THour = time.Hour < 10 ? `0${time.Hour}` : String(time.Hour);
  time.hour = time.Hour < 13 ? time.Hour : time.Hour - 12;
  time.Thour = time.hour < 10 ? `0${time.hour}` : String(time.hour);
  time.Minute = tempDate.getMinutes();
  time.TMinute = time.Minute < 10 ? `0${time.Minute}` : String(time.Minute);
  time.Second = tempDate.getSeconds();
  time.TSecond = time.Second < 10 ? `0${time.Second}` : String(time.Second);
  time.Millisecond = tempDate.getMilliseconds();
}

return (sFormat || 'yyyy-MM-dd')
  .replace(/yyyy/gi, String(time.Year))
  .replace(/yyy/gi, String(time.Year))
  .replace(/yy/gi, time.TYear)
  .replace(/y/gi, time.TYear)
  .replace(/MM/g, time.TMonth)
  .replace(/M/g, String(time.Month))
  .replace(/dd/gi, time.TDay)
  .replace(/d/gi, String(time.Day))
  .replace(/HH/g, time.THour)
  .replace(/H/g, String(time.Hour))
  .replace(/hh/g, time.Thour)
  .replace(/h/g, String(time.hour))
  .replace(/mm/g, time.TMinute)
  .replace(/m/g, String(time.Minute))
  .replace(/ss/gi, time.TSecond)
  .replace(/s/gi, String(time.Second))
  .replace(/fff/gi, String(time.Millisecond));
};
const getCenterIndexList = (moduleType,timeType) => {
/**
 * moduleType: 模块类型-目前涉及air
 * timeType: 时间类型-hour、day、month、quarter、year
 */
// 从公共方法里拿到下标特殊字符（后续需要的再补充）
const zreoSub = convertCharacter('下标')[0].split(' ')[0] || '0';
const oneSub = convertCharacter('下标')[0].split(' ')[1] || '1';
const twoSub = convertCharacter('下标')[0].split(' ')[2] || '2';
const threeSub = convertCharacter('下标')[0].split(' ')[3] || '3';
const fiveSub = convertCharacter('下标')[0].split(' ')[5] || '5';
if (!moduleType || !timeType) return [];
// 大气公共指标项
const airCommonIndexList = [
  {
    label: 'PM' + twoSub + '.' + fiveSub,
    name: 'PM25'
  },
  {
    label: 'PM' + oneSub + zreoSub,
    name: 'PM10'
  },
  {
    label: 'SO' + twoSub,
    name: 'SO2'
  },
  {
    label: 'NO' + twoSub,
    name: 'NO2'
  }
];
// 类型拼接值
const typeValue = `${moduleType}-${timeType}`;
// 返回指标数组数据
switch (typeValue) {
  // 大气-小时
  case 'air-hour':
    return [
      {
        label: 'AQI',
        name: 'AQI'
      },
      ...airCommonIndexList,
      // {
      //   label: 'NO',
      //   name: 'NO'
      // },
      {
        label: 'CO',
        name: 'CO'
      },
      {
        label: 'O' + threeSub,
        name: 'O3'
      },
      // {
      //   label: 'O' + threeSub + '-8h',
      //   name: 'O3_8'
      // },
    ];
  // 大气-日
  case 'air-day':
    return [
      {
        label: 'AQI',
        name: 'AQI'
      },
      ...airCommonIndexList,
      {
        label: 'O' + threeSub + '-8h',
        name: 'O3_8'
      },
      {
        label: 'CO',
        name: 'CO'
      },
      // {
      //   label: 'NO',
      //   name: 'NO'
      // },
      // {
      //   label: 'NOx',
      //   name: 'NOX'
      // },
    ];
  // 大气-月、季度、年
  case 'air-month':
  case 'air-quarter':
  case 'air-year':
    return [
      {
        label: '综合指数',
        name: 'ZHZS'
      },
      ...airCommonIndexList,
      {
        label: 'NO',
        name: 'NO'
      },
      {
        label: 'CO 95百分位数',
        name: 'CO'
      },
      {
        label: 'O' + threeSub + '-8h 90百分位数',
        name: 'O3_8'
      },
    ];
  default: return [];
}
};
const setDomVisible = (domId,isVisible) => {
/**
 * domId：元素id选择器值
 * isVisible：是否显示 true/false
 */
if (!domId) return;
// 设置dom元素的显示隐藏
const eleDom = document.getElementById(domId);
if (eleDom) {
  /**
   * 隐藏元素（如果只加opacity，隐藏后鼠标上移还能看到选项卡的title提示）
   * 如果只加visibility，transition动画属性不生效
   */
  eleDom.style.opacity = isVisible ? '1' : '0';
  eleDom.style.visibility = isVisible ? 'visible' : 'hidden';
}
};
const setDomLeftValue = (domId,leftValue) => {
/**
 * domId: 元素id选择器值
 * leftValue：style属性中的left值（需要带单位）
 */
if (!domId || !leftValue) return;
const eleDom = document.getElementById(domId);
if (eleDom) {
  eleDom.style.left = leftValue;
}
};
const setDomTopValue = (domId,topValue) => {
/**
 * domId: 元素id选择器值
 * topValue：style属性中的top值（需要带单位）
 */
if (!domId || !topValue) return;
const eleDom = document.getElementById(domId);
if (eleDom) {
  eleDom.style.top = topValue;
}
};
const handleStringSplit = (strValue,separator,arrLength) => {
/**
 * @description: 处理字符串分割
 * @param strValue 值
 * @params separator 分隔符
 * @params arrLength 限制返回的数组元素数量
 * @return 分割后的数组
 */
if (arrLength || arrLength === 0) {
  return strValue ? strValue.split(separator || ',', arrLength) : [];
}
return strValue ? strValue.split(separator || ',') : [];
};
const replacePollutionCharacter = (optionString) => {
/**
  * @description: 替换一段字符串中所有污染物为正确格式
  * @param optionString 要替换的字符串
  * @return 替换完的字符串
  */
if (!optionString) return '';
// 从公共方法里拿到下标特殊字符（后续需要的再补充）
const zreoSub = convertCharacter('下标')[0].split(' ')[0] || '0';
const oneSub = convertCharacter('下标')[0].split(' ')[1] || '1';
const twoSub = convertCharacter('下标')[0].split(' ')[2] || '2';
const threeSub = convertCharacter('下标')[0].split(' ')[3] || '3';
const fiveSub = convertCharacter('下标')[0].split(' ')[5] || '5';
// 污染物对应关系（缺少的继续补充）
const POLLUTION_CHARTS_ALL = [
  {
    name: ['O3', 'o3'],
    html: 'O' + threeSub,
  },
  {
    name: ['PM10', 'pm10'],
    html: 'PM' + oneSub + zreoSub,
  },
  {
    name: ['PM25', 'PM2_5', 'PM2.5', 'pm25', 'pm2_5', 'pm25'],
    html: 'PM' + twoSub + '.' + fiveSub,
  },
  {
    name: ['SO2', 'so2'],
    html: 'SO' + twoSub,
  },
  {
    name: ['CO2', 'co2'],
    html: 'CO' + twoSub,
  },
  {
    name: ['CODMN', 'codmn'],
    html: 'CODmn',
  },
  {
    name: ['VOCS', 'vocs'],
    html: 'VOCs',
  },
  {
    name: ['NO', 'no'],
    html: 'NO',
  },
  {
    name: ['NO2', 'no2'],
    html: 'NO' + twoSub,
  },
  {
    name: ['NH3', 'nh3'],
    html: 'NH' + threeSub,
  },
  {
    name: ['NOX', 'nox'],
    html: 'NOx',
  },
  {
    name: ['PH', 'ph'],
    html: 'pH',
  },
];
let curString = optionString;
POLLUTION_CHARTS_ALL.forEach((item) => {
  item.name.forEach((name) => {
    curString = curString.replace(name, item.html);
  });
});
return curString;
};
const filterRepeatData = (valueArr,onlyKey) => {
const resValue = new Map();
return valueArr.filter((valueItem) => !resValue.has(valueItem[onlyKey]) && resValue.set(valueItem[onlyKey], 1));
};
const getPrevTime = (endTime,type) => {
 let date = new Date(endTime);
  let year = date.getFullYear();
  let month = date.getMonth(); // 注意：getMonth() 返回 0-11
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  let startDate;

  switch (type) {
    case 'minute':
      // 往前推 1 小时（即最近 2 小时，含当前小时）
      startDate = new Date(year, month, day, hour - 1, minute, second);
      break;
    case 'hour':
      // 往前推 23 小时（即最近 24 小时，含当前小时）
      startDate = new Date(year, month, day, hour - 23, minute, second);
      break;
    case '2hour':
      // 往前推 2 小时
      startDate = new Date(year, month, day, hour - 2, minute, second);
      break;  
    case '48hour':
      // 往前推 47 小时（即最近 48 小时，含当前小时）
      startDate = new Date(year, month, day, hour - 47, minute, second);
      break;  
    case 'day':
      // 往前推 6 天（即最近 7 天，含当天）
      startDate = new Date(year, month, day - 6, hour, minute, second);
      break;
    case '30day':
      // 往前推 29 天（即最近 30 天，含当天）
      startDate = new Date(year, month, day - 29, hour, minute, second);
      break;  
    case 'month':
      // 往前推 11 个月（即最近 12 个月，含当月）
      startDate = new Date(year, month - 11, day, hour, minute, second);
      break;
    case 'oneMonth':
      // 往前推 1 个月（即最近 1 个月，含当月）
      startDate = new Date(year, month - 1, day, hour, minute, second);
      break;
     case 'threeMonth':
      // 往前推 3 个月（即最近90天）
      startDate = new Date(year, month - 3, day, hour, minute, second);
      break;  
    default:
      startDate = date;
  }

  // 格式化为 'YYYY-MM-DD HH:mm:ss'
  const pad = (num) => String(num).padStart(2, '0');
  const y = startDate.getFullYear();
  const m = pad(startDate.getMonth() + 1); // 月份要 +1
  const d = pad(startDate.getDate());
  const h = pad(startDate.getHours());
  const min = pad(startDate.getMinutes());
  const s = pad(startDate.getSeconds());

  return `${y}-${m}-${d} ${h}:${min}:${s}`;
};
const handleTooltipFormatter = (formatterParams) => {
// 以下属性都是处理series数据时添加的字段data的单项值对象中的属性
/**
 * tooltipXAxisLabel: tooltip的title名称（部分x轴显示的时间跟tooltip中的不一样）
 * unit: 系列值的单位
 * hiddenInTooltip: 当前系列值是否在tooltip中隐藏
 * valueName: y轴等级数值对应的等级中文名称（水质等级有用到，所以增加了此属性）
 * showValueName: 是否显示值对应的中文名称，为true时显示中文名称，反之显示值
 */
// 没有tooltipXAxisLabel这个字段，说明某个系列在这个时间段没有值
if (!formatterParams[0].data?.tooltipXAxisLabel) return;
let str = '';
const name = formatterParams[0].data?.tooltipXAxisLabel || '--';
formatterParams.forEach((item) => {
  const unit = item.data?.unit || '';
  const valueName = handleNoVal(item.data?.valueName);
  // 如果值是数组，则取最后一项，参考官网值为数组；
  const curValue = Array.isArray(item.value) ? item.value[item.value.length - 1] : item.value;
  // hiddenInTooltip 是否在tooltip中隐藏
  if (item.data?.hiddenInTooltip) return;
  // ${handleNoVal(curValue) !== '--' ? unit : ''}
  str += `<div style="margin: 10px 0 0;line-height: 1;font-size: var(--business-text-size-14)">${item.marker}<span style="font-size: var(--business-text-size-14)">${item.seriesName}</span>
    <span style="float: right;margin-left: 10px">
    ${item.data?.showValueName ? valueName : handleNoVal(curValue)} ${unit}</span><br/></div>`;
});
// return `${name}<br/>${str}`;
return `<div style="font-size: var(--business-text-size-14)">${name}</div>${str}`;

};
const handleStandardSeries = (seriesName,lineColor,labelPosition) => {
// 默认线条颜色
const defaultLineColor = '#465FFF';
return {
  name: seriesName,
  "type": "line",
  "symbol": "none",
  "lineStyle": {
    "type": "dashed",
    // "width": 0
    "width": 1
  },
  itemStyle: {
    color: lineColor || defaultLineColor,
  },
  markLine: {
    'symbol': 'none',
    "label": {
      position: labelPosition || 'insideEndTop',
      "color": lineColor || defaultLineColor,
      // "fontSize": 12,
      "fontSize": "var(--business-text-size-12)",
      formatter: (params) => {
        return `${handleNoVal(seriesName)}：${handleNoVal(params.value)}`
      }
    },
    "data": [
      {
        // "0": {
        //   "valueIndex": 1,
        //   "type": "max"
        // },
        "name": seriesName,
        "type": "average"
      }
    ],
    "silent": true
  },
}
};
const getUrlParamValue = (paramName) => {
const reg = new RegExp('(^|&)' + paramName + '=([^&]*)(&|$)', 'i');
  const r = window.location.hash.split('?')[1]?.match(reg) || null;
  if (r !== null) {
    return r[2];
  }
  return null;
};
const closeWarningFilterPanel = () => {
};
const getTwoDaysBefore = (dateInput) => {
  // 1. 确保输入是 Date 对象（兼容字符串或 Date）
  const date = new Date(dateInput);
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date input');
  }

  // 2. 克隆并减去两天（按日历日）
  const result = new Date(date);
  result.setDate(result.getDate() - 2);

  // 3. 格式化为 "YYYY-MM-DD HH:mm:ss"
  const pad = (num) => String(num).padStart(2, '0');

  const year = result.getFullYear();
  const month = pad(result.getMonth() + 1); // getMonth() 是 0-11
  const day = pad(result.getDate());
  const hours = pad(result.getHours());
  const minutes = pad(result.getMinutes());
  const seconds = pad(result.getSeconds());

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
const getUrlQueryString = (paramName) => {
const reg = new RegExp('(^|&)' + paramName + '=([^&]*)(&|$)');
const r = window.location.search.substring(1).match(reg);
if (r != null) return decodeURIComponent(r[2]);
return null;
};
const openWX = () => {
// 创建隐藏的 iframe
const iframe = document.createElement('iframe');
iframe.style.cssText = `
    position: absolute;
    width: 0;
    height: 0;
    border: 0;
    visibility: hidden;
  `;
iframe.src = 'wxwork://';

// 添加到页面并自动移除
document.body.appendChild(iframe);
setTimeout(() => {
  document.body.removeChild(iframe);
}, 100);

// 说明：以上方法是为了解决唤起微信后socket通信中断的问题
};
const formPointTree = (originalData,keynote,backtype) => {

const processedData = originalData.map((item) => ({
  ...item,
  COUNTY_CODE: item.DISTRICT_CODE || item.COUNTY_CODE,
  COUNTY_NAME: item.DISTRICT_NAME || item.COUNTY_NAME,
  BACKTYPE: item.BACKTYPE,
  KEYNOTE: item.KEYNOTE,
}));

for (const item of processedData) {
  if (item.COUNTY_CODE === "" && !item.COUNTY_NAME?.includes("平潭")) {
    item.COUNTY_CODE = "000000";
    item.COUNTY_NAME = `${item.CITY_NAME?.replace(/市$/, "")}市区`;
  }
  if (item.BACKTYPE === "1" && backtype === "1") {
    item.CITY_CODE = "backtype";
    item.CITY_NAME = "背景/区域";
    item.COUNTY_CODE = "";
    item.COUNTY_NAME = "";
    item.STREET_CODE = "";
    item.STREET_NAME = "";
  }
  if (item.KEYNOTE === "1" && KEYNOTE === "1") {
    item.COUNTY_CODE = "keynote" + item.CITY_CODE;
    item.COUNTY_NAME = formatStationName(-1, 1, item.CITY_NAME);
    item.CITY_CODE = "keynote";
    item.CITY_NAME = "重点监控区域";
  }
}

const result = [];
const provinceMap = new Map(); // 存储省节点的映射表

/**
 * 公用方法 - 构建树
 */
for (const item of processedData) {
  // 处理省级节点
  let provinceNode;
  if (!provinceMap.has(item.PROVINCE_CODE)) {
    provinceNode = {
      id: item.PROVINCE_CODE,
      label: item.PROVINCE_NAME,
      children: [],
      _cityMap: new Map(), // 临时存储市节点的映射表
    };
    provinceMap.set(item.PROVINCE_CODE, provinceNode);
    result.push(provinceNode);
  } else {
    provinceNode = provinceMap.get(item.PROVINCE_CODE);
  }

  // 处理市级节点
  let cityNode;
  if (!provinceNode._cityMap.has(item.CITY_CODE)) {
    cityNode = {
      id: item.CITY_CODE,
      label: item.CITY_NAME,
      _countryMap: new Map(), // 保持原名 countryMap 以匹配原代码风格
      children: [],
    };
    provinceNode._cityMap.set(item.CITY_CODE, cityNode);
    provinceNode.children.push(cityNode);
  } else {
    cityNode = provinceNode._cityMap.get(item.CITY_CODE);
  }

  let countryNode;
  // 处理区级节点
  // 逻辑：必须有 COUNTY_CODE 和 COUNTY_NAME 才创建区节点
  if (
    !cityNode._countryMap.has(item.COUNTY_CODE) &&
    item.COUNTY_CODE &&
    item.COUNTY_NAME
  ) {
    countryNode = {
      id: item.COUNTY_CODE,
      label: item.COUNTY_NAME,
      _streetMap: new Map(), // 【新增】临时存储街道节点的映射表
      children: [],
    };
    cityNode._countryMap.set(item.COUNTY_CODE, countryNode);
    cityNode.children.push(countryNode);
  } else {
    countryNode = cityNode._countryMap.get(item.COUNTY_CODE);
  }

  // 【新增】处理街道级节点
  let streetNode = null;
  const hasStreet = item.STREET_CODE && item.STREET_NAME;

  // 只有在存在区节点 (countryNode) 且数据中有街道信息时，才构建街道节点
  if (hasStreet && countryNode) {
    if (!countryNode._streetMap.has(item.STREET_CODE)) {
      streetNode = {
        id: item.STREET_CODE,
        label: item.STREET_NAME,
        children: [],
      };
      countryNode._streetMap.set(item.STREET_CODE, streetNode);
      countryNode.children.push(streetNode);
    } else {
      streetNode = countryNode._streetMap.get(item.STREET_CODE);
    }
  }

  // 站点挂载逻辑调整
  const hasCountry = item.COUNTY_CODE && item.COUNTY_NAME;

  // 判断父节点优先级：街道 > 区县 > 市
  let parentNode;
  if (streetNode) {
    // 如果有街道节点，挂在街道下
    parentNode = streetNode;
  } else if (hasCountry && countryNode) {
    // 如果没有街道但有区县，挂在区县下（原逻辑）
    parentNode = countryNode;
  } else {
    // 如果连区县都没有，挂在市下（原逻辑）
    parentNode = cityNode;
  }

  parentNode.children.push({
    id: item.POINT_CODE,
    label: item.POINT_NAME_TREE,
    isPoint: true,
    custom: item.custom,
    regionCode: item.REGION_CODE,
    regionName: item.REGION_NAME,
  });
}

sortTreeByProvinceCode(result);

return result;

/**
 * pointType 点位类型
 * keynote 重点监测类型
 * name 站点名称或者城市名称
 */
function formatStationName(pointType, keynote, name) {
  // 1. 处理 keynote=1 的情况
  if (keynote === 1) {
    // 去掉最后一个字符（如果是中文字符也能正确处理）
    name = name.substring(0, name.length - 1) + "监控区";
  }

  // 2. 处理 pointType 的情况
  const typeSuffixes = {
    0: "(国)",
    1: "(省)",
    2: "(市)",
    3: "(县)",
    4: "(微)",
  };

  if (typeSuffixes.hasOwnProperty(pointType)) {
    name += typeSuffixes[pointType];
  }

  return name;
}

/**
 * 对树的各个层级进行排序
 * 【修改】递归逻辑优化，自动适配新增的街道层级
 */
function sortTreeByProvinceCode(tree) {
  if (!Array.isArray(tree)) return;

  tree.sort((a, b) => a.id.localeCompare(b.id));

  tree.forEach((node) => {
    // 如果是站点节点 (isPoint 为 true)，则不再向下递归
    if (node.isPoint) return;

    if (node.children && node.children.length > 0) {
      // 对当前层级的子节点排序
      node.children.sort((a, b) => a.id.localeCompare(b.id));

      // 递归处理更深层级 (自动适配：市->区->街道->站点)
      node.children.forEach((child) => {
        if (!child.isPoint) {
          sortTreeByProvinceCode(child.children);
        }
      });
    }
  });
}
};
const judgeTimesOverDays = (startTime,endTime,count) => {
// 一天的毫秒数
const oneDay = 24 * 60 * 60 * 1000;
const startTimestamp = new Date(startTime).getTime();
const endTimestamp = new Date(endTime).getTime();
// 相差天数
const dayCount = ((endTimestamp - startTimestamp) / oneDay) + 1;
// 是否大于指定的天数
return dayCount > count;
};
const setEleWidthHeight = (id,width,height) => {
try {
  const element = document.getElementById(id);
  if (!element) return;
  // 可能只改宽度或高度
  if (width) {
    element.style.width = width + 'px';
  }
  if (height) {
    element.style.height = height + 'px';
  }

} catch (error) {
  console.error(error);
}

};
const setEleLeftTop = (id,left,top) => {
try {
  const element = document.getElementById(id);
  if (!element) return;
  // 可能只改top或left
    element.style.left = left + 'px';
    element.style.top = top + 'px';
} catch (error) {
  console.error(error);
}

};