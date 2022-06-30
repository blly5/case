<template>
  <div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Tree from './components/Tree.vue';

export default defineComponent({
  setup() {
    onMounted(function() {
      console.log(this);
    })
  }
})

</script>