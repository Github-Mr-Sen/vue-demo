//引入VueRouter
import VueRouter from 'vue-router'
import Vue from "vue";

import Index from "@/views/Index"


Vue.use(VueRouter);
//创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
    routes:[
        {
            path:"/index",
            component: Index,
            children:[
                {
                    path:"home",
                    component:()=>import("@/views/Home")
                }


                ]
        },
        {
            path:"/index",
            component: Index
        },
        {
            path:"/index",
            component: Index
        },
        {
            path:"/index",
            component: Index
        }
    ]
})

//暴露router
export default router