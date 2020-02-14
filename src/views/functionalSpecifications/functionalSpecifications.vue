<template>
  <div class="html">
    <h1>This is an HTML page</h1>
  </div>
</template>

<script>
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

</script>
<style scoped lang="scss" src="./functionalSpecifications.scss"></style>
