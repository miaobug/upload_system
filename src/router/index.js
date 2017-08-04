import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import MainPage from '@/components/MainPage';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/page',
      component: MainPage,
      // children: [
      //   {
      //     path: '/page/2-4',
      //     component: StagePassage,
      //   },
      // ],
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
