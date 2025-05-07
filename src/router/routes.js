const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'news', component: () => import('pages/News.vue') },
      { path: 'create-project', component: () => import('pages/CreateProject.vue') },
      { path: 'edit-json', component: () => import('pages/EditJSON.vue') },
      { path: 'generate-pages', component: () => import('pages/GeneratePages.vue') },      
      { path: 'generate-web-pages', component: () => import('pages/GenerateWebPages.vue') },      
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
