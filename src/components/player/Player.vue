<template>
    <div class="player" v-show="playList.length > 0">
      <div class="normal-player" v-show="fullScreen">
        播放器
      </div>
      <div class="mini-player" v-show="!fullScreen"></div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Player',
  computed: {
    ...mapGetters(['fullScreen', 'playList'])
  }
}
</script>

<style scoped lang='stylus' type='text/stylus'>
  @import '~stylus/variable.styl'
  @import '~stylus/mixin.styl'
  .player
    .normal-player
      position fixed
      left 0
      right 0
      top 0
      bottom 0
</style>
