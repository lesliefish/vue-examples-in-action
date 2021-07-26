<template>
  <div class="example-item-main">
    <div class="example-item-left">
      <img class="demo-pic" :src="itemDetail.imageUrl" alt="itemDetail.title" />
    </div>
    <div class="example-item-right">
      <div class="item-label">
        <label for="">{{ itemDetail.title }}</label>
      </div>
      <div class="item-title">{{ itemDetail.title }}</div>
      <div class="item-description">
        <span>{{ itemDetail.description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExampleItem",
  components: {},
  props: {
    itemDetail: {
      type: Object,
      default: function () {
        return {
          imageUrl:
            "https://vuejsexamples.com/content/images/2021/03/Vue-Notus.jpg",
          title: "A modern Shopify theme built with Vue and Tailwind CSS",
          description:
            "Shopify Foundation Theme is modern Shopify theme built with Shopify Theme Lab, Vue and Tailwind CSS.Shopify Foundation Theme is modern Shopify theme built with Shopify Theme Lab, Vue and Tailwind CSS.Shopify Foundation Theme is modern Shopify theme built with Shopify Theme Lab, Vue and Tailwind CSS.Shopify Foundation Theme is modern Shopify theme built with Shopify Theme Lab, Vue and Tailwind CSS.Shopify Foundation Theme is modern Shopify theme built with Shopify Theme Lab, Vue and Tailwind CSS.Shopify Foundation Theme is modern Shopify theme built with Shopify Theme Lab, Vue and Tailwind CSS.",
          date: "2021.07.26",
        };
      },
    },
  },
};
</script>


<style lang="less" scoped>
.example-item-main {
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 12px;
  width: 800px;
  height: 200px;
  box-shadow: 0 0 8px #a1a098;
  .example-item-left {
    float: left;
    width: 30%;
    height: 100%;
    background-color: rgb(218, 218, 218);
    .demo-pic {
      width: 100%;
      height: 100%;
    }
  }
  .example-item-right {
    float: left;
    width: 70%;
    height: 100%;
    background-color: rgb(252, 252, 252);

    .item-label {
      margin: 8px;
      height: 20px;
      background-color: #2ec4b6;
      text-align: center;
      min-width: 20px;
      border-radius: 10px;
      line-height: 20px;
      float: left;
      padding-left: 10px;
      padding-right: 10px;
    }

    .item-title {
      float: left;
      font-size: 18px;
      width: 100%;
      height: 32px;
      line-height: 32px;
      padding-left: 8px;
      font-weight: bold;
    }

    .item-description {
      margin: 8px;
      float: left;
    }
  }
}
</style>