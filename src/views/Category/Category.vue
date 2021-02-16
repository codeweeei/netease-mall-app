<template>
  <div class="Category">
    <!-- 顶部搜索框 -->
    <cate-top-search-ipt></cate-top-search-ipt>
    <!-- 分类页面区域 -->
    <div class="CateContainer">
      <!-- 侧边分类栏 -->
      <cate-slider-bar @get-list-goods="showListGoods"></cate-slider-bar>
      <!-- 右侧商品栏 -->
      <div class="listGoods clearfix">
        <div class="good" v-for="(item,index) in goodsItem" :key="index">
          <img :src="item.good_img" alt="">
          <p class="title">{{item.good_title}}</p>
          <p class="price">{{item.good_price}}</p>
        </div>
      </div>
    </div>
    <!-- 底部标签栏 -->
    <tabbar></tabbar>
  </div>
</template>

<script>
import cateTopSearchIpt from "../../components/content/cateTopSearchIpt.vue"
import tabbar from "../../components/content/tabbar.vue"
import cateSliderBar from "./CateContainer/cateSliderBar.vue"
export default {
  name:'Category',
  components:{
    cateTopSearchIpt,
    tabbar,
    cateSliderBar
  },
  data() {
    return {
      goodsItem:[]
    }
  },
  created() {
    this.$http.get('/cate_list_0').then( _n => {
      this.goodsItem = _n.data
      // console.log(this.goodsItem)
    })
  },
  methods: {
    showListGoods(listGoods){
      // console.log("123")
      this.goodsItem = listGoods
    }
  },
}
</script>

<style lang="less" scoped>
.Category{
  .CateContainer{
    position: relative;
    width: 100%;
    height: 574px;
    overflow: auto;
    background: #fff;
    padding-left: 1.62rem;
    .listGoods{
      .good{
        overflow: hidden;
        float: left;
        padding: 0rem 0.1rem 0.33rem 0.2rem;
        width: 50%;
        img{
          width: 100%;
        }
        .title{
          margin-top: .16rem;
          line-height: .4rem;
          text-align: left;
          font-size: .28rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2; //多行在这里修改数字即可
          overflow:hidden;
          /* autoprefixer: ignore next */
          -webkit-box-orient: vertical;
          color: #333;
          font-family: PingFangSC-Regular;
        }
        .price{
          font-size: .32rem;
          line-height: .48rem;
          text-align: left;
          color: #dd1a21;
          font-family: PingFangSC-Regular;
        }
      }
    }
  }
}
</style>
