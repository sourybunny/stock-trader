import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import store from './store/store';
Vue.use(VueRouter);

Vue.filter('currency', (value)=>{
  return '$' + value.toLocaleString();
})
const router = new VueRouter({
  mode: 'history',
  routes: routes
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
