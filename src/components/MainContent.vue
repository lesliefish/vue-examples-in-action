<template>
  <div class="main">
    <div class="left">
      <example-item
        v-for="item in items"
        :key="item.index"
        :itemDetail="item.itemDetail"
      ></example-item>
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
  data: function () {
    let datas = { items: [] };
    for (let index = 0; index < 10; index++) {
      datas.items.push({
        index: index + 1,
        itemDetail: {
          imageUrl:
            "https://vuejsexamples.com/content/images/2021/03/Vue-Notus.jpg",
          title: index + 1 + " A modern Shopify theme built with Vue and Tailwind CSS",
          description:
            "Shopify Foundation Theme is modern Shopify theme built with Shopify Theme Lab, Vue and Tailwind CSS.Shopify Foundation Theme is modern Shopify theme built with Shopify Theme Lab, Vue and Tailwind CSS.Shopify Foundation Theme is modern Shopify theme built with Shopify Theme Lab, Vue and Tailwind CSS.Shopify Foundation Theme is modern Shopify theme built with Shopify Theme Lab, Vue and Tailwind CSS.Shopify Foundation Theme is modern Shopify theme built with Shopify Theme Lab, Vue and Tailwind CSS.Shopify Foundation Theme is modern Shopify theme built with Shopify Theme Lab, Vue and Tailwind CSS.",
          date: "2021.07.26",
        },
      });
    }
    return datas;
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 70%;
  margin: auto;
  height: 900px;
  .left {
    float: left;
    width: 60%;
    height: 100%;
  }

  .right {
    float: left;
    width: 40%;
    height: 100%;
  }
}
</style>