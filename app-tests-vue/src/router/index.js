import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Product from '@/views/Product.vue'
import Doc from '@/views/Documentation.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/product/:name',
    name: 'Product',
    component: Product, 
    props: true
  },

  {
    path: '/doc',
    name: 'Doc',
    component: Doc
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

// Création du routeur
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
