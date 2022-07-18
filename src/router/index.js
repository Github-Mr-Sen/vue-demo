//引入VueRouter
import VueRouter from 'vue-router'
import Vue from "vue";

import Index from "@/views/Index"


Vue.use(VueRouter);
//创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: Index,
            redirect:"/home",
            children: [
                {
                    path: "home",
                    component: () => import("@/views/Home")
                },
                {
                    path: "user",
                    component: () => import("@/views/sys/User")
                },
                {
                    path: "menu",
                    component: () => import("@/views/sys/Menu")
                },
                {
                    path: "roule",
                    component: () => import("@/views/sys/Role")
                },
                {
                    path: "userInfo",
                    component: () => import("@/views/UserCenter")
                },


            ]
        },
        {
            path: "/login",
            component: () => import("@/views/Login")
        }
    ]
})

//暴露router
export default router