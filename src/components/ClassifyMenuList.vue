<template>
  <div>
    <classify-menu
      v-for="item in items"
      :key="item.name"
      :name="item.name"
      :subItems="item.subItems"
    ></classify-menu>
  </div>
</template>

<script>
import ClassifyMenu from "./ClassifyMenu.vue";

export default {
  name: "ClassifyMenuList",
  components: {
    ClassifyMenu,
  },
  props: {
    items: {
      type: Array,
      default() {
        return [
          {
            name: "Ui",
            subItems: [
              {
                name: "滚动条",
                target: "KK",
              },
              {
                name: "BBB",
                target: "KK",
              },
              {
                name: "CCC",
                target: "KK",
              },
              {
                name: "DDD",
                target: "KK",
              },
              {
                name: "EEE",
                target: "KK",
              },
            ],
          },
          {
            name: "Media",
            subItems: [
              {
                name: "AAA",
                target: "KK",
              },
              {
                name: "BBB",
                target: "KK",
              },
              {
                name: "CCC",
                target: "KK",
              },
              {
                name: "DDD",
                target: "KK",
              },
              {
                name: "EEE",
                target: "KK",
              },
            ],
          },
          {
            name: "Elements",
            subItems: [
              {
                name: "AAA",
                target: "KK",
              },
              {
                name: "BBB",
                target: "KK",
              },
              {
                name: "CCC",
                target: "KK",
              },
              {
                name: "DDD",
                target: "KK",
              },
              {
                name: "EEE",
                target: "KK",
              },
            ],
          },
        ];
      },
    },
  },
};
</script>
