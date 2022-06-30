<!-- Please remove this file from your project -->
<template>
  <div>
    {{ s }}
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  data(){
    return {
      s: null,
    }
  },
  asyncData() {
    let s = [123, 'abc'];
    return { s };
  },
  mounted() {
    console.log('123', this.s)

  }
}
</script>
