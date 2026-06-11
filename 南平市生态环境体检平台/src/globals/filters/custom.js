window.customFilters = {
upstream:(data) => {
return data.filter((item) => item.ALONG_POINT_LOCATION === '1');
},

downstream:(data) => {
console.log(data, '0000')
console.log(data.filter((item) => item.ALONG_POINT_LOCATION === '2'))
return data.filter((item) => item.ALONG_POINT_LOCATION === '2');
},

pointType:(data) => {
 const labelMap = {
    "0": "国控",
    "1": "省控",
    "2": "市控",
    "3": "县控",
    "4": "微站",
    "10": "国家",
    "11": "省",
    "12": "市",
    "13": "县",
    "14": "乡镇",
    "20": "重点区域",
    "21": "省内分区域"
  };

  // 确保 data 是字符串类型，避免类型不匹配
  const key = String(data);
  return labelMap[key] || "";
},

filterWarningData:(data) => {
const pointTypeName = {
  '0': '国控',
  '1': '省控',
  '2': '市控',
  '3': '县控',
  '4': '微站'
}
const list = data.slice(0, 100).map(item => ({
  ...item,
  pointType: pointTypeName[item.point_type],
  shortTime: item.start_time || '-',
  tarce: 'trace'
}));

return list;
},

handleWaterType:(data) => {

switch (data) {
    case 'river':
      return '河流';
    case 'lake':
      return '湖库';
    case 'groundwater':
      return '地下水';
    default:
      return '-'; 
  }
},

handleControlLevel:(data) => {
switch (data) {
    case '1':
      return '国控';
    case '2':
      return '省控';
    case '3':
      return '市控';
    case '4':
      return '其他';
    default:
      return '-'; 
  }
},

handleEnterRiverType:(data) => {
switch (data) {
  case "1":
    return "暗管";
  case "2":
    return "明渠";
  case "3":
    return "其它";
  default:
    return "-";
}
},

handleWaterQuality:(data) => {
switch (data) {
  case "1":
    return "Ⅰ类";
  case "2":
    return "Ⅱ类";
  case "3":
    return "Ⅲ类";
  case "4":
    return "Ⅴ类";
  case "5":
    return "Ⅳ类";
  case "6":
    return "劣Ⅴ类";
  default:
    return "-";
}
},
}