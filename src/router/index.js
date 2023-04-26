//导入vue-router
import { createRouter, createWebHashHistory } from "vue-router"
import Layout from '../views/Home'

export const constantRouterMap = [
    { path: '/login', component: () => import('@/views/Login'), hidden: true },
    { path: '/404', component: () => import('@/views/404'), hidden: true },
    {
        path: '',
        component: Layout,
        redirect: '/home',
        children: [{
            path: 'home',
            name: 'home',
            component: () => import('@/views/Home'),
            meta: { title: '首页', icon: 'home' }
        }]
    }
]


//创建路由表
const routes = [
    { path: '/', component: () => import('@/views/Home.vue') },
    { path: '/login', component: () => import('@/views/Login.vue') },
    { path: '/register', component: () => import('@/views/Register.vue') },
    {
        path: '/user/:id', component: () => import('@/views/User.vue'),
        children: [
            {
                path: 'profile', component: () => import('@/views/user/Profile.vue'),
            },
            {
                path: 'posts', component: () => import('@/views/user/Posts.vue'),
            }
        ]
    }

]

console.log(routes)

export const asyncRouterMap = [
    {
      path:'/ums',
      component: Layout,
      redirect: '/ums/admin',
      name: 'ums',
      meta: {title: '权限', icon: 'ums'},
      children: [
        {
          path: 'admin',
          name: 'admin',
          component: () => import('@/views/ums/admin/admin'),
          meta: {title: '用户列表', icon: 'ums-admin'}
        },
        {
          path: 'role',
          name: 'role',
          component: () => import('@/views/ums/role/role'),
          meta: {title: '角色列表', icon: 'ums-role'}
        },
        {
          path: 'allocMenu',
          name: 'allocMenu',
          component: () => import('@/views/ums/role/allocMenu'),
          meta: {title: '分配菜单'},
          hidden: true
        },
        {
          path: 'allocResource',
          name: 'allocResource',
          component: () => import('@/views/ums/role/allocResource'),
          meta: {title: '分配资源'},
          hidden: true
        },
        {
          path: 'menu',
          name: 'menu',
          component: () => import('@/views/ums/menu/menu'),
          meta: {title: '菜单列表', icon: 'ums-menu'}
        },
        {
          path: 'addMenu',
          name: 'addMenu',
          component: () => import('@/views/ums/menu/add'),
          meta: {title: '添加菜单'},
          hidden: true
        },
        {
          path: 'updateMenu',
          name: 'updateMenu',
          component: () => import('@/views/ums/menu/update'),
          meta: {title: '修改菜单'},
          hidden: true
        },
        {
          path: 'resource',
          name: 'resource',
          component: () => import('@/views/ums/resource/resource'),
          meta: {title: '资源列表', icon: 'ums-resource'}
        },
        {
          path: 'resourceCategory',
          name: 'resourceCategory',
          component: () => import('@/views/ums/resource/categoryList'),
          meta: {title: '资源分类'},
          hidden: true
        }
      ]
    },
    {path: '/:catchAll(.*)', redirect: '/404', hidden: true}
  ]

console.log(asyncRouterMap)

//创建路由
const router = createRouter({
    history: createWebHashHistory(),
    //创建路由表
    routes: constantRouterMap,
})

//将router作为默认导出
export default router


