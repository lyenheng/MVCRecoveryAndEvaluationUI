import Vue from "vue";
import VueRouter from "vue-router";
import CreateDetectProcedure from "../views/CreateDetectProcedure.vue";
import ListDetectProcedure from "../views/ListDetectProcedure";
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
  {
    path: "/listDetectProcedure",
    name: "ListDetectProcedure",
    component: ListDetectProcedure,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
