import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/article'
    },
    {
      path: '/register',
      name: 'register',
      meta:{
        admin:0
      },
      component: () => import('../views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta:{
        admin:0
      },
      component: () => import('../views/Login.vue')
    },
    {
      path: '/article',
      name: 'articleList',
      component: () => import('../views/ArticleList.vue')
    },
    {
      path: '/article/:articleId',
      name: 'article',
      component: () => import('../views/Article.vue')
    },
    {
      path: '/home',
      name: 'home',
      meta:{
        admin:0
      },
      component: () => import('../views/Home.vue')
    },
    {
      path: '/manage/article',
      name: 'manageArticle',
      component: () => import('../views/ManageBlogList.vue')
    },
    {
      path: '/manage/article/create/',
      name: 'manageCreate',
      component: () => import('../views/ArticleCreate.vue')
    },
    {
      path: '/manage/article/edit/:articleId',
      name: 'manageEdit',
      component: () => import('../views/ManageEditor.vue')
    },
    {
      path: '/manage/article/comment',
      name: 'manageComment',
      component: () => import('../views/CommentManage.vue')
    },
    {
      path: '/manage/tag',
      name: 'manageTag',
      component: () => import('../views/TagManage.vue')
    },
    {
      path: '/manage/user',
      name: 'manageUser',
      component: () => import('../views/UserManage.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/Logout.vue')
    },
    {
      path: '/tag:tagName',
      name: 'tag',
      component: () => import('../views/TagDetails.vue')
    }
  ]
})

export default router
