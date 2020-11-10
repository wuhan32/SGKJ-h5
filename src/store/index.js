import Vue from 'vue'
import Vuex from 'vuex'
import { setCookie, getCookie } from "../utils/vCookie"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存储token

    token:   (getCookie('token')),   // token
    userInfo:   (getCookie('userInfo')),
    organizationList:   (getCookie('organizationList')),
    screenWidth: "",
    screenHeight: ""
  },
  getters: {    // 监听数据变化的
    getToken(state) {   // 获取本地存储的登录信息
      if (!state.token) {
        state.token =   (getCookie('token'))
      }
      return state.token
    },
    userInfo(state) {
      if (!state.userInfo) {
        state.userInfo =   (getCookie('userInfo'))
      }
    },
    organCode(state) {
      if (!state.organizationList) {
        state.organizationList =   (getCookie('organizationList'))
      }
    }
  },
  mutations: {
    $_setToken(state, value) { // 设置存储token
      state.token = value;
      setCookie('token', value,365);
    },
    $_setUserInfo(state, value) { // 设置存储userinfo
      state.userInfo =   (value);
      setCookie('userInfo', value,365);
    },
    $_removeStorage(state, value) {  // 删除token
      state.token = value;
      //localStorage.removeItem('token');
    },
    $_setOrganizationList(state, value) {//设置机构列表
      state.organizationList = value;
    },
    $screenWidth(state, value) {//设置机构列表
      state.screenWidth = value;
    },
    $screenHeight(state, value) {//设置机构列表
      state.screenHeight = value;
    }
  },
},


)
