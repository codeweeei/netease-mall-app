<template>
  <van-sticky :offset-top="44">
    <div class="tabWrap" ref="tabWrap">
      <van-tabs v-model="active" swipeable class="tabList">
        <van-tab v-for="(n,index) in tabsList" :title="n" :key="index">
        </van-tab>
      </van-tabs>
    </div>
  </van-sticky>
</template>

<script>

export default {
  name:"tabWrap",
  components:{

  },
  data() {
    return {
      active:"",
      tabsList: [],
    }
  },
  created() {
    this.$http.get("/tab-wrap").then(_d => {
      // console.log(_d.data)
      this.tabsList = _d.data
    })
  },
}
</script>

<style lang="less" scoped>
.tabList{
  font-size: .28rem;
}
.tabList{
  background: #fff;
}
</style>
