import { createRouter, createWebHistory } from 'vue-router'
import Studio from '../views/Studio.vue'


import AboutVue from '@/views/About.vue'
import MeVue from '@/views/Me.vue'
import AppVue from '@/App.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Me',
      component: MeVue
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutVue
    }, 
    {
      path: '/studio', 
      name: 'studio', 
      component: Studio 
    }, 
 
  ]
})

export default router
