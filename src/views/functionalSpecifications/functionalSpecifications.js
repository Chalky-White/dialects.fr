import Vue from "vue";
import Header from "@/components/header/header.vue";

new Vue({
  el: "#functionalSpecifications",
  components: {
    header: Header
  }
});

export default {
  name: "functionalSpecifications",
  props: {
    msg: String
  }
};
