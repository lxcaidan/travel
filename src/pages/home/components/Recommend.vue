<template>
    <div class="rec-wrap">
        <h3 class="rec-tit">热销推荐</h3>
        <ul class="rec-list">
            <router-link
                tag="li"
                class="rec-items"
                v-for="item of list"
                :key="item.id"
                :to="'/detail/'+item.id">
                <div class="img-wrap">
                    <img :src="item.imgUrl">
                </div>
                <div class="mas-wrap">
                    <h4 class="item-hd">{{item.title}}</h4>
                    <div class="item-desc">{{item.desc}}</div>
                    <div class="item-btn">查看详情</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        list: Array
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
        font-size: 26px
        color: #212121
        text-of-more(2)
        line-height: 1.4
    .item-desc
        margin: 6px 0 8px
        font-size: 24px
        color: #616161
        line-height: 1.5
        text-of()
    .item-btn
        flx(vm)
        width: 160px
        font-size: 24px
        color: #fff
        line-height: 40px
        border-radius: 3px
        background-color: #ff8300
</style>
