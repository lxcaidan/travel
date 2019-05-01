<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="items-area">
                <h3 class="list-hd">当前城市</h3>
                <div class="city-list">
                    <div class="item">{{this.$store.state.city}}</div>
                </div>
            </div>
            <div class="items-area">
                <h3 class="list-hd">热门城市</h3>
                <div class="city-list">
                    <div class="item"
                        v-for="item of hotCities"
                        :key="item.id"
                        @click="handleCityClick(item.name)">{{item.name}}</div>
                </div>
            </div>
            <div class="items-area"
                v-for="(item, key) of cities"
                :key="key"
                :ref="key">
                <h3 class="list-hd">{{key}}</h3>
                <div class="city-list">
                    <div class="item"
                        v-for="city of item"
                        :key="city.id"
                        @click="handleCityClick(city.name)">{{city.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: "CityList",
    props: {
        cities: Object,
        hotCities: Array,
        letter: String
    },
    watch: {
        letter () {
            if (this.letter) {
                const elm = this.$refs[this.letter][0]
                this.scroll.scrollToElement(elm)
            }
        }
    },
    methods: {
        handleCityClick (city) {
            // this.$store.dispatch('changeCity', city)
            this.$store.commit('changeCity', city)
            this.$router.push('/')
        }
    },
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