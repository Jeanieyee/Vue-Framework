import {asyncRouterMap, constantRouterMap} from '@/router/index'

const roleTotal = [
  {code: 100, description: '培训中心'},
  {code: 101, description: '资料中心'},
  {code: 102, description: '家校通CRM'},
  {code: 103, description: '一体化OA系统'},
  {code: 104100, description: '人工盘库'},
  {code: 104101, description: '自动化盘库'},
  {code: 105100, description: '班级管理'},
  {code: 105101, description: '教学计划'},
  {code: 105102, description: '教案中心'},
  {code: 105103, description: '档案管理'},
  {code: 106100, description: '蒙氏专业版'},
  {code: 106101, description: '普通园所通用版'}
]

// 处理过的路由
const roleTotalArr = handleRoutes(roleTotal)

function filterAsyncRouter (asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPremission(route, roles)) {
      //有权限
      if (route.children && route.children.length > 0) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}
function hasPremission (route, roles) {
  if (route.meta && route.meta.code) {
    //需要权限
    return roles.indexOf(route.meta.code) >= 0
  } else {
    return true
  }
}

// 处理路由
function handleRoutes (rolesTotal) {
  let rolesObject = []
  rolesTotal.map(role => {
    let codeString = role.code.toString()
    if (codeString.length > 3) {
      rolesObject.push(role.code)
      rolesObject.push(parseInt(codeString.substr(0, 3)))
    } else {
      rolesObject.push(role.code)
    }
  })
  rolesObject = [...new Set(rolesObject)]
  return rolesObject
}
const routerAsset = filterAsyncRouter(asyncRouterMap, roleTotalArr)
console.log(routerAsset)
