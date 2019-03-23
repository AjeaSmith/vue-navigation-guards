import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import settings from "./views/settings.vue";
import user from "./views/user.vue";
import About from "./views/About.vue";
import userDetails from "./views/userDetails.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/user",
      name: "user",
      component: user
    },
    {
      path: "/user/:uuid",
      name: "userdetails",
      component: userDetails
    },
    {
      path: "/settings",
      name: "settings",
      component: settings
    }
  ]
});
