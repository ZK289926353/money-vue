<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money" />
      记账页
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="tag" />
      标签页
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="chart" />
      统计页
    </router-link>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";
nav {
  @extend %outerShadow;
  display: flex;

  flex-direction: row;
  font-size: 12px;
  > .item {
    width: 33.333333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2px 0;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  > .item.selected {
    color: $color-highlight;
  }
}
</style>