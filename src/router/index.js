import Vue from 'vue'
import VueRouter from 'vue-router'

import demo from '../views/demo.vue'
import login from '../components/login/login.vue'
import home from '../components/home/home.vue'


Vue.use(VueRouter)
export default new VueRouter  ({
    routes:[
        {
            path:'/',
            name:'login',
            component:login
        },
        {
            path:'/home',
            name:'home',
            component:home,
            children:[
                {
                    path:'admin',
                    name:'demo',
                    component:demo
                }
            ]
        }
    ]
})