import request from '@/plugins/axios'

/*获取产品列表*/
export function getProductList(data) {
  const {
    model,
    name,
    productTypeId,
    status,
    companyId,
    type,
    content,
    pageNumber,
    pageSize
  } = data
  return request({
    url: `${process.env.BASE_PARJECT_NAME}/product/list`,
    method: 'post',
    data: {
      model,
      name,
      productTypeId,
      status,
      companyId,
      type,
      content,
      pageNumber,
      pageSize
    }
  })
}

/*上传产品图片*/
export function uploadIcon(iconImg, attachmentId) {
  return request({
    url: `${process.env.BASE_PARJECT_NAME}/product/iconImg`,
    method: 'post',
    data: {
      iconImg,
      attachmentId
    }
  })
}

/*新增或修改产品*/
export function addOrEdit(data) {
  const {
    attachmentId,
    name,
    model,
    productTypeId,
    lineType,
    productDesc,
    companyId,
    id,
    materialCode,
    materialDesc,
    deviceType
  } = data
  return request({
    url: `${process.env.BASE_PARJECT_NAME}/product/addOrEdit`,
    method: 'post',
    data: {
      attachmentId,
      name,
      model,
      productTypeId,
      lineType,
      productDesc,
      companyId,
      id,
      materialCode,
      materialDesc,
      deviceType
    }
  })
}

/*产品详情*/
export function productInfo(id) {
  return request({
    url: `${process.env.BASE_PARJECT_NAME}/product/productInfo`,
    method: 'post',
    data: {
      id
    }
  })
}

/*产品列表*/
export function productList(data) {
  const {
    companyId,
    pageNumber,
    pageSize,
    model,
    name,
    productTypeId,
    status
  } = data
  return request({
    url: `${process.env.BASE_PARJECT_NAME}/product/list`,
    method: 'post',
    data: {
      companyId,
      pageNumber,
      pageSize,
      model,
      name,
      productTypeId,
      status
    }
  })
}

/*新增或修改产品端点数据*/
export function addOrEditDataPoint(reqData) {
  const {
    productId,
    id,
    pointName,
    pointAttribute,
    dataType,
    readType,
    unit,
    minValue,
    maxValue,
    desc,
    sendApp
  } = reqData
  return request({
    url: `${process.env.BASE_PARJECT_NAME}/product/addOrEditDataPoint`,
    method: 'post',
    data: {
      productId,
      id,
      pointName,
      pointAttribute,
      dataType,
      readType,
      unit,
      minValue,
      maxValue,
      desc,
      sendApp
    }
  })
}

/*删除端点属性*/
export function delDataPoint(id, productId) {
  return request({
    url: `${process.env.BASE_PARJECT_NAME}/product/delDataPoint`,
    method: 'post',
    data: {
      id,
      productId
    }
  })
}

/*发布产品*/
export function release(id, status) {
  return request({
    url: `${process.env.BASE_PARJECT_NAME}/product/fabu`,
    method: 'post',
    data: {
      id,
      status
    }
  })
}

/*删除产品*/
export function deleteProduct(id) {
  return request({
    url: `${process.env.BASE_PARJECT_NAME}/product/delete`,
    method: 'post',
    data: {
      id
    }
  })
}

/*删除产品*/
export function pointList(id, pageNumber, pageSize) {
  return request({
    url: `${process.env.BASE_PARJECT_NAME}/product/pointList`,
    method: 'post',
    data: {
      id,
      pageNumber,
      pageSize
    }
  })
}

/*产品分析*/
export function productCount(productId) {
  return request({
    url: `${process.env.BASE_PARJECT_NAME}/operation/productCount`,
    method: 'post',
    data: {
      productId
    }
  })
}
