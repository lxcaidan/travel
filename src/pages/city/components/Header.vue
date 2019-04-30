<template>
    <div class="header">
        <router-link to="/">
            <div class="header-left icf icf-back"></div>
        </router-link>
        <h2 class="header-hd">城市选择</h2>
        <div class="header-search">
            <input v-model="keyword" type="text" class="search-input" placeholder="输入城市或景点">
        </div>
        <CitySearch :list="list" v-show="keyword"></CitySearch>
    </div>
</template>

<script>
import CitySearch from './Search'

export default {
    name: "CityHeader",
    props: {
        cities: Object
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    watch: {
        keyword () {
            if (this.timer) {
                clearTimeout(this.timer)
            }

            if (!this.keyword) {
                this.list = []
                return
            }

            this.timer = setTimeout(() => {
                const result = []

                for (let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                            result.push(value)
                        }
                    })
                }

                this.list = result
            }, 100)
        }
    },
    components: {
        CitySearch
    }
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
        padding: 14px 0
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
