<template>
    <scroll class="listview" :data="data" ref="listview">
      <ul>
        <li v-for="group in data"
            ref="listGroup"
            class="list-group"
            :key="group.title">
          <h2 class="list-group-title">{{group.title}}</h2>
          <ul>
            <li v-for="item in group.items"
                class="list-group-item"
                :key="item.id">
              <img class="avatar" v-lazy="item.avatar">
              <span class="name">{{item.name}}</span>
            </li>
          </ul>
        </li>
      </ul>
      <div class="shortcutList"
           @touchstart="onShortcutTouchStart"
           @touchmove="onShortcutTouchMove">
        <ul>
          <li v-for="(item, index) in shortcutList"
              class="item"
              :data-index="index"
              :key="index">{{item}}</li>
        </ul>
      </div>
    </scroll>
</template>

<script>
import Scroll from 'base/scroll/Scroll'
import {getData} from 'common/js/dom'
const ANCHOR_HEIGHT = 18
export default {
  name: 'ListView',
  props: {
    data: {
      type: Array
    }
  },
  computed: {
    shortcutList () {
      return this.data.map((group) => {
        return group.title.substr(0, 1)
      })
    }
  },
  components: {
    Scroll
  },
  methods: {
    onShortcutTouchStart (e) {
      let anchorIndex = getData(e.target, 'index')
      let firstTouch = e.touches[0]
      this.touch.y1 = firstTouch.pageY
      this.touch.anchorIndex = anchorIndex
      this._scrollTo(anchorIndex)
    },
    onShortcutTouchMove (e) {
      let firstTouch = e.touches[0]
      this.touch.y2 = firstTouch.pageY
      let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0
      let anchorIndex = delta + parseInt(this.touch.anchorIndex)
      this._scrollTo(anchorIndex)
    },
    _scrollTo (index) {
      this.$refs['listview'].scrollToElement(this.$refs['listGroup'][index], 0)
    }
  },
  created () {
    this.touch = {}
  }
}
</script>

<style scoped lang='stylus' type='text/stylus'>
  @import '~stylus/variable.styl'
  .listview
    position relative
    width 100%
    height 100%
    overflow hidden
    background $color-background
    .list-group
      padding-bottom 30px
      .list-group-title
        height 30px
        line-height 30px
        padding-left 20px
        font-size $font-size-small
        color $color-text-l
        background $color-highlight-background
      .list-group-item
        display flex
        align-items center
        padding 20px 0 0 30px
        .avatar
          width 50px
          height 50px
          border-radius 50%
        .name
          margin-left 20px
          color $color-text-l
          font-size $font-size-medium
    .shortcutList
      position absolute
      z-index 30
      right 0
      top 50%
      transform translateY(-50%)
      width 20px
      padding 20px 0
      border-radius 10px
      text-align center
      background $color-background-d
      font-family Helvetica
      .item
        padding 3px
        line-height 1
        color $color-text-l
        font-size $font-size-small
</style>
