<template>
    <div class="list-page">
        <section class="list-center">
            <h2>简介</h2>
            <p>数据集是推动自然语言处理技术进步的基石。目前的许多技术研发仅关注模型在单一数据集上的效果，然而自然语言处理技术在大规模产业化的应用中，面临着多领域、多场景等诸多挑战。因此，我们亟需更加全面的数据集合以应对这些挑战。千言项目针对每个自然语言处理问题，均收集和整理多个开源数据集，进行统一的处理并提供统一的测评方式。千言项目期望从准确性、泛化性和鲁棒性等多角度对模型效果进行综合评价。目前，千言项目已经针对7个任务，汇集了来自11所高校和企业的22个开源数据集。未来，希望有更多的数据集作者能够参与共建千言项目，共同推动中文信息处理技术的进步，建设世界范围的中文信息处理影响力。</p>
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
                <p>我们希望有更多的数据集作者能够参与共建千言项目，共同推动中文信息处理技术的进步，建设世界范围的中文信息处理影响力。未来3年，我们希望面向20个任务，收集100个中文自然语言处理数据集。</p>
                <h3>希望您能够与我们联系：</h3>
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
                    desc: '针对句子级情感分类、评价对象级情感分类和观点抽取三个子任务，收集和整理了ChnSentiCorp、NLPCC14-SC、SemEval16-ABSA、COTE四个数据集。',
                    img: require('../assets/sentiment-analysis.png'),
                    link: 'https://aistudio.baidu.com/aistudio/competition/detail/50/?isFromLuge=1'
                },
                {
                    title: '阅读理解',
                    desc: '针对抽取式阅读理解和观点式阅读理解两个子任务，收集和整理了DuReader_robust、DuReader_yesno两个数据集。',
                    img: require('../assets/mrc.png'),
                    link: 'https://aistudio.baidu.com/aistudio/competition/detail/49/?isFromLuge=1'
                },
                {
                    title: '开放域对话',
                    desc: '针对多种场景的对话任务：包括网络日常对话，情感对话，知识对话和有目标的开放域对话等任务，收集和整理了来自工业界和学术界的七个对话数据集。',
                    img: require('../assets/conversation.png'),
                    link: 'https://aistudio.baidu.com/aistudio/competition/detail/48/?isFromLuge=1'
                },
                {
                    title: '文本相似度',
                    desc: '针对多个领域数据和模型鲁棒性的问题，收集和整理了LCQMC, BQ Coupus 和PAWS-X（中文）三个数据集。',
                    img: require('../assets/text-match.png'),
                    link: 'https://aistudio.baidu.com/aistudio/competition/detail/45/?isFromLuge=1'
                },
                {
                    title: '语义解析',
                    desc: '针对不同的数据库形式和SQL查询语句的复杂度，收集和整理了Spider、Text-to-SQL和DuSQL三个数据集。',
                    img: require('../assets/semantic-parsing.png'),
                    link: 'https://aistudio.baidu.com/aistudio/competition/detail/47/?isFromLuge=1'
                },
                {
                    title: '机器同传',
                    desc: '机器同传结合了机器翻译、语音识别和语音合成等多种技术，整理了BSTC数据集，包含针对中英、英西两个方向共四项任务。',
                    img: require('../assets/translate.png'),
                    link: 'https://aistudio.baidu.com/aistudio/competition/detail/44/?isFromLuge=1'
                },
                {
                    title: '信息抽取',
                    desc: '针对关系抽取和事件抽取两个子任务，收集和整理了DuIE和DuEE两个数据集。',
                    img: require('../assets/information-extraction.png'),
                    link: 'https://aistudio.baidu.com/aistudio/competition/detail/46/?isFromLuge=1'
                }
            ],
            tableData: [
                [{name: '陈清财等', unit: '（哈尔滨工业大学(深圳)）'}, {name: '黄民烈等', unit: '（清华大学）'}, {name: '刘云峰等', unit: '（追一科技）'}],
                [{name: '柳厅文等', unit: '（中科院信工所）'}, {name: '史树明等', unit: '（腾讯）'}, {name: '尚利锋等', unit: '（华为）'}],
                [{name: '谭松波等', unit: '（联想）'}, {name: '吴华等', unit: '（百度）'}, {name: '周明等', unit: '（微软）'}],
                [{name: '赵妍妍等', unit: '（哈尔滨工业大学）'}, {name: '张岳等', unit: '（西湖大学）'}, {name: '', unit: ''}]
            ],
            ruleData: [
                '将您的数据集加入已有任务',
                '增加新的任务并加入您的数据集',
                '欢迎您提出更多的宝贵意见'
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
    border-radius 10px
    border 1px solid #E6ECF0
    border-collapse separate
    td
        border-bottom 1px solid #E6ECF0
        border-right 1px solid #E6ECF0
        &:last-of-type
            border-right none
    tr:last-of-type td 
        border-bottom none
    tr:first-of-type
        td:first-of-type
            border-top-left-radius 10px
        td:last-of-type
            border-top-right-radius 10px    
    *
        background #F9FAFB!important
        border: none;
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
        color #fff
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
