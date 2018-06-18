/**
 * CREATED DATE: 2018/6/5 21:12:56
 * author: Absent Min
 */
import { fetch } from '../fetch'

export function getRecommend () {
  return fetch({
    url: '/api/recommend/recommend.json',
    method: 'get'
  })
}
export function getDiscList () {
  return fetch({
    url: '/api/recommend/discList.json',
    method: 'get'
  })
}
