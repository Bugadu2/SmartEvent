import { createRouter, createWebHistory } from '@ionic/vue-router'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('../views/HomePage.vue') },
  { path: '/eventos', component: () => import('../views/EventosPage.vue') },
  { path: '/favoritos', component: () => import('../views/FavoritosPage.vue') },
  { path: '/perfil', component: () => import('../views/PerfilPage.vue') },
  { path: '/eventos/:id', component: () => import('../views/EventoDetalhePage.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router