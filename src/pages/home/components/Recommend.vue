<template>
    <div class="rec-wrap">
        <h3 class="rec-tit">热销推荐</h3>
        <div class="rec-list">
            <a class="rec-items"
                v-for="item of dataList"
                :key="item.id"
                href="javascript:;">
                <div class="img-wrap">
                    <img :src="item.imgUrl">
                </div>
                <div class="mas-wrap">
                    <h4 class="item-hd">{{item.title}}</h4>
                    <div class="item-desc">{{item.desc}}</div>
                    <div class="item-btn">查看详情</div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    data () {
        return {
            dataList: [
                {
                    id: "rec-001",
                    imgUrl: require("@img/recommend_1.jpg"),
                    title: "错峰出游立减！①港珠澳大桥②大礼包③送深圳！港澳3日！观光+自由行+澳门",
                    desc: "5天4晚 端午 直飞 多酒店可选"
                },{
                    id: "rec-002",
                    imgUrl: require("@img/recommend_2.jpg"),
                    title: "端午抢购！马来西亚沙巴+潜水天堂仙本娜6天/可升级水屋+可定制一日游+接送机",
                    desc: "6天5晚 端午 直飞 多酒店可选"
                },{
                    id: "rec-003",
                    imgUrl: require("@img/recommend_3.jpg"),
                    title: "全国联运 马尔代夫中央格兰德岛 2沙2水鲸鱼探险+浮潜海钓巡航+蜜月套餐",
                    desc: "6天4晚 端午 直飞 多机票可选 马尔代夫盛泰澜中央格兰德岛"
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .rec-wrap
        margin-top: 10px
    .rec-list
        padding: 0 15px
    .rec-tit
        font-size: 24px
        text-indent: 20px
        line-height: 60px
        font-weight: 700
        color: #00afc7
        background-color: #eee
    .rec-items
        flx()
        padding: 20px 0
        &:nth-child(n+2)
            position: relative
            &::before
                content: ''
                position: absolute
                top: -1px
                width: 100%
                height: 1px;/*no*/
                background-color: #aaa
                transform: scaleY(.5);
    .img-wrap
        width: 160px
        height: 160px
        img
            display: block
            size(100%)
            object-fit: cover
    .mas-wrap
        flx(v jc)
        width: 50%
        margin-left: 40px
        padding-right: 20px
        fx()
    .item-hd
        font-size: 14px
        color: #212121
        text-of-more(2)
        line-height: 1.4
    .item-desc
        margin: 6px 0 8px
        font-size: 12px
        color: #616161
        line-height: 1.5
        text-of()
    .item-btn
        flx(vm)
        width: 160px
        font-size: 12px
        color: #fff
        line-height: 40px
        border-radius: 3px
        background-color: #ff8300
</style>
