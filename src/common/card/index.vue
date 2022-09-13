<template>
<div class="card-box">
  <el-card 
    class="ui-card">
      <template slot="header">
        <slot name="header"></slot>
      </template>
      <slot></slot>
    </el-card>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
// .card-box {
//   border: 30px solid black;
//   height: 500px;
// }
//   .el-card {
//      .el-card__header {
//       border: none;
//       font-size: 20px;
//       color: #333;
//       font-weight: bold;
//       background-color: #999;
//     }
//     .el-card__body {
//       text-align: center;
//       font-size: 34px;
//       font-weight: bolder;
//       color: #333;
//       height: 100px;
//       background-color: #999;
//     }
//     &:hover {
//       box-shadow: 10px 10px 5px red;
//     }
//   }

</style>