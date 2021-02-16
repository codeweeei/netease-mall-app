<template>
  <div class="Category">
    <cate-top-search-ipt></cate-top-search-ipt>
    <tabbar></tabbar>
  </div>
</template>

<script>
import cateTopSearchIpt from "../../components/content/cateTopSearchIpt.vue"
import tabbar from "../../components/content/tabbar.vue"
export default {
  name:'Category',
  components:{
    cateTopSearchIpt,
    tabbar
  }
}
</script>

<style lang="less" scoped>

</style>
