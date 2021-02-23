import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/list.vue'),
    children: [
      {
        path: "/listDetail",
        name: "listDetail",
        component: () =>import("../views/listDetail.vue")
      }
    ]
  },
  {
    path: '/audit',
    name: 'audit',
    component: () => import('../views/audit.vue'),
    children: [
      {
        path: "/auditDetail",
        name: "auditDetail",
        component: () =>import("../views/auditDetail.vue"),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
