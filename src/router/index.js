import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import MainPage from '@/components/MainPage';
import HeaderPage from '@/components/HeaderPage';
import NotFound from '@/components/NotFound';
import UploadStagePassage from '@/components/stagePassage/UploadStagePassage';
import AllStagePassage from '@/components/stagePassage/AllStagePassage';
import StagePassage from '@/components/stagePassage/StagePassage';
import SetType from '@/components/stagePassage/SetType';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/page',
      component: MainPage,
      children: [
        {
          path: '/page/2-4',
          component: UploadStagePassage,
          alias: '/stagePassage/upload',
        },
        {
          path: '/page/2-5',
          component: AllStagePassage,
          alias: '/stagePassage/all',
        },
        {
          path: '/page/2-6',
          component: SetType,
          alias: '/stagePassage/setType',
        },
      ],
    },
    {
      path: '/headerPage',
      component: HeaderPage,
      children: [
        {
          path: '/headerPage/2-1/:id',
          component: StagePassage,
          alias: '/stagePassage/:id',
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/*',
      component: NotFound,
    },
  ],
});
