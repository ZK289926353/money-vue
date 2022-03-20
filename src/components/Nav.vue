<template>
  <div class="nav">
    <router-link to="/money"><Icon name="money" />记账页</router-link>
    |
    <router-link to="/labels"> <Icon name="tag" />标签页 </router-link>
    |
    <router-link to="/statistics"> <Icon name="chart" />统计页</router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid red;
}
</style>