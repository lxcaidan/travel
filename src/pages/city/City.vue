<template>
    <div>
        <city-header></city-header>
        <city-list></city-list>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CityList from './components/List'

export default {
    name: "City",
    components: {
        CityHeader,
        CityList
    }
}
</script>

<style lang="stylus" scoped>

</style>
