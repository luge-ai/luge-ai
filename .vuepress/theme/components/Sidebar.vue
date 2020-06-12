<template>
    <div class="sidebar-wrap" :class="sideAbs ? 'sidebar-wrap-absolute' : ''">
        <sidebar :items="col" v-if="col[0] && col[0].children && col[0].children.length"></sidebar>
    </div>
</template>
<script>
import SideBar from '@parent-theme/components/Sidebar.vue';
export default {
    components: {
        sidebar: SideBar
    },
    props: ['items'],
    computed: {
        col() {
            const arr = this.items.map(item => {
                item.title = '目录';
                return item;
            });
            return arr;
        }
    },
    data() {
        return {
            sideAbs: true
        };
    },
    mounted() {
        window.addEventListener('scroll', () => {
            let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
            if (top > (this.$page.hasTab ? 288 : 424)) {
                this.sideAbs = false;
            } else {
                this.sideAbs = true;
            }
        });
    }
};
</script>
<style lang="stylus">
.sidebar-wrap
    left 50%
    margin auto
    top 60px
    width 200px
    padding-right 20px
    position fixed
    bottom 0
    z-index 1
    overflow auto
    transform translateX(430px)
    &-absolute
        position absolute
        top 112px
    .sidebar
        position relative
        border-right 0
        padding-right 0
        background transparent
        display block
        width 100%
        p, ul, ol
            line-height 1.4
        ul, li
            margin 0
        *
            font-size 12px!important
        > .sidebar-links
            padding-bottom 80px;
        .sidebar-heading,
        .sidebar-heading *
            padding 0
            margin 0
            border 0
        .sidebar-heading
            margin-bottom 15px

        .sidebar-group.depth-0
            &::before
                position absolute
                content ""
                left -1px
                bottom 25px
                z-index 1
                background #fff
                width 2px
                height 15px
             > ul
                border-left 1px solid #E6ECF0
                position relative
                & > li:first-of-type > a
                    margin-top 0
        a.sidebar-link
            padding 0!important
            border-left-width 2px
            margin-bottom 15px
            padding-left 12px!important
            &.active
                font-weight 400
            + ul a.active
                position relative
                &::before
                    position absolute
                    content ""
                    height 1000px
                    width 10px
                    background #fff
                    left -2px
                    top  0
                    transform translateY(-100%)
        .sidebar-sub-headers
            padding-left 0!important
            position relative
            li
                a.sidebar-link
                    padding-left 24px!important
                    border-left 2px solid transparent
                a.active
                    border-color $accentColor
        .sidebar-sub-header a
            margin-bottom 10px
            margin-top 0
        .sidebar-sub-header:last-of-type a
            margin-bottom 15px

@media (max-width: 1320px)
    .sidebar-wrap
        display none


</style>
