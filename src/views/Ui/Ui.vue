<template>
  <div>
    <main-content></main-content>
  </div>
</template>

<script>
import MainContent from "../../components/MainContent.vue";
export default {
  name: "Ui",
  props: {},
  components: {
    MainContent,
  },
  data: function () {
    return {
      title: "Vue.js",
    };
  },
};
</script>


<style scoped>
</style>