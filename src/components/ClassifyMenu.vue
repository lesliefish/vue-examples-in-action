<template>
  <div
    class="main"
    @mouseover="isMouseHover = true"
    @mouseleave="isMouseHover = false"
  >
    <span class="name">{{ name }}</span>
    <span></span>

    <ul v-show="isMouseHover">
      <li v-for="item in subItems" :key="item.name">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ClassifyMenu",
  props: {
    name: {
      type: String,
      default: "None",
    },
    subItems: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data: function () {
    return {
      isMouseHover: false,
    };
  },
};
</script>

<style scoped>
.main {
  float: left;
  position: relative;
  text-align: left;
  height: 32px;
  cursor: pointer;
  margin-right: 10px;
  margin-left: 10px;
}
.main:hover {
  /* border-bottom: 1px solid #4a73e2; */
}
.name {
  text-align: center;
  line-height: 32px;
  font-size: 18px;
}
.name:hover {
  color: #4a73e2;
}

ul {
  list-style-type: none;
  width: 200px;
  padding: 0;
  position: absolute;
  left: 0;
  top: 18px;
  border: 1px solid #cccccc;
  background-color: #FFFFFF;
  border-radius: 4px;
}
ul li {
  padding-left: 8px;
  height: 32px;
  line-height: 32px;
}

ul li:hover {
  background-color: #999999;
}
</style>