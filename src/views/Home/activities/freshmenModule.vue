<template>
  <div class="freshmenModule indexFloor">
    <div class="moduleTitle">
      <span class="txt">新人专享礼</span>
    </div>
    <div class="content">
      <div class="left">
        <div class="name">新人专享礼包</div>
        <div class="imgWrap">
          <div>
            <div class="img">
              <img src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
            </div>
            <div class="animate"></div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="module1">
          <div class="activityItem">
            <div class="picWrap">
              <img src="https://yanxuan-item.nosdn.127.net/2814ddd0ae4f8fef41971238e0c13212.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
            <div class="cnt">
              <div class="title">福利社</div>
              <div class="subTitle">今日特价</div>
            </div>
          </div>
        </div>
        <div class="module2">
          <div class="activityItem">
            <div class="picWrap">
              <img src="https://yanxuan-item.nosdn.127.net/e604f890043afb46d72b45208c830097.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
            <div class="cnt">
              <div class="title">新人拼团</div>
              <div class="subTitle">一元起包邮</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'freshmenModule'
}
</script>

<style lang="less" scoped>
.freshmenModule{
  background: #fff;
  margin-top: .2rem;
  padding-bottom: .3rem;
  box-sizing: border-box;
  .moduleTitle{
    height: .9rem;
    width: 100%;
    line-height: .9rem;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: .32rem;
    padding: 0 .3rem;
    background: #fff;
    overflow: hidden;
    .txt{
      display: inline-block;
      position: relative;
      &::before{
        content: "";
        position: absolute;
        left: -.4rem;
        top: .45rem;
        width: .24rem;
        height: .03rem;
        background: #333;
      }
      &::after{
        content: "";
        position: absolute;
        right: -.4rem;
        top: .45rem;
        width: .24rem;
        height: .03rem;
        background: #333;
      }
    }
  }
  .content{
    padding-left: .3rem;
    overflow: hidden;
    .left{
      display: block;
      width: 3.43rem;
      height: 4.34rem;
      background: #f9e9cf;
      border-radius: .04rem;
      margin-right: .04rem;
      float: left;
      color: #333;
      .name{
        font-family: PingFangSC-Medium;
        font-size: .32rem;
        padding: .3rem 0 0 .3rem;
      }
      .imgWrap{
        margin: .37rem auto;
        width: 2.58rem;
        height: 2.57rem;
        position: relative;
        .img{
          width: 2.58rem;
          height: 2.57rem;
          img{
            width: 100%;
          }
        }
        .animate{
          position: absolute;
          width: .3rem;
          height: .2rem;
          bottom: .18rem;
          right: .65rem;
          background: url(https://yanxuan.nosdn.127.net/3f7e731c6650bc1770589c78bd5a18b7.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          -webkit-animation: carousel 1s linear infinite;
          animation: carousel 1s linear infinite;
        }
      }
    }
    .right{
      float: left;
      .module1{
        background: #fbe2d3;
        border-radius: 4px;
        width: 3.43rem;
        height: 2.15rem;
        margin-bottom: .04rem;
        .activityItem{
          display: block;
          color: #333;
          width: 3.43rem;
          height: 2.2rem;
          float: left;
          border-radius: .04rem;
          margin: 0 .04rem .04rem 0;
          font-size: .24rem;
          padding: .2rem 0 0 .3rem;
          height: 2.15rem;
          position: relative;
          .picWrap{
            width: 2rem;
            height: 2rem;
            position: absolute;
            right: 0;
            top: .15rem;
            img{
              width: 100%;
            }
          }
          .cnt{
            position: relative;
            .title{
              font-family: PingFangSC-Medium;
              font-size: .32rem;
            }
            .subTitle{
              color: #7f7f7f;
            }
          }
        }
      }
      .module2{
        background: #ffecc2;
        border-radius: 4px;
        width: 3.43rem;
        height: 2.15rem;
        .activityItem{
          display: block;
          color: #333;
          width: 3.43rem;
          height: 2.2rem;
          float: left;
          border-radius: .04rem;
          margin: 0 .04rem .04rem 0;
          font-size: .24rem;
          padding: .2rem 0 0 .3rem;
          position: relative;
          .picWrap{
            width: 2rem;
            height: 2rem;
            position: absolute;
            right: 0;
            top: .15rem;
            img{
              width: 100%;
            }
          }
          .cnt{
            position: relative;
            .title{
              font-family: PingFangSC-Medium;
              font-size: .32rem;
            }
            .subTitle{
              color: #7f7f7f;
            }
          }
        }
      }

    }
  }
}
</style>
