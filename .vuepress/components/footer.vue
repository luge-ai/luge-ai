<!-- themePath/layouts/GlobalLayout.vue -->
<template>
    <footer ref="footerRef">
        <section>
            <div class="footer-top">
                <div>
                    <div class="title">关于我们</div>
                    <span>“千言”是百度联合中国计算机学会自然语言处理专委会、中国中文信息学会评测工作委员会共同发起的，由来自国内多家高校和企业的数据资源研发者共同建设的中文开源数据集及评测项目。</span>
                </div>
                <!-- <div>
                    <div class="title">指导委员会</div>
                    <span><a href="http://www.baidu.com" target="_blank">中国计算机学会</a></span>
                    <span><a href="http://www.baidu.com" target="_blank">中国中文信息学会</a></span>
                </div>  -->
                <div>
                    <div class="title">联系我们</div>
                    <span>luge_ai@126.com</span>
                </div>
                <div class="code">
                    <div class="title">扫码加入“千言”交流群</div>
                    <img src="../assets/code.png"></img>
                </div>
            </div>
            <div class="footer-bottom">
                <span>免责声明：</span>
                <span>该数据仅供研究、学习用途，禁止商用，使用时请注明数据集作者、出处；该数据集为NLP贡献者资源整理，所有权归原作者所有，如有侵权，请联系删除。</span>
            </div>
        </section>
    </footer>
</template>

<script>
export default {
    methods: {
        computeHeight() {
            const footerDom = this.$refs.footerRef;
            const {height} = window.getComputedStyle(footerDom);
            document.getElementById('global-layout').style['padding-bottom'] = height;
        }
    },
    mounted() {
        this.computeHeight();
        window.addEventListener('resize', this.computeHeight.bind(this));
    }
};
</script>
<style lang='stylus' scoped>
footer
    position absolute
    left 0
    width 100%
    bottom 0
    z-index 2
    background #071B34;
    color #fff;
    padding: 30px 40px 20px 40px;
    box-sizing border-box;
    section
        max-width 1000px
        width 100%
        margin auto

    span
        font-weight 300
        line-height 24px
        font-size 14px
        display block
    a[href]
        color #fff;
        font-weight 300
        &:hover
            color #0173eb

.footer-top
    display flex
    justify-content space-between
    padding-bottom 20px
    border-bottom 1px solid rgba(255, 255, 255, .2);
    margin-bottom 20px
    > div:first-of-type span
        width 567px
    .title
        margin-bottom 20px
        font-weight 500px
        font-size 20px
        line-height 27px
    .code
        display flex
        flex-direction column
        align-items center
        img 
            width 198px
            margin-top 5px
    span
        margin-bottom 10px
        &:last-of-type
            margin-bottom 0
.footer-bottom
    display flex
    span
        color rgba(255, 255, 255, .5)
    span:first-of-type
        white-space nowrap
        margin-right 10px

@media (max-width: 900px)
    .footer-top,
    .footer-bottom
        flex-direction column
        > div:first-of-type span
            width 100%
        > div:not(:first-of-type) .title
            margin-top 30px
        .code
            margin-top 30px
            align-items flex-start
            .title
                margin-top 10px !important
@media (max-width: 719px)
    footer
        padding-left 32px
        padding-right 32px
</style>
