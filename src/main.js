import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';//引入全部的样式

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: routes.list
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
