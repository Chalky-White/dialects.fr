import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/home.vue";
import ArtIntell from "./views/artIntell/artIntell.vue";
import Course from "./views/course/course.vue";
import ProfessionalCareer from "./views/professionalCareer/professionalCareer.vue";
import NeedsAnalysis from "./views/needsAnalysis/needsAnalysis.vue";
import FunctionalSpecifications from "./views/functionalSpecifications/functionalSpecifications.vue";
import Benchmarking from "./views/benchmarking/benchmarking.vue";
import VisualIdentity from "./views/visualIdentity/visualIdentity.vue";
import ScrumMaster from "./views/scrumMaster/scrumMaster.vue";
import Accessibility from "./views/accessibility/accessibility.vue"

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
      path: "/artIntell",
      name: "ArtIntell",
      component: ArtIntell
    },
    {
      path: "/professionalCareer",
      name: "ProfessionalCareer",
      component: ProfessionalCareer
    },
    {
      path: "/needsAnalysis",
      name: "NeedsAnalysis",
      component: NeedsAnalysis
    },
    {
      path: "/functionalSpecifications",
      name: "FunctionalSpecifications",
      component: FunctionalSpecifications
    },
    {
      path: "/benchmarking",
      name: "benchmarking",
      component: Benchmarking
    },
    {
      path: "/scrumMaster ",
      name: "ScrumMaster",
      component: ScrumMaster
    },
    {
      path: "/visualIdentity ",
      name: "visualIdentity",
      component: VisualIdentity
    },
    {
      path: "/accessibility ",
      name: "Accessibility",
      component: Accessibility
    }
  ]
});
