<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from 'components/header/MHeader'
import Tab from 'components/tab/Tab'
export default {
  name: 'App',
  components: {
    MHeader,
    Tab
  }
}
</script>

<style lang="stylus">
// 引入样式，用@import方式引入
@import '~stylus/variable.styl'
#app
  color $color-theme
</style>
