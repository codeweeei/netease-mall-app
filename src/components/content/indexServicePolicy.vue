<template>
  <div class="m-indexServicePolicy">
    <ul class="g-grow">
      <li>
        <a>
          <i></i>
          <span>网易自营品牌</span>
        </a>
      </li>
      <li>
        <a>
          <i></i>
          <span>三十天无忧退货</span>
        </a>
      </li>
      <li>
        <a>
          <i></i>
          <span>48小时快速退款</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"indexServicePolicy"
}
</script>

<style scoped>
  .m-indexServicePolicy .g-grow{
    box-sizing: border-box;
    width: 100%;
    height: .72rem;
    line-height: .72rem;
    padding: 0 .3rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    zoom: 1;
  }
  .m-indexServicePolicy .g-grow li{
    flex: 1;
    float: left;
    height: auto;
    box-sizing: border-box;

  }
  .m-indexServicePolicy .g-grow li a{
    display: inline-block;
    vertical-align: middle;
  }
  .m-indexServicePolicy .g-grow li span{
    font-size: .24rem;
    color: #333;
    margin-left: .08rem;
    line-height: .32rem;
    display: inline-block;
    vertical-align: middle;
  }
  .m-indexServicePolicy .g-grow li i{
    width: .32rem;
    height: .32rem;
    display: inline-block;
    vertical-align: middle;
  }
  .m-indexServicePolicy .g-grow li:nth-child(1) i{
    background-image: url("https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png");
    background-size: 100% 100%;
    background-position: 50%;
  }
  .m-indexServicePolicy .g-grow li:nth-child(2) i{
    background-image: url("https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png");
    background-size: 100% 100%;
    background-position: 50%;
  }
  .m-indexServicePolicy .g-grow li:nth-child(3) i{
    background-image: url("https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png");
    background-size: 100% 100%;
    background-position: 50%;
  }
</style>
