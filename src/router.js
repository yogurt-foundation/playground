import Vue from 'vue';
import Router from 'vue-router';

import Index from './views/Index.vue';
import About from './components/about.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
