import $http from '../http'

//登录
// export function login(loginForm) {
//   return $http({
//     method: 'post',
//     url: 'User/Login',
//     data: loginForm
//   })
// }
export function login(loginForm) {
  return $http({
    method: 'post',
    url: 'User/SimpleLogin',
    data: loginForm
  })
}


//获取验证码图片
export function GetValidateCode() {
  return $http({
      url: 'User/GetValidateCode'
  })
}
