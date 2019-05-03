<template>
    <div class="gallary-wrap" @click="handleBannerClick">
        <swiper
            class="wrapper"
            :options="swiperOptions">
            <swiper-slide
                v-for="(item, index) of list"
                :key="index">
                <img class="covimg" :src="item">
            </swiper-slide>
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallary',
    props: {
        list: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observer: true,
                observeParents: true
            }
        }
    },
    methods: {
        handleBannerClick () {
            this.$emit("close")
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-slide
        height: 504px
    .gallary-wrap
        position: fixed
        top: 0
        left: 0
        z-index: 8
        flx(ac)
        width: 100%
        height: 100%
        background: #000
    
    .swiper-pagination
        color: #fff
</style>