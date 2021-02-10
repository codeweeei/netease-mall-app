<template>
  <div class="topSearchInput">
    <img src="../../assets/top-logo.png"  class="logo">
    <div class="searchInput" @click="search">
      <i><van-icon name="search" class="icon"/></i>
      <span class="palcehoder">搜索商品，共66666件好物</span>
    </div>
    <div class="loginBtn">登录</div>
  </div>
</template>

<script>
export default {
  name:"topSearchInput",
  data() {
    return {

    }
  },
  methods: {
    search(){
      this.$router.push("/search")
    }
  },
}
</script>

<style lang="less" scoped>
.topSearchInput{
  background: #fff;
  display: flex;
  align-items: center;
  padding: .16rem .3rem;
  flex-flow: row nowrap;
  box-sizing: border-box;
  .logo{
    width: 1.38rem;
    height: .4rem;
    display: inline-block;
    margin-right: .2rem;
  }
  .searchInput{
    display: flex;
    flex-grow: 1;
    flex: 1;
    justify-content: center;
    height: .56rem;
    font-size: .28rem;
    background-color: #ededed;
    border-radius: .08rem;
    align-items: center;
    .icon{
      width: .28rem;
      height: .28rem;
      margin-right: .1rem;
      /* 图片和文字水平对齐 */
      vertical-align: middle;
    }
    .palcehoder{
      width: 165px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .loginBtn{
    width: .74rem;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    color: #dd1a21;
    border: 1px solid #dd1a21;
    border-radius: .08rem;
    margin-left: .16rem;
    font-size: .24rem;
    box-sizing: border-box;
  }
}
</style>
