import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostDetails from '../views/PostDetails.vue'
import PostCreate from '../views/PostCreate.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path: '/posts/:id',
    name: 'post-details',
    component: PostDetails,
    props: true
  },{
    path: '/create',
    name: 'create',
    component: PostCreate
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
