<template>
  <menuItem :menuData="menuData" />
</template>

<script setup lang="ts">
  import menuItem from './menu-item.vue';
  import * as Router from 'vue-router';
  const menuData = Router.useRouter().getRoutes();
</script>
