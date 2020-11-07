
<template>
    <div 
        class="list-view" 
        @scroll="handleScroll">
        <div
            class="list-view-phantom"       
            :style="{
                height: contentHeight
            }"
        >
        </div>
        <div
            ref="content"
            class="list-view-content"
        >
            <div
                class="list-view-item"
                :style="{
                height: itemHeight + 'px'
                }"
                :key = "item + index"
                v-for="(item, index) in visibleData"
            >
                {{ item.value }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'virtualList',
 
    props: {
        list: {
            type: Array,
            required: true
        },
    
        itemHeight: {
            type: Number,
            default: 30
        }
    },
 
    computed: {
        contentHeight() {
            return this.list.length * this.itemHeight + 'px'
        }
    },
 
    mounted() {
        this.updateVisibleData()
    },
 
    data() {
        return {
        visibleData: []
        }
    },
 
    methods: {
        updateVisibleData(scrollTop) {
            scrollTop = scrollTop || 0
            const visibleCount = Math.ceil(this.$el.clientHeight / this.itemHeight)
            // 可显示item的start
            const start = Math.floor(scrollTop / this.itemHeight)
            // 下一屏的end
            const end = start + visibleCount * 2
            // 上一屏幕的start
            const preStartHeigth = scrollTop >= this.$el.clientHeight ? scrollTop - this.$el.clientHeight : 0
            const preStart = Math.floor(preStartHeigth / this.itemHeight)
            this.visibleData = this.list.slice(preStart, end)
            // this.$refs.content.style.webkitTransform = `translate3d(0, ${ start * this.itemHeight }px, 0)`
            this.$refs.content.style.transform = `translate(0, ${ preStart * this.itemHeight }px)`
        },
    
        handleScroll() {
            const scrollTop = this.$el.scrollTop
            this.updateVisibleData(scrollTop)
        }
    }
}

</script>

<style scoped>
    .list-view {
        height: 400px;
        overflow: auto;
        position: relative;
        border: 1px solid #aaa;
    }
 
    .list-view-phantom {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        z-index: -1;
    }
    
    .list-view-content {
        left: 0;
        right: 0;
        top: 0;
        position: absolute;
    }
    
    .list-view-item {
        padding: 5px;
        color: #666;
        line-height: 30px;
        box-sizing: border-box;
    }
</style>