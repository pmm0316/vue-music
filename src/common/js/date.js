/**
 * CREATED DATE: 2018/6/13 21:16:42
 * author: Absent Min
 */
const dateFormat = {
  strToDate (strDate) {
    let strDateArr = strDate.split(' ')
    let fullYearStr = strDateArr[0]
    let fullYearArr = fullYearStr.split('-')
    let year = fullYearArr[0]
    let month = fullYearArr[1]
    let day = fullYearArr[2]
    let fullTimeArr = strDateArr[1].split(':')
    let hours = fullTimeArr[0]
    let minutes = fullTimeArr[1]
    let seconds = fullTimeArr[2]
    let date = new Date()
    date.setFullYear(year, month, day)
    date.setHours(hours)
    date.setMinutes(minutes)
    date.setSeconds(seconds)
    return date
  },
  dateToStr () {
    console.log('dateToStr')
  }
}
export default dateFormat
