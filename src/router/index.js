import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Site from '../views/Site.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Sites',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/site/:id',
    name: 'Site',
    component: Site,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
