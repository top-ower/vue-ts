/*
 * 用于重置html font-size 计算vw基数 (ie8 ~ ie10)
 * 项目开始调用即可
 */
!(function() {
  function isIE() {
    if (window.navigator.userAgent.indexOf("MSIE") >= 1) {
      return true;
    } else {
      return false; 
    }
  }

  // function fontSize() {
  //   let docEle = document.documentElement;
  //   let fontSize = (192 * (window.document.documentElement.getBoundingClientRect().width / 1920));
  //   docEle.style.fontSize = fontSize < 150 ? 150 + 'px' : fontSize + 'px';
  //   clearTimeout(tOut);
  // }
  // if (isIE())
  // fontSize();
  // let tOut = null;
  // window.onresize = function() {
  //   tOut = setTimeout(function() {
  //     // if (isIE()) 
  //     fontSize();
  //   }, 300);
  // };

  (function (doc, win) {
    var docEl = doc.documentElement,
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;

        let fontSize = (192 * (window.document.documentElement.getBoundingClientRect().width / 1920));
        docEl.style.fontSize = fontSize < 150 ? 150 + 'px' : fontSize + 'px';
        docEl.style.display = "none";
        docEl.clientWidth; // Force relayout - important to new Android devices
        docEl.style.display = "";
      };

    // Abort if browser does not support addEventListener
    if (!doc.addEventListener) return;

    // Test rem support
    var div = doc.createElement('div');
    div.setAttribute('style', 'font-size: 1rem');

    // Abort if browser does not recognize rem
    if (div.style.fontSize != "1rem") return;

    win.addEventListener('resize', recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);
})();