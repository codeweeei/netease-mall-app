<template>
  <div class="lightShoppingModule">
    <div class="styleBanner">
      <div class="title">超值专区</div>
      <div class="desc">低至9.9元</div>
      <div class="picList">
        <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="" class="pic">
        <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="" class="pic">
      </div>
    </div>
    <div class="styleBanner">
      <div class="title">员工精选</div>
      <div class="desc">新年有好货</div>
      <div class="picList">
        <img src="https://yanxuan-item.nosdn.127.net/f88cc783921f77007060779cec681648.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="" class="pic">
        <img src="https://yanxuan-item.nosdn.127.net/08fbe1774d245e1a22c7edcd209d6f35.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="" class="pic">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'lightShoppingModule'
}
</script>

<style lang="less" scoped>
.lightShoppingModule{
  overflow: hidden;
  padding: .1rem .3rem .3rem .26rem;
  background: #fff;
  margin-bottom: .2rem;
  .styleBanner{
    background-color: #f5f5f5;
    display: block;
    width: 3.43rem;
    height: 2.64rem;
    float: left;
    margin: .04rem 0 0 .04rem;
    padding: .2rem 0 0 .2rem;
    border-radius: .04rem;
    .title{
      color: rgb(51, 51, 51);
      padding-left: .1rem;
      font-size: .32rem;
      font-family: PingFangSC-Medium;
    }
    .desc{
      color: rgb(127, 127, 127);
      padding-left: .1rem;
      font-size: .24rem;
    }
    .picList{
      width: 100%;
      img{
        width: 1.5rem;
        height: 1.5rem;
        float: left;
        margin-right: .04rem;
      }
    }
  }
}
</style>
