import { validatenull } from '@/utils/common'

// 判断是否IE10
export const isIE = function (): boolean {
  let flag = false
　　try {
　　　　if (window.matchMedia("screen and (-ms-high-contrast: active), (-ms-high-contrast: none)").matches) {
　　　　　　flag = true
　　　　}
　　} catch(e){
		flag = false
	}
　　return flag
}

// 是否IE
export const isIEbrowsers = function (): boolean {
  let isIe = navigator.userAgent.indexOf('Trident') > -1
  return isIe
}

// 处理表格删除数据的请求参数
export const getPara = function (params): any {
  let pageNumber = 1
  let total = -1
  let pageSize = 10
  let keyStr = ''
  for (let key of Object.keys(params)) {
    if (key.toLowerCase().indexOf('number') !== -1) {
    	keyStr = key
    	pageNumber = params[key]
    }
    if (key.toLowerCase().indexOf('total') !== -1) { 
      total = params[key] - 1
    }
    if (key.toLowerCase().indexOf('size') !== -1) { 
      pageSize = params[key]
    }
  }
  params[keyStr] = pageNumber > 1 && pageNumber > Math.ceil(total / pageSize) ? Math.ceil(total / pageSize) : pageNumber
  return params
}

/*
* element-ui 表格总计数字样式替换
*/
export const tableTotalReplace = function (totalNum, className = '.el-pagination__total'): void {
  setTimeout(() => { 
    let paginationElement = document.querySelector('.pagination-container')
    if (!paginationElement) { 
      return 
    }
    let totalElement = paginationElement.querySelector(className)
    totalElement.innerHTML = `共 <em>${totalNum}</em> 条` 
  }, 200)
}

/*
* 表格分页改变每页显示条数
* 解决IE10 切换每页显示条数 数据未正常显示
*/
export const sizeChange = function (params, val): any {
  let pageNumber = 1
  let total = -1
  let keyStr = ''
	for (let key of Object.keys(params)) {
		if (key.toLowerCase().indexOf('number') !== -1) {
			pageNumber = params[key]
			keyStr = key
		}
		if (key.toLowerCase().indexOf('size') !== -1) {
			params[key] = val
		}
		if (key.toLowerCase().indexOf('total') !== -1) {
			total = params[key]
		}
	}
  params[keyStr] = pageNumber > Math.ceil(total / val) ? Math.ceil(total / val) : pageNumber
  return params
}

/*
* json字典对象赋值
* data 后台返回的对象
* obj 赋值的对象数组
*/
export const setJsonData = function (data, obj): any {
	if (!data || !obj) { return }
  for (let key of Object.keys(data)) {
    for (let tmpKey of Object.keys(obj)) {
      if (key === tmpKey) {
        obj[tmpKey] = validatenull(data[key]) ? obj[tmpKey] : data[key]
      }
    }
  }
  return obj
}

/*
* 返回html标签内的img 图片地址集合
* content html标签内容
*/
export const getImgMap = function (content): Array<[]> {
	let imgArr = []
	content && content.replace(/<img [^>]*path=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
		imgArr.push(capture)
	});
	return imgArr
}

/**
* 获得上一年在昨天这一天的日期  
* datastr 时间日期
*/
export const getLastYearYestdy = function (date): string {
	let datastr = ''
	let strYear = date.getFullYear() - 1
  let strDay = date.getDate()
	let strMonth = date.getMonth() + 1
  let strHours = date.getHours()
  let strMinutes = date.getMinutes()
  let strSec = date.getSeconds()
  if (strMonth < 10) {
		strMonth = '0' + strMonth
  }
  if (strDay < 10) {
		strDay = '0' + strDay
  }
	datastr = `${strYear}-${strMonth}-${strDay} ${strHours}:${strMinutes}:${strSec}`
	return datastr
}

/**
  * 获取当前的域名地址
  * datastr 时间日期
*/
export const getDomain = function (date): string {
	let tmplocation = window.location || location
	return `${tmplocation.host}`
}