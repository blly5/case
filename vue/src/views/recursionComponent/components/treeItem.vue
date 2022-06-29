<template>
  <div>
    <p v-for="(item, index) in data" :key="index">
      <div class="content">
        <input @click.stop="nodeClick(item)" :checked="item.check" type="checkbox"/>
        {{ item.label }}
      </div>
      <treeItem v-if="item.child" :data="item.child" style="padding-left: 20px;" />
    </p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'treeItem',
    props: {
      data: []
    },
    setup() {
      let nodeClick = (item) => {
        
      };
      return { nodeClick };
    }
  })
</script>

<style lang="less" scoped>
  .content {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 30px;
    > input {
      margin-right: 5px;
    }
  }
</style>
