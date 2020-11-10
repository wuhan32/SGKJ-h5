import originAxios from 'axios'
import store from '@/store/index';
import router from '../router'
import NProgress from 'nprogress'
import { Notify } from 'vant';
import 'nprogress/nprogress.css'





export default function axios(option) {
  return new Promise((resolve, reject) => {
    const instance = originAxios.create({
      // baseURL: 'http://120.25.234.125:8229/api',  //线上
      baseURL: 'https://emr.okios.cn:8229/api',  //线上
      timeout: 50000,
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });
    // 请求
    instance.interceptors.request.use(config => {
      NProgress.start()
      const token = store.state.token;
      token && (config.headers.Authorization = "bearer" + " " + token);
      return config;

    }, error => {
      NProgress.done()

      return Promise.reject(error);
    });
    // 响
    instance.interceptors.response.use(response => {
      NProgress.done()
      if (response.data.code == -1) {
        Notify({
          message: "操作失败，请稍后重试！" + response.data.Notify + "!!!" + [response.data.code],
          type: "warning",
          duration: 1500
        });
      }
      if (response.data.code == 401) {
        router.replace({
          path: '/login',
        })
        //window.localStorage.removeItem('token');
        store.commit("$_removeStorage", "");
        Notify({
          message: "登录失效",
          type: "warning",
          duration: 1500
        });
      }

      return response;
    }, error => {
      if (error.response && error.response.data.code) {
        Notify({
          message: "请求错误[" + error.response.data.message + "]",
          type: "warning",
          duration: 1500
        })
        return Promise.reject(error.response)
      }
      if (error.response) {
        switch (error.response.status) {
          case 400: Notify({
            message: "请求错误(400)",
            type: "warning",
            duration: 1500
          }); break;
          case 401:
            this.$router.push('/login');
            break;
          case 403: Notify({
            message: "拒绝访问(403)",
            type: "warning",
            duration: 1500
          });
            break;
          case 404: Notify({
            message: "请求出错(404)",
            type: "warning",
            duration: 1500
          });
            break;
          case 408: Notify({
            message: "请求超时(408)",
            type: "warning",
            duration: 1500
          });
            break;
          case 500: Notify({
            message: "服务器错误(500)",
            type: "warning",
            duration: 1500
          });
            break;
          case 501: Notify({
            message: "服务未实现(501)",
            type: "warning",
            duration: 1500
          });
            break;
          case 502: Notify({
            message: "网络错误(502)",
            type: "warning",
            duration: 1500
          });
            break;
          case 503: Notify({
            message: "服务不可用(503)",
            type: "warning",
            duration: 1500
          });
            break;
          case 504: Notify({
            message: "网络超时(504)",
            type: "warning",
            duration: 1500
          });
            break;
          case 505: Notify({
            message: "HTTP版本不受支持(505)",
            type: "warning",
            duration: 1500
          });
            break;
          default: Notify({
            message: `连接出错(${err.response.status})!`,
            type: "warning",
            duration: 1500
          });
        }
      } else {
        Notify({
          message: "链接服务器失败",
          type: "warning",
          duration: 1500
        });
      }
      return Promise.reject(error.response)
    });

    instance(option).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}



