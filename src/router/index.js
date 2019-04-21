import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login/login.vue'
import Home from '../components/home/home.vue'
import main from '../views/main.vue'
import code from '../views/code.vue'
import page2 from '../views/page2.vue'
import page3 from '../views/page3.vue'
import page4 from '../views/page4.vue'


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [

        {
            path: '/',
            component: Home,
            redirect: 'main',
            meta: {
                requireAuth: true, // 判断是否需要登录
            },
            children: [
                {
                    path: 'main',
                    name: '首页',
                    component: main,
                },
                {
                    path: 'code',
                    name: '支付二维码列表',
                    component: code
                },
                {
                    path: 'page2',
                    name: '新建二维码',
                    component: page2
                },
                {
                    path: 'page3',
                    name: 'page3',
                    component: page3
                },
                {
                    path: 'page4',
                    name: 'page4',
                    component: page4
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: login
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
        // console.log('需要登录');
        if (localStorage.getItem('token')) { // 判断当前的token是否存在 ； 登录存入的token
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


