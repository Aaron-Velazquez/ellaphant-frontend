import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/Nosotros.vue'
import Services from '../components/Servicios.vue'
import Contacto from '../components/Contacto.vue'
import Redes from '../components/Redes.vue'
import Packaging from '../components/Packaging.vue'
import Branding from '../components/Branding.vue'
import DashboardView from '../views/DashboardView.vue'
import ContactsView from '../views/ContactsView.vue'
import { supabase } from '../composables/useSupabase'


const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue'),
    meta: {
      title: 'Iniciar sesión'
    }
  },
  {
    path: '/dashboard',
    component: () => import('../layouts/DashboardLayout.vue'),
    meta: { requiresAuth: true,
      title: 'Dashboard'
     },
    children: [
      {
        path: '/Dhome',
        name: 'DashboardHome',
        component: DashboardView
      },
      {
        path: 'contacts',
        name: 'DashboardContacts',
        component: ContactsView
      }
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: About
  },
  {
    path: '/servicios',
    name: 'Services',
    component: Services
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/portafolio',
    name: 'Portafolio',
    component: () => import('../components/Portafolio.vue')
  },
  {
    path: '/redes-sociales',
    name: 'Redes',
    component: Redes
  },
  {
    path: '/packaging',
    name: 'Packaging',
    component: Packaging
  },
  {
    path: '/branding',
    name: 'Branding',
    component: Branding
  },
  {
    path: '/desarrollo-web',
    name: 'Desarrollo',
    component: () => import('../components/Desarrollo.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    const { data: { session } } = await supabase.auth.getSession()
    // si la sesión no existe, redirige a /login
    if (!session) {
      return next('/login')
    }
  }
  next()
})

export default router