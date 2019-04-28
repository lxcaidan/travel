<template>
    <div class="list">
        <ul>
            <li v-for="(item, key) of cities"
                :key="key">{{key}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "CityList",
    props: {
        cities: Object
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