import 'bootstrap-vue/dist/bootstrap-vue.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';
import VueFloatLabel from 'vue-float-label';
import router from '@/router';
import store from '@/store';
import App from '@/App.vue';

Vue.config.productionTip = false;
Vue.use(VueFloatLabel);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
