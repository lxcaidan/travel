<template>
    <div class="detail-header">
        <router-link
            tag="div"
            to="/"
            v-show="showAbs"
            class="header-abs">
            <div class="icf icf-back"></div>
        </router-link>

        <div class="header-fixed"
            v-show="!showAbs"
            :style="{opacity: opacityStyle.opacity}">
            <router-link to="/">
                <div class="header-left icf icf-back"></div>
            </router-link>
            <h2 class="header-hd">景点详情</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data () {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll () {
            const top = document.documentElement.scrollTop
            if (top > 60) {
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = { opacity }
                this.showAbs = false
            } else {
                this.showAbs = true
            }
        }
    },
    // 这里对到为什么使用keep-alive，而不是常规的mounted感到不解，也没说为何
    activated () {
        // 全局事件绑定，需要注意解绑
        window.addEventListener('scroll', this.handleScroll)
    },
    deactivated () {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
    .detail-header
        position: absolute
        z-index: 3
        width: 100%
        height: 64px
    .header-abs
        position: absolute
        z-index: 1
        top: 7px
        left: 20px
        flx(vm)
        width: 50px
        height: 50px
        color: #fff
        font-size: 20px;/*no*/
        text-indent: -4px
        border-radius: 50%
        background: rgba(0,0,0,.8)
    .header-fixed
        position: fixed
        top: 0
        left: 0
        width: 100%
        height: 64px
        background-color: #00bcd4
    .header-left
        position: absolute
        left: 0
        width: 80px
        line-height: 64px
        color: #fff
        text-align: center
        &:before{
            vertical-align: top
            font-size: 20px;/*no*/
        }
    .header-hd
        line-height: 64px
        color: #fff
        font-size: 24px
        text-align: center
</style>