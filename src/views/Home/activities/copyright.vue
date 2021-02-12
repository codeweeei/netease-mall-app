<template>
  <div class="copyright">
    <div class="content">
      <div class="bd">
        <a href="#" class="goBtn goApp">下载App</a>
        <a href="#" class="goBtn goWeb">电脑版</a>
      </div>
      <p class="copyright-desc">
        该项目为仿照网易严选app 仅供学习使用
        <br>
        作者：codeweeei
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name:'copyright'
}
</script>

<style lang="less" scoped>
  .copyright{
    border-top: 1px solid rgba(0,0,0,.15);
    background-color: #414141;
    .content{
      padding: .54rem .2rem .28rem;
      text-align: center;
      .bd{
        margin-bottom: .36rem;
        .goBtn{
          margin-right: .5rem;
          width: 1.72rem;
          font-size: .24rem;
          color: #fff;
          height: .62rem;
          line-height: .62rem;
          border: 1px solid #999;
          background-color: transparent;
          display: inline-block;
          vertical-align: middle;
          border-radius: 4px;
          overflow: hidden;
          text-align: center;
        }
      }
      .copyright-desc{
          font-size: .24rem;
          line-height: .32rem;
          color: #999;
      }
    }
  }
</style>
