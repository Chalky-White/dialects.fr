import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/home.vue";
import Course from "./views/course/course.vue";
import Conception from "./views/conception/conception.vue";
import NeedsAnalysis from "./views/needsAnalysis/needsAnalysis.vue";
import Html from "./views/html/html.vue";
import Javascript from "./views/javascript/javascript.vue";
import Vuejs from "./views/vuejs/vuejs.vue";

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
      path: "/course",
      name: "Course",
      component: Course
      // redirect: { name: "children" },
      // children: [
      //   {
      //     path: "children",
      //     name: "home",
      //     component: Home
      //   }
      // ]
    },
    {
      path: "/conception",
      name: "Conception",
      component: Conception
    },
    {
      path: "/needsAnalysis",
      name: "NeedsAnalysis",
      component: NeedsAnalysis
    },
    {
      path: "/html",
      name: "Html",
      component: Html
    },
    {
      path: "/javascript",
      name: "Javascript",
      component: Javascript
    },
    {
      path: "/vuejs ",
      name: "Vuejs",
      component: Vuejs
    }
  ]
});
