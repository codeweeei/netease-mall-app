<template>
  <div class="swipeWarp">
    <van-swipe :autoplay="2500" class="my-swipe">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name:"swipe",
  data() {
    return {
      images:[
        "https://yanxuan.nosdn.127.net/8bcfa805e10cdc5c418e6f0f91ab1e75.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/aaa1de11b3beedc51fee9c6e307e8de7.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/e4aa878f6839944574c9a7590261f7dd.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/0f8e4ccdae24c0e95d294615a3ffa5f3.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/d503c4cf939bad4b5306a85026065ec0.png?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/a97794f1f576b9f71820a5aeff544d6b.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/3556a0b03b8df51f2a17b12e1443590b.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/7b9cb9370023526b991b3755967dc1a4.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
      ]
    }
  },
}
</script>

<style lang="less" scoped>
.swipeWarp{
  background: #fff;
  height: 2.96rem;
  width: 100%;
  .van-swipe-item{
    color: #fff;
    font-size: 20px;
    height: 2.96rem;
    line-height: 2.96rem;
    text-align: center;
    background-color: #fff;
    position: relative;
    img{
      width: 100%;
      height: auto;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
