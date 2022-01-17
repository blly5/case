<template>

  <template v-for="item in props.menuData">
    
  </template>



  <!-- 目录 -->
  <!-- <div v-if="props.menuData?.children">
    <div>📚{{ props.menuData.label }}</div>
  </div> -->

  <!-- 菜单 -->
  <!-- <div v-else>{{ props.menuData.label }}</div>

  <template v-for="(item, index) in props.menuData?.children" :key="index">
    <menuItem :menuData="item" />
  </template>

   -->
</template>

<script lang="ts">
export default {
  name: 'menuItem',
}
</script>

<script setup lang="ts">
const props = defineProps({
  menuData: Object
});
</script>