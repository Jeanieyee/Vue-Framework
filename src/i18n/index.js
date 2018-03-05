import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import zhTaiLocale from 'element-ui/lib/locale/lang/zh-TW'
import en from './en'
import tw from './tw'
import cn from './cn'

import ElementLocale from 'element-ui/lib/locale'
Vue.use(VueI18n)

const messages = {
  en: {
    ...en,
    ...enLocale // 或者用 Object.assign({ message: 'hello' }, enLocale)
  },
  cn: {
    ...cn,
    ...zhLocale // 或者用 Object.assign({ message: '你好' }, zhLocale)
  },
  tw:{
    ...tw,
    ...zhTaiLocale // 或者用 Object.assign({ message: '你好' }, zhLocale)
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'cn', // set locale
  messages, // set locale messages
})


ElementLocale.i18n((key, value) => i18n.t(key, value))
export default i18n
