<template>
  <div id="app">
    <router-view />
  </div>
</template>


<style lang="scss">
@import "~@/assets/styles/reset.scss";
@import "~@/assets/styles/helper.scss";
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  background: #f5f5f5;
  font-size: 16px;
  font-family: $font-hei;
  line-height: 1.5;
}

#app {
  max-width: 500px;
  margin: 0 auto;
}
</style>
