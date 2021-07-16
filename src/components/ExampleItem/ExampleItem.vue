<template>
  <div class="example-item-main">
    <div class="example-item-left">
      <img class="demo-pic" :src="itemDetail.imageUrl" alt="" />
    </div>
    <div class="example-item-right">
      <div class="item-label"><label for="">ss</label></div>
      <div>saaaaaaaaaaa</div>
    </div>
  </div>
</template>

<script>
// import ItemLabel from "./ItemLabel";
export default {
  name: "ExampleItem",
  components: {
    // ItemLabel,
  },
  data: function () {
    return {
      itemDetail: {
        imageUrl: "http://127.0.0.1:8080/img/logo.82b9c7a5.png",
        title: "文件",
        description: "这是一个对组件的简单描述",
      },
    };
  },
};
</script>


<style scoped>
.example-item-main {
  width: 100%;
  height: 200px;
  background-color: rgb(225, 238, 234);
}

.example-item-left {
  float: left;
  width: 40%;
  height: 100%;
  background-color: rgb(151, 214, 214);
}
.item-label {
  height: 32px;
  background-color: #2ec4b6;
  min-width: 10px;
  border-radius: 16px;
  line-height: 32px;
  float: left;
  padding-left: 10px;
  padding-right: 10px;
}

.demo-pic {
  width: 100%;
  height: 100%;
}
.example-item-right {
  text-align: left;
  float: left;
  width: 60%;
  background-color: rgb(237, 238, 243);
}
.aa {
  display: inline;
  width: 100%;
}
.title-part {
  height: 40px;
  width: 100%;
  display: inline;
}
</style>