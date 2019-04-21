import Vue from 'vue'
import App from './App.vue'
import './common/stylus/index.styl'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index'
import axios from 'axios'
import store from './store/index'
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  //判断是否存在token，如果存在将每个页面header都添加token
  if (store.state.Authorization) {
    config.headers.common['Authorization'] = store.state.Authorization
  }

  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// http response 拦截器
axios.interceptors.response.use(
  response => {

    return response;
  },
  error => {

    if (error.response) {
      switch (error.response.status) {
        case 401:
          this.$store.commit('del_token');
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }//登录成功后跳入浏览的当前页面
          })
      }
    }
    return Promise.reject(error.response.data)
  });

