import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../component/Home";
import Login from "../component/Login";
import Board from "../component/Board";
import Card from "../component/Card";
import store from "../store";

import NotFound from "../component/NotFound";

Vue.use(VueRouter);

const requireAuth = (to, from, next) => {
  const loginPath = `/login?returnURL=${encodeURIComponent(to.path)}`;
  store.getters.isAuth ? next() : next(loginPath);
};

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home }, // path: "/", component: Home, beforeEnter: requireAut
    { path: "/login", component: Login },
    {
      path: "/b/:bid",
      component: Board,
      children: [{ path: "c/:cid", component: Card }] //      beforeEnter: requireAuth,
    },
    { path: "*", component: NotFound }
  ]
});

export default router;
