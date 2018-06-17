<template>
    <div class="slider" ref="slider">
      <div class="slider-group" ref="sliderGroup">
        <slot></slot>
      </div>
      <div class="dots">
        <span class="dot"
              v-for="(dot, index) in dots"
              :key="index"
              :class="{active: currentPageIndex === index}"></span>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { addClass } from 'common/js/dom'

export default {
  name: 'Slider',
  data () {
    return {
      dots: [],
      currentPageIndex: 0
    }
  },
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  methods: {
    // 设置轮播图的宽度
    _setSliderWidth () {
      this.children = this.$refs['sliderGroup'].children
      let width = 0
      let silderWidth = this.$refs['slider'].clientWidth
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        addClass(child, 'slider-item')
        child.style.width = silderWidth + 'px'
        width += silderWidth
      }
      /* if (this.loop) {
        width += 2 * silderWidth
      } */
      this.$refs['sliderGroup'].style.width = width + 'px'
    },
    // 初始化轮播图
    _initSlider () {
      /**
       * 新建一个BScroll对象，
       * 设置属性值
       * @type {BScroll} 轮播图
       */
      this.scroll = new BScroll(this.$refs['slider'], {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        snapLoop: this.loop,
        snapThreshold: 0.3,
        snapSpeed: 400
      })
      /**
       * 监听轮播图滑动结束时间
       * 得到当前页面的index
       */
      this.scroll.on('scrollEnd', () => {
        let pageIndex = this.scroll.getCurrentPage().pageX
        console.log(pageIndex)
        this.currentPageIndex = pageIndex
        // 点击图片滑动时，清除定时器，重新启动
        if (this.autoPlay) {
          clearInterval(this.timer)
          this._initAutoPlay()
        }
      })
    },
    _initDots () {
      this.dots = new Array(this.children.length)
    },
    _initAutoPlay () {
      let pageIndex = 0
      this.timer = setInterval(() => {
        if (this.loop) {
          pageIndex = (this.currentPageIndex + 1) % this.children.length
        }
        this.scroll.goToPage(pageIndex, 0, 400)
      }, this.interval)
    }
  },
  mounted () {
    setTimeout(() => {
      this._setSliderWidth()
      this._initDots()
      this._initSlider()
      if (this.autoPlay) {
        this._initAutoPlay()
      }
    }, 18)
    window.addEventListener('resize', () => {
      if (!this.scroll) {
        return
      }
      this._setSliderWidth()
      this.scroll.refresh()
    })
  },
  destroyed () {
    clearInterval(this.timer)
  }
}
</script>

<style scoped lang='stylus' type='text/stylus'>
  @import "~stylus/variable.styl"
  .slider
    min-height 1px
    .slider-group
      position relative
      overflow hidden
      white-space nowrap
      .slider-item
        float left
        box-sizing border-box
        overflow hidden
        text-align center
        a
          display block
          width 100%
          overflow hidden
          text-decoration none
          img
            display block
            width 100%
    .dots
      position absolute
      right 0
      left 0
      bottom 12px
      text-align center
      font-size 0
      .dot
        display inline-block
        margin 0 4px
        width 8px
        height 8px
        border-radius 50%
        background $color-text-l
        &.active
          width 20px
          border-radius 5px
          background $color-text-ll
</style>+
