// 在这里可以做一些通用的配置
const Mock = require("mockjs");
const util = require('./util.ts'); //自定义工具模块
const config = require('./config.ts'); //自定义接口配置
//返回一个函数
module.exports = function(app) {
  //监听http请求
  config.constantMap.forEach(item => {
    app[item.method](item.url, function (rep, res) {
      //每次响应请求时读取mock data的json文件
      //util.getJsonFile方法定义了如何读取json文件并解析成数据对象
      var json = util.getJsonFile(item.filePath);
      //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
      res.json(Mock.mock(json));
    });
  })
}