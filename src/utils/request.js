import axios from 'axios'

// 创建实例,配置实例的配置
const request = axios.create({
  // 基准路径
  baseURL: 'http://pc.zz2hyh.xyz:81',
  // 响应超时
  timeout: 6000
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 需要添加token,修改请求的配置,在这里添加
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // 可以判断返回的错误码,对业务逻辑进行统一处理,捕获错误
  // 判断返回的数据类型
  if (response.headers['content-type'] === 'image/jpeg') { // 返回的是图片类型
    return {
      type: 'image/jpeg',
      data: response.data
    }
  } else { // 返回的数据格式是json数据
    // 判断返回的code
    // 200 成功
    if (response.data.code === 200) {
      return response.data.data
    } else { // 错误捕获
      return Promise.reject(response.data.msg)
    }
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default request
