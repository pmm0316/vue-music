/**
 * CREATED DATE: 2018/6/18 15:24:11
 * author: Absent Min
 * 歌手的实体类
 */
export default class Singer {
  constructor ({id, name}) {
    this.id = id
    this.name = name
    this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
  }
}
