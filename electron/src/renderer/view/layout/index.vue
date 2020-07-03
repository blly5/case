<template>
  <div class="layout">
    <menu-bar></menu-bar>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import menuBar from '@/components/menuBar';

export default {
  components: {
    menuBar
  },
  methods: {
    test(link) {
     this.$electron.remote.dialog.showOpenDialog()
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/reset';
.layout {
  position: relative;
  .container {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 930px;
  }
}
</style>
