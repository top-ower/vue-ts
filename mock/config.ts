const baseUrl = "./db"
const baseUserApi = "/base-user-api"
const baseDeviceApi = "/base-device-api"
const tcloudAppBack = "/tcloud-app-back"
// mock请求的配置
module.exports = {
  //读取json文件
  "constantMap": [{
    "url": `${baseUserApi}/accountLogin/webLogin`,
    "method": 'post',
    "filePath": `${baseUrl}/login.json`
    },
    {
      "url": `${baseUserApi}/account/getSelfInfo`,
      "method": 'post',
      "filePath": `${baseUrl}/selfInfo.json`
    },
    {
      "url": `${baseDeviceApi}/newdevice/myDevicesPage`,
      "method": 'post',
      "filePath": `${baseUrl}/myDevices.json`
    },
    {
      "url": `${baseDeviceApi}/newdevice/record`,
      "method": 'post',
      "filePath": `${baseUrl}/deviceRecord.json`
    },
    {
      "url": `${baseDeviceApi}/newdevice/users`,
      "method": 'post',
      "filePath": `${baseUrl}/deviceUsers.json`
    },
    {
      "url": `${baseDeviceApi}/newdevice/pointDataHistory`,
      "method": 'post',
      "filePath": `${baseUrl}/pointDataHistory.json`
    },
    {
      "url": `${tcloudAppBack}/repairerInfo/webPage`,
      "method": 'post',
      "filePath": `${baseUrl}/repairerInfo.json`
    },
    {
      "url": `${tcloudAppBack}/repairerInfo/webDetail`,
      "method": 'post',
      "filePath": `${baseUrl}/repaireInfoDetail.json`
    },
    {
      "url": `${baseDeviceApi}/newdevice/pointDataRealTime`,
      "method": 'post',
      "filePath": `${baseUrl}/pointDataRealTime.json`
    }
  ]
};