<template>
  <div style="position: relative;overflow: hidden;">
    <div class="cateSliderBar">
      <van-sidebar v-model="activeKey" @change="onChangeBar">
        <van-sidebar-item
          v-for="(item,index) in cateListTitle"
          :key= index
          :title="item"
        />
      </van-sidebar>
    </div>
  </div>
</template>

<script>
export default {
  name:'cateSliderBar',
  data() {
    return {
      activeKey:0,
      cateListTitle:[]
    }
  },
  created() {
    this.$http.get("/tab-wrap").then(_d => {
      // console.log(_d.data)
      this.cateListTitle = _d.data
    })
  },
  methods: {
    onChangeBar( _inx ){
      this.$http.get("/cate_list_"+_inx).then(_d => {
        // console.log(_d.data)
        this.$emit("get-list-goods",_d.data)
      })
    }
  },
}
</script>

<style lang="less" scoped>
.cateSliderBar{
  position: fixed;
  top: 44;
  left: 0;
  float: left;
  width: 1.62rem;
  height: 100%;
  background-color: #fff;
}
</style>
