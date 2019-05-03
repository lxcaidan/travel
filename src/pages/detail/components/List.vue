<template>
    <div class="detail-lsit">
        <div class="item"
            v-for="(item, index) of list"
            :key="index">
            <div class="item-title">
                <h3 class="title">{{item.title}}</h3>
            </div>
            <div v-if="item.children"
                class="second-item">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailList',
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
    .item
        &:nth-child(n+2)
            border-top: 1px solid #ececec
    .item-title
        line-height: 60px
        font-size: 12px;/*no*/
        padding: 0 20px
    .title
        &::before
            content: ''
            display: inline-block
            width: 18px;/*no*/
            height: 18px;/*no*/
            margin-right: 10px
            vertical-align: -12%
            background: url("~@img/ticket.png") no-repeat center / cover
    .second-item
        padding-left: 20px
</style>