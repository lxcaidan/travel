<template>
    <div class="detail-wrap">
        <keep-alive>
            <detail-header></detail-header>
        </keep-alive>
        <detail-banner
            :sightName="sightName"
            :bannerImg="bannerImg"
            :gallaryImg="gallaryImg"></detail-banner>
        <div class="content">
            <detail-list :list="categoryList"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data () {
        return {
            sightName: '',
            bannerImg: '',
            gallaryImg: [],
            categoryList: []
        }
    },
    methods: {
        getDetailInfo () {
            axios.get('/api/detail.json', {
                params: {
                    id: this.$route.params.id
                }
            }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.sightName = data.sightName,
                this.bannerImg = data.bannerImg,
                this.gallaryImg = data.gallaryImgs,
                this.categoryList = data.categoryList
            }
        }
    },
    mounted () {
        this.getDetailInfo()
    }
}
</script>

<style lang="styl" scoped>

</style>