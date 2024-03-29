// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Blog from './views/Blog.vue'
import AddBlog from './views/AddBlog.vue'
import UpdateBlog from './views/UpdateBlog.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/blog/:id', component: Blog },
  { path: '/add', component: AddBlog },
  { path: '/update/:id', component: UpdateBlog }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

