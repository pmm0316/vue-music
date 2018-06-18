<template>
    <div class="singer">singer</div>
</template>

<script>
import {getSingerList} from 'api/request/singer'
import {ERR_OK} from 'api/config'
export default {
  name: 'Singer',
  data () {
    return {
      singers: []
    }
  },
  methods: {
    _getSingerList () {
      getSingerList().then(res => {
        res = res.data
        if (res.code === ERR_OK) {
          this.singers = res.data.list
        }
      })
    }
  },
  created () {
    this._getSingerList()
  }
}
</script>

<style scoped lang='stylus' type='text/stylus'>
  .singer
    position fixed
    top 88px
    bottom 0
    width 100%
</style>
