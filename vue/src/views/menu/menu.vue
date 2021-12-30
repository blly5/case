<template>
  <menuItem :data="data" />
</template>

<script setup lang="ts">
  import menuItem from './menu-item.vue';
  const data = [
    {
      label: '123',
    }
  ]
</script>
