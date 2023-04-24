//导入vue-router
import { createRouter, createWebHashHistory } from "vue-router"

//创建路由表
const routes = [
    { path: '/', component: () => import('../views/Login.vue') },
    { path: '/login', component: () => import('../views/Login.vue') },
    { path: '/register', component: () => import('../views/Register.vue') },
    {
        path: '/user/:id', component: () => import('../views/User.vue'),
        children: [
            {
                path: 'profile', component: () => import('../views/user/Profile.vue'),
            },
            {
                path: 'posts', component: () => import('../views/user/Posts.vue'),
            }
        ]
    }

]

//创建路由
const router = createRouter({
    history: createWebHashHistory(),
    //创建路由表
    routes,
})

//将router作为默认导出
export default router


