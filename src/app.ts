import * as Vue from "vue";
import * as VueRouter from "vue-router";
import "./style.css";

import App from "./App.vue";

import Home from "./views/Home.vue";
import Services from "./views/services/Index.vue";
import Contact from "./views/Contact.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";

import ServicesClaritySession from "./views/services/ClaritySession.vue";
import ServicesWorkshopsAndSpeaking from "./views/services/WorkshopsAndSpeaking.vue";
import ServicesMoneyAndMingle from "./views/services/MoneyAndMingle.vue";

import Credits from "./views/footer/Credits.vue";
import Terms from "./views/footer/Terms.vue";
import Privacy from "./views/footer/Privacy.vue";
import Disclaimer from "./views/footer/Disclaimer.vue";

const app = Vue.createApp(App);

const navigationRoutes = [
  { path: "/", component: Home },
  { path: "/services", component: Services },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
];

const servicesRoutes = [
  { path: "/services/clarity-session", component: ServicesClaritySession },
  {
    path: "/services/workshops-and-speaking",
    component: ServicesWorkshopsAndSpeaking,
  },
  {
    path: "/services/money-and-mingle",
    component: ServicesMoneyAndMingle,
  },
];

const footerRoutes = [
  { path: "/credits", component: Credits },
  { path: "/terms", component: Terms },
  { path: "/privacy", component: Privacy },
  { path: "/disclaimer", component: Disclaimer },
];

const additionalRoutes = [
  // will match everything and put it under `$route.params.pathMatch`
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = VueRouter.createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }; // always scroll to top
  },
  history: VueRouter.createWebHistory(),
  routes: navigationRoutes
    .concat(servicesRoutes)
    .concat(footerRoutes)
    .concat(additionalRoutes),
});

app.use(router);
app.mount("#app");
