<template>
  <div class="newItemModule indexFloor">
    <div class="moduleTitle">
      <div class="left">
        新品首发
      </div>
      <a class="right">
        更多 >
      </a>
    </div>
    <div class="indexItem">
      <ul class="list">
        <li class="item">
          <div class="good">
            <div class="hd">
              <div class="wraper">
                <img src="https://yanxuan-item.nosdn.127.net/8abfda46665e9d4f713a932c11712d46.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
              </div>
            </div>
            <div class="name">
              舞动的纯脂巧克力，跳跳糖麦丽素 60克*4盒
            </div>
            <div class="price">
              <span class="priceInner">￥42</span>
            </div>
            <div class="tagWraper">
              <span class="tagStatus">
                两件8.5折
              </span>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="good">
            <div class="hd">
              <div class="wraper">
                <img src="https://yanxuan-item.nosdn.127.net/7a544fd6d32a1a485ae9627e5ef71f11.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
              </div>
            </div>
            <div class="name">
              减塑强力垃圾袋 45*50cm 9μm 5卷100只
            </div>
            <div class="price">
              <span class="priceInner">￥8.9</span>
            </div>
            <div class="tagWraper">
              <span class="tagStatus">
                特价
              </span>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="good">
            <div class="hd">
              <div class="wraper">
                <img src="https://yanxuan-item.nosdn.127.net/fed627438e908d1bfa591f2a38444c95.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
              </div>
            </div>
            <div class="name">
              浓缩原汤，地道浇头，真材实料苏式面
            </div>
            <div class="price">
              <span class="priceInner">￥21.8</span>
            </div>
            <div class="tagWraper">
              <span class="tagStatus">
                两件9.5折
              </span>
              <!-- <span class="tagStatus">
                特价
              </span> -->
            </div>
          </div>
        </li>
        <li class="item">
          <div class="good">
            <div class="hd">
              <div class="wraper">
                <img src="https://yanxuan-item.nosdn.127.net/57c4593bb5e571c988e94f0ba099ecb5.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
              </div>
            </div>
            <div class="name">
              团团圆圆，软糯香甜元宵汤圆组合
            </div>
            <div class="price">
              <span class="priceInner">￥19.8</span>
            </div>
            <div class="tagWraper">
              <span class="tagStatus">
                两件9.5折
              </span>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="good">
            <div class="hd">
              <div class="wraper">
                <img src="https://yanxuan-item.nosdn.127.net/87451438e0e964d6912a2669c0ce312d.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
              </div>
            </div>
            <div class="name">
              过好中国年，儿童拜年口罩 50/150枚
            </div>
            <div class="price">
              <span class="priceInner">￥39</span>
            </div>
            <div class="tagWraper">
              <span class="tagStatus">
                特价
              </span>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="good">
            <div class="hd">
              <div class="wraper">
                <img src="https://yanxuan-item.nosdn.127.net/8aaf5b2974f8d088736df5953a3a2c18.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
              </div>
            </div>
            <div class="name">
              只需1滴强力去污 澳洲超浓缩不伤手洗洁精
            </div>
            <div class="price">
              <span class="priceInner">￥23.8</span>
            </div>
            <div class="tagWraper">
              <span class="tagStatus">
                特价
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'newItemModule'
}
</script>

<style lang="less" scoped>
.newItemModule{
  padding-bottom: .26rem;
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
    .right{
      display: block;
      font-size: .28rem;
      float: right;
      color: #333;
      line-height: 1rem;
    }
  }
  .indexItem {
    padding-left: .1rem;
    background: #fff;
    .list{
      display: flex;
      flex-wrap: wrap;
      position: relative;
      z-index: 0;
      overflow: hidden;
      .item{
        padding: 0 0 .13rem!important;
        margin-left: .2rem;
        width: 2.16rem;
        float: left;
        position: relative;
        overflow: hidden;
        background-color: #fff;
        .good{
          display: block;
          position: relative;
          width: 100%;
          .hd{
            background-color: #f5f5f5;
            border-radius: .04rem;
            position: relative;
            z-index: 0;
            .wraper{
              background-color: #f5f5f5;
              padding-bottom: 100%;
              margin-bottom: .12rem;
              img{
                position: absolute;
                display: block;
                background-color: #f5f5f5;
                border-radius: .04rem .04rem 0 0;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              }
            }
          }
          .name{
            margin-top: 0;
            padding: 0;
            font-size: .24rem;
            white-space: normal;
            line-height: .36rem;
            text-align: left;
            text-overflow: ellipsis;
            overflow: hidden;
            color: #333;
            font-family: PingFangSC-Regular;
            display: -webkit-box;
            word-break: break-all;
          }
          .price{
            font-size: .32rem;
            line-height: .48rem;
            text-align: left;
            color: #dd1a21;
            font-family: PingFangSC-Regular;
            .priceInner{
              font-size: .32rem;
              display: -moz-flex;
              display: flex;
              -moz-align-items: center;
              align-items: center;
            }
          }
          .tagWraper{
            width: 100%;
            z-index: 1;
            margin: 0 0 .14rem -.12rem;
            height: .33rem;
            overflow: hidden;
            padding-left: 0;
            .tagStatus{
              height: .3rem;
              padding: 0 .08rem;
              line-height: .3rem;
              text-align: center;
              color: #dd1a21;
              background: hsla(0,0%,100%,.9);
              border: 1px solid #dd1a21;
              font-size: .18rem;
              border-radius: .15rem;
              display: inline-block;
              vertical-align: top;
              white-space: nowrap;
              margin-left: .12rem;
              margin-bottom: .07rem;
              &::before{
                content: "";
                display: inline-block;
                height: 100%;
                vertical-align: middle;
                width: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
