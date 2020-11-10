import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/patientList',
  }
  ,
  {
    path: '/login',
    name: 'Login',
    component: resolve => (require(["../views/login/login.vue"], resolve))
  },
  {
    path: '/woek',
    name: 'Work',
    component: resolve => (require(["../views/work/work.vue"], resolve))
  },
  // {
  //   path: '//:orginCode?',
  //   name: 'PatientList',
  //   component: resolve => (require(["../views/patientList/patientList.vue"], resolve)),
  //   meta: [
  //     { title: '选择对象' },
  //   ],
  // },
  {
    path: '/patientList',
    name: 'PatientList',
    component: resolve => (require(["../views/patientList/patientList.vue"], resolve)),
    meta: [
      { title: '选择对象' },
    ],
  },
  {
    path: '/patientInfo',
    name: 'PatientInfo',
    component: resolve => (require(["../views/patientInfo/patientInfo.vue"], resolve)),
    meta: [
      { title: '选择业务' },
    ],
  }, {
    path: '/seeDoctorList',
    name: 'SeeDoctorList',
    component: resolve => (require(["../views/seeDoctorList/seeDoctorList.vue"], resolve)),
    meta: [
      { title: '就诊记录' },
    ],
  },
  {
    path: '/firstExamine',
    name: 'FirstExamine',
    component: resolve => (require(["../views/firstExamine/firstExamine.vue"], resolve)),
    meta: [
      { title: '电脑验光初诊(初诊)' },
    ],
  },
  {
    path: '/intraocular',
    name: 'Intraocular',
    component: resolve => (require(["../views/firstExamine/intraocular.vue"], resolve)),
    meta: [
      { title: '眼压检测(初诊)' },
    ],
  },
  {
    path: '/synthesizeExamine',
    name: 'SynthesizeExamine',
    component: resolve => (require(["../views/firstExamine/synthesizeExamine.vue"], resolve)),
    meta: [
      { title: '综合验光(初诊)' },
    ],
  },
  {
    path: '/repeatedExamine',
    name: 'RepeatedExamine',
    component: resolve => (require(["../views/firstExamine/repeatedExamine.vue"], resolve)),
    meta: [
      { title: '复光(初诊)' },
    ],
  },
  {
    path: '/optometry',
    name: 'Optometry',
    component: resolve => (require(["../views/firstExamine/optometry.vue"], resolve)),
    meta: [
      { title: '综合验光(复查)' },
    ],
  },
  {
    path: '/seeDoctorInfo',
    name: 'SeeDoctorInfo',
    component: resolve => (require(["../views/seeDoctorList/seeDoctorInfo.vue"], resolve)),
    meta: [
      { title: '就诊记录(初诊)' },
    ],
  },
  



]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 获取token  
  const token = store.state.token
  if (!token) return next('/login')
  next()
})
export default router
