<template>
    <div class="mHeader">
      <div class="icon"></div>
      <h1 class="text">Music</h1>
    </div>
</template>

<script>
export default {
  name: 'MHeader'
}
</script>

<style scoped lang='stylus' type='text/stylus'>
@import "~stylus/variable.styl"
@import "~stylus/mixin.styl"
.mHeader
  position relative
  height 44px
  text-align center
  font-size 0
  .icon
    display inline-block
    vertical-align top
    margin-top 6px
    height 32px
    width 30px
    margin-right 9px
    bg-image('logo')
    background-size 30px 32px
  .text
    display inline-block
    vertical-align top
    line-height 44px
    font-size $font-size-large
</style>
