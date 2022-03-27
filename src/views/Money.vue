<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
    <div class="notes">
      <FormItem
        @update:value="onUpdateNotes"
        field-name="备注"
        placeholder="在这里请输入备注"
      />
    </div>
    <Tags />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";
import { Component } from "vue-property-decorator";
import store from "@/store/index2";
import recordTypeList from "@/constants/recordTypeList";
import Tabs from "@/components/Tabs.vue";

@Component({
  components: { Tabs ,NumberPad, FormItem, Tags },
  computed: {
    recordList() {
      return store.recordList;
    },
  },
})
export default class Money extends Vue {
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };
  recordTypeList=recordTypeList;
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    store.createRecord(this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  padding: 12px 0;
}
</style>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";
</style>