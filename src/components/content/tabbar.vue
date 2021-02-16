<template>
  <div class="tabbar">
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#666" @change="onChange">
      <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="shop-o" dot  to="cateList">分类</van-tabbar-item>
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
      active:0
    }
  },
  mounted() {
    //注意从localStorage中取的是字符串类型，这里需要将其转换为number类型
    let activeInx = Number(localStorage.getItem("save_inx"))
    console.log(activeInx)
    this.active = activeInx
  },
  methods: {
    onChange( _inx ){
      //当前处于活跃的索引值（注意是number类型），将其保存在localStorage里，然后在页面加载后将其赋值在active中
      localStorage.setItem("save_inx",_inx)
      console.log(_inx)
    }
  },
}
</script>

<style lang="less" scoped>

</style>
