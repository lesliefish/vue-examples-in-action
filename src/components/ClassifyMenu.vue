<template>
  <div
    class="main"
    @mouseover="isMouseHover = true"
    @mouseleave="isMouseHover = false"
  >
    <span class="name">{{ name }}</span>
    <img class="drop-down-icon" src="../assets/dropDown.png" />

    <ul v-show="isMouseHover">
      <li v-for="item in subItems" :key="item.name" @click="jump(item.name)">
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
  methods: {
    jump: function (name) {
      this.$emit('chooseEvent', name);
    },
  },
};
</script>

<style scoped>
.main {
  float: left;
  position: relative;
  text-align: left;
  height: 50px;
  cursor: pointer;
  margin-right: 10px;
  margin-left: 10px;
}
.drop-down-icon {
  margin: 5px;
  margin-top: 12px;
  width: 10px;
  height: 10px;
  float: left;
}

.name {
  float: left;
  text-align: center;
  line-height: 32px;
  font-size: 18px;
}
.name:hover {
  color: #41b582;
}

ul {
  list-style-type: none;
  width: 120px;
  padding: 0;
  position: absolute;
  left: 0px;
  top: 25px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
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