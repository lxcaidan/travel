<template>
    <div class="list" ref="wrapper">
        <div>
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
            <div class="list-area">
                <h3 class="list-hd">A</h3>
                <div class="city-list">
                    <div class="item">阿坝藏族羌族自治州</div>
                    <div class="item">阿克苏地区</div>
                    <div class="item">阿拉尔</div>
                    <div class="item">阿拉善盟</div>
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
            <div class="list-area">
                <h3 class="list-hd">A</h3>
                <div class="city-list">
                    <div class="item">阿坝藏族羌族自治州</div>
                    <div class="item">阿克苏地区</div>
                    <div class="item">阿拉尔</div>
                    <div class="item">阿拉善盟</div>
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
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: "CityList",
    mounted () {
        this.scroll = new BScroll(this.$refs.wrapper)
    }
}
</script>

<style lang="stylus" scoped>
    .list
        position: absolute
        top: 127px
        left: 0
        right: 0
        bottom: 0
        overflow: hidden
    .list-hd
        font-size: 24px
        text-indent: 20px
        line-height: 60px
        font-weight: 700
        color: #00afc7
        background-color: #eee
    .items-area
        padding-right: 80px
        .city-list
            display: grid
            grid-template-columns: repeat(3, 1fr)
            grid-column-gap: 15px;
            grid-row-gap: 15px
            padding: 20px 15px
            font-size: 12px;/*no*/
        .item
            padding: 0 10px
            text-align: center
            color: #6d6d6d
            text-of()
            line-height: 24px;/*no*/
            border: 1px solid #b1b1b1;/*no*/
            border-radius: 8px/*no*/
    .list-area
        padding-right: 80px
        .city-list
            padding-left: 15px
        .item
            padding-left: 20px
            line-height: 34px;/*no*/
            color: #6d6d6d
            &:nth-child(n+2)
                border-top: 1px solid #ccc
</style>