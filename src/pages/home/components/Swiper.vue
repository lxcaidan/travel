<template>
    <swiper class="wrapper" :options="swiperOption">
        <swiper-slide>
            <img src="@img/swiper_1.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
            <img src="@img/swiper_2.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
            <img src="@img/swiper_3.jpg" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data() {
      return {
        swiperOption: {
            pagination: ".swiper-pagination",
            loop: true
        }
      }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~style/fn.styl'

    .wrapper >>> .swiper-pagination-bullet
        width: 4px;/*no*/
        height: 4px;/*no*/
        border-radius: 50%

    .wrapper >>> .swiper-pagination-bullet-active
        background-color: #fff

    .swiper-slide
        height: 192px
        >img
            display: block
            size(100%)
</style>
