<template>
  <div class="pagination">
    <h1>{{startNumAndEndNum}}---当前页码{{pageNo}}</h1>
    <button :disabled="startNumAndEndNum.start === 1" @click="$emit('getPageNo', pageNo - 1)">上一页</button>
    <button v-if="startNumAndEndNum.start > 1" @click="$emit('getPageNo', 1)" :class="{active: pageNo === 1}">1</button>
    <button v-if="startNumAndEndNum.start > 2">...</button>

    <!-- 中间部分 -->
    <template v-for="(page, index) in startNumAndEndNum.end">
      <button v-if="page >= startNumAndEndNum.start" :key="index" @click="$emit('getPageNo', page)" :class="{active: page === pageNo}">{{page}}</button>
    </template>
    
    <button v-if="startNumAndEndNum.end < pageTotal - 1">...</button>
    <button v-if="startNumAndEndNum.end < pageTotal" @click="$emit('getPageNo', pageTotal)" :class="{active: pageNo === pageTotal}">{{pageTotal}}</button>
    <button :disabled="pageNo === pageTotal" @click="$emit('getPageNo', pageNo + 1)">下一页</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ['pageNo', 'pageSize', 'total', 'continues'],
  computed: {
    // 总共有多少页
    pageTotal () {
      return Math.ceil(this.total / this.pageSize)
    },
    startNumAndEndNum () {
      let {pageNo, pageSize, total, continues, pageTotal} = this
      let start = 0
      let end = 0
      if (total < continues || total === continues) {
        start = 1
        end = continues
      } else {
        start = pageNo - parseInt(continues / 2)
        end = pageNo + parseInt(continues / 2)
        if (start < 1) {
          start = 1
          end = continues
        } 
        if (end > pageTotal) {
          end = pageTotal
          start = pageTotal - continues + 1
        }
      }
      return {start, end}
    }
  }
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
.active{
  background: skyblue;
}
</style>