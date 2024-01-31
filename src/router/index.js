import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TechnologyView from '@/views/TechnologyView.vue'
import DestinationView from '@/views/DestinationView.vue'
import CrewView from '@/views/CrewView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/technology',
      name: 'technology',
      component: TechnologyView
    },
    {
      path: '/crew',
      name: 'crew',
      component: CrewView
    },
    {
      path: '/destination',
      name: 'destination',
      component: DestinationView
    }
  ]
})

export default router
