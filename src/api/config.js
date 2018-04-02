import fetch from '@/utils/fetch'

//获取七牛token
export function getUpToken () {
  return fetch({
    url: '/organize/qiniu/uptoken',
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
//获取国籍
export function country () {
  return fetch({
    url: '/organize/country',
    method: 'post'
  })
}
// 获取民族
export function nation () {
  return fetch({
    url: '/organize/nation',
    method: 'post'
  })
}
