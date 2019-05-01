<template>
    <div class="search-wrap" ref="searchResult">
        <ul class="list-area">
            <li class="item"
                v-for="item of list"
                :key="item.id"
                @click="handleCityClick(item.name)">{{item.name}}</li>
            <li class="no-result" v-show="hasNoData">没有匹配项</li>
        </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: "CitySearch",
    props: {
        list: Array
    },
    computed: {
        hasNoData () {
            return !this.list.length
        }
    },
    methods: {
        handleCityClick (city) {
            this.$store.commit('changeCity', city)
            this.$router.push('/')
        }
    },
    mounted () {
        this.scroll = new BScroll(this.$refs.searchResult)
    }
}
</script>

<style lang="stylus" scoped>
    .search-wrap
        position: absolute
        overflow: hidden
        z-index: 1
        top: 127px
        left: 0
        right: 0
        bottom: 0
        background-color: #fff
    .list-area
        .item
            padding-left: 20px
            line-height: 34px;/*no*/
            color: #6d6d6d
            &:nth-child(n+2)
                border-top: 1px solid #ccc
    .no-result
        text-align: center
        line-height: 60px
        color: #6d6d6d
</style>
