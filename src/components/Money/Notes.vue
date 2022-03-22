<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input
        type="text"
        v-model="value"
        placeholder="在这里添加备注"
      />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class Notes extends Vue {
  value = "";
  onInput(event:KeyboardEvent){
    this.value=(event.target as HTMLInputElement).value;
  }
}
</script>

<style lang="scss" scoped>
.notes {
  background: #f5f5f5;
  display: block;
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>