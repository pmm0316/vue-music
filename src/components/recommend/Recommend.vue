<template>
  <div class="recommend">
    <scroll class="recommend-content"
            ref="scroll"
            :data="discList">
      <div>
        <!--轮播图 start-->
        <div class="slider-wrapper"
             v-if="recommends.length">
          <slider>
            <div v-for="item in recommends" :key="item.id">
              <a :href="item.linkUrl">
                <img :src="item.picUrl" @load="loadImage">
              </a>
            </div>
          </slider>
        </div><!--轮播图 end-->
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li class="item"
                v-for="item in discList"
                :key="item.dissid">
              <div class="icon">
                <img v-lazy="item.imgurl" width="60" height="60">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!discList.length">
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script>
import {getRecommend, getDiscList} from 'api/request/recommend'
import Scroll from 'base/scroll/Scroll'
import { ERR_OK } from 'api/config'
import Slider from 'base/slider/Slider'
import Loading from 'base/loading/loading'

export default {
  name: 'Recommend',
  data () {
    return {
      recommends: [],
      discList: []
    }
  },
  components: {
    Slider,
    Scroll,
    Loading
  },
  created () {
    this._getRecommend()
    this._getDiscList()
  },
  methods: {
    _getRecommend () {
      getRecommend().then(res => {
        res = res.data
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    },
    _getDiscList () {
      getDiscList().then(res => {
        res = res.data
        if (res.code === ERR_OK) {
          this.discList = res.data.list
        }
      })
    },
    loadImage () {
      if (!this.checkLoaded) {
        this.$refs['scroll'].refresh()
        this.checkLoaded = true
      }
    }
  }
}
</script>

<style scoped lang='stylus' type='text/stylus'>
  @import '~stylus/variable.styl'
  @import '~stylus/mixin.styl'
  .recommend
    display flex
    width 100%
    top 88px
    bottom 0
    .recommend-content
      height 100%
      overflow hidden
      .slider-wrapper
        position relative
        width 100%
        overflow hidden
      .recommend-list
        .list-title
          height 65px
          line-height 65px
          text-align center
          font-size $font-size-medium
          color $color-theme
        .item
          display flex
          box-sizing border-box
          align-items center
          padding 0 20px 20px 20px
          .icon
            flex 0 0 60px
            width 60px
            padding-right 20px
          .text
            display flex
            flex-direction column
            justify-content center
            flex 1
            line-height 20px
            overflow hidden
            font-size $font-size-medium
            .name
              margin-bottom 10px
              color $color-text
            .desc
              color $color-text-d
    .loading-container
      loading-style()
</style>
