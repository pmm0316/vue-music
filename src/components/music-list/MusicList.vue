<template>
    <div class="music-list">
      <div class="back" @click="back">
        <i class="icon-back"></i>
      </div>
      <h1 class="title" v-html="title"></h1>
      <div class="bg-image" :style="bgStyle" ref="bgImage">
        <div class="play-wrapper" v-show="songs.length > 0">
          <div class="play" ref="playBtn">
            <i class="icon-play"></i>
            <span class="text">随机播放</span>
          </div>
        </div>
        <div class="filter"></div>
      </div>
      <div class="bg-layer" ref="layer"></div>
      <scroll class="list"
              :listenScroll="listenScroll"
              :probeType="probeType"
              @scroll="scroll"
              :data="songs"
              ref="list">
        <div class="song-list-wrapper">
          <song-list :songs="songs"></song-list>
        </div>
        <div v-show="!songs.length" class="loading-container">
          <loading></loading>
        </div>
      </scroll>
    </div>
</template>

<script>
import Scroll from 'base/scroll/Scroll'
import SongList from 'base/song-list/SongList'
import {prefixStyle} from 'common/js/dom'
import Loading from 'base/loading/loading'

const RESERVED_HEIGHT = 40
const transform = prefixStyle('transform')
export default {
  name: 'MusicList',
  props: {
    title: {
      type: String,
      default: ''
    },
    bgImage: {
      type: String,
      default: ''
    },
    songs: {
      type: Array
    }
  },
  data () {
    return {
      scrollY: 0,
      probeType: 3
    }
  },
  components: {
    Scroll,
    SongList,
    Loading
  },
  computed: {
    bgStyle () {
      return `background-image: url(${this.bgImage})`
    }
  },
  methods: {
    scroll (pos) {
      this.scrollY = pos.y
    },
    back () {
      this.$router.back()
    }
  },
  watch: {
    scrollY (newVal) {
      let translateY = Math.max(this.minTranslateY, newVal)
      let zIndex = 0
      let scale = 1
      this.$refs.layer.style[transform] = `translate3d(0, ${translateY}px, 0)`
      const percent = Math.abs(newVal / this.imageHeight)
      if (newVal > 0) {
        scale = 1 + percent
        zIndex = 10
      }
      if (newVal < this.minTranslateY) {
        zIndex = 10
        this.$refs.bgImage.style.paddingTop = 0
        this.$refs.bgImage.style.height = `${RESERVED_HEIGHT}px`
        this.$refs.playBtn.style.display = 'none'
      } else {
        this.$refs.bgImage.style.paddingTop = '70%'
        this.$refs.bgImage.style.height = 0
        this.$refs.playBtn.style.display = ''
      }
      this.$refs.bgImage.style.zIndex = zIndex
      this.$refs.bgImage.style[transform] = `scale(${scale})`
    }
  },
  mounted () {
    this.imageHeight = this.$refs.bgImage.offsetHeight
    this.minTranslateY = -this.imageHeight + RESERVED_HEIGHT
    this.$refs.list.$el.style.top = `${this.imageHeight}px`
  },
  created () {
    this.listenScroll = true
  }
}
</script>

<style scoped lang='stylus' type='text/stylus'>
  @import '~stylus/variable.styl'
  @import '~stylus/mixin.styl'
  .music-list
    position fixed
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background $color-background
    .back
      position absolute
      top 0
      left 6px
      z-index 60
      .icon-back
        display block
        padding 10px
        font-size $font-size-large-x
        color $color-theme
    .title
      position absolute
      top 0
      left 10%
      z-index 40
      width 80%
      no-wrap()
      text-align center
      line-height 40px
      font-size $font-size-large
      color $color-text
    .bg-image
      position relative
      width 100%
      height 0
      padding-top 70%
      transform-origin top
      backgroud-size cover
      .play-wrapper
        position absolute
        bottom 20px
        z-index 50
        width 100%
        .play
          box-sizing border-box
          width 135px
          padding 7px 0
          margin 0 auto
          text-align center
          border 1px solid $color-theme
          border-radius 100px
          font-size 0
          .icon-play
            display inline-block
            vertical-align middle
            margin-right 6px
            font-size $font-size-medium-x
          .text
            display inline-block
            vertical-align middle
            margin-right 6px
            font-size $font-size-medium-x
    .list
      position fixed
      top 0
      bottom 0
      width 100%
      background $color-background
      .song-list-wrapper
        padding 20px 30px
      .loading-container
        loading-style()
    .bg-layer
      position relative
      height 100%
      background $color-background
</style>
