<template>
  <div class="headerWrapper">
    <header class="header" ref="header">
      <div class="container">
        hello
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
  .headerWrapper {
    height: 80px;
  }

  .header {
    height: 80px;
    background-color: #fff;
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 80px;
    z-index: 100;
    position: relative;

    .container {
      height: 100%;
      box-sizing: border-box;
      border-bottom: 1px solid #DCDFE6;
    }
  }
</style>
