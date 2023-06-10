import Contracts from '../views/Contracts.vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import Contract from "../views/Contract.vue";
import Box from "../views/Box.vue"
import Home from "../views/Home.vue";

const history = createWebHashHistory()
const routes = [
    {
        path: '/dump',
        name: 'Home',
        component: Home,
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
        path: '/contract/:id',
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
