<template>
  <transition name="slide">
    <div class="singer-detail">SingerDetail</div>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import {getSingerDetail} from 'api/request/singer'
import {ERR_OK} from 'api/config'
import {createSong} from 'common/js/song'

export default {
  name: 'SingerDetail',
  data () {
    return {
      songs: []
    }
  },
  computed: {
    ...mapGetters(['singer'])
  },
  methods: {
    _getSingerDetail () {
      if (!this.singer.id) {
        this.$router.push('/singer')
        return
      }
      getSingerDetail(this.singer.id).then(({data}) => {
        if (data.code === ERR_OK) {
          this.songs = this._normalizeSongs(data.data.list)
          console.log(this.songs)
        }
      })
    },
    _normalizeSongs (list) {
      let ret = []
      list.forEach((item) => {
        let {musicData} = item
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  },
  created () {
    console.log(this.singer)
    this._getSingerDetail()
  }
}
</script>

<style scoped lang='stylus' type='text/stylus'>
  @import '~stylus/variable.styl'
  .singer-detail
    position fixed
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background $color-background
  .slide-enter-active, .slide-leave-active
    transition all 0.3s
  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)
</style>
