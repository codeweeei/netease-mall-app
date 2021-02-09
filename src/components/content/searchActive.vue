<template>
  <div class="search-active">
    <van-cell-group class="search-text">
      <van-field
        v-model="inputValue"
        clearable
        left-icon="search"
        placeholder="午夜饭4折起"
        @input="getGoods"
      />
    </van-cell-group>
    <div class="cancel" @click="cancel">
      取消
    </div>
  </div>
</template>

<script>
export default {
  name:"searchActive",
  data() {
    return {
      inputValue:"",
      goodsList:[]
    }
  },
  methods: {
    cancel(){
      this.$router.push("/")
    },
    getGoods(){
      this.$http.get("/search",{
        //将输入框里的值（关键字）通过params键值对的方式传递给后台
        params:{
          search_key:this.inputValue
        }
      })
      .then(_d => {
        console.log(_d.data)
      })
    }
  },
  // created() {
  //   this.getGoods()
  // },
}
</script>

<style scoped>
@import url("../../assets/css/vantReset.css");
  .search-active{
    padding: 0 .3rem;
    display: flex;
    box-sizing: content-box;
    z-index: 1;
    margin: auto;
    overflow: hidden;
    height: .88rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .search-active .search-text{
    width: 6rem;
  }
  .search-active .cancel{
    margin-left: .3rem;
    font-size: .28rem;
    display: flex;
    align-items: center;
  }
</style>
