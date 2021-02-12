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
    <!-- goodsColumn -->
    <goods-column></goods-column>
    <!-- 大促活动 bigPromotion -->
    <big-promotion></big-promotion>
    <!-- freshmenModule 新人活动模块 -->
    <freshmen-module></freshmen-module>
    <!-- 类目热销榜模块 -->
    <category-host-sell-module></category-host-sell-module>
    <!-- 新品首发模块 -->
    <new-item-module></new-item-module>
  </div>
</template>

<script>
import topSearchInput from "@/components/content/topSearchInput"
import tabWrap from "@/components/content/tabWrap"
import swipe from "@/components/content/swipe"
import indexServicePolicy from "@/components/content/indexServicePolicy"
import goodsColumn from "@/components/content/goodsColumn"
import bigPromotion from "@/components/content/bigPromotion"
import freshmenModule from "./activities/freshmenModule"
import categoryHostSellModule from "./activities/categoryHostSellModule"
import newItemModule from "./activities/newItemModule"
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
    indexServicePolicy,
    goodsColumn,
    bigPromotion,
    freshmenModule,
    categoryHostSellModule,
    newItemModule
  }
}
</script>

<style  scoped>


</style>
