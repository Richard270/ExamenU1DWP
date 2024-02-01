import VueRouter from "vue-router";
import Vue from 'vue';

Vue.use(VueRouter);

const routes=[
    {
        path:'/',
        redirect: '/landing'
    },{
        path: '/',
        component:{
            render(c){
                return c('router-view');
            },
        },
        children: [
            {
                path:'/landing',
                name: 'landing',
                component: ()=>import('../Landing.vue')
            },

        ]
    }
]

const router = new VueRouter({routes, })
export default router; 