import i18n from '../i18n'
import moment from 'moment'

const filter = function (Vue, options) {
  Vue.filter('date', function (dates, fmt) {
    if (dates === null) {
      return
    }
    let date = new Date(dates)
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }

    function padLeftZero(str) {
      return ('00' + str).substr(str.length)
    }

    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + ''
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
      }
    }
    return fmt
  })
  Vue.filter('number', function (number, n) {
    if (n != 0) {
      n = (n > 0 && n <= 20) ? n : 2
    }
    number = parseFloat((number + '').replace(/[^\d\.-]/g, '')).toFixed(n) + ''
    var sub_val = number.split('.')[0].split('').reverse()
    var sub_xs = number.split('.')[1]

    var show_html = ''
    for (let i = 0; i < sub_val.length; i++) {
      show_html += sub_val[i] + ((i + 1) % 3 == 0 && (i + 1) != sub_val.length ? ',' : '')
    }

    if (n == 0) {
      return show_html.split('').reverse().join('')
    } else {
      return show_html.split('').reverse().join('') + '.' + sub_xs
    }
  })
  Vue.filter('enumsMap', function (code, objArr) {
    let str = ''
    if(code === undefined || code === null || !objArr){
      // str = ''
    }else{
      let match = objArr.filter(item=>{
        return item.code === code
      })[0]
      str = match ? match.description : ''
    }
    return str
  })
}

export default filter

