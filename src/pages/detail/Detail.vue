<template>
    <div class="detail-wrap">
        <keep-alive>
            <detail-header></detail-header>
        </keep-alive>
        
        <detail-banner></detail-banner>
        <div style="height: 2000px"></div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'

export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader
    }
}
</script>

<style lang="styl" scoped>

</style>