<template>
    <swiper class="wrapper" :options="swiperOption">
        <swiper-slide v-for="item of list" :key="item.id">
            <img :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
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
