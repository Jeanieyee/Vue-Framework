const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  mobile: state => state.user.mobile,
  email: state => state.user.email,
  roleName: state => state.user.roleName,
  roles: state => state.user.roles,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  enumsList:state => state.enums.enumsList,
  lang:state => state.lang.lang
}
export default getters
