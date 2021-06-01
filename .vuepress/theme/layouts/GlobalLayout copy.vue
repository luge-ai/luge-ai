<!-- themePath/layouts/GlobalLayout.vue -->
<template>
    <div id="global-layout">
        <!-- <div class="header-menu">哈哈哈哈</div> -->
        <header class="bk-dark">
            <!-- <video autoplay loop muted>
                <source src="./../../assets/bk.mp4" type="video/mp4"></source>
            </video> -->
            <div class="header-menu">
                <div class="header-menu-left">
                    <img src="../../assets/leftlogo.png" />
                </div>
                <div class="header-menu-right">
                    <img src="../../assets/github.png" @click="goTo('https://github.com/luge-ai/luge-ai')" />
                    <img src="../../assets/gitee.png" @click="goTo('https://gitee.com/luge-ai/luge-ai')"/>
                    <div @click="changeLanguage('zh-CN')" class="change-language">中文</div>
                    <div>|</div>
                    <div @click="changeLanguage('en-US')" class="change-language">EN</div>
                </div>
            </div>
            <div class="header-container">
                <div class="header-content">
                    <img src="../../assets/headerlogo.png">
                    <p>LUGE ( Language Understanding and Generation Evaluation Benchmarks )</p>
                    <p>全面的面向自然语言理解和生成任务的中文开源数据集合，旨在为研究人员带来一站式的数据集浏览、整理、下载和评测的科研体验，共同推动中文信息处理技术的进步。</p>
                    <!-- <div style="display: flex; justify-content: center;">
                        <a class="btn" href="https://github.com/luge-ai/luge-ai" target="_blank">
                            <i class="iconfont icon-github"></i>
                            <span>View on GitHub</span>
                        </a>
                        <a class="btn" href="https://gitee.com/luge-ai/luge-ai" target="_blank">
                            <i class="iconfont icon-gitee"></i>
                            <span>View on Gitee</span>
                        </a>
                    </div> -->
                </div>
            </div>
            <div class="header-operating">
                <div class="operating-container" v-for="item in operatingInfo" :key="item.id">
                    <div class="title">{{item.title}}</div>
                    <div class="description">
                        <a :href="item.url" target="_blank">{{item.description}}</a>
                    </div>
                </div>
            </div>
            <!-- <div>查看更多</div> -->
        </header>
        <ul v-if="!tabValue"  class="mes-tab">
            <li><a href="/dataset.html">其他开源数据集索引</a></li>
            <li><img src="../../assets/arrow.png"></li>
            <li>{{mes}}</li>
        </ul>
        <div class="tabs" :class="tabsFix ? 'tabs-fix' : ''" v-if="tabValue">
            <span v-for="(item, index) in tabs" :key="index" :class="item.value === tabValue ? 'tabs-active' : ''" @click="onClickTab(item.path)">{{item.label}}</span>
        </div>
        <list-component v-if="tabValue === 1"></list-component>
        <component :is="layout" v-else></component>

        <footer-component></footer-component>
    </div>
</template>

<script>
import listComponent from './../../components/list';
import footerComponent from './../../components/globalFooter';
export default {
    components: {
        listComponent,
        footerComponent
    },
    data() {
        return {
            tabValue: 1,
            tabsFix: false,
            tabs: [
                {path: '/', label: '千言数据集', value: 1},
                {path: '/dataset.html', label: '其它开源数据集索引', value: 2}
            ],
            mes: '',
            operatingInfo: [
                {id: 1, title: '这里是运营文章1', description: '目前的许多技术研发仅关注模型在单一数据集上的效果', url: 'https://www.baidu.com/'},
                {id: 2, title: '这里是运营文章2', description: '目前的许多技术研发仅关注模型在单一数据集上的效果', url: 'https://www.baidu.com/'},
                {id: 3, title: '这里是运营文章3', description: '目前的许多技术研发仅关注模型在单一数据集上的效果', url: 'https://www.baidu.com/'},
                {id: 4, title: '这里是运营文章4', description: '目前的许多技术研发仅关注模型在单一数据集上的效果', url: 'https://www.baidu.com/'}
            ]
        };
    },
    computed: {
        layout() {
            if (this.$page.path) {
                const layout = this.$page.frontmatter.layout;
                this.mes = this.$page.headers[0].title;
                if (layout && (this.$vuepress.getLayoutAsyncComponent(layout)
                    || this.$vuepress.getVueComponent(layout))) {
                    return layout;
                }
                return 'Layout';
            }
            return 'NotFound';
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.handleChangeTab(to.path);
        });
    },
    mounted() {
        let height = window.innerHeight;
        window.addEventListener('scroll', () => {
            const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
            if (top >= height) {
                this.tabsFix = true;
            } else {
                this.tabsFix = false;
            }
        });
    },
    methods: {
        changeLanguage(type) {
            let path = '';
            switch (type) {
                case 'en-US':
                    path = '/en/';
                    break;
                case 'zh-CN':
                    path = '/';
                    break;
            }
            if (this.$router.currentRoute.path !== path) {
                this.$router.push(path)
            }
        },
        handleChangeTab(path) {
            let hasTab = false;
            this.tabs.forEach(item => {
                if (item.path === path) {
                    this.tabValue = item.value;
                    hasTab = true;
                }
            });
            if (!hasTab) {
                this.tabValue = '';
            }
            this.$page.hasTab = this.tabValue !== '';
        },
        goTo(path) {
            window.open(path);
        },
        onClickTab(path) {
            if (this.$router.currentRoute.path !== path) {
                this.$router.push(path);
            }
        }
    }
};
</script>
<style lang='stylus' scoped>
@import url("./../../assets/icon/iconfont.css");
#global-layout
    min-height 100%
    // padding-bottom 需要动态计算footer
