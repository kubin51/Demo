import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: { render: p => p("router-view") },
    children: [{ path: "/", redirect: "/user/login" }]
  },
  {
    path: "/user",
    component: () =>
      import(/* webpackChunkName: "user" */ "../layouts/UserLayout.vue"),
    children: [
      {
        path: "/user",
        redirect: "/user/login"
      },
      {
        path: "/user/login",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/user/Login.vue")
      },
      {
        path: "/user/register",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/user/Register.vue")
      }
    ]
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: "dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../layouts/BaseLayout.vue"),
    children: [
      {
        path: "/dashboard",
        redirect: "/dashboard/workplace"
      },
      {
        path: "/dashboard/workplace",
        name: "工作台",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/dashboard/Workplace.vue"
          )
      },
      {
        path: "/dashboard/analysis",
        name: "分析页",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/dashboard/Analysis.vue"
          )
      }
    ]
  },
  {
    path: "/form",
    name: "表单页",
    meta: "form",
    component: () =>
      import(/* webpackChunkName: "form" */ "../layouts/BaseLayout.vue"),
    children: [
      {
        path: "/form",
        redirect: "/form/baseForm"
      },
      {
        path: "/form/baseForm",
        name: "基础表单",
        component: () =>
          import(/* webpackChunkName: "form" */ "../views/form/BaseForm.vue")
      },
      {
        path: "/form/stepForm",
        name: "分步表单",
        component: () =>
          import(/* webpackChunkName: "form" */ "../views/form/StepForm.vue")
      }
    ]
  },
  {
    path: "/list",
    name: "列表页",
    meta: "unordered-list",
    component: () =>
      import(/* webpackChunkName: "list" */ "../layouts/BaseLayout.vue"),
    children: [
      {
        path: "/list/search",
        name: "搜索列表",
        meta: "edit",
        component: { render: p => p("router-view") },
        children: [
          {
            path: "/list/search/articles",
            name: "文章",
            component: () =>
              import(
                /* webpackChunkName: "list" */ "../views/list/search/Articles.vue"
              )
          },
          {
            path: "/list/search/projects",
            name: "项目",
            component: () =>
              import(
                /* webpackChunkName: "list" */ "../views/list/search/Projects.vue"
              )
          },
          {
            path: "/list/search/applications",
            name: "应用",
            component: () =>
              import(
                /* webpackChunkName: "list" */ "../views/list/search/Applications.vue"
              )
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
