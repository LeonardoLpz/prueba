import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchGroupalCredits from '@/views/Search-groupal-credits'
import Inspect from '@/views/Inspect'
import SoftwareList from '@/views/Software-list'
import Login from '@/views/Login'
import NoFound from '@/views/No-found'

import firebase from 'firebase/app'

import 'firebase/auth'

Vue.use(VueRouter)

const routes = [

  {
    path: '/software-list',
    component: SoftwareList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/software-list/search-credits',
    name: 'SearchCredits',
    component: SearchGroupalCredits,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/software-list/search-credits/inspect',
    component: Inspect,
    name: 'inspect',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/*',
    name: 'noFound',
    component: NoFound,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) next('/login')
      else next()
    })
  } else next()
})

export default router
