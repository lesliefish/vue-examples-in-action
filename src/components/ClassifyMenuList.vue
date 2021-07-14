<template>
  <div>
    <classify-menu
      v-for="item in items"
      :key="item.name"
      :name="item.name"
      :subItems="item.subItems"
      @chooseEvent="chooseEvent($event, item.name)"
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
                name: "Scroll",
                target: "KK",
              },
              {
                name: "List",
                target: "KK",
              },
              {
                name: "Table",
                target: "KK",
              },
              {
                name: "Layout",
                target: "KK",
              },
              {
                name: "Grid",
                target: "KK",
              },
            ],
          },
          {
            name: "Media",
            subItems: [
              {
                name: "Music",
                target: "KK",
              },
              {
                name: "Video",
                target: "KK",
              },
              {
                name: "Audio",
                target: "KK",
              },
              {
                name: "Tool",
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
                name: "input",
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
            name: "Input",
            subItems: [
              {
                name: "Music",
                target: "KK",
              },
            ],
          },
          {
            name: "Menu",
            subItems: [
              {
                name: "Music",
                target: "KK",
              },
            ],
          },
          {
            name: "Components",
            subItems: [
              {
                name: "Music",
                target: "KK",
              },
            ],
          },
          {
            name: "More",
            subItems: [
              {
                name: "Music",
                target: "KK",
              },
            ],
          },
        ];
      },
    },
  },
  methods: {
    chooseEvent: function (subPageName, name) {
      this.$emit("chooseEvent", name, subPageName);
    },
  },
};
</script>
