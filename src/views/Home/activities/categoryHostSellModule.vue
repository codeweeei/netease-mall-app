<template>
  <div class="categoryHostSellModule indexFloor">
    <div class="moduleTitle">
      <div class="left">类目热销榜</div>
    </div>
    <div class="content">
        <div class="line1">
          <div class="item-big item-1">
            <div class="name">
              <div class="txt">热销榜</div>
            </div>
            <div class="imgWrap">
              <div class="img">
                <img src="https://yanxuan-item.nosdn.127.net/d3995146d91bb8d75f39f397da78caa7.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="line1">
          <div class="item-big item-2">
            <div class="name">
              <div class="txt">好评榜</div>
            </div>
            <div class="imgWrap">
              <div class="img">
                <img src="https://yanxuan-item.nosdn.127.net/e04b5eb41b0db471f6991e26752bbcf4.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="line2">
          <div class="item">
            <div class="name">美食酒水榜</div>
            <div class="imgWrap">
              <div class="img">
                <img src="https://yanxuan-item.nosdn.127.net/c40842640f6a1a2509960c2029aca1b8.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </div>
          </div>
          <div class="item">
            <div class="name">居家生活榜</div>
            <div class="imgWrap">
              <div class="img">
                <img src="https://yanxuan-item.nosdn.127.net/332255bdd807bc332107d68a87e72f1f.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </div>
          </div>
          <div class="item">
            <div class="name">数码家电榜</div>
            <div class="imgWrap">
              <div class="img">
                <img src="https://yanxuan-item.nosdn.127.net/7a0e064c1fd99b5eb16608bca9b7aa0d.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </div>
          </div>
          <div class="item">
            <div class="name">服饰鞋包榜</div>
            <div class="imgWrap">
              <div class="img">
                <img src="https://yanxuan-item.nosdn.127.net/ee9f42bce2832771672e1ece6cc43bfc.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </div>
          </div>
          <div class="item">
            <div class="name">个护清洁榜</div>
            <div class="imgWrap">
              <div class="img">
                <img src="https://yanxuan-item.nosdn.127.net/2815972526c707fe51fcc587c435e88c.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </div>
          </div>
          <div class="item">
            <div class="name">严选全球榜</div>
            <div class="imgWrap">
              <div class="img">
                <img src="https://yanxuan-item.nosdn.127.net/238eee02ce11fffc3fc58f54b5b101c6.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </div>
          </div>
          <div class="item">
            <div class="name">母婴亲子榜</div>
            <div class="imgWrap">
              <div class="img">
                <img src="https://yanxuan-item.nosdn.127.net/74662d24f6d217b520178c5a6d031457.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </div>
          </div>
          <div class="item">
            <div class="name">运动旅行榜</div>
            <div class="imgWrap">
              <div class="img">
                <img src="https://yanxuan-item.nosdn.127.net/2a3d5179df95e6c5ba6472704a2b0921.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'categoryHostSellModule'
}
</script>

<style lang="less" scoped>
.categoryHostSellModule{
  .moduleTitle{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    padding: 0 .3rem;
    background: #fff;
    overflow: hidden;
    .left{
      float: left;
      font-size: .32rem;
      font-family: PingFangSC-Regular;
    }
  }
  .content{
      padding: 0 .2rem .2rem .3rem;
      overflow: hidden;
      .line1{
        .item-1{
          background: #f9f3e4;
        }
        .item-2{
          background: #ebeff6;
        }
      }
      .line2{
        .item{
          display: block;
          width: 1.65rem;
          height: 1.8rem;
          background: #f5f5f5;
          border-radius: .04rem;
          float: left;
          margin: 0 .1rem .1rem 0;
          .name{
            margin-top: .1rem;
            text-align: center;
            font-size: .24rem;
            color: #333;
            font-family: PingFangSC-Medium;
          }
          .imgWrap{
            width: 1.2rem;
            height: 1.2rem;
            margin: .02rem 0 0 .23rem;
            .img{
              width: 100%;
              >img{
                width: 100%;
                height: auto;
              }
            }
          }
        }
      }
      .item-big{
        width: 3.4rem;
        height: 2rem;
        float: left;
        border-radius: .04rem;
        margin: 0 .1rem .1rem 0;
        position: relative;
        .name{
          position: relative;
          padding-left: .24rem;
          color: #333;
          font-family: PingFangSC-Medium;
          font-size: .28rem;
          margin-top: .66rem;
          z-index: 5;
          .txt{
            display: inline-block;
            position: relative;
            &::before{
              content: "";
              position: absolute;
              left: 0;
              bottom: -.16rem;
              width: .48rem;
              height: .04rem;
              background: #333;
            }
          }
        }
        .imgWrap{
          position: absolute;
          right: 0;
          top: 0;
          width: 2rem;
          height: 2rem;
          .img{
            width: 100%;
            >img{
              width: 100%;
              height: auto;
            }
          }
        }
      }
    }
}
</style>
