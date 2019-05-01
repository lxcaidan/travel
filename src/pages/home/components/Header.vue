<template>
    <div class="header">
        <div class="header-left icf icf-back"></div>
        <div class="header-input"><span class="icf icf-search"></span>输入城市/景点/游玩主题</div>
        <router-link to="/city">
            <div class="header-right">{{this.$store.state.city}}<span class="icf icf-below-s"></span></div>
        </router-link>
    </div>
</template>

<script>
/* 这是一个单文件组件 */
export default {
    name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~style/fn.styl'

    .header
        flx(ac)
        height: 64px
        background-color: #00bcd4

        .header-left
        .header-right
            line-height: 64px
            color: #fff
            text-align: center

        .header-left
            width: 80px
            &:before{
                vertical-align: top
                font-size: 20px;/*no*/
            }

        .header-input
            fx()
            height: 40px
            padding-left: 20px
            line-height: 40px
            color: #c7c3c3
            font-size: 12px;/*no*/
            border-radius: 4px;/*no*/
            background-color: #fff
            .icf
                margin-right: 10px

        .header-right
            width: 120px
            font-size: 24px
            .icf
                margin-left: 10px
</style>
