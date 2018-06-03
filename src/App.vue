<template>
  <div id="app">
    <m-header></m-header>
    hello word
  </div>
</template>

<script>
import MHeader from 'components/header/MHeader'
export default {
  name: 'App',
  components: {
    MHeader
  }
}
</script>

<style lang="stylus">
// 引入样式，用@import方式引入
@import '~stylus/variable.styl'
#app
  color $color-theme
</style>
