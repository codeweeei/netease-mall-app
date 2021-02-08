// 仿照网易严选的移动适配方案
;(function(win) {
  var doc = win.document
  var docEl = doc.documentElement //html标签
  var metaEl = doc.querySelector('meta[name="viewport"]') //获取name=viewport的meta对象
  var tid
  //设置像素比
  var devicePixelRatio = win.devicePixelRatio //2
  //缩放比例为1 / devicePixelRatio = 0，5
  //var scale = 1 / devicePixelRatio
  //根据缩放比例设置meta
  metaEl.setAttribute(
    "content",
    "initial-scale=.5,maximum-scale=.5,minimum-scale=.5,user-scalable=no"
  )
  //重置rem值
  function refreshRem() {
    //获取html宽度
    var width = docEl.getBoundingClientRect().width
    //获取浏览器当前使用设备的信息
    var ua = navigator.userAgent.toLowerCase()
    //在ua中找不到iPad时执行，即在普通手机中执行
    if (!/ipad/.test(ua)) {
      if (width / 2 > 750) {
        width = 750 * 2
      }
    }
    var rem = width / 10 // 75
    //设置html根标签的字体大小
    docEl.style.fontSize = rem + "px"
  }
  refreshRem()
  //添加事件监听resize，监听窗口改变
  win.addEventListener(
    "resize",
    function() {
      clearTimeout(tid)
      tid = setTimeout(refreshRem, 300)
    },
    false
  )
  //添加事件监听pageshow
  win.addEventListener(
    "pageshow",
    function(e) {
      if (e.persisted) {
        clearTimeout(tid)
        tid = setTimeout(refreshRem, 300)
      }
    },
    false
  )
})(window)
