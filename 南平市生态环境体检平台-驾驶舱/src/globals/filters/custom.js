window.customFilters = {
levelRankingPrefix:(data) => {
return ('全省排名：' + (data?.RANKING || '--') + '/' + (data?.TOTAL || '--'));
},

addPrefix1:(data) => {
return `≥${data}`;
},

filterTableList:(data) => {
return data.map((item, index) => ({
  number: index + 1,
  ...item,
  opt: 'view'
}))
},

setDefaultValue:(data) => {
return data || '--'
},

regionSelectOptionAddAll:(data) => {
return [
  { region_name: '全部', region_code: '' },
  ...data
].reduce((acc, current) => {
  const exists = acc.find(item => item.region_code === current.region_code);
  if (!exists) {
    acc.push(current);
  }
  return acc;
}, []);

},

pollution2TypeSelectOptionAddAll:(data) => {

return [
  { pollutionctgLabel: '全部', pollutionctg: '' },
  ...data
].reduce((acc, current) => {
  const exists = acc.find(item => item.pollutionctg === current.pollutionctg);
  if (!exists) {
    acc.push({...current, pollutionctgLabel: current.pollutionctg || '全部'});
  }
  return acc;
}, []);

},

pollutionTypeSelectOptionAddAll:(data) => {
return [
  { problem_type_name: '全部', problem_type: '' },
  ...data
].reduce((acc, current) => {
  const exists = acc.find(item => item.problem_type === current.problem_type);
  if (!exists) {
    acc.push(current);
  }
  return acc;
}, []);


},

regionSelectOptionAddAll_1772101150194:(data) => {
return [
  { region_name: '全部', region_code: '' },
  ...data
].reduce((acc, current) => {
  const exists = acc.find(item => item.region_code === current.region_code);
  if (!exists) {
    acc.push(current);
  }
  return acc;
}, []);

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
}