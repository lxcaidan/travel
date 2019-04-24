<template>
    <div class="header">
        <router-link to="/">
            <div class="header-left icf icf-back"></div>
        </router-link>
        <h2 class="header-hd">城市选择</h2>
        <div class="header-search">
            <input type="text" class="search-input" placeholder="输入城市或景点">
        </div>
    </div>
</template>

<script>
export default {
    name: "CityHeader"
}
</script>

<style lang="stylus" scoped>
    .header
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
    .header-search
        padding: 8px 0
        .search-input
            display: block
            height: 36px
            width: 550px
            margin: 0 auto
            padding: 0 20px
            border: none
            outline: none
            font-size: 22px
            color: #212121
            border-radius: 4px;/*no*/
            &::-webkit-input-placeholder
                color: #c7c3c3
</style>
