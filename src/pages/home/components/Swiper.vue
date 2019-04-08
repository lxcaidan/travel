<template>
    <swiper class="wrapper" :options="swiperOption">
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <img :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data() {
      return {
        swiperList: [
            {
                'imgUrl': require("@img/swiper_1.jpg"),
                'id': "swiper_1"
            },{
                'imgUrl': require("@img/swiper_2.jpg"),
                'id': "swiper_2"
            },{
                'imgUrl': require("@img/swiper_3.jpg"),
                'id': "swiper_3"
            }
        ],
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
