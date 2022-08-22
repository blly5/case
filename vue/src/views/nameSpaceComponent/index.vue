<template>
  <div>
    <Fruit.Apple></Fruit.Apple>
    <Fruit.Orange></Fruit.Orange>
  </div>
</template>

<script setup>
  import * as Fruit from './components';
  import { onMounted } from 'vue';

  onMounted(() => {
    console.log(Fruit);
  })

</script>