//设置cookie
export function setCookie(c_name, value, expiredays) {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = c_name + "=" + escape(JSON.stringify(value)) +
    ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}

//取回cookie
export function getCookie(c_name) {
  if (document.cookie.length > 0) {
    let c_start = document.cookie.indexOf(c_name + "=")
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1
      let c_end = document.cookie.indexOf(";", c_start)
      if (c_end == -1) c_end = document.cookie.length
      return JSON.parse(unescape(document.cookie.substring(c_start, c_end)))
    }
  }
  return ""
}

