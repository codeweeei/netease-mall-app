<template>
  <div class="search-active">
    <van-cell-group class="search-text">
      <van-field
        v-model="inputValue"
        clearable
        left-icon="search"
        placeholder="午夜饭4折起"
        @input="getInputValue"
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
    }
  },
  methods: {
    cancel(){
      this.$router.push("/")
    },
    getInputValue(){
      console.log(this.inputValue)
    }
  },
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
