/**
 * CREATED DATE: 2018/6/18 13:35:32
 * author: Absent Min
 */
import { fetch } from '../fetch'

export function getSingerList () {
  return fetch({
    url: '/api/singer/singerList.json',
    methods: 'get'
  })
}
