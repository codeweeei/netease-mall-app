<template>
  <div class="tabbar">
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#666">
      <van-tabbar-item icon="wap-home-o" name="home">首页</van-tabbar-item>
      <van-tabbar-item icon="shop-o" dot name="category">分类</van-tabbar-item>
      <van-tabbar-item icon="coupon-o"  badge="">值得买</van-tabbar-item>
      <van-tabbar-item icon="cart-o" >购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" badge="">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name:'tabbar',
  data() {
    return {
      active:"home"
    }
  },
}
</script>

<style lang="less" scoped>

</style>
