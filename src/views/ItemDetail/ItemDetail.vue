<template>
  <div>
    <top-search-input></top-search-input>
    <!-- 商品详情 -->
    <div class="itemDetail">
      <div class="img">
        <img :src="goods_img" alt="">
      </div>
      <div class="content">
        <div class="price">{{goods_price}}</div>
        <div class="title">{{goods_title}}</div>
      </div>
    </div>
    <!-- 商品导航 -->
    <div class="goods_action">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
        <van-goods-action-button
          type="warning"
          text="立即购买"
          @click="onClickButton"
        />
        <van-goods-action-button
          type="danger"
          text="加入购物车"
          @click="onClickButton"
        />
      </van-goods-action>
    </div>
    <!-- sku组件 -->
    <div class="sku">
      <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        goods-id="goodsIdxx"
        @add-cart="onAddCartClicked"
        @buy-clicked="onBuyClicked"
      />
    </div>

  </div>
</template>

<script>
import topSearchInput from "@/components/content/topSearchInput"
export default {
  name:'ItemDetail',
  data() {
    return {
      goods_img:"",
      goods_title:"",
      goods_price:"",
      //  Sku
      show:false,
      goods:{
        // 默认商品 sku 缩略图
        picture: '',
      },
      //Sku对象结构
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: '颜色', // skuKeyName：规格类目名称
            k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: '11', // skuValueId：规格值 id
                name: '红色', // skuValueName：规格值名称
                // imgUrl: 'https://img01.yzcdn.cn', // 规格类目图片，只有第一个规格类目可以定义图片
                // previewImgUrl: 'https://img01.yzcdn.cn/1p.jpg', // 用于预览显示的规格类目图片
              },
              {
                id: '22',
                name: '蓝色',
                // imgUrl: 'https://img01.yzcdn.cn/2.jpg',
                // previewImgUrl: 'https://img01.yzcdn.cn/2p.jpg',
              }
            ],
            largeImageMode: true, //  是否展示大图模式
          },
          {
            k: '尺码', // skuKeyName：规格类目名称
            k_s: 's2', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: '33', // skuValueId：规格值 id
                name: 'S', // skuValueName：规格值名称
                // imgUrl: 'https://img01.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                // previewImgUrl: 'https://img01.yzcdn.cn/1p.jpg', // 用于预览显示的规格类目图片
              },
              {
                id: '44',
                name: 'M',
                // imgUrl: 'https://img01.yzcdn.cn/2.jpg',
                // previewImgUrl: 'https://img01.yzcdn.cn/2p.jpg',
              }
            ],
            largeImageMode: true, //  是否展示大图模式
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          //4中排列方式
          {
            id: 2259, // skuId
            s1: '11', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '33', // 规格类目 k_s 为 s2 的对应规格值 id
            price: 2200, // 价格（单位分）
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2259, // skuId
            s1: '11', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '44', // 规格类目 k_s 为 s2 的对应规格值 id
            price: 2200, // 价格（单位分）
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2259, // skuId
            s1: '22', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '33', // 规格类目 k_s 为 s2 的对应规格值 id
            price: 2200, // 价格（单位分）
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2259, // skuId
            s1: '22', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '44', // 规格类目 k_s 为 s2 的对应规格值 id
            price: 2200, // 价格（单位分）
            stock_num: 110 // 当前 sku 组合对应的库存
          },
        ],
        price: '', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: '留言', // 留言名称
            type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: '', // 是否必填 '1' 表示必填
            placeholder: '' // 可选值，占位文本
          }
        ],
        hide_stock: false // 是否隐藏剩余库存
      },
    }
  },
  components:{
    topSearchInput
  },
  created() {
    // console.log(this.$route.params.goods_info)
    if(this.goods_img&&this.goods_title&&this.goods_price){
      let _n = this.$route.params.goods_info
      this.goods_img = _n.good_img
      this.goods_title = _n.good_title
      this.goods_price = _n.good_price
    }
    let _n = this.$route.params.goods_info
      this.goods_img = _n.good_img
      this.goods_title = _n.good_title
      this.goods_price = _n.good_price
      //sku商品缩略图
      this.goods.picture =  _n.good_img
      //sku默认价格
      this.sku.price = _n.good_price.split("￥")[1]
  },
  methods: {
    onClickIcon() {
      this.$toast('点击客服图标');
    },
    // 显示sku组件
    onClickButton() {
      this.show = true
      this.$toast('请挑选您的宝贝~');
    },
    //sku购买商品
    onBuyClicked( _skuData){
      console.log(_skuData,"欢迎下次购买")
    },
    //sku添加购物车
    onAddCartClicked(){
      console.log("请尽快付款")
    }
  },
}
</script>

<style lang="less" scoped>
.itemDetail{
  height: 100%;
  background: #fff;
  border-top: 1px #f0f0f0 solid;
  .img>img{
    width: 100%;
  }
  .content{
    position: relative;
    padding: .26rem 0 .36rem .3rem;
    .price{
      color: #DD1A21;
      font-family: PingFang SC;
      font-size: .54rem;
      font-weight: 700;
      padding-bottom: .3rem;
    }
    .title{
      font-size: .32rem;
      color: #333;
      line-height: .48rem;
      margin-bottom: .04rem;
      font-weight: 700;
    }
  }
}
</style>
