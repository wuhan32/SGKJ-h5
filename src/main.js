import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import './utils/hostcss'
Vue.config.productionTip = false
// 字体图标
import './assets/iconfont/iconfont.css'
import { Toast } from "vant";

Vue.prototype.paramsValidate = function (params) {
  let flag = true;
  for (var key in params) {
    if (params[key] != '0' && !params[key]) {
      Toast('请检查所有患者是否填写完整');
      return false; // 终止程序
    }
  }
  return flag;
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
