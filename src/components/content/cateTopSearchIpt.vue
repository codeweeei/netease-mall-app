<template>
  <div class="cateTopSearchIpt">
    <div class="ipt" @click="toSearch">
      <i><van-icon name="search" class="icon" /></i>
      <span class="placeholder">搜索商品，共66666件好物</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'cateTopSearchIpt',
  methods: {
    toSearch(){
      this.$router.push("/search")
    }
  },
}
</script>

<style lang="less" scoped>
  .cateTopSearchIpt{
    display: flex;
    align-items: center;
    height: .88rem;
    padding: 0 .3rem;
    background-color: #fff;
    position: relative;
    .ipt{
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      height: .56rem;
      font-size: .28rem;
      background-color: #ededed;
      border-radius: .08rem;
      .icon{
        width: .30rem;
        height: .30rem;
        margin-right: .1rem;
         /* 图片和文字水平对齐 */
        vertical-align: middle;
      }
      .placeholder{
        color: #666;
      }
    }
  }
</style>
