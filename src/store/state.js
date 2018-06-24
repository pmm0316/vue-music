/**
 * CREATED DATE: 2018/6/21 20:50:27
 * author: Absent Min
 */
import {playMode} from 'common/js/config'
const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1
}

export default state
