<template>
  <div class="swiper-container" id="mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(b,index) in list" :key="index">
        <img :src="b.imgUrl"/>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Banner",
  props:['list'],
  watch:{
    list:{
      immediate:true,
      handler(newVal,oldVal){
        this.$nextTick(()=>{
          new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            grabCursor : true,
            autoplay: {
              delay: 2000,//1秒切换一次
            },
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          })
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
