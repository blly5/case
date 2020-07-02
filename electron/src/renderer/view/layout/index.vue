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
.layout {
    font-family: Georgia, -apple-system, 'Nimbus Roman No9 L', 'PingFang SC', 'Hiragino Sans GB', 'Noto Serif SC', 'Microsoft Yahei', 'WenQuanYi Micro Hei', 'ST Heiti', sans-serif,
    sans-serif;
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
