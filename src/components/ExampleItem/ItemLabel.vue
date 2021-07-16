<template>
  <div class="title-label">{{title}}</div>
</template>

<script>
export default {
  name: "ItemLabel",
  data: function () {
    return {
        title:"是你的计算机"
    };
  },
};
</script>


<style scoped>
.title-label {
    display: inline;
    height: 20px;
    background-color: #2ec4b6;
    border-radius: 15px;
    line-height: 20px;
    text-align: left;
    float: left;
    padding-left: 10px;
    padding-right: 10px;
    clear: both;
}
</style>