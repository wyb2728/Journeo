// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import MapView from './components/MapView.vue'
import Home from './components/Home.vue'
import UserProfile from './components/UserProfile.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/map', component: MapView },
  { path: '/UserProfile', component: UserProfile }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router