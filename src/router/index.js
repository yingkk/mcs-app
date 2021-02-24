import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
    meta: {
      title: '用户登录'
    }
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/list.vue'),
    meta: {
      title: '藏品列表'
    },
    children: [
      {
        path: "listDetail",
        name: "listDetail",
        component: () =>import("../views/listDetail.vue"),
        meta: {
          title: '藏品详情'
        }
      }
    ]
  },
  {
    path: '/audit',
    name: 'audit',
    component: () => import('../views/audit.vue'),
    meta: {
      title: '藏品审核'
    },
    children: [
      {
        path: "auditDetail",
        name: "auditDetail",
        component: () =>import("../views/auditDetail.vue"),
        meta: {
          title: '审核详情'
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const { meta: { title }} = to;
  document.title = title;
  next();
})

export default router
