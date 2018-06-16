/**
 * CREATED DATE: 2018/6/16 11:40:29
 * author: Absent Min
 */
export function requestUrl (url) {
  let time = new Date().getTime()
  if (url.indexOf('?') > 0) {
    return url + '$t=' + time
  } else {
    return url + '?t=' + time
  }
}
