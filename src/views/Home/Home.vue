<template>
  <div class="home">
    <!-- 顶部搜索框 -->
    <top-search-input></top-search-input>
    <!-- 滑动标签 -->
    <tab-wrap></tab-wrap>
    <!-- 轮播图 -->
    <swipe></swipe>
    <!-- indexServicePolicy -->
    <index-service-policy></index-service-policy>
    <div>111</div>
  </div>
</template>

<script>
import topSearchInput from "@/components/content/topSearchInput"
import tabWrap from "@/components/content/tabWrap"
import swipe from "@/components/content/swipe"
import indexServicePolicy from "@/components/content/indexServicePolicy"
export default {
  name:"Home",
  data() {
    return {

    }
  },
  components:{
    topSearchInput,
    tabWrap,
    swipe,
    indexServicePolicy
  }
}
</script>

<style  scoped>


</style>
