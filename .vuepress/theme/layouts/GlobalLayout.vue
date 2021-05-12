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
                <div class="header-menu-right big-screen">
                    <img src="../../assets/github.png" @click="goTo('https://github.com/luge-ai/luge-ai')" />
                    <img src="../../assets/gitee.png" @click="goTo('https://gitee.com/luge-ai/luge-ai')"/>
                    <div @click="changeLanguage('zh-CN')" :class="language === 'zh-CN' ? 'change-language current-language' : 'change-language'">中文</div>
                    <div>|</div>
                    <div @click="changeLanguage('en-US')" :class="language === 'en-US' ? 'change-language current-language' : 'change-language'">EN</div>
                </div>
                <div class="header-menu-right small-screen dropdown">
                    <div class="dropbtn">{{language === 'zh-CN' ? '中文' : 'En'}}&nbsp;<img src="../../assets/arrow-down.png" style="width: 16px; height: 16px" /></div>
                    <div class="dropdown-content">
                        <a href="javascript:void(0);" @click="changeLanguage('zh-CN')">中文</a>
                        <a href="javascript:void(0);" @click="changeLanguage('en-US')">En</a>
                    </div>
                </div>
            </div>
            <div class="header-container">
                <div class="header-content">
                    <picture>
                        <source media="(max-width: 719px)" srcset="../../assets/headerlogo-2x.png">
                        <img src="../../assets/headerlogo.png" />
                    </picture>
                    <p>LUGE ( Language Understanding and Generation Evaluation Benchmarks )</p>
                    <p v-if="language === 'zh-CN'">全面的面向自然语言理解和生成任务的中文开源数据集合，旨在为研究人员带来一站式的数据集浏览、整理、下载和评测的科研体验，共同推动中文信息处理技术的进步。</p>
                    <p v-else>LUGE, an open-source collection of Chinese NLP benchmark datasets, is designed to provide NLP researchers with a one-stop experience to access and acquire quality datasets for model training and testing, together with whom we work towards furthering the progress of Chinese NLP.</p>
                    <div class="git-link">
                        <a class="btn" href="https://github.com/luge-ai/luge-ai" target="_blank">
                            <i class="iconfont icon-github"></i>
                            <span>View on GitHub</span>
                        </a>
                        <a class="btn" href="https://gitee.com/luge-ai/luge-ai" target="_blank">
                            <i class="iconfont icon-gitee"></i>
                            <span>View on Gitee</span>
                        </a>
                    </div>
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
            <div class="show-more">
                <div @click="showMoreInfo" v-if="language === 'zh-CN'">{{ isShowAll ? '收起' : '查看更多' }}</div>
                <div @click="showMoreInfo" v-else>{{ isShowAll ? 'Pack Up' : 'View More' }}</div>
                <div class="arrow-down">
                    <img src="../../assets/arrow-down.png" />
                </div>
            </div>
        </header>
        <ul v-if="!tabValue"  class="mes-tab">
            <li>
                <a href="/dataset.html" v-if="language === 'zh-CN'">其他开源数据集索引</a>
                <a href="/en/dataset.html" v-else>Other Datasets</a>
            </li>
            <li><img src="../../assets/arrow.png"></li>
            <li>{{mes}}</li>
        </ul>
        <div class="tabs" :class="tabsFix ? 'tabs-fix' : ''" v-if="tabValue">
            <span v-for="(item, index) in tabs" :key="index" :class="item.value === tabValue ? 'tabs-active' : ''" @click="onClickTab(item.path)">{{item.label}}</span>
        </div>
        <list-component v-if="tabValue === 1" :language="language"></list-component>
        <component :is="layout" v-else></component>

        <footer-component :language="language"></footer-component>
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
            language: 'zh-CN',
            tabValue: 1,
            tabsFix: false,
            totalTabs: [
                {path: '/', label: '千言数据集', value: 1, language: 'zh-CN'},
                {path: '/dataset.html', label: '其它开源数据集索引', value: 2, language: 'zh-CN'},
                {path: '/en/', label: 'LUGE Datasets', value: 1, language: 'en-US'},
                {path: '/en/dataset.html', label: 'Other Datasets', value: 2, language: 'en-US'}
            ],
            mes: '',
            operatingInfo: [
                {
                    id: 1,
                    title: '百度联合中国计算机学会、中国中文信息学会共同发布“千言”计划',
                    description: '百度联合中国计算机学会、中国中文信息学会共同发布“千言”计划',
                    url: 'https://mp.weixin.qq.com/s/oBMCHkUn4emTToT8014Mdg'
                },
                {
                    id: 2,
                    title: '小布助手在百度飞桨实体链指比赛中的实践应用',
                    description: '小布助手在百度飞桨实体链指比赛中的实践应用',
                    url: 'https://mp.weixin.qq.com/s/-kp7ekMBWDEQJ-kf0ER76g'},
                {
                    id: 3,
                    title: 'ACL 2019论文分享: 让机器有自主意识的和人类对话',
                    description: 'ACL 2019论文分享: 让机器有自主意识的和人类对话',
                    url: 'https://mp.weixin.qq.com/s/uyNlO97QQ4nQpFjYNOVceg'
                },
                {
                    id: 4,
                    title: 'NLP青年学者深度对话：探寻NLP未来之路',
                    description: 'NLP青年学者深度对话：探寻NLP未来之路',
                    url: 'https://mp.weixin.qq.com/s/sKHT5j4ekCsRQR4m9AByxQ'
                }
            ],
            isShowAll: false
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
            return 'Layout';
        },
        tabs() {
            return this.totalTabs.filter(item => item.language === this.language);
        }
    },
    beforeRouteEnter(to, from, next) {
        console.log('path: ', to.path)
        next(vm => {
            vm.handleChangeTab(to.path);
        });
    },
    mounted() {
        const path = this.$page.path;
        if (path === '/') {
            this.language = 'zh-CN';
        } else {
            this.language = 'en-US';
        }
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
                    this.language = 'en-US';
                    break;
                case 'zh-CN':
                    path = '/';
                    this.language = 'zh-CN';
                    break;
            }
            if (this.$router.currentRoute.path !== path) {
                this.$router.push(path)
            }
        },
        handleChangeTab(path) {
            let hasTab = false;
            this.totalTabs.forEach(item => {
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
        },
        showMoreInfo() {
            this.isShowAll = !this.isShowAll
            let header = document.getElementsByClassName('header-container')[0]
            let operatingBox = document.getElementsByClassName('header-operating')[0]
            const {height} = window.getComputedStyle(header)
            console.log(height)
            if (this.isShowAll) {
                header.style.height = parseInt(height, 10) - 162 + 'px';
                operatingBox.style.height = '300px'
            } else {
                header.style.height = parseInt(height, 10) + 162 + 'px';
                operatingBox.style.height = '138px'
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
    background-color #000
    background-image url(./../../assets/headerbg1.png)
    background-position center
    background-size cover
    color #fff

header
    height 100vh
    position relative
    overflow hidden
    .header-container
        height calc(100% - 218px)
        display flex
        justify-content center
        align-items center
        .header-content
            margin 0 107px
            text-align center
            font-size 14px
            max-width 855px
            img
                margin-bottom 20px
            p
                line-height 26px
                margin auto
                &:nth-of-type(1)
                    font-weight 300
                    margin-bottom 10px
                &:nth-of-type(2)
                    font-size 20px
                    line-height 2
            div
                // text-align center
                margin-top 20px
                a:nth-of-type(1)
                    margin-right 50px
            .git-link
                display none


    .header-menu
        height 42px
        margin 20px 107px 0 107px
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
                color rgba(255, 255, 255, .5)
                &:hover
                    cursor pointer
            .current-language
                color #fff
        .small-screen
            display none

    .header-operating
        margin 0 85px 85px
        display grid
        grid-template-columns repeat(4, 1fr)
        .operating-container
            padding 0 20px
            position relative
            .title
                color #fff
                opacity 0.5
                margin-bottom 5px
                text-overflow -o-ellipsis-lastline
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp 1
                line-clamp 1
                -webkit-box-orient vertical
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
    .show-more
        display none

.btn
    height 40px
    border 1px solid #fff
    color #fff
    line-height 38px
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
        background-image url(./../../assets/headerbg2.png)
        background-position center
        background-size cover
    header
        .header-container
            transition all .5s ease-in-out
            .header-content
                margin 0 1.5rem
                p
                    margin-bottom 0!important
                    &:nth-of-type(2)
                        font-size 16px
                div
                    margin-left -2rem
                    margin-right -2rem
                a:first-of-type
                    margin-right 10px!important
                .git-link
                    display flex
                    justify-content center
        .header-menu
            margin 12px 16px 0 16px
            .small-screen
                display block
            .dropbtn
                height 38px
                width 100px
                color white
                font-size 16px
                padding 4px
                border none
                cursor pointer
                background-color transparent
                box-sizing border-box
                text-align center
                display flex 
                justify-content center
                align-items center
                img
                    margin-right 0
            .dropdown
                position relative
                display inline-block
                
            .dropdown-content
                display none
                position absolute
                width 100px
                box-shadow 0px 8px 16px 0px rgba(0,0,0,0.2)
                background-color #111
                color #fff
                text-align center
            .dropdown-content a
                color #fff
                background-color #111
                padding 12px 16px
                text-decoration none
                display block
                border-top 1px solid rgba(255, 255, 255, .2)
            .dropdown-content
                a:hover
                    color #1590FF

            .dropdown:hover .dropdown-content
                display: block;
            .dropdown:hover .dropbtn {
                background-color: #111;
            }
        .btn
            font-size 12px
            height 28px
            line-height 26px
            width 140px
        .header-operating
            width calc(100% - 46px)
            height 138px
            margin 0 23px
            display block
            overflow scroll
            // transition all .5s ease-in-out
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
                left 0
                top 70px
                width 100%
                height 1px
                background #fff
                transform scaleY(0.5)
        .show-more
            display flex
            justify-content center 
            align-items center
            // text-align center
            .arrow-down, .arrow-up
                img
                    width 16px
            &:hover
                cursor pointer
    .tabs
        display flex
        justify-content space-around
        span 
            margin-right 0
    .big-screen
        display none !important
</style>
