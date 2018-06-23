<template>
    <div class="song-list">
      <ul>
        <li class="item" v-for="song in songs" :key="song.id">
          <div class="content">
            <h2 class="name">{{song.name}}</h2>
            <p class="desc">{{getDesc(song)}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'SongList',
  props: {
    songs: {
      type: Array
    }
  },
  methods: {
    getDesc (song) {
      return `${song.name}。${song.album}`
    }
  }
}
</script>

<style scoped lang='stylus' type='text/stylus'>
  @import '~stylus/variable.styl'
  @import '~stylus/mixin.styl'
  .song-list
    .item
      display flex
      align-items center
      box-sizing border-box
      height 64px
      font-size $font-size-medium
      .content
        flex 1
        line-height 20px
        overflow hidden
        .name
          no-wrap()
          color $color-text
        .desc
          no-wrap()
          margin-top 4px
          color $color-text-d
</style>
