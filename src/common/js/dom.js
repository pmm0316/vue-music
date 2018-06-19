/**
 * CREATED DATE: 2018/6/16 13:28:05
 * author: Absent Min
 */
export function addClass (el, className) {
  if (hasClass(el, className)) {
    return
  }
  let classArr = el.className.split(' ')
  classArr.push(className)
  el.className = classArr.join(' ')
}
export function hasClass (el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
export function getData (el, name, val) {
  const prefix = 'data-'
  let preName = prefix + name
  if (val) {
    return el.setAttribute(preName, val)
  }
  return el.getAttribute(preName)
}
