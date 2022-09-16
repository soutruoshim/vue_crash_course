import {createRouter, createWebHistory} from 'vue-router'

import HomePage from '../views/HomePage'
import AboutPage from '../views/AboutPage'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router