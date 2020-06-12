<!-- themePath/layouts/GlobalLayout.vue -->
<template>
    <div id="global-layout">
        <header class="bk-dark">
            <video autoplay loop muted>
                <source src="./../../assets/bk.mp4" type="video/mp4"></source>
            </video>
            <div>
                <div class="header-content">
                    <h1>NLP-PROGRESS</h1>
                    <h2>Repository to trasck the progress in Natural Language Processing (NLP), including the datasets and the current state-of-the-art for the most common NLP tasks.</h2>
                    <a class="btn" href="#">
                        <i class="iconfont icon-github"></i>
                        View on GitHub
                    </a>
                </div>
            </div>
        </header>
        <div class="tabs" :class="tabsFix ? 'tabs-fix' : ''" v-if="tabValue">
            <span v-for="(item, index) in tabs" :key="index" :class="item.value === tabValue ? 'tabs-active' : ''" @click="onClickTab(item.path)">{{item.label}}</span>
        </div>
        <component :is="layout"></component>
        <footer class="bk-dark">
            <div class="footer-content">
                <p>Published with GitHub Pages</p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabValue: 1,
            tabsFix: false,
            tabs: [
                {path: '/', label: '数据集', value: 1},
                {path: '/list/list.html', label: '榜单', value: 2}
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
    padding-bottom 80px
    min-height 100%
    footer
        position absolute
        left 0
        width 100%
        bottom 0
        z-index 2

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
    h1
        line-height 64px
        font-size 48px
        margin-bottom 6px
    h2
        font-size 14px
        line-height 26px
        margin auto
        margin-bottom 20px
        width 600px
    video
        width 100%
        height 100%
        position absolute
        left 50%
        top 50%
        transform translate3d(-50%, -50%, 0)
        width 1440px
        height 288px
footer
    .footer-content
        overflow hidden
        max-width  800px
        margin auto
        padding 29px 20px;
        display flex
        justify-content space-between
        a:hover
            text-decoration underline
        p
            margin 0
            line-height 22px
            &:first-of-type
                margin-right 20px
.btn
    height 40px
    border 1px solid #fff
    color #fff
    line-height 38px
    padding 0 20px
    display inline-block
    border-radius 20px
    // transition all .3s ease-in
    font-weight 400
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
    footer .footer-content p
        font-size 12px
    header
        .header-content
            width 100%
            box-sizing border-box
            padding 0 1.5rem
            font-size 12px
        h1
            font-size 18px
            line-height 28px
        h2
            font-size 12px
            width 100%
        .btn
            font-size 12px
            height 28px
            line-height 26px
            padding 0 10px

</style>
