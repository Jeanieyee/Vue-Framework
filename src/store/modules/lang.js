import i18n from '@/i18n/index'
import { setStore,getStore } from '@/utils/index'

let language=window.navigator.language || navigator.browserLanguage
let myLang = 'cn'
if(language.toUpperCase().indexOf('ZH-CN')!=-1){
  myLang='cn'
}else if(language.toUpperCase().indexOf('EN')!=-1){
  myLang='en'
}else if(language.toUpperCase().indexOf('ZH-TAI')!=-1){
  myLang='tw'
}
let getLang = getStore('lang') || myLang
setStore('lang',getLang)
i18n.locale = getLang
document.title=i18n.messages[i18n.locale].Title
const lang = {
  state: {
    lang: getLang
  },
}
export default lang
