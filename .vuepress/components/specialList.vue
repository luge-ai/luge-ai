<template>
    <div class="special-list">
        <div class="special-list-container">
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
                { id: 1, text: '任务名', type: 'header', top: 1, bottom: 2, left: 1, right: 2 },
                { id: 7, text: '问题生成', type: 'header', top: 1, bottom: 2, left: 2, right: 3 },
                { id: 8, text: '摘要生成', type: 'header', top: 1, bottom: 2, left: 3, right: 4 },
                { id: 9, text: '对话生成', type: 'header', top: 1, bottom: 2, left: 4, right: 5 },
                { id: 10, text: '数据集名称', type: 'header', top: 2, bottom: 3, left: 1, right: 2 },
                { id: 11, text: '评估指标', type: 'header', top: 3, bottom: 4, left: 1, right: 2 },
                { id: 12, text: 'RoBERTa Large（复现）', type: 'header', top: 4, bottom: 5, left: 1, right: 2 },
                { id: 13, text: 'ERNIE 2.0 Large', type: 'header', top: 5, bottom: 6, left: 1, right: 2 },
                { id: 17, text: 'DuReader-Robust-QG' },
                { id: 18, text: 'LCSTS'},
                { id: 19, text: 'kdConv'},
                { id: 23, text: 'BLEU-4' },
                { id: 24, text: 'Rouge-L' },
                { id: 25, text: 'BLEU-4' },
                { id: 26, text: '' },
                { id: 27, text: '' },
                { id: 28, text: '' },
                { id: 29, text: '' },
                { id: 30, text: '' },
                { id: 31, text: '' }
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
.special-list
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
            font-size 15px
    .info
        text-align center
        margin 10px 0 30px 0
        color rgba(0, 0, 0, .3)
</style>