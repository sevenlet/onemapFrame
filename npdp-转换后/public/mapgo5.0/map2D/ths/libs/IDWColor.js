class IDWColor {
  constructor(rendererInfo) {
    this.rendererInfo = rendererInfo;
    this.colorRamp = rendererInfo.colorRamp;
    this.colorRamp.sort((infoa, infob) => infoa[0] - infob[0]);
    this.type = this.rendererInfo.type;
    this.breaks = [];
    this.initGradientColor();
  }

  initGradientColor() {
    if (this.rendererInfo.type === 'gradient') {
      for (let i = 0; i < this.colorRamp.length - 1; i++) {
        // 如果this.rendererInfo.type为gradient则生成的是渐变颜色
        const sBreakInfo = this.colorRamp[i];
        const eBreakInfo = this.colorRamp[i + 1];
        const stValue = (eBreakInfo[0] - sBreakInfo[0]) / 50;
        // 计算值在
        // const vIndex = Math.floor((value - sBreakInfo[0]) / stValue);
        // 输入
        // const color = new ColorUtil();
        const gradientColor = IDWColor.gradientColor(sBreakInfo[1], eBreakInfo[1], 50);
        this.colorRamp[i][2] = gradientColor;
      }
    }
  }

  getColorByValue(value) {
    if (value === -1) {
      return 'rgba(0,0,0,0)';
    }
    /* const {
      colorRamp,
    } = this.rendererInfo;
    // const step = classBreakInfos.gradientStep || 2;
    colorRamp.sort((infoa, infob) => infoa[0] - infob[0]); */
    for (let i = 0; i < this.colorRamp.length - 1; i++) {
      // 如果小于最小值，返回最小值颜色
      if (value < this.colorRamp[0][0]) {
        return this.colorRamp[0][1];
      }
      // 如果大于最大值，返回最大值颜色
      if (value >= this.colorRamp[this.colorRamp.length - 1][0]) {
        return this.colorRamp[this.colorRamp.length - 1][1];
      }
      // [cur, next) -> 返回next的颜色或者cur与next颜色的插值颜色
      if (value >= this.colorRamp[i][0] && value < this.colorRamp[i + 1][0]) {
        if (this.rendererInfo.type !== 'gradient') {
          return this.colorRamp[i + 1][1];
        }
        // 如果this.rendererInfo.type为gradient则生成的是渐变颜色
        const sBreakInfo = this.colorRamp[i];
        const eBreakInfo = this.colorRamp[i + 1];
        const stValue = (eBreakInfo[0] - sBreakInfo[0]) / 50;
        // 计算值在
        const vIndex = Math.floor((value - sBreakInfo[0]) / stValue);
        // 输入
        // const color = new ColorUtil();
        // const gradientColor = IDWColor.gradientColor(sBreakInfo[1], eBreakInfo[1], 50);
        return this.colorRamp[i][2][vIndex];
      }
    }
    return 'rgba(0,0,0,0)';
  }

  static gradientColor(startColor, endColor, step) {
    const startRGB = IDWColor.colorRgb(startColor); // 转换为rgb数组模式
    const startR = startRGB[0];
    const startG = startRGB[1];
    const startB = startRGB[2];
    const startO = startRGB[3] ? startRGB[3] : 1;
    const endRGB = IDWColor.colorRgb(endColor);
    const endR = endRGB[0];
    const endG = endRGB[1];
    const endB = endRGB[2];
    const sR = (endR - startR) / step; // 总差值
    const sG = (endG - startG) / step;
    const sB = (endB - startB) / step;
    const colorArr = [];
    for (let i = 0; i < step; i++) {
      // 计算每一步的hex值
      const hex = IDWColor.colorHex(`rgb(${parseInt((sR * i + startR), 10)},${parseInt((sG * i + startG), 10)},${parseInt((sB * i + startB), 10)},${startO})`);
      colorArr.push(hex);
    }
    return colorArr;
  }

  static colorRgb(sColor) { // 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
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
  static colorHex(rgb) {
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
}

export default IDWColor;
