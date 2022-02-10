import { createRouter, createWebHistory } from 'vue-router'
import Posts from '../views/Posts.vue'
import AddPost from '../components/add-post.vue'

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/add-post',
    name: 'add-posts',
    component: AddPost
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
