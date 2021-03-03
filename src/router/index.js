import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
NProgress.configure({
  showSpinner: false
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
    meta: {
      title: "用户登录"
    }
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("../views/auth.vue"),
    meta: {
      title: "用户授权"
    }
  },
  {
    path: "/list",
    name: "list",
    component: () => import("../views/list.vue"),
    meta: {
      title: "藏品列表"
    }
  },
  {
    path: "/audit",
    name: "audit",
    component: () => import("../views/audit.vue"),
    meta: {
      title: "入藏申请"
    },
    children: [
      {
        path: "auditDetail",
        name: "auditDetail",
        component: () => import("../views/auditDetail.vue"),
        meta: {
          title: "审核详情"
        },
        children: [
          {
            path: "collectionInfo",
            name: "collectionInfo",
            component: () => import("../views/collectionInfo.vue"),
            meta: {
              title: "藏品详情"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/auditHistory",
    name: "auditHistory",
    component: () => import("../views/auditHistory.vue"),
    meta: {
      title: "审核记录"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.afterEach(() => {
  NProgress.done();
});

router.beforeEach((to, from, next) => {
  const {
    meta: { title }
  } = to;
  document.title = title;
  NProgress.start();
  next();
});

export default router;
