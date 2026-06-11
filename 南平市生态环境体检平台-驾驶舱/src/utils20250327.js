// 工具函数

/**
 * 预览动画
 * @param id 需要执行动画的元素id
 * @param animations 动画 []
 * @param display 元素显示隐藏 block（其他）/none
 */
async function runAnimation(id, animations, display) {
  const $el = document.getElementById(id);
  if (!$el) return;
  const play = (animation) => new Promise((resolve) => {
    /* 兼容老版本的动画数据结构 原来只有动画名称 */
    if (typeof animation === 'string') {
      $el.classList.add(animation, 'animate__animated');
    } else {
      $el.classList.add(animation.name, animation.delay, 'animate__animated');
    }
    const removeAnimation = () => {
      $el.removeEventListener('animationend', removeAnimation);
      /* 兼容老版本的动画数据结构 原来只有动画名称 */
      if (typeof animation === 'string') {
        $el.classList.remove(animation, 'animate__animated');
      } else {
        $el.classList.remove(animation.name, animation.delay, 'animate__animated');
      }
      resolve('ok');
    };
    $el.addEventListener('animationend', removeAnimation);
  });

  for (const animation of animations) {
    if (animation) {
      const r = await play(animation);
    }
  }
  document.getElementById(id).style.display = display;
}

/**
 * 设置页面缩放
 * @param id
 * @param appScaleMode
 * @param pageScaleMode
 */
 async function setPageScale(id, appScaleMode, pageScaleMode) {
  // 元素 id
  let elementId = id;
  // 缩放方式
  let scaleMode = pageScaleMode;
  // 判断应用如果有缩放方式，则不为页面增加缩放
  if (appScaleMode) {
    elementId = 'app';
    scaleMode = appScaleMode;
    if (scaleMode !== 'normal') {
      document.getElementById(elementId).style.width = 'fit-content';
      document.getElementById(elementId).style.height = 'fit-content';
    }
  }
  // 判断页面的缩放方式如果等于 normal，则不为页面增加缩放
  if (!scaleMode || scaleMode === 'normal') return;
  // 浏览器的宽、高
  const w = window.innerWidth;
  const h = window.innerHeight;
  // DOM 元素的宽、高
  const elementW = document.getElementById(elementId).offsetWidth;
  const elementH = document.getElementById(elementId).offsetHeight;
  // 缩放值
  let scaleValue = '';
  // 缩放位移
  let scaleOrigin = '0 0';
  if (scaleMode === 'width') {
    // 按宽度自适应
    const zoom = w / elementW;
    scaleValue = `scale(${zoom})`;
  } else if (scaleMode === 'height') {
    // 按高度自适应
    const zoom = h / elementH;
    scaleValue = `scale(${zoom})`;
    // 如果缩放后的宽度，小于浏览器的宽度，则进行横向位移
    if ((elementW * zoom) < w) {
      const x = (((elementW * zoom) - w) / 2) / (zoom - 1);
      scaleOrigin = `${x}px 0`;
    }
  } else if (scaleMode === 'cover') {
    // 按宽、高度自适应
    const zoomX = w / elementW;
    const zoomY = h / elementH;
    const zoom = zoomX < zoomY ? zoomX : zoomY;
    scaleValue = `scale(${zoom})`;
    // 使用 高度比 进行缩放时
    if (zoomX > zoomY) {
       // 如果缩放后的宽度，小于浏览器的宽度，则进行横向位移
      if ((elementW * zoom) < w) {
        const x = (((elementW * zoom) - w) / 2) / (zoom - 1);
        scaleOrigin = `${x}px 0`;
      }
    } else {
      // 使用 宽度比 进行缩放时
      // 如果缩放后的高度，小于浏览器的高度，则进行竖向位移
      if ((elementH * zoom) < h) {
        const y = (((elementH * zoom) - h) / 2) / (zoom - 1);
        scaleOrigin = `0 ${y}px`;
      }
    }
  }  else if (scaleMode === 'browser') {
    // 按浏览器自适应
    const zoomX = w / elementW;
    const zoomY = h / elementH;
    scaleValue = `scale(${zoomX}, ${zoomY})`;
  }
  document.getElementById(elementId).style.transform = scaleValue;
  document.getElementById(elementId).style.transformOrigin = scaleOrigin;
}

const AQI = [
  {
    "name": ["O3", "o3"],
    "html": "O₃"
  },
  {
    "name": ["PM10", "pm10"],
    "html": "PM₁₀"
  },
  {
    "name": ["PM25", "PM2_5", "PM2.5", "pm25", "pm2_5", "pm25"],
    "html": "PM₂.₅"
  },
  {
    "name": ["SO2", "so2"],
    "html": "SO₂"
  },
  {
    "name": ["SO3", "so3"],
    "html": "SO₃"
  },
  {
    "name": ["CO2", "co2"],
    "html": "CO₂"
  },
  {
    "name": ["CODMN", "codmn"],
    "html": "CODmn"
  },
  {
    "name": ["VOCS", "vocs"],
    "html": "VOCs"
  },
  {
    "name": ["no"],
    "html": "NO"
  },
  {
    "name": ["NO2", "no2"],
    "html": "NO₂"
  },
  {
    "name": ["NH3", "nh3"],
    "html": "NH₃"
  },
  {
    "name": ["NOX", "nox"],
    "html": "NOx"
  },
  {
    "name": ["NH4", "nh4"],
    "html": "NH₄⁺"
  },
  {
    "name": ["MNO4", "mno4"],
    "html": "MnO₄¯"
  },
  {
    "name": ["PH", "ph"],
    "html": "pH"
  },
  {
    "name": ["M3", "m3", "立方米"],
    "html": ["m³"]
  },
  {
    "name": ["M2", "m2", "平方米"],
    "html": ["m²"]
  },
  {
    "name": ["下标"],
    "html": ["₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉ ₊ ₋ ₌ ₍ ₎ ₐ ₑ ₒ ₓ ₔ ₕ ₖ ₗ ₘ ₙ ₚ ₛ ₜ"]
  },
  {
    "name": ["上标"],
    "html": ["⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁺ ⁻ ⁼ ⁽ ⁾ ⁿ º ˙"]
  },
  {
    "name": ["汉字上标"],
    "html": ["㆒㆓㆔㆕㆖㆗㆘㆙㆚㆛㆜㆝㆞㆟"]
  }
]

/**
 * 转换特殊字符
 * @param string 需要转换的字符串
 * @returns {*}
 */
const convertCharacter = (string) => {
  let character = string;
  AQI.forEach((item) => {
    const isContain = item.name.reduce((x, y) => x || string === y, false);
    if (isContain) {
      character = item.html;
    }
  });
  return character;
}

/* 获取URL参数 */
const getUrlParam = (name) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  const r = window.location.hash.split('?')[1]?.match(reg) || null;
  if (r !== null) {
      return r[2];
  }
  return null;
}

/**
 * 生成唯一标识符（.分割）
 * @short 是否生成短标识符
 * @symbol 自定义分隔符，不传默认是以点(.)分割(目前只针对短的)
 */
function guid(short = false, symbol) {
  function S4() {
    return ((1 + Math.random()) * 0x10000 || 0).toString(16)
      .substring(1);
  }

  if (!short) {
    return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4() + S4() + S4()}`;
  }
  if (symbol) {
    return `${(S4() + S4()).split('.')
      .join(symbol)}`;
  }
  return `${S4() + S4()}`;
}
