window.utilObj = (function() {
  // 将json字符串格式化json对象
  function jsonParse(data) {
    return "JSON" in window ? JSON.parse(data) : eval(`(${data})`);
  }

  // 类数组转数组
  function likeAryTo(likeAry) {
    try {
      return [].slice.call(likeAry);
    } catch (e) {
      var ary = [];
      for (let i = 0; i < likeAry.length; i++) {
        ary[i] = likeAry[i];
      }
      return ary;
    }
  }

  // offset 获取页面元素距离body的偏移位置
  function offset(ele) {
    let left = ele.offsetLeft,
      top = ele.offsetTop,
      parent = ele.offsetParent;
    while (parent && parent.nodeName.toUpperCase() !== "BODY") {
      left += parent.clientLeft + parent.offsetLeft;
      top += parent.clientTop + parent.offsetTop;
      parent = parent.offsetParent;
    }
    return {
      left,
      top
    };
  }

  // getCss 获取样式
  function getCss(ele, attr) {
    let value
    if ("getComputedStyle" in window) {
      value = window.getComputedStyle(ele, null)[attr]
    } else {
      if (attr === 'opacity') {
        // opacity: 0.5
        // "alpha(opacity=50)"
        value = ele.currentStyle['filter']
        let reg = /^alpha\(opacity=(.+)\)$/i
        // if (reg.test(value)) {
        //   value = reg.exec(value)[1] / 100
        // } else {
        //   value = 1
        // }
        value = reg.test(value) ? reg.exec(value)[1] / 100 : 1
      } else {
        value = ele.currentStyle[attr]
      }
    }

    // 去单位 "12px" "0.5" px pt rem em display: inline-block
    let reg = /^-?\d+(\.\d+)?(px|pt|rem|em)?$/i
    if (reg.test(value)) {
      value = parseFloat(value)
    }
    return value
  }

  // setCss 设置样式
  function setCss(ele, attr, value) {
    if (attr === 'opacity') {
      ele.style['opacity'] = value
      ele.style['fillter'] = `alpha(opacity=${value * 100})`
      return
    }
    
    let reg = /^(width|height|((margin|padding)?(left|top|right|bottom)?))$/i
    
    if (reg.test(attr)) {
      if (!isNaN(value)) {
        value += 'px'
      }
    }

    ele.style[attr] = value
  }

  // 批量设置css
  function setCssBatch(ele, options) {
    let isObj = Object.prototype.toString.call(options) === '[object Object]'
    if (isObj) {
      for (let attr in options) {
        if (options.hasOwnProperty(attr)) {
          setCss(ele, attr, options[attr])
        }
      }
    }
  }

  function css() {
    let len = arguments.length;
    let fn = getCss
    let isObj = Object.prototype.toString.call(arguments[1]) === '[object Object]'
    if (len >=3) {
      fn = setCss
    } else if(len === 2 && isObj) {
      fn = setCssBatch
    }
    return fn.apply(this, arguments)
  }

  // 获取或设置浏览器window盒模型属性
  function win(attr, value) {
    if(typeof value === 'undefined') {
      return document.documentElement[attr] || document.body[attr]
    }
    document.documentElement[attr] = value
    document.body[attr] = value
  }

  return {
    jsonParse,
    likeAryTo,
    offset,
    getCss,
    setCss,
    setCssBatch,
    css,
    win
  };
})();
