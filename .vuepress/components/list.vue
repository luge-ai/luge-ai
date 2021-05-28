<template>
    <div class="list-page">
        <section class="list-center">
            <h2 v-if="language === 'zh-CN'">简介</h2>
            <h2 v-else>Introduction</h2>
            <p :class="isShowAll ? '' : 'introduction'" v-if="language === 'zh-CN'">
                数据集是推动自然语言处理技术进步的基石。目前的许多技术研发仅关注模型在单一数据集上的效果，然而自然语言处理技术在大规模产业化的应用中，面临着多领域、多场景等诸多挑战。因此，我们亟需更加全面的数据集合以应对这些挑战。千言项目针对每个自然语言处理问题，均收集和整理多个开源数据集，进行统一的处理并提供统一的测评方式。千言项目期望从准确性、泛化性和鲁棒性等多角度对模型效果进行综合评价。目前，千言项目已经针对8个任务，汇集了来自11所高校和企业的23个开源数据集。未来，希望有更多的数据集作者能够参与共建千言项目，共同推动中文信息处理技术的进步，建设世界范围的中文信息处理影响力。
            </p>
            <p :class="isShowAll ? '' : 'introduction'" v-else>
                Datasets are the cornerstone of NLP advances. Most current research focuses on models’ performance on a single general-purpose dataset, while large-scale industrial application of NLP brings domain- and scenario-specific challenges. A more comprehensive collection of data resources is urgently needed. Hence we have LUGE, which collects a wide range of open-source datasets for different NLP tasks. For each task we convert relevant datasets to unified format and provide unified metrics. LUGE aims at comprehensive evaluation that measures models’ accuracy, generalization and robustness. Until now, for 8 tasks we have 23 datasets from 11 academic or industrial organizations. We hope more dataset authors would join us to contribute to Chinese NLP and expand its influence worldwide.
            </p>
            <span class="show-all" @click="handleShowAll" v-if="language === 'zh-CN'">{{ isShowAll ? '收起详情' : '展开全文' }}</span>
            <span class="show-all" @click="handleShowAll" v-else>{{ isShowAll ? 'Pack Up' : 'View More' }}</span>
            <div class="list-box">
                <a class="list-box-item" :key="item.title" v-for="item in boxData" :href="item.link" target="_blank">
                    <div>
                        <img :src="item.img">
                    </div>
                    <div class="item-box-item-content" v-if="language === 'zh-CN'">
                        <p>{{item.zhTitle}}</p>
                        <p>{{item.zhDesc}}</p>
                    </div>
                    <div class="item-box-item-content" v-else>
                        <p>{{item.enTitle}}</p>
                        <p>{{item.enDesc}}</p>
                    </div>
                </a>
            </div>
        </section>
        <section class="list-center">
            <h3 v-if="language === 'zh-CN'">数据集作者（以下作者按照拼音排序）</h3>
            <h3 v-else>Contributors of LUGE from 11 Organizations</h3>
            <table width="100%" class="list-table">
                <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
                    <td v-for="(column, columnIndex) in row" width="33.33333%" :key="columnIndex">
                        <div v-if="language === 'zh-CN'">
                            <span>{{column.zhName}}</span>
                            <span>{{column.zhUnit}}</span>
                        </div>
                        <div v-else>
                            <span>{{column.enName}}</span>
                            <span>{{column.enUnit}}</span>
                        </div>
                    </td>
                </tr>
            </table>
            <ul class="list-display" v-if="language === 'zh-CN'">
                <li v-for="(val, valIndex) in list" :key="valIndex">
                    <span>{{val.zhName}}</span>
                    <span>{{val.zhUnit}}</span>
                </li>
            </ul>
            <ul class="list-display-en" v-else>
                <li v-for="(val, valIndex) in list" :key="valIndex">
                    <div>{{val.enName}}</div>
                    <div>{{val.enUnit}}</div>
                </li>
            </ul>
        </section>
        <section class="join-section">
            <section class="list-center" v-if="language === 'zh-CN'">
                <h2>加入我们</h2>
                <p>我们希望有更多的数据集作者能够参与共建千言项目，共同推动中文信息处理技术的进步，建设世界范围的中文信息处理影响力。未来3年，我们希望面向20个任务，收集100个中文自然语言处理数据集。</p>
                <h3>希望您能够与我们联系：</h3>
                <div class="rule">
                    <span class="rule-item" v-for="(item, index) in zhRuleData" :key="index">{{item}}</span>
                </div>
            </section>
            <section class="list-center" v-else>
                <h2>Join Us</h2>
                <p>We sincerely invite more authors to join us in developing LUGE and contributing to Chinese NLP. In the next 3 years, we plan to collect no less than 100 Chinese datasets for over 20 NLP tasks.</p>
                <h3>You are more than welcomed to contact us if you are interested in：</h3>
                <div class="rule">
                    <span class="rule-item" v-for="(item, index) in enRuleData" :key="index">{{item}}</span>
                </div>
            </section>
        </section>
    </div>
