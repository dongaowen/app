<template>
  <div class="main-container">
    <div class="card-container">
      <div class="card-box">
        <div class="ui-card">
          <div class="card-header">1</div>
          <div class="card-body">2</div>
        </div>
      </div>
      <div class="card-box">
        <div class="ui-card">1</div>
      </div>
      <div class="card-box">
        <div class="ui-card">1</div>
      </div>
      <div class="card-box">
        <div class="ui-card">1</div>
      </div>
      <div class="card-box">
        <div class="ui-card">1</div>
      </div>
      <div class="card-box">
        <div class="ui-card">1</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "main",
};
</script>

<style lang="scss" scoped>
.main-container {
  height: 100%;
  box-sizing: border-box;
  padding: 16px;
  background-color: #f5f5f5;
  overflow: hidden;
  min-width: 1000px;
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #333;
    height: 100%;
    box-sizing: border-box;
    padding: 6%;
    .card-box {
      width: 28%;
      border-radius: 10px;
      background: #ccc;
      &:nth-child(-n+3) {
        color: red;
        margin-bottom: 6%;
      }
      &:hover {
        box-shadow: 10px 10px 5px #888888;
      }
      .ui-card {
        height: 0;
        padding: 33%;
        // .card-header {
        //   height: 25%;
        //   background: red;
        // }
        // .card-body {
        //   height: 75%;
        // }
      }
    }
  }
}
</style>
