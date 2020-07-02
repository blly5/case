<template>
  <div v-show="visble" class="el-todo-add-task">

  </div>
</template>

<script>
export default {  
  data() {
    return {
      visble: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/css/tools';
  .el-todo-add-task {
    position: absolute;
    width: 500px;
    height: 400px;
    @include boxCenter;
    top: 50%;
    left: 50%;
    border: 1px solid #ccc;
  }
</style>