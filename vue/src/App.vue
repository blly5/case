
<template>
  <tree :data="treeData" />
</template>

<script setup lang="ts">
  import { ref, watch } from "Vue";
  import tree from './components/tree.vue'; 
  const treeData = ref([
    {
      label: 'small',
    }
  ]);

  watch(treeData, (val) => {
    console.log(val);
  })



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
