// let apiUrl = '/'                // dev 服务地址

if (process.env.NODE_ENV === 'production') {
  // apiUrl = 'http://api.yz.zhihanyun.com/'
}
export default {
  // apiUrl        : apiUrl,
  qiniuUrl      : 'http://upload.qiniu.com/',
  domain        : 'http://res.chinamons.com/',
}

