<template>
    <div class="icons-wrap">
        <swiper>
            <swiper-slide v-for="(page, index) of pages" :key="index">
            <a class="icon-area" href="javascript:;" v-for="item of page" :key="item.icon">
                <span :class="['icon', item.icon]"></span>
                <p class="desc">{{item.desc}}</p>
            </a>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    data () {
        return {
            iconList: [
                {
                    "icon": "visa",
                    "desc": "签证 · WiFi"
                },{
                    "icon": "abroad",
                    "desc": "出境游"
                },{
                    "icon": "onedaytour",
                    "desc": "一日游"
                },{
                    "icon": "msl",
                    "desc": "美食林"
                },{
                    "icon": "subbus",
                    "desc": "汽车票"
                },{
                    "icon": "internal",
                    "desc": "邮轮游"
                },{
                    "icon": "superbus",
                    "desc": "超级巴士"
                },{
                    "icon": "strategy",
                    "desc": "攻略"
                },{
                    "icon": "superbus",
                    "desc": "超级巴士"
                },{
                    "icon": "strategy",
                    "desc": "攻略"
                }
            ]
        }
    },
    computed: {
        pages () {
            // 视频做法
            // const pages = []
            // this.iconList.forEach((item, index) => {
            //     const page = Math.floor(index / 8)
            //     if(!pages[page]) pages[page] = []
            //     pages[page].push(item)
            // })
            // return pages

            // 自己写的小方法
            let index = 0
            let pages = []
            while(index < this.iconList.length){
                pages.push(this.iconList.slice(index, index += 8))
            }
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
    .icons-wrap >>> .swiper-slide
        flx(wrap)
    .icons-wrap
        padding: 10px
        .icon-area
            display: block
            width: 25%
            text-align: center
            &:nth-child(n+5)
                margin-top: 20px
        .icon
            display: inline-block
            width: 33px;/*no*/
            height: 33px;/*no*/
            background-image: url(../../../assets/img/entrances.png)
            background-size: 374px 130px;/*no*/
            background-repeat: no-repeat
        .desc
            margin-top 20px
            color: #333
            text-of()
        .visa
            background-position: -35px -12px;/*no*/
        .abroad
            background-position: -124px -12px;/*no*/
        .onedaytour
            background-position: -212px -12px;/*no*/
        .msl
            background-position: -300px -79px;/*no*/
        .subbus
            background-position: -35px -79px;/*no*/
        .internal
            background-position: -212px -79px;/*no*/
        .superbus
            background-position: -212px -79px;/*no*/
        .strategy
            background-position: -300px -12px;/*no*/
        
</style>
