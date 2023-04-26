import router from './router'
import { getToken } from '@/utils/auth' // 验权
const whiteList = ['/login'] // 不重定向白名单
import store from './store'

router.beforeEach((to, from, next) => {
    console.log("from:" + from + ",to:" + to)
    if (getToken()) {
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            if (store.getters.roles.length === 0) {
                console.log("store.getters.roles.length is zero!")
                store.dispatch('GetInfo').then(res => { // 拉取用户信息
                    let menus = res.data.menus;
                    let username = res.data.username;
                    // console.log("menus:" + menus)
                    // console.log("username:" + username)
                    store.dispatch('GenerateRoutes', { menus, username }).then(() => { // 生成可访问的路由表
                        store.getters.addRouters.forEach((rt) => {
                            router.addRoute(rt); // 动态添加可访问路由表
                        });
                        next({ ...to, replace: true })
                    })
                }).catch((err) => {
                    store.dispatch('FedLogOut').then(() => {
                        console.error("logou failed!" + err)
                        next({ path: '/' })
                    })
                })
            } else {
                next()
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')

        }
    }
})

router.afterEach(() => {
    console.log("end")
})