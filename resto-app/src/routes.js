import { createWebHistory,createRouter } from "vue-router";
import HomeComp from "./components/HomeComp.vue";
import SignUp from "./components/SignUp.vue";
import LoginComp from "./components/LoginComp.vue"
import AddResto from '@/components/AddResto.vue'
import UpdateResto from '@/components/UpdateResto.vue'
const routes=
[
    {
        name:'Home',
        path:'/',
        component:HomeComp
    },
    {
        name:'SignUp',
        path:'/sign-up',
        component:SignUp
    },
    {
        name:'Login',
        path:'/login',
        component:LoginComp
    },
    {
        name:'AddResto',
        path:'/add-resto',
        component:AddResto
    },
    {
        name:'UpdateRestro',
        path:'/update-restro/:id',
        component:UpdateResto
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router