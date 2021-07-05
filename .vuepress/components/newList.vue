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
                { id: 1, text: '排名', type: 'header', top: 1, bottom: 5, left: 1, right: 2 },
                { id: 2, text: '模型名', type: 'header', top: 1, bottom: 5, left: 2, right: 3 },
                { id: 3, text: '平均分', type: 'header', top: 1, bottom: 5, left: 3, right: 4 },
                { id: 4, text: '理解任务', type: 'header', top: 1, bottom: 2, left: 4, right: 7 },
                { id: 5, text: '生成任务', type: 'header', top: 1, bottom: 2, left: 7, right: 10 },
                { id: 6, text: '情感分析', type: 'header', top: 2, bottom: 3, left: 4, right: 5 },
                { id: 7, text: '阅读理解', type: 'header', top: 2, bottom: 3, left: 5, right: 6 },
                { id: 8, text: '语义相似度', type: 'header', top: 2, bottom: 3, left: 6, right: 7 },
                { id: 9, text: '问题生成', type: 'header', top: 2, bottom: 3, left: 7, right: 8 },
                { id: 10, text: '摘要生成', type: 'header', top: 2, bottom: 3, left: 8, right: 9 },
                { id: 11, text: '对话生成', type: 'header', top: 2, bottom: 3, left: 9, right: 10 },
                { id: 12, text: 'NLPCC14-SC', type: 'header' },
                { id: 13, text: 'DuReader-Robust', type: 'header' },
                { id: 14, text: 'LCQMC', type: 'header' },
                { id: 15, text: 'DuReader-Robust-QG', type: 'header' },
                { id: 16, text: 'LCSTS', type: 'header' },
                { id: 17, text: 'KdConv', type: 'header' },
                { id: 18, text: 'Accurary', type: 'header' },
                { id: 19, text: 'EM/F1', type: 'header' },
                { id: 20, text: 'Accurary', type: 'header' },
                { id: 21, text: 'BLEU-4', type: 'header' },
                { id: 22, text: 'Rouge-L', type: 'header' },
                { id: 23, text: 'BLEU-4', type: 'header' },
                { id: 24, text: '1' },
                { id: 25, text: 'ERNIE 2.0 Large' },
                { id: 26, text: '54.41' },
                { id: 27, text: '84.36' },
                { id: 28, text: '51.20/67.96' },
                { id: 29, text: '87.90' },
                { id: 30, text: '39.30' },
                { id: 31, text: '41.38' },
                { id: 32, text: '13.94' },
                { id: 33, text: '2' },
                { id: 34, text: 'RoBERTa Large'},
                { id: 35, text: '53.99' },
                { id: 36, text: '83.56' },
                { id: 37, text: '51.10/67.18' },
                { id: 38, text: '87.40' },
                { id: 39, text: '37.10' },
                { id: 40, text: '40.98' },
                { id: 41, text: '15.75' }
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
            display flex
            align-items center
            justify-content center
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