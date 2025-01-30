import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppProjectView from '../views/AppProjectView.vue'
import EditProjectView from '../views/EditProjectView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },

    {
        path: '/add-project',
        name: 'add-project',
        component: AppProjectView
    },

    {
        path: '/edit-project/:id',
        name: 'edit-project',
        component: EditProjectView,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
