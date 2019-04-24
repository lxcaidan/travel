<template>
    <div class="list">
        <div class="items-area">
            <h3 class="list-hd">当前城市</h3>
            <div class="city-list">
                <div class="item">北京</div>
            </div>
        </div>
        <div class="items-area">
            <h3 class="list-hd">热门城市</h3>
            <div class="city-list">
                <div class="item">北京</div>
                <div class="item">上海</div>
                <div class="item">三亚</div>
                <div class="item">香港</div>
                <div class="item">杭州</div>
                <div class="item">广州</div>
                <div class="item">成都</div>
                <div class="item">深圳</div>
                <div class="item">苏州</div>
                <div class="item">桂林</div>
                <div class="item">西安</div>
                <div class="item">厦门</div>
            </div>
        </div>
        <div class="list-area">
            <h3 class="list-hd">A</h3>
            <div class="city-list">
                <div class="item">阿坝藏族羌族自治州</div>
                <div class="item">阿克苏地区</div>
                <div class="item">阿拉尔</div>
                <div class="item">阿拉善盟</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CityList"
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