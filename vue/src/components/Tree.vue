<template>
  <div v-for="(item, index) in data" :key="index">
    <div>{{ item.label }}</div>
    <button @click="add(item)">+</button>
    <div style="padding-left: 20px;" v-if="item.children" >
      <Tree :data="item.children" />
    </div>
  </div>
</template>

<script setup>

import { ref, defineComponent, onMounted } from "vue";
import caseMenu from '../components/caseMenu.vue';

const props = defineProps({
  data: Array
});

const add = (item) => {
    item.push({
      label: '123'
    })
}

</script>

<style>
</style>