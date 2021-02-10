<template>
  <div class="goodsColumn">
    <van-grid :column-num="5">
      <van-grid-item v-for="(item,index) in goodsItems" :key="index" :icon="item.itemIcon" :text="item.itemTitle" />
    </van-grid>
  </div>
</template>

<script>
export default {
  name:"goodsColumn",
  data() {
    return {
      goodsItems:[
        {
          itemIcon:"https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png",
          itemTitle:"新品首发"
        },
        {
          itemIcon:"https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png",
          itemTitle:"居家生活"
        },
        {
          itemIcon:"https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png",
          itemTitle:"服饰鞋包"
        },
        {
          itemIcon:"https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png",
          itemTitle:"美食酒水"
        },
        {
          itemIcon:"https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png",
          itemTitle:"个护清洁"
        },
        {
          itemIcon:"https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png",
          itemTitle:"母婴亲子"
        },
        {
          itemIcon:"https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png",
          itemTitle:"运动旅行"
        },
        {
          itemIcon:"https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png",
          itemTitle:"数码家电"
        },
        {
          itemIcon:"https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png",
          itemTitle:"全球特色"
        },
        {
          itemIcon:"https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif",
          itemTitle:"好货抄底"
        }
      ]
    }
  },
}
</script>

<style lang="less" scoped>
@import url(../../assets/css/vantReset.css);
</style>
