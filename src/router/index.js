import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
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
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/user/Login.vue")
      },
      {
        path: "/user/register",
        name: "Register",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/user/Register.vue")
      }
    ]
  },
  {
    path: "/dashboard",
    component: () =>
      import(/* webpackChunkName: "user" */ "../layouts/BaseLayout.vue"),
    children: [
      {
        path: "/dashboard",
        redirect: "/dashboard/workplace"
      },
      {
        path: "/dashboard/workplace",
        name: "Workplace",
        component: () =>
          import(
            /* webpackChunkName: "user" */ "../views/dashboard/Workplace.vue"
          )
      },
      {
        path: "/dashboard/analysis",
        name: "Analysis",
        component: () =>
          import(
            /* webpackChunkName: "user" */ "../views/dashboard/Analysis.vue"
          )
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
