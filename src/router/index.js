import Vue from "vue";
import VueRouter from "vue-router";
import CreateDetectProcedure from "../views/CreateDetectProcedure.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/createDetectProcedure",
    name: "CreateDetectProcedure",
    component: CreateDetectProcedure,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
