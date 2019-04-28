<template>
    <div class="list" ref="content">
        <ul>
            <li v-for="item of letters"
                :key="item"
                :ref="item"
                @click="handleLetterClick"
                @touchstart="handleTouchStart"
                @touchmove="handleTouchMove"
                @touchend="handleTouchEnd">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "CityList",
    props: {
        cities: Object,
    },
    computed: {
        letters () {
            const letters = []
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    data () {
        return {
            touchStatus: false
        }
    },
    methods: {
        handleLetterClick (e) {
            this.$emit('change', e.target.innerText)
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if (this.touchStatus) {
                // 获取最外层list对于页面顶部的距离
                const contentTop = this.$refs.content.offsetTop
                const startY = this.$refs['A'][0].offsetTop
                const touchY = e.touches[0].clientY - contentTop
                // 获取每个item的高度
                const itemHeight = this.$refs['A'][0].clientHeight
                const index = Math.floor((touchY - startY) / itemHeight)
                // 视频那样做的不对的，他也是用的rem，怎么可以直接从浏览器看高度写死
                this.$emit("change", this.letters[index])
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        }
    }
}
</script>

<style lang="stylus" scoped>
    .list
        position: absolute
        top: 126px
        right: 0
        bottom: 0
        flx(v jc)
        width: 60px
        text-align: center
        li
            font-size: 24px
            color: #9a7e5a
            line-height: 36px
</style>