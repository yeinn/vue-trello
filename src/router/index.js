import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../component/Home";
import Login from "../component/Login";
import Board from "../component/Board";
import Card from "../component/Card";

import NotFound from "../component/NotFound";

Vue.use(VueRouter);

const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem("token");
  const loginPath = `/login?returnURL=${encodeURIComponent(to.path)}`;
  isAuth ? next() : next(loginPath);
};

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home, beforeEnter: requireAuth },
    { path: "/login", component: Login },
    {
      path: "/b/:bid",
      component: Board,
      beforeEnter: requireAuth,
      children: [{ path: "c/:cid", component: Card }]
    },
    { path: "*", component: NotFound }
  ]
});

export default router;
