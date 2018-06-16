/**
 * CREATED DATE: 2018/6/15 15:19:06
 * author: Absent Min
 */

import axios from 'axios'
import { requestUrl } from './requestUrl'

export function fetch (options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      headers: {'Content-Type': 'application/json'},
      timeout: 30000
    })
    // 给每次的请求添加时间戳
    if (options.url) {
      options.url = requestUrl(options.url)
    }
    instance(options).then(response => {
      resolve(response)
    }).catch(error => {
      console.log('请求异常' + error
      )
      reject(error)
    })
  })
}
