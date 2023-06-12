import * as Vue from "vue";
import * as VueRouter from "vue-router";
import "./style.css";

import App from "./App.vue";

import Home from "./views/Home.vue";
import Services from "./views/Services.vue";
import Contact from "./views/Contact.vue";
import About from "./views/About.vue";

import Terms from "./views/Terms.vue";
import Privacy from "./views/Privacy.vue";
import Disclaimer from "./views/Disclaimer.vue";

const app = Vue.createApp(App);

const navigationRoutes = [
  { path: "/", component: Home },
  { path: "/services", component: Services },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
];

const footerRoutes = [
  { path: "/terms", component: Terms },
  { path: "/privacy", component: Privacy },
  { path: "/disclaimer", component: Disclaimer },
];

const router = VueRouter.createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }; // always scroll to top
  },
  history: VueRouter.createWebHistory(),
  routes: navigationRoutes.concat(footerRoutes),
});

app.use(router);
app.mount("#app");