header + footer,
.tabs + footer
    margin-bottom 400px
    z-index -1

.bk-dark
    background-color  #000
    background-image url(./../../assets/headerbg1.png)
    background-position center
    background-size cover
    color #fff
h1, h2
    background transparent
    border none
    padding 0!important
    margin 0 !improtant
header
    // text-align center
    height 100vh
    position relative
    overflow hidden
    .header-container
        width 100%
        height 100%
        display flex
        justify-content center
        align-items center
        .header-content
            z-index 1
            width 800px
            text-align center
            font-size 14px
            img
                margin-bottom 20px
            p
                width 780px
                line-height 26px
                margin auto
                &:nth-of-type(1)
                    font-weight 300
                    margin-bottom 10px
                &:nth-of-type(2)
                    font-size 20px
                    line-height 2
            div
                text-align center
                margin-top 20px
                a:nth-of-type(1)
                    margin-right 50px


    .header-menu
        width 80%
        position absolute
        left 50%
        top 20px
        transform translate3d(-50%, 0, 0)
        height 40px
        display flex
        justify-content space-between
        align-items center
        &-right
            display flex 
            align-items center
            img
                margin-right 16px
                &:hover
                    cursor pointer
            .change-language
                &:hover
                    cursor pointer

    .header-operating
        width 90%
        position absolute
        left 50%
        bottom 10%
        transform translate3d(-50%, 0, 0)
        height 10%
        display grid
        grid-template-columns repeat(4, 1fr)
        .operating-container
            padding 0 20px
            position relative
            .title
                color #fff
                opacity 0.5
                margin-bottom 5px
            .description
                text-overflow -o-ellipsis-lastline
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp 2
                line-clamp 2
                -webkit-box-orient vertical
                a
                    color #FFF
                a:hover
                    color #1590FF

        .operating-container:not(:last-child)::after
            content " "
            position absolute
            right 0
            top 0
            bottom 0
            width 1px
            height 100%
            background #fff
            transform scaleX(0.5)


.btn
    height 40px
    border 1px solid #fff
    color #fff
    line-height 38px
    display inline-block
    border-radius 20px
    font-weight 400
    width 170px
    display flex
    align-items center
    justify-content center
    i
        margin-right 5px
        font-size 20px
    &:hover
        background #fff
        color #071B34
.tabs
    height 60px
    line-height 60px
    text-align center
    background #fff
    box-shadow 0 2px 10px 0 rgba(0, 0, 0, .05)
    font-size 20px
    color #333
    &-fix {
        position fixed
        top 0
        left 0
        right 0
        z-index 1
    }
    span
        padding 0 5px
        margin-right 80px
        border-bottom 2px solid transparent
        height 100%
        box-sizing border-box
        display inline-block
        cursor pointer
        &:last-of-type
            margin-right 0
        &:hover,
        &.tabs-active
            color #0173EB
            border-color #0173EB
.mes-tab 
    display flex
    max-width 800px
    margin 0 auto
    padding-top 30px
    padding-left 0
    li 
        margin 0
        padding 0
        list-style none
        display: flex;
        flex-direction: column;
        justify-content: center;
        &:first-of-type
            margin-right 10px
            a
                color #666
                &:hover
                    color #0173eb
        &:last-of-type
            margin-left 10px
            color #333
        img
            width 8px
@media (max-width: 719px)
    .bk-dark
        background-color  #000
        background-image url(./../../assets/headerbg1.png)
        background-position center
        background-size cover
    header
        .header-content
            width 100%
            box-sizing border-box
            padding 0 1.5rem
            font-size 12px
            h1
                font-size 30px
                line-height 48px
                margin 0 !important
            p
                width 100%
                margin-bottom 0!important
            div
                margin-left -2rem
                margin-right -2rem
            a:first-of-type
                margin-right 10px!important

        .btn
            font-size 12px
            height 28px
            line-height 26px
            width 140px
        .header-operating
            width 60%
            height 18%
            margin 0 auto
            display block
            overflow scroll
            .operating-container
                padding 10px 0
                .description
                    text-overflow -o-ellipsis-lastline
                    overflow hidden
                    text-overflow ellipsis
                    display -webkit-box
                    -webkit-line-clamp 1
                    line-clamp 1
                    -webkit-box-orient vertical
            
            .operating-container:not(:last-child)::after
                content ""
                width 0
                height 0
    .tabs
        display flex
        justify-content space-around
        span 
            margin-right 0
</style>
