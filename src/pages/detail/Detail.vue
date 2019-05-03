<template>
    <div class="detail-wrap">
        <keep-alive>
            <detail-header></detail-header>
        </keep-alive>
        <detail-banner></detail-banner>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data () {
        return {
            list : [
                {
                    title: "成人票",
                    children: [{
                        title: "成人三馆票",
                        children: [{
                            title: "承认三馆联票 - 某一连锁店销售"
                        }]
                    },{
                        title: "成人五馆票"
                    }]
                },{
                    title: "学生票"
                },{
                    title: "儿童票"
                },{
                    title: "特惠票"
                }
            ]
        }
    }
}
</script>

<style lang="styl" scoped>

</style>