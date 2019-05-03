<template>
    <swiper class="wrapper"
        :options="swiperOption"
        v-if="isShow">
        <swiper-slide v-for="item of list" :key="item.id">
            <img :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    computed: {
        isShow () {
            return this.list.length
        }
    },
    data() {
        return {
            swiperOption: {
                pagination: ".swiper-pagination",
                autoplay: 3000,
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
    .wrapper
        height: 192px
    .swiper-slide
        height: 100%
        >img
            display: block
            size(100%)
</style>
