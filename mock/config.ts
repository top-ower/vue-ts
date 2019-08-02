const baseUrl = "./db"
const sysAPI = "/user-api"

// mock请求的配置
module.exports = {
  //读取json文件
  "constantMap": [{
    "url": `${baseUserApi}/accountLogin/webLogin`,
    "method": 'post',
    "filePath": `${baseUrl}/login.json`
    }
  ]
};