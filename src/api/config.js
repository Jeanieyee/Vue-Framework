import fetch from '@/utils/fetch'

//获取所有枚举
export function getEnums () {
  return fetch({
    url: '/data/enums',
    method: 'post',
  })
}

//获取七牛token
export function getUpToken () {
  return fetch({
    url: '/fileRes/token',
    method: 'post',
  })
}

//改变语言
export function turnLang () {
  return fetch({
    url: '/user/changeLanguage',
    method: 'post',
  })
}
