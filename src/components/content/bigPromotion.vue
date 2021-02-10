<template>
  <div class="bigPromotion">
    <div class="floor floorTop">
      <a class="promItem promItem1"></a>
    </div>
    <div class="floor floorFrist">
      <a class="promItem promItem2"></a>
      <a class="promItem promItem2"></a>
    </div>
  </div>
</template>

<script>
export default {
  name:'bigPromotion'
}
</script>

<style scoped>
  .bigPromotion{
    overflow: hidden;
    box-sizing: border-box;
    background: #eee;
  }
  .bigPromotion .floor{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bigPromotion .floor .promItem{
    display: flex;
    -moz-align-items: center;
    align-items: center;
    -moz-justify-content: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    height: 100%;
    color: #333;
    width: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
  }
  .bigPromotion .floor .promItem1{
    background-image: url(https://yanxuan.nosdn.127.net/53bf399de2f222b04cbd7745e2d38eb8.gif?imageView&quality=75);
    background-size: 100% 100%;
  }
  .bigPromotion .floorTop{
    height: 3.21333rem
  }
  .bigPromotion .floorFrist{
    margin: .2rem 0;
    height: 1.86rem;
  }
  .bigPromotion .floorFrist .promItem{
    width: 3.51rem;
  }
  .bigPromotion .floorFrist a:nth-child(1){
    background-image: url(https://yanxuan.nosdn.127.net/fab22db17afe025fd520244788e2e327.png?quality=75&type=webp&imageView&thumbnail=375x0);
    background-size: 100% 100%;
  }
  .bigPromotion .floorFrist a:nth-child(2){
    background-image: url(https://yanxuan.nosdn.127.net/966efa762dd648d4745f6ea5f45d94e6.png?quality=75&type=webp&imageView&thumbnail=375x0);
    background-size: 100% 100%;
  }

</style>
