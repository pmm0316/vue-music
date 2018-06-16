/**
 * CREATED DATE: 2018/6/5 21:12:56
 * author: Absent Min
 */
import { fetch } from './fetch'

export function getRecommend () {
  return fetch({
    url: '/api/recommend.json',
    method: 'get'
  })
}
