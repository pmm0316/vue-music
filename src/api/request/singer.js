/**
 * CREATED DATE: 2018/6/18 13:35:32
 * author: Absent Min
 */
import { fetch } from '../fetch'
import {singerDetailParams} from '../config'

export function getSingerList () {
  return fetch({
    url: '/api/singer/singerList.json',
    methods: 'get'
  })
}

export function getSingerDetail (id) {
  return fetch({
    url: '/qq/fcg_v8_singer_track_cp.fcg',
    methods: 'get',
    params: singerDetailParams(id)
  })
}
