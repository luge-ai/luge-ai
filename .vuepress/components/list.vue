<template>
    <div class="list-page">
        <section class="list-center">
            <h2>评测榜单</h2>
            <p>开源数据集网站收集了一系列开放的中文情感分析数据集，并对数据集进行了统一的整理以及提供了统一的测评方式，期望从多个任务、多个领域的角度对模型选练效果进行综合评价。该开源数据集旨在为研究人员和开发者提供学术和技术交流平台，进一步提升情感分析和研究水平，推动自然语言和人工智能领域技术的应用和发展。</p>
            <p>为了给大家提供***，我们从数据集中选取了***个topic，并进行了***的评测，最终选评出***榜单，供大家参考。</p>
            <div class="list-box">
                <a class="list-box-item" v-for="(item, index) in boxData" :href="item.link" target="_blank">
                    <div>
                        <img :src="item.img">
                    </div>
                    <div class="item-box-item-content">
                        <p>{{item.title}}</p>
                        <p>{{item.desc}}</p>
                    </div>
                </a>
            </div>
        </section>
        <section class="list-center">
            <h2>榜单由以下作者共同整理</h2>
            <h3>数据集作者（以下作者按照拼音排序）</h3>
            <table width="100%">
                <tr v-for="(row, rowIndex) in tableData">
                    <td v-for="(column, columnIndex) in row" width="33.33333%">
                        <div>
                            <span>{{column.name}}</span>
                            <span>{{column.unit}}</span>
                        </div>
                    </td>
                </tr>
            </table>
        </section>
        <section class="join-section">
            <section class="list-center">
                <h2>加入我们</h2>
                <p>该榜单由***按照***规则进行了整理，欢迎您的加入，共同维护中文NLP技术的发展</p>
                <h3>榜单评测规则：</h3>
                <div class="rule">
                    <span class="rule-item" v-for="(item, index) in ruleData">{{item}}</span>
                </div>
            </section>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            boxData: [
                {
                    title: '情感分析',
                    desc: '开源数据集网站收集了一系列开放的中文情感分析数据集，并对数据集进行了统一的整理以及提供了统一。',
                    img: require('../assets/sentiment-analysis.png'),
                    link: 'http://www.baidu.com'
                },
                {
                    title: '阅读理解',
                    desc: '开源数据集网站收集了一系列开放的中文情感分析数据集，并对数据集进行了统一的整理以及提供了统一。',
                    img: require('../assets/mrc.png'),
                    link: 'http://www.baidu.com'
                },
                {
                    title: '对话',
                    desc: '开源数据集网站收集了一系列开放的中文情感分析数据集，并对数据集进行了统一的整理以及提供了统一。',
                    img: require('../assets/conversation.png'),
                    link: 'http://www.baidu.com'
                },
                {
                    title: '短文本匹配',
                    desc: '开源数据集网站收集了一系列开放的中文情感分析数据集，并对数据集进行了统一的整理以及提供了统一。',
                    img: require('../assets/text-match.png'),
                    link: 'http://www.baidu.com'
                },
                {
                    title: '语义解析',
                    desc: '开源数据集网站收集了一系列开放的中文情感分析数据集，并对数据集进行了统一的整理以及提供了统一。',
                    img: require('../assets/semantic-parsing.png'),
                    link: 'http://www.baidu.com'
                },
                {
                    title: '翻译同传',
                    desc: '开源数据集网站收集了一系列开放的中文情感分析数据集，并对数据集进行了统一的整理以及提供了统一。',
                    img: require('../assets/translate.png'),
                    link: 'http://www.baidu.com'
                },
                {
                    title: '信息抽取',
                    desc: '开源数据集网站收集了一系列开放的中文情感分析数据集，并对数据集进行了统一的整理以及提供了统一。',
                    img: require('../assets/information-extraction.png'),
                    link: 'http://www.baidu.com'
                }
            ],
            tableData: [
                [{name: '张三dasd', unit: 'dasdasd'}, {name: '张三', unit: 'dasdasd'}, {name: '张三', unit: 'dasdasd'}],
                [{name: '张三', unit: 'dasdasd'}, {name: '张三', unit: 'dasdasd'}, {name: '张三', unit: 'dasdasd'}],
                [{name: '张三', unit: 'dasdasd'}, {name: '张三', unit: 'dasdasd'}, {name: '张三', unit: 'dasdasd'}]
            ],
            ruleData: [
                '规则文案规则文案规则文案规则16字',
                '规则文案规则文案规则文案规则文案',
                '规则文案规则文案规则文案规则文案'
            ]
        };
    }
};
</script>
<style lang="stylus" scoped>
.list-page
    width 100%
    padding 10px 40px 0 40px
    box-sizing border-box
.list-center
    max-width 1000px
    width 100%
    margin auto
.list-box
    display flex
    flex-wrap wrap
    justify-content space-between
    margin 30px 0 70px 0
    &-item
        width calc(50% - 10px)
        padding 20px 30px 20px 20px
        margin-bottom  20px
        display flex
        text-decoration none!important
        color #666
        background #fff
        border 1px solid #E6ECF0
        border-radius 10px
        box-sizing border-box
        &:hover
            cursor pointer
            border 1px solid #0173EB
            box-shadow: 0 0 20px 0 rgba(0, 0, 0, .1)
            > div:last-of-type p:first-of-type
                color #0173EB
        > div:first-of-type
            width 60px
            padding-top 4px
            img
                width 40px
        > div:last-of-type
            flex 1
            p:first-of-type
                font-weight 500
                color #000
                font-size 20px
                margin-bottom 10px
table
    display table
    table-layout fixed
    div
        display flex
        span:first-of-type
            min-width 70px
            margin-right 10px
            font-weight 500
.rule
    counter-reset section
    &-item
        font-size 14px
        background #abb2bb
        height 40px
        line-height 40px
        padding 0 20px 0 48px
        border-radius 20px
        display inline-block
        position relative
        margin-bottom 10px
        margin-right 15px
        text-overflow ellipsis
        overflow hidden
        white-space nowrap
        box-sizing border-box
        max-width 100%
        &::before
            position absolute
            counter-increment section 1
            content counter(section)
            width 28px
            height 28px
            border-radius 100%
            background #fff;
            color #0173EB
            left 10px
            top 6px
            text-align center
            line-height 28px
.join-section
    position relative
    padding-bottom 64px
    padding-top 20px!important
    *
        position relative
    &::before
        content ""
        position absolute
        left -40px
        right -40px
        top 0
        bottom 0
        background-image url(./../assets/join-us.png)
        background-size cover

p
    font-size 15px
    line-height 26px
    margin 0

table
    margin 0 0 60px 0

h2
    font-size 30px
h3
    font-size 20px
h2,
h3
    padding 0!important
    margin 20 0!important
    border none
    background transparent

@media (max-width: 719px)
    .list-page
        padding-left 32px
        padding-right 32px
    .list-box-item
        width 100%
    table
        display block
        table-layout auto

</style>
