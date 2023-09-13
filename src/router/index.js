import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/store/auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/winner-list',
    component: () => import('../views/WinnerListView.vue')
  },
  {
    path: '/re-login',
    component: () => import('../views/ReloginView.vue')
  },
  {
    path: '/otp',
    name: 'otp',
    component: () => import('../views/OTPView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/quiz/:id',
    name: 'quiz',
    component: () => import('../views/QuestionView.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to,from,next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.accessToken) {
    next('/'); // Redirect to the home route if not logged in and route requires authentication
  } else {
    next(); // Proceed with the navigation
  }
})

export default router

