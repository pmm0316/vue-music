/**
 * CREATED DATE: 2018/6/21 20:50:37
 * author: Absent Min
 */
import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  }
}

export default mutations
