<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="covimg" src="https://img1.qunarzz.com/vs_ceph_vs_tts/490a37ef-14ac-419a-8f10-c228195855ed.jpg_r_640x420x90_6b02c118.jpg" alt="">
            <div class="banner-info">
                <div>产品编号 2307018750</div>
                <div class="num">1/13<span class="icf icf-img"></span></div>
            </div>
        </div>
        <common-gallary
            :list="imgs"
            v-show="showGallary"
            @close="handleGallaryClose"
            ></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'

export default {
    name: 'DetailBanner',
    components: {
        CommonGallary
    },
    data () {
        return {
            showGallary: false,
            imgs: [
                'https://img1.qunarzz.com/vs_ceph_vs_tts/39370a2f-91f3-43f0-8f36-d47b8cacd056.jpeg_r_1280x840x90_2346ec67.jpeg',
                'https://img1.qunarzz.com/vs_ceph_vs_tts/39f2dece-853a-4e4a-a3c8-fb822c417330.jpg_r_1280x840x90_aa41f97c.jpg'
            ]
        }
    },
    methods: {
        handleBannerClick () {
            this.showGallary = true
        },
        handleGallaryClose () {
            this.showGallary = false
        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position: relative
        overflow: hidden
    .banner-img
        height: 504px
    .banner-info
        position: absolute
        bottom: 0
        flx(jsb ae)
        width: 100%
        height: 60px;/*no*/
        padding: 0 15px 15px;/*no*/
        line-height: 1.4
        box-sizing: border-box
        font-size: 14px;/*no*/
        color: #fff
        background-image: linear-gradient(transparent 0, rgba(0,0,0,0.8) 85%)
        .num
            padding-bottom: 1px;/*no*/
            font-size: 12px;/*no*/
        .icf
            margin-left: 10px
</style>