import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobView from '../views/job/JobView.vue'
import JobDetails from '../views/job/JobDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: JobView
    },
    {
        path: '/job-details/:id',
        name: 'job-details',
        component: JobDetails,
        props: true,
    },

    /**
     * Redirect Route
     */
    {
        path: '/all-jobs',
        redirect: '/jobs',
    },

    /**
     * ကျနော်တို့ဘက်က မသတ်မှတ်ထားတဲ့ route တွေကို
     * request လုပ်တဲ့အခါတွေမှာ NotFound.vue ဆိုတဲ့ component ကိုပြပါမယ်။
     */
    {
        /**
         * /:catchAll(.*) means
         * the route will match any path
         * that doesn't match any other defined routes.
         */
        path: '/:catchAll(.*)',
        component: NotFound,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
