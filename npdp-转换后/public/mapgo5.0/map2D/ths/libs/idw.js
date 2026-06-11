/* eslint-disable no-param-reassign */
const IDW = {
  isWebMercator(wkid) {
    return [102113, 102100, 3857, 3785].indexOf(wkid) !== -1;
  },

  WGS84ToMercator({ longitude, latitude }) {
    const earthRad = 6378137.0;
    const mercatorX = ((longitude * Math.PI) / 180) * earthRad;
    const a = (latitude * Math.PI) / 180;
    const mercatorY = (earthRad / 2) * Math.log((1.0 + Math.sin(a)) / (1.0 - Math.sin(a)));
    return { x: mercatorX, y: mercatorY };
  },

  ColorUtil() {
    function colorRgb(sColor) { // 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
      if (Array.isArray(sColor)) {
        return sColor;
      }
      const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      sColor = sColor.toLowerCase();
      if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
          let sColorNew = '#';
          for (let i = 1; i < 4; i += 1) {
            sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
          }
          sColor = sColorNew;
        }
        // 处理六位的颜色值
        const sColorChange = [];
        for (let i = 1; i < 7; i += 2) {
          sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`, 10));
        }
        return sColorChange;
      }
      return sColor;
    }

    // 将rgb表示方式转换为hex表示方式
    function colorHex(rgb) {
      const _this = rgb;
      const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      if (/^(rgb|RGB)/.test(_this)) {
        const aColor = _this.replace(/(?:(|)|rgb|RGB)*/g, '').split(',');
        let strHex = '#';
        for (let i = 0; i < aColor.length; i++) {
          let hex = Number(aColor[i]).toString(16);
          hex = hex < 10 ? `${0}${hex}` : hex; // 保证每个rgb的值为2位
          if (hex === '0') {
            hex += hex;
          }
          strHex += hex;
        }
        if (strHex.length !== 7) {
          strHex = _this;
        }
        return strHex;
      }
      if (reg.test(_this)) {
        const aNum = _this.replace(/#/, '').split('');
        if (aNum.length === 6) {
          return _this;
        }
        if (aNum.length === 3) {
          let numHex = '#';
          for (let i = 0; i < aNum.length; i += 1) {
            numHex += (aNum[i] + aNum[i]);
          }
          return numHex;
        }
      }
      return _this;
    }

    this.gradientColor = (startColor, endColor, step) => {
      const startRGB = colorRgb(startColor); // 转换为rgb数组模式
      const startR = startRGB[0];
      const startG = startRGB[1];
      const startB = startRGB[2];
      const startO = startRGB[3] ? startRGB[3] : 1;
      const endRGB = colorRgb(endColor);
      const endR = endRGB[0];
      const endG = endRGB[1];
      const endB = endRGB[2];
      const sR = (endR - startR) / step; // 总差值
      const sG = (endG - startG) / step;
      const sB = (endB - startB) / step;
      const colorArr = [];
      for (let i = 0; i < step; i++) {
        // 计算每一步的hex值
        const hex = colorHex(`rgb(${parseInt((sR * i + startR), 10)},${parseInt((sG * i + startG), 10)},${parseInt((sB * i + startB), 10)},${startO})`);
        colorArr.push(hex);
      }
      return colorArr;
    };
  },

  ClassBreaksRenderer(rendererInfo) {
    this.rendererInfo = rendererInfo;
    this.type = this.rendererInfo.type;
    this.breaks = [];

    // 通过值计算对应的颜色
    this._getColorByValue = (value) => {
      if (!value) {
        return 'rgba(0,0,0,0)';
      }
      const {
        colorRamp,
      } = this.rendererInfo;
      // const step = classBreakInfos.gradientStep || 2;
      colorRamp.sort((infoa, infob) => infoa[0] - infob[0]);
      for (let i = 0; i < colorRamp.length - 1; i++) {
        if (value < colorRamp[0][0]) {
          return colorRamp[0][1];
        }
        if (value >= colorRamp[colorRamp.length - 1][0]) {
          return colorRamp[colorRamp.length - 1][1];
        }

        if (value >= colorRamp[i][0] && value < colorRamp[i + 1][0]) {
          if (this.rendererInfo.type !== 'gradient') {
            return colorRamp[i + 1][1];
          }
          // 如果this.rendererInfo.type为gradient则生成的是渐变颜色
          const sBreakInfo = colorRamp[i];
          const eBreakInfo = colorRamp[i + 1];
          const stValue = (eBreakInfo[0] - sBreakInfo[0]) / 50;
          // 计算值在
          const vIndex = Math.floor((value - sBreakInfo[0]) / stValue);
          // 输入
          const color = new ColorUtil();
          const gradientColor = color.gradientColor(sBreakInfo[1], eBreakInfo[1], 50);
          return gradientColor[vIndex];
        }
      }
      return 'rgba(0,0,0,0)';
    };
  },

  interpolation(options) {
    const polygons = [];
    const holePolygons = [];
    let {
      width,
    } = options;
    const {
      model,
      polygonSimplifyOptions = {},
      letiogram,
    } = options;
    // 考虑多面的情况
    // options.polygons = turf.sample(options.polygons, 1000);
    const processPolygon = (singlePolygonCoordinates) => {
      singlePolygonCoordinates.forEach((ring, index) => {
        if (index === 0) {
          // 外环
          polygons.push(ring);
        } else {
          // 内环
          holePolygons.push(ring);
        }
      });
    };
    options.polygons.forEach((polygon) => {
      const { geometry } = polygon;
      const { type, coordinates } = geometry;
      if (type === 'Polygon') {
        processPolygon(coordinates);
      } else if (type === 'MultiPolygon') {
        coordinates.forEach((singlePolygonCoordinates) => {
          processPolygon(singlePolygonCoordinates);
        });
      }
      // if (Array.isArray(coordinates[0][0])) {
      //   // 多面、挖孔面的情况
      //   coordinates.forEach((coordinate, index) => {
      //     if (type.indexOf('Multi') < 0 && index > 0) {
      //       // 挖孔面
      //       holePolygons.push(coordinate);
      //     } else {
      //       // 多面
      //       polygons.push(coordinate);
      //     }
      //   });
      // } else {
      //   if (type.indexOf('Multi') > -1) {
      //     // 多面
      //     polygons.push(coordinates);
      //   } else {
      //     // 挖孔面
      //     holePolygons.push(coordinates);
      //   }
      // }
    });
    // 如果点位过多，执行简化操作
    // 面的点位数据可能不闭合，将第一个点添加到到数组末尾
    // polygons.push(polygons[0]);
    /* 面简化 */
    /* const geojson = turf.polygon(polygons);
    const simplified = turf.simplify(geojson, {
      tolerance: 0, // 简化容差
      highQuality: false, // 是否生成质量更高的简化结果，同时耗费更多的时间
      mutate: false, // 允许修改GeoJSON输入（如果为真，性能将显著提高）
      ...polygonSimplifyOptions,
    });
    polygons = simplified.geometry.coordinates; */

    /* if (Array.isArray(polygons[0][0])) {
      let multiPolygons = [];
      for (let i = 0; i < polygons.length; i++) {
        multiPolygons = multiPolygons.concat(polygons[i]);
      }
      polygons = [multiPolygons];
    } */

    const n1 = polygons.length;
    const n2 = holePolygons.length;
    if (n1 === 0) return;

    /**
     * 颜色操作的工具类
     */
    function ColorUtil() {
      function colorRgb(sColor) { // 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
        if (Array.isArray(sColor)) {
          return sColor;
        }
        const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        sColor = sColor.toLowerCase();
        if (sColor && reg.test(sColor)) {
          if (sColor.length === 4) {
            let sColorNew = '#';
            for (let i = 1; i < 4; i += 1) {
              sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
          }
          // 处理六位的颜色值
          const sColorChange = [];
          for (let i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`, 10));
          }
          return sColorChange;
        }
        return sColor;
      }

      // 将rgb表示方式转换为hex表示方式
      function colorHex(rgb) {
        const _this = rgb;
        const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        if (/^(rgb|RGB)/.test(_this)) {
          const aColor = _this.replace(/(?:(|)|rgb|RGB)*/g, '').split(',');
          let strHex = '#';
          for (let i = 0; i < aColor.length; i++) {
            let hex = Number(aColor[i]).toString(16);
            hex = hex < 10 ? `${0}${hex}` : hex; // 保证每个rgb的值为2位
            if (hex === '0') {
              hex += hex;
            }
            strHex += hex;
          }
          if (strHex.length !== 7) {
            strHex = _this;
          }
          return strHex;
        }
        if (reg.test(_this)) {
          const aNum = _this.replace(/#/, '').split('');
          if (aNum.length === 6) {
            return _this;
          }
          if (aNum.length === 3) {
            let numHex = '#';
            for (let i = 0; i < aNum.length; i += 1) {
              numHex += (aNum[i] + aNum[i]);
            }
            return numHex;
          }
        }
        return _this;
      }

      this.gradientColor = (startColor, endColor, step) => {
        const startRGB = colorRgb(startColor); // 转换为rgb数组模式
        const startR = startRGB[0];
        const startG = startRGB[1];
        const startB = startRGB[2];
        const startO = startRGB[3] ? startRGB[3] : 1;
        const endRGB = colorRgb(endColor);
        const endR = endRGB[0];
        const endG = endRGB[1];
        const endB = endRGB[2];
        const sR = (endR - startR) / step; // 总差值
        const sG = (endG - startG) / step;
        const sB = (endB - startB) / step;
        const colorArr = [];
        for (let i = 0; i < step; i++) {
          // 计算每一步的hex值
          const hex = colorHex(`rgb(${parseInt((sR * i + startR), 10)},${parseInt((sG * i + startG), 10)},${parseInt((sB * i + startB), 10)},${startO})`);
          colorArr.push(hex);
        }
        return colorArr;
      };
    }

    const pip = (array, x, y) => {
      let i;
      let j = array.length - 1;
      let
        c = false;
      for (i = 0; i < array.length; i++) {
        if (((array[i][1] > y) === !(array[j][1] > y)) && x < ((array[j][0] - array[i][0]) * (y - array[i][1])) / (array[j][1] - array[i][1]) + array[i][
          0]) {
          c = !c;
        }
        j = i;
      }
      return c;
    };

    function ClassBreaksRenderer(rendererInfo) {
      this.rendererInfo = rendererInfo;
      this.type = this.rendererInfo.type;
      this.breaks = [];

      // 通过值计算对应的颜色
      this._getColorByValue = (value) => {
        if (!value) {
          return 'rgba(0,0,0,0)';
        }
        const {
          colorRamp,
        } = this.rendererInfo;
        // const step = classBreakInfos.gradientStep || 2;
        colorRamp.sort((infoa, infob) => infoa[0] - infob[0]);
        for (let i = 0; i < colorRamp.length - 1; i++) {
          if (value < colorRamp[0][0]) {
            return colorRamp[0][1];
          }
          if (value >= colorRamp[colorRamp.length - 1][0]) {
            return colorRamp[colorRamp.length - 1][1];
          }

          if (value >= colorRamp[i][0] && value < colorRamp[i + 1][0]) {
            if (this.rendererInfo.type !== 'gradient') {
              return colorRamp[i + 1][1];
            }
            // 如果this.rendererInfo.type为gradient则生成的是渐变颜色
            const sBreakInfo = colorRamp[i];
            const eBreakInfo = colorRamp[i + 1];
            const stValue = (eBreakInfo[0] - sBreakInfo[0]) / 50;
            // 计算值在
            const vIndex = Math.floor((value - sBreakInfo[0]) / stValue);
            // 输入
            const color = new ColorUtil();
            const gradientColor = color.gradientColor(sBreakInfo[1], eBreakInfo[1], 50);
            return gradientColor[vIndex];
          }
        }
        return 'rgba(0,0,0,0)';
      };
    }

    const classBreaksRenderer = new ClassBreaksRenderer(options.rendererInfo);
    // 把所有边界数据的坐标从经纬度转成墨卡托

    let p;
    width *= 108000;
    // 将面坐标转为墨卡托
    for (let m = 0; m < n1; m++) {
      for (p = 0; p < polygons[m].length; p++) {
        if (polygons[m][p][0] <= 180) {
          const mercator = this.WGS84ToMercator({
            longitude: polygons[m][p][0],
            latitude: polygons[m][p][1],
          });
          polygons[m][p][0] = mercator.x;
          polygons[m][p][1] = mercator.y;
        }
      }
    }
    // 将挖孔面坐标转为墨卡托
    for (let m = 0; m < n2; m++) {
      for (p = 0; p < holePolygons[m].length; p++) {
        if (holePolygons[m][p][0] <= 180) {
          const mercator = this.WGS84ToMercator({
            longitude: holePolygons[m][p][0],
            latitude: holePolygons[m][p][1],
          });
          holePolygons[m][p][0] = mercator.x;
          holePolygons[m][p][1] = mercator.y;
        }
      }
    }

    // 目前测试孔洞不能为0，如果为0在这里添加一个孔洞
    if (n2 === 0) {
      holePolygons.push([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);
    }

    // Boundaries of polygons space
    const xlim = [polygons[0][0][0], polygons[0][0][0]]; // 遍历边界数据找到最小、最大经度
    const ylim = [polygons[0][0][1], polygons[0][0][1]]; // 遍历边界数据找到最小、最大纬度
    // 遍历边界坐标获取xmin,ymin,xmax,ymax
    for (let i = 0; i < n1; i++) {
      for (let j = 0; j < polygons[i].length; j++) { // Vertices
        if (polygons[i][j][0] < xlim[0])[xlim[0]] = polygons[i][j];
        if (polygons[i][j][0] > xlim[1])[xlim[1]] = polygons[i][j];
        if (polygons[i][j][1] < ylim[0])[, ylim[0]] = polygons[i][j];
        if (polygons[i][j][1] > ylim[1])[, ylim[1]] = polygons[i][j];
      }
    }

    // Alloc for O(n^2) space
    // 分配空间
    // 计算度数对应的距离（米）
    const a = new Array(2);
    const b = new Array(2);
    const x = Math.ceil((xlim[1] - xlim[0]) / width); // x的网格数
    const y = Math.ceil((ylim[1] - ylim[0]) / width); // y的网格数

    // width=10800;//0.1度代表的距离（米）
    // 数据存储
    const dataArray = new Array(x + 1);

    a[0] = Math.floor(((xlim[0] - ((xlim[0] - xlim[0]) % width)) - xlim[0]) / width);
    a[1] = Math.ceil(((xlim[1] - ((xlim[1] - xlim[1]) % width)) - xlim[0]) / width);
    b[0] = Math.floor(((ylim[0] - ((ylim[0] - ylim[0]) % width)) - ylim[0]) / width);
    b[1] = Math.ceil(((ylim[1] - ((ylim[1] - ylim[1]) % width)) - ylim[0]) / width);

    dataArray.xlim = xlim;
    dataArray.ylim = ylim;

    dataArray.zlim = [Math.min.apply(null, letiogram.t), Math.max.apply(null, letiogram.t)];
    dataArray.width = width;
    dataArray.polygons = polygons;
    dataArray.holePolygons = holePolygons;
    dataArray.a = a;
    dataArray.b = b;
    return dataArray;
  },
};
