<template>
  <div class="home">
    <top-search-input></top-search-input>
    <tab-wrap></tab-wrap>
  </div>
</template>

<script>
import topSearchInput from "@/components/content/topSearchInput"
import tabWrap from "@/components/content/tabWrap"
export default {
  name:"Home",
  data() {
    return {

    }
  },
  components:{
    topSearchInput,
    tabWrap
  }
}
</script>

<style  scoped>


</style>
