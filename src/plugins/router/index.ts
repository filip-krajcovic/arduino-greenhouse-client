import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HistoryView from '@/views/HistoryView.vue'
import CatalogueView from '@/views/CatalogueView.vue'
import NotificationsView from '@/views/NotificationsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import SettingsView from '@/views/SettingsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView,
    },
    {
      path: '/catalogue',
      name: 'catalogue',
      component: CatalogueView,
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: NotificationsView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
    },
  ]
})

export default router