</template>
<script>
export default {
    props: {
        language: {
            type: String,
            default: 'zh-CN'
        },
    },
    data() {
        return {
            boxData: [
                {
                    zhTitle: '情感分析',
                    enTitle: 'Sentiment Analysis',
                    zhDesc: '针对句子级情感分类、评价对象级情感分类和观点抽取三个子任务，收集和整理了ChnSentiCorp、NLPCC14-SC、SemEval16-ABSA、COTE四个数据集。',
                    enDesc: 'Three subtasks: sentence-level sentiment classification, object-level sentiment classification, and opinion extraction. Four datasets: ChnSentiCorp, NLPCC14-SC, SemEval16-ABSA, and COTE.',
                    img: require('../assets/sentiment-analysis.png'),
                    link: 'https://aistudio.baidu.com/aistudio/competition/detail/50/?isFromLUGE=TRUE'
                },
                {
                    zhTitle: '阅读理解',
                    enTitle: 'Machine Reading Comprehension',
                    zhDesc: '针对抽取式阅读理解和观点式阅读理解两个子任务，收集和整理了DuReader_robust、DuReader_yesno两个数据集。',
                    enDesc: 'Two subtasks: extractive reading comprehension and opinion reading comprehension. Two datasets: DuReader_robust and DuReader_yesno.',
                    img: require('../assets/mrc.png'),
                    link: 'https://aistudio.baidu.com/aistudio/competition/detail/49/?isFromLUGE=TRUE'
                },
                {
                    zhTitle: '开放域对话',
                    enTitle: 'Dialogue',
                    zhDesc: '针对多种场景的对话任务：包括网络日常对话，情感对话，知识对话和有目标的开放域对话等任务，收集和整理了来自工业界和学术界的七个对话数据集。',
                    enDesc: 'The subtasks for multiple scenarios: including daily conversation, emotional dialogues, knowledge-driven dialogues, and conversational recommendation. Seven dialogue data sets from industry and academia have been collected.',
                    img: require('../assets/conversation.png'),
                    link: 'https://aistudio.baidu.com/aistudio/competition/detail/48/?isFromLUGE=TRUE'
                },
                {
                    zhTitle: '文本相似度',
                    enTitle: 'Text Similarity',
                    zhDesc: '针对多个领域数据和模型鲁棒性的问题，收集和整理了LCQMC, BQ Corpus 和PAWS-X（中文）三个数据集。',
                    enDesc: 'Three datasets targeting multiple domains and robustness: LCQMC, BQ Corpus and PAWS-X (Chinese) were collected.',
                    img: require('../assets/text-match.png'),
                    link: 'https://aistudio.baidu.com/aistudio/competition/detail/45/?isFromLUGE=TRUE'
                },
                {
                    zhTitle: '语义解析',
                    enTitle: 'Semantic Parser',
                    zhDesc: '针对不同的数据库形式和SQL查询语句的复杂度，收集和整理了CSpider、NL2SQL和DuSQL三个数据集。',
                    enDesc: 'Three datasets: CSpider、NL2SQL and DuSQL, that contains different database forms and the complexity of SQL query statements.',
                    img: require('../assets/semantic-parsing.png'),
                    link: 'https://aistudio.baidu.com/aistudio/competition/detail/47/?isFromLUGE=TRUE'
                },
                {
                    zhTitle: '机器同传',
                    enTitle: 'Simultaneous Translation',
                    zhDesc: '机器同传结合了机器翻译、语音识别和语音合成等多种技术，整理了BSTC数据集，包含针对中英、英西两个方向共四项任务。',
                    enDesc: 'This technology combines multiple technologies such as machine translation, speech recognition, and speech synthesis. BSTC dataset provides translation tasks between Chinese and English, and English and Spanish.',
                    img: require('../assets/translate.png'),
                    link: 'https://aistudio.baidu.com/aistudio/competition/detail/44/?isFromLUGE=TRUE'
                },
                {
                    zhTitle: '信息抽取',
                    enTitle: 'Information Extraction',
                    zhDesc: '针对关系抽取和事件抽取两个子任务，收集和整理了DuIE和DuEE两个数据集。',
                    enDesc: 'Two subtasks: relation extraction and event extraction. Two data sets: DuIE and DuEE.',
                    img: require('../assets/information-extraction.png'),
                    link: 'https://aistudio.baidu.com/aistudio/competition/detail/46/?isFromLUGE=TRUE'
                },
                {
                    zhTitle: '实体链指',
                    enTitle: 'Entity Linking',
                    zhDesc: '针对实体链指任务，收集和整理了DuEL数据集。',
                    enDesc: 'For the task of entity linking, the DuEL dataset was collected and organized.',
                    img: require('../assets/entity.png'),
                    link: 'https://aistudio.baidu.com/aistudio/competition/detail/83/?isFromLUGE=TRUE'
                }
            ],
            tableData: [
                [
                    {zhName: '陈清财等', enName: 'Prof. Qingcai Chen et al.', zhUnit: '（哈尔滨工业大学(深圳)）', enUnit: '(Harbin Institute of Technology (Shenzhen))'},
                    {zhName: '黄民烈等', enName: 'Prof. Minlie Huang et al.', zhUnit: '（清华大学）', enUnit: '(Tsinghua University)'},
                    {zhName: '刘云峰等', enName: 'Dr. Yunfeng Liu et al.', zhUnit: '（追一科技）', enUnit: '(Zhuiyi Technology)'}
                ],
                [
                    {zhName: '柳厅文等', enName: 'Prof. Tingwen Liu et al.', zhUnit: '（中科院信工所）', enUnit: '(IIE Chinese Academy of Sciences)'},
                    {zhName: '史树明等', enName: 'Dr. Shuming Shi et al.', zhUnit: '（腾讯）', enUnit: '(Tencent)'},
                    {zhName: '尚利锋等', enName: 'Dr Lifeng Shang et al.', zhUnit: '（华为）', enUnit: '(Huawei)'}
                ],
                [
                    {zhName: '谭松波等', enName: 'Dr. Songbo Tan et al.', zhUnit: '（联想）', enUnit: '(Lenovo)'},
                    {zhName: '吴华等', enName: 'Dr. Hua Wu et al.', zhUnit: '（百度）', enUnit: '(Baidu Inc.)'},
                    {zhName: '周明等', enName: 'Dr. Ming Zhou et al.', zhUnit: '（微软）', enUnit: '(Microsoft)'}
                ],
                [
                    {zhName: '赵妍妍等', enName: 'Prof. Yanyan Zhao et al.', zhUnit: '（哈尔滨工业大学）', enUnit: '(Harbin Institute of Technology)'},
                    {zhName: '张岳等', enName: 'Prof. Yue Zhang et al.', zhUnit: '（西湖大学）', enUnit: '(Westlake University)'},
                    {zhName: '', enName: '', zhUnit: '', enUnit: ''}
                ]
            ],
            list: [
                {zhName: '陈清财等', enName: 'Prof. Qingcai Chen et al.', zhUnit: '（哈尔滨工业大学(深圳)）', enUnit: '(Harbin Institute of Technology (Shenzhen))'},
                {zhName: '黄民烈等', enName: 'Prof. Minlie Huang et al.', zhUnit: '（清华大学）', enUnit: '(Tsinghua University)'},
                {zhName: '刘云峰等', enName: 'Dr. Yunfeng Liu et al.', zhUnit: '（追一科技）', enUnit: '(Zhuiyi Technology)'},
                {zhName: '柳厅文等', enName: 'Prof. Tingwen Liu et al.', zhUnit: '（中科院信工所）', enUnit: '(IIE Chinese Academy of Sciences)'},
                {zhName: '史树明等', enName: 'Dr. Shuming Shi et al.', zhUnit: '（腾讯）', enUnit: '(Tencent)'},
                {zhName: '尚利锋等', enName: 'Dr Lifeng Shang et al.', zhUnit: '（华为）', enUnit: '(Huawei)'},
                {zhName: '谭松波等', enName: 'Dr. Songbo Tan et al.', zhUnit: '（联想）', enUnit: '(Lenovo)'},
                {zhName: '吴华等', enName: 'Dr. Hua Wu et al.', zhUnit: '（百度）', enUnit: '(Baidu Inc.)'},
                {zhName: '周明等', enName: 'Dr. Ming Zhou et al.', zhUnit: '（微软）', enUnit: '(Microsoft)'},
                {zhName: '赵妍妍等', enName: 'Prof. Yanyan Zhao et al.', zhUnit: '（哈尔滨工业大学）', enUnit: '(Harbin Institute of Technology)'},
                {zhName: '张岳等', enName: 'Prof. Yue Zhang et al.', zhUnit: '（西湖大学）', enUnit: '(Westlake University)'}
            ],
            zhRuleData: [
                '将您的数据集加入已有任务',
                '增加新的任务并加入您的数据集',
                '欢迎您提出更多的宝贵意见'
            ],
            enRuleData: [
                'publishing your dataset for an existing task',
                'proposing a new task and publishing your dataset',
                'giving any advice'
            ],
            isShowAll: false
        };
    },
    methods: {
        handleShowAll() {
            this.isShowAll = !this.isShowAll;
        }
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
    .show-all
        display none
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
.list-display
    display none
.list-display-en
    display none
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
    .list-box 
        margin-bottom 20px
    .list-box-item
        width 100%
    table
        display none
        table-layout auto
    .list-display
        display block
        padding 0
        margin 0 0 40px 0
        border 1px solid #d5d5d5
        border-radius 10px
        li
            display flex
            list-style none
            margin 0
            padding-left 15px
            height 39px
            line-height 39px
            border-bottom 1px solid #E6ECF0;
            &:last-of-type
                border-bottom none
            span:first-of-type
                white-space nowrap
                text-overflow ellipsis
                overflow hidden
                word-break break-all
                min-width 80px
                font-size 16px
                font-weight bolder
                margin-right 20px
                display  inline-block
            span:last-of-type
                white-space nowrap
                text-overflow ellipsis
                overflow hidden
                word-break break-all
                font-size 14px
                color #333
    .list-display-en
        display block
        padding 0
        margin 0 0 40px 0
        border 1px solid #d5d5d5
        border-radius 10px
        li
            display flex
            flex-direction column
            list-style none
            margin 0
            padding 15px
            height 50px
            border-bottom 1px solid #E6ECF0;
            &:last-of-type
                border-bottom none
            div:first-of-type
                min-width 80px
                font-size 16px
                font-weight bold
            div:last-of-type
                min-width 80px
                font-size 14px
                color #333
    .list-center
        .introduction
            text-overflow -o-ellipsis-lastline
            overflow hidden
            text-overflow ellipsis
            display -webkit-box
            -webkit-line-clamp 3
            line-clamp 3
            -webkit-box-orient vertical
        .show-all
            display inline-block
            color #1590FF
            border-bottom 1px solid #1590FF
            &:hover
                cursor pointer

</style>
