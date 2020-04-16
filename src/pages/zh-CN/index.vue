<template>
  <div class="main">
    <div class="main__description">
      <h1>业务组件快速自定义复用</h1>
      <p>为前端开发人员准备的能够实现业务组件在各项目中快速复用，灵活自定义</p>
    </div>
    <div class="main__description">
      <h1>规划蓝图</h1>
      <img src="@/assets/blueprint.png" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  .main__description {
    padding-top: 20px;
    text-align: center;
    h1 {
      font-size: 34px;
      margin: 0;
      line-height: 48px;
      color: #555;
    }
    p {
      font-size: 18px;
      line-height: 28px;
      color: #888;
      margin: 10px 0 5px;
    }
    img {
      margin-top: 10px;
      width: 840px;
    }
  }
}
</style>
