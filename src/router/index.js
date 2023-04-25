//导入vue-router
import { createRouter, createWebHashHistory } from "vue-router"
import Layout from '../views/Home'

const constantRouterMap = [
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

//创建路由
const router = createRouter({
    history: createWebHashHistory(),
    //创建路由表
    routes: constantRouterMap,
})

//将router作为默认导出
export default router


