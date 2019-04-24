<template>
    <div>
        <h3 class="weekend-tit">周边好去处</h3>
        <div class="weekend-list">
            <a class="weekend-items"
                v-for="item of list"
                :key="item.id"
                href="javascript:;">
                <div class="mas-wrap">
                    <h4 class="item-hd">{{item.title}}</h4>
                    <div class="item-desc">{{item.desc}}</div>
                </div>
                <div class="img-wrap">
                    <img :src="item.imgUrl">
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
    .weekend-list
        flx(wrap jsb)
        padding: 15px
    .weekend-tit
        font-size: 24px
        text-indent: 20px
        line-height: 60px
        font-weight: 700
        color: #00afc7
        background-color: #eee
    .weekend-items
        flx()
        fx()
        width: 50%
        padding: 15px 20px
        box-sizing: border-box
        border-radius: 4px;/*no*/
        background-color: #fafafa
        &:nth-child(odd)
            margin-right: 10px
        &:nth-child(n+3)
            margin-top: 10px
    .img-wrap
        size(100px)
        img
            display: block
            size(100%)
            object-fit: cover
            border-radius: 50%
    .mas-wrap
        flx(v jc)
        width: 50%
        fx()
    .item-hd
        font-size: 28px
        color: #212121
        text-of-more(2)
        line-height: 1.4
    .item-desc
        margin-top: 6px
        font-size: 20px
        color: #616161
        line-height: 1.5
        text-of()
</style>
