import Vue from 'vue';

import App from './App.vue';
import router from './router';

import 'yogurt-css/dist/yogurt-1.1.5_solidcore.min.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(
    App,
  ),
}).$mount('#app');
