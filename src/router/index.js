import Contracts from '../views/Contracts.vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import Contract from "../views/Contract.vue";
import Box from "../views/Box.vue"
import Profile from "../views/Profile.vue";
import AddBox from "../views/AddBox.vue";
import Login from "../views/Login.vue";

const history = createWebHashHistory()
const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/profile/:id',
        name: 'Profile',
        component: Profile,
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/',
        name: 'Contracts',
        component: Contracts,
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/box/add',
        name: 'AddBox',
        component: AddBox,
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/box/:id',
        name: 'Contract',
        component: Contract,
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/boxes',
        name: 'Boxes',
        component: Box,
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
            layout: 'default'
        }
    }
]
const router = createRouter({
    linkActiveClass: 'active',
    history,
    routes
})

export {router}
