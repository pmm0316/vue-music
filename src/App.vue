<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
import MHeader from 'components/header/MHeader'
import Tab from 'components/tab/Tab'
import Player from 'components/player/Player'
export default {
  name: 'App',
  components: {
    MHeader,
    Tab,
    Player
  }
}
</script>

<style lang="stylus">
// 引入样式，用@import方式引入
@import '~stylus/variable.styl'
#app
  color $color-theme
</style>
