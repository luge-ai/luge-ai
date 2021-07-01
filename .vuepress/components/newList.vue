<template>
    <div class="total-list">
        <div class="total-list-container">
            <div
                :class="`${item.type === 'header' ? 'box box-header': 'box'}`"
                :style="`grid-area: ${item.top || 'auto'} / ${item.left || 'auto'} / ${item.bottom || 'auto'} / ${item.right || 'auto'}`"
                v-for="item in listData"
                :key="item.id">
                {{item.text}}
            </div>
        </div>
        <div class="info">数据集下载以及评测结果提交即将开放</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            listData: [
                { id: 1, text: '任务名', type: 'header', top: 1, bottom: 3, left: 1, right: 4 },
                { id: 2, text: '理解任务', type: 'header', top: 1, bottom: 2, left: 4, right: 7 },
                { id: 3, text: '生成任务', type: 'header', top: 1, bottom: 2, left: 7, right: 10 },
                { id: 4, text: '情感分析', type: 'header', top: 2, bottom: 3, left: 4, right: 5 },
                { id: 5, text: '阅读理解', type: 'header', top: 2, bottom: 3, left: 5, right: 6 },
                { id: 6, text: '语义相似度', type: 'header', top: 2, bottom: 3, left: 6, right: 7 },
                { id: 7, text: '问题生成', type: 'header', top: 2, bottom: 3, left: 7, right: 8 },
                { id: 8, text: '摘要生成', type: 'header', top: 2, bottom: 3, left: 8, right: 9 },
                { id: 9, text: '对话生成', type: 'header', top: 2, bottom: 3, left: 9, right: 10 },
                { id: 10, text: '数据集名称', type: 'header', top: 3, bottom: 4, left: 1, right: 4 },
                { id: 11, text: '评估指标', type: 'header', top: 4, bottom: 5, left: 1, right: 4 },
                { id: 12, text: 'RoBERTa Large（复现）', type: 'header', top: 5, bottom: 6, left: 1, right: 4 },
                { id: 13, text: 'ERNIE 2.0 Large', type: 'header', top: 6, bottom: 7, left: 1, right: 4 },
                { id: 14, text: 'NLPCC14-SC'},
                { id: 15, text: 'DuReader-Robust'},
                { id: 16, text: 'LCQMC'},
                { id: 17, text: 'DuReader-Robust-QG' },
                { id: 18, text: 'LCSTS'},
                { id: 19, text: 'kdConv'},
                { id: 20, text: 'Accurary'},
                { id: 21, text: 'EM/F1'},
                { id: 22, text: 'Accurary' },
                { id: 23, text: 'BLEU-4' },
                { id: 24, text: 'Rouge-L' },
                { id: 25, text: 'BLEU-4' },
                { id: 26, text: '' },
                { id: 27, text: '' },
                { id: 28, text: '' },
                { id: 29, text: '' },
                { id: 30, text: '' },
                { id: 31, text: '' },
                { id: 32, text: '' },
                { id: 33, text: '' },
                { id: 34, text: ''},
                { id: 35, text: '' },
                { id: 36, text: '' },
                { id: 37, text: '' }
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
.total-list
    margin-top 50px
    &-container
        margin-top 10px
        display grid
        .box
            padding 8px
            border 1px solid #ebeef5
            margin-left -1px
            margin-top -1px
            font-size 14px
            &:hover
                background #fafafa
        .box-header
            display flex
            align-items center
            justify-content center
            // color #0000d9
            background #F6F9FC
            font-weight 500
    .info
        text-align center
        margin 10px 0 30px 0
        color rgba(0, 0, 0, .3)
</style>