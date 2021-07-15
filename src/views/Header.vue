<template>
  <div class="out-main">
    <div class="main">
      <div class="logo">
        <img class="logo-img" alt="Vue logo" src="../assets/logo.png" />
        <span class="page-title">{{ title }}</span>
      </div>
      <classify-menu-list
        @chooseEvent="pageChanged"
      ></classify-menu-list>
    </div>
  </div>
</template>

<script>
import ClassifyMenuList from "../components/ClassifyMenuList";
export default {
  name: "Header",
  components: {
    ClassifyMenuList,
  },
  props: {},
  data: function () {
    return {
      title: "Vue.js 实践",
    };
  },
  methods: {
    pageChanged: function (mainPage, subPage) {
      console.log(mainPage + ',' +  subPage);
      this.$router.push(mainPage.toLowerCase()); // 页面跳转
    },
  },
};
</script>

<style scoped>
.out-main {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #cccccc;
}
.main {
  width: 70%;
  margin: auto;
  margin-top: 9px;

  text-align: center;
  white-space: nowrap;
  height: 32px;
  line-height: 32px;
}
.logo {
  float: left;
  margin-right: 20px;
  width: 140px;
  height: 32px;
}

.logo-img {
  float: left;
  width: 32px;
  height: 32px;
}
.page-title {
  padding-left: 8px;
  float: left;
  height: 32px;
  line-height: 32px;
}
</style>