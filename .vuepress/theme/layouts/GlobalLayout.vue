<!-- themePath/layouts/GlobalLayout.vue -->
<template>
    <div id="global-layout">
        <header class="bk-dark">
            <video autoplay loop muted>
                <source src="./../../assets/bk.mp4" type="video/mp4"></source>
            </video>
            <div>
                <div class="header-content">
                    <h1>千言</h1>
                    <p>LUGE ( Language Understanding and Generation Evaluation Benchmarks )</p>
                    <p>全面的面向自然语言理解和生成任务的中文开源数据集合，旨在为研究人员带来一站式的数据集浏览、整理、下载和评测的科研体验，共同推动中文信息处理技术的进步。</p>
                    <div style="display: flex; justify-content: center;">
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
        </header>
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
import footerComponent from './../../components/footer';
export default {
    components: {
        listComponent,
        footerComponent
    },
    data() {
        return {
            tabValue: 2,
            tabsFix: false,
            tabs: [
                {path: '/list/list.html', label: '千言数据集', value: 1},
                {path: '/', label: '其它开源数据集索引', value: 2}
            ]
        };
    },
    computed: {
        layout() {
            if (this.$page.path) {
                const layout = this.$page.frontmatter.layout;
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
        window.addEventListener('scroll', () => {
            const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
            if (top > 288) {
                this.tabsFix = true;
            } else {
                this.tabsFix = false;
            }
        });
    },
    methods: {
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
    background #0a1d3a
    color #fff
h1, h2
    background transparent
    border none
    padding 0!important
    margin 0
header
    text-align center
    height 288px
    position relative
    overflow hidden
    > div
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
        h1
            line-height 66px
            font-size 48px
        p
            width 600px
            line-height 26px
            margin auto
            &:nth-of-type(1)
                font-weight 300
                margin-bottom 10px
        div
            text-align center
            margin-top 20px
            a:nth-of-type(1)
                margin-right 50px


    video
        width 100%
        height 100%
        position absolute
        left 50%
        top 50%
        transform translate3d(-50%, -50%, 0)
        width 1440px
        height 288px

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


@media (max-width: 719px)
    header
        .header-content
            width 100%
            box-sizing border-box
            padding 0 1.5rem
            font-size 12px
            h1
                font-size 18px
                line-height 28px
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

</style>
