<template>
  <div>
    <Dialog></Dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, getCurrentInstance } from 'vue';

export default defineComponent({
  setup() {
    let instance = getCurrentInstance();
    onMounted(function() {
      console.log(instance);
    })
  }
})

</script>