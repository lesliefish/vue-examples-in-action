<template>
  <div class="main">
    <div class="left">
      <example-item></example-item>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import ExampleItem from "./ExampleItem/ExampleItem.vue";

export default {
  name: "MainContent",
  components: {
    ExampleItem,
  },
};
</script>

<style scoped>
.main {
  width: 70%;
  margin: auto;
  height: 900px;
  background-color: #eee;
}

.left {
  float: left;
  width: 60%;
  height: 100%;
  background-color: #ddd;
}
.right {
  float: left;
  width: 40%;
  height: 100%;
  background-color: #ccc;
}
</style>