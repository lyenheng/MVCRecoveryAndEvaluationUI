import Vue from "vue";
import VueRouter from "vue-router";
import CreateDetectProcedure from "../views/CreateDetectProcedure.vue";
import DetectProcedure from "../views/DetectProcedure";
import ListDetectProcedure from "../views/DetectProcedure/ListDetectProcedure";
import Recovery from "../views/DetectProcedure/Recovery";
import Evaluation from "../views/DetectProcedure/Evaluation";

Vue.use(VueRouter);

const routes = [
  {
    path: "/createDetectProcedure",
    name: "CreateDetectProcedure",
    component: CreateDetectProcedure,
  },
  {
    path: "/",
    redirect: "/createDetectProcedure",
  },
  {
    path: "/detectProcedure",
    component: DetectProcedure,
    children: [
      {
        path: "",
        component: ListDetectProcedure,
      },
      {
        path: "recovery/:id",
        component: Recovery,
      },
      {
        path: "evaluation/:id",
        component: Evaluation,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
