window.builtinFilters = {
capitalize:(data) => {

      if (typeof data !== 'string') return data;
      return data.charAt(0).toUpperCase() + data.slice(1);
    
},

uppercase:(data) => {

      if (typeof data !== 'string') return data;
      return data.toUpperCase();
    
},

lowercase:(data) => {

      if (typeof data !== 'string') return data;
      return data.toLowerCase();
    
},

camelToKebab:(data) => {

      if (typeof data !== 'string') return data;
      return data.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    
},

floor:(data) => {

      const num = parseFloat(data);
      if (isNaN(num)) return data;
      return Math.floor(num);
    
},

ceil:(data) => {

      const num = parseFloat(data);
      if (isNaN(num)) return data;
      return Math.ceil(num);
    
},

keyBy:(data) => {

      if (!Array.isArray(data)) return data;
      return data.reduce((obj, item) => {
        obj[item['id']] = item;
        return obj;
      }, {});
    
},
}