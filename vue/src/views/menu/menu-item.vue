<template>
  <!-- 目录 -->
  <div>

  </div>

  <!-- 菜单 -->
  <div>
  
  </div>

  <template v-for="(item, index) in props" :key="index">
    <menuItem :menuData="item" />
  </template>
</template>

<script lang="ts">
  export default {
    name: 'menuItem',
  }
</script>

<script setup lang="ts">
  const props = [
    {
      label: '123'
    }
  ]
</script>