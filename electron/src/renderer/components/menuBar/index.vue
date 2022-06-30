<template>
  <div class="el-menubar">
    <div @click="jumpTo" class="el-menubar-button">Todo</div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route)
  },
  methods: {
    jumpTo(link) {
      console.log(this.$router);
      this.$router.push({ path: 'todo' })
    }

  }
}
</script>

<style lang="scss" scoped >
  .el-menubar{
    display: flex;
    justify-content: center;
    -webkit-app-region: drag;
    -webkit-user-select: none;
    width:70px;
    height: 100vh;
    background: #333;
    color:#fff;
    .el-menubar-button {
      &:nth-of-type(1) {
        margin-top:50px;
      }
      height: 30px;
    }
  }
</style>