// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import MapView from './components/MapView.vue'
import Home from './components/Home.vue'
import HelloWorld from './components/HelloWorld.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/map', component: MapView },
  { path: '/hello', component: HelloWorld }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router