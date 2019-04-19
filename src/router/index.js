import Vue from 'vue'
import VueRouter from 'vue-router'

import demo from '../views/demo.vue'
import login from '../components/login/login.vue'
import home from '../components/home/home.vue'


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/home',
            name: 'home',
            component: home,
            meta: {
                requireAuth: true, // 判断是否需要登录
            },
            children: [
                {
                    path: 'admin',
                    name: 'demo',
                    component: demo
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
        // console.log('需要登录');
        if (localStorage.getItem('Authorization')) { // 判断当前的token是否存在 ； 登录存入的token
            next();
        }
        else {
            next({
                path: '/login',
                query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
});



// router.beforeEach((to, from, next) => {
//     if (to.path === '/login') {
//         next();
//     } else {
//         let token = localStorage.getItem('Authorization');

//         if (token === 'null' || token === '') {
//             next('/login');
//         } else {
//             next();
//         }
//     }
// });

export default router


