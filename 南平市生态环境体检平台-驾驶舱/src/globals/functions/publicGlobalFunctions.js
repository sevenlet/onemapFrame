
const getWaterLevelColor = (value) => {
let color = '';
// 水质级别
if (value === 'I类' || value === 'Ⅰ类') {
  color = '#ccffff';
} else if (value === 'II类' || value === 'Ⅱ类') {
  color = '#00ccff';
} else if (value === 'III类' || value === 'Ⅲ类') {
  color = '#00ff00';
} else if (value === 'IV类' || value === 'Ⅳ类') {
  color = '#ffff00';
} else if (value === 'Ⅴ类') {
  color = '#ff9b00';
} else if (value === '劣Ⅴ类') {
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
const getParamsFromUrl = (variable) => {
// 获取 URL 的哈希部分，并提取查询字符串部分
const query = window.location.hash.split("?")[1];

// 如果没有查询字符串，直接返回 null
if (!query) {
  return null;
}

// 如果找到对应的变量，返回其值；否则返回 null
return new URLSearchParams(query).get(variable) || null;

};
const setColor = (value,prefix,state) => {
    const numValue = Number(value);
    console.log(value)
    if (numValue < 0) {
        state[`isWhite${prefix}`] = false;
        state[`isRed${prefix}`] = true;
        state[`isGreen${prefix}`] = false;
    } else if (numValue > 0) {
        state[`isWhite${prefix}`] = false;
        state[`isRed${prefix}`] = false;
        state[`isGreen${prefix}`] = true;
    } else {
        state[`isWhite${prefix}`] = true;
        state[`isRed${prefix}`] = false;
        state[`isGreen${prefix}`] = false;
    }
};
const dateFormat = (date,sFormat) => {
/**
 * 格式化日期
 */
const curDate = new Date(date);
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
time.Year = curDate.getFullYear();
time.TYear = String(time.Year).substring(2);
time.Month = curDate.getMonth() + 1;
time.TMonth = time.Month < 10 ? '0' + time.Month : String(time.Month);
time.Day = curDate.getDate();
time.TDay = time.Day < 10 ? '0' + time.Day : String(time.Day);
time.Hour = curDate.getHours();
time.THour = time.Hour < 10 ? '0' + time.Hour : String(time.Hour);
time.hour = time.Hour < 13 ? time.Hour : time.Hour - 12;
time.Thour = time.hour < 10 ? '0' + time.hour : String(time.hour);
time.Minute = curDate.getMinutes();
time.TMinute = time.Minute < 10 ? '0' + time.Minute : String(time.Minute);
time.Second = curDate.getSeconds();
time.TSecond = time.Second < 10 ? '0' + time.Second : String(time.Second);
time.Millisecond = curDate.getMilliseconds();

return sFormat
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
const handleNoVal = (value) => {
const noDataText = '--';
if (value === null || value === undefined || value === '' || Number.isNaN(value)) {
  return noDataText;
}
return value;
};
const handleUpOrDownValue = (value) => {
/**
 * 处理上升下降值
 * @params value 需要处理的值
 * @returns text-处理后的值，status-上升、下降、持平、无数据状态
 */
const noDataText = '--';
if (value === null || value === undefined || value === '' || Number.isNaN(value)) {
  return {
    text: noDataText,
    status: 'noData',
  };
}
if (Number(value) > 0) {
  return {
    text: `↑${value}`,
    status: 'up',
  };
}
if (Number(value) < 0) {
  return {
    text: `↓${value.toString().replace('-', '')}`,
    status: 'down',
  };
}
return {
  text: value,
  status: 'flat',
};
};
const getRegionLevel = (selectRegionCode) => {
/**
 * 获取行政区等级
 * @params selectRegionCode 行政区code
 * @return 返回对应的等级英文
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
/**
 * 获取css主题变量的值
 */
const element = document.querySelector('body'); // 获取元素
const styles = window.getComputedStyle(element); // 获取计算后的样式对象
const value = styles.getPropertyValue(key);

let src = '';
if(value){
  src = value.replace('url(','').replace(')','');
}
return src;
};
const getEl = () => {

setTimeout(() => {
  document.querySelector('.el-table__empty-text').style.color = 'rgba(255,255,255,0.9)';
  document.querySelector('.el-table__empty-text').style.fontSize = '14px';
})
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