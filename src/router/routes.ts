import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/',  redirect: '/home_page' },
      { path: '/home_page', component: () => import('src/pages/home_page.vue') },
      { path: '/about_me', component: () => import('src/pages/about_me.vue') },
      { path: '/portfolio_project', component: () => import('src/pages/portfolio_project.vue') },
      { path: '/study_process', component: () => import('src/pages/study_process.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/PortfolioLayout.vue'),
    children: [
      { path: '/portfolio_project/Smart_Contract_Beverage', component: () => import('src/pages/portfolio_project/Smart_Contract_Beverage.vue') },
      { path: '/portfolio_project/VaccineCloud', component: () => import('src/pages/portfolio_project/VaccineCloud.vue') },
      { path: '/portfolio_project/iMaskerYA', component: () => import('src/pages/portfolio_project/iMaskerYA.vue') },
      { path: '/portfolio_project/ITSeed_OverSea', component: () => import('src/pages/portfolio_project/ITSeed_OverSea.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('src/layouts/DemoLayout.vue'),
    children: [
      { path: '/portfolio_project/VaccineCloud/demo', component: () => import('src/pages/portfolio_project/VaccineCloud_demo.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
