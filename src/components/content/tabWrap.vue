<template>
  <div class="tabWrap">
    <van-tabs v-model="active" swipeable>
      <!-- <van-tab v-for="index in tabTitle :title="index"> -->
      <!-- </van-tab> -->
    </van-tabs>
  </div>
</template>

<script>
export default {
  name:"tabWrap",
  data() {
    return {
      active:"",
      tabTitle:["推荐","居家生活","服饰鞋包","美食酒水","个户清洁","母婴亲子","运动旅行","数码家电","严选全国"]
    }
  },
}
</script>

<style scoped>

</style>
