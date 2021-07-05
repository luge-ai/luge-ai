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
                { id: 1, text: '排名', type: 'header', top: 1, bottom: 4, left: 1, right: 2 },
                { id: 2, text: '模型名', type: 'header', top: 1, bottom: 4, left: 2, right: 3 },
                { id: 3, text: '平均分', type: 'header', top: 1, bottom: 4, left: 3, right: 4 },
                { id: 4, text: '问题生成', type: 'header', top: 1, bottom: 2, left: 4, right: 5 },
                { id: 5, text: '摘要生成', type: 'header', top: 1, bottom: 2, left: 5, right: 6 },
                { id: 6, text: '对话生成', type: 'header', top: 1, bottom: 2, left: 6, right: 7 },
                { id: 7, text: 'DuReader-Robust-QG', type: 'header' },
                { id: 8, text: 'LCSTS', type: 'header' },
                { id: 9, text: 'KdConv', type: 'header' },
                { id: 10, text: 'BLEU-4', type: 'header' },
                { id: 11, text: 'Rouge-L', type: 'header' },
                { id: 12, text: 'BLEU-4', type: 'header' },
                { id: 13, text: '1' },
                { id: 14, text: 'ERNIE 2.0 Large' },
                { id: 15, text: '31.54' },
                { id: 16, text: '39.30' },
                { id: 17, text: '41.38' },
                { id: 18, text: '13.94' },
                { id: 19, text: '2' },
                { id: 20, text: 'RoBERTa Large' },
                { id: 21, text: '31.28' },
                { id: 22, text: '37.10' },
                { id: 23, text: '40.98' },
                { id: 24, text: '15.75' }
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
            font-size 15px
    .info
        text-align center
        margin 10px 0 30px 0
        color rgba(0, 0, 0, .3)
</style>