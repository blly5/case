<template>
  <div class="el-todo">
    <div class="el-todo-add-button">添加Todo</div>
      
    <div class="el-todo-task-list">
      <div class="el-todo-task-item">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>

    <add-task ref="addtask"></add-task>

  </div>
</template>

<script>

import addTask from '@/components/addTask';
export default {
  methods: {
    showAddTask() {
      this.$refs.addTask.show();
    },
  },
  components: {
    addTask
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/css/tools';
  .el-todo {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
  }

  .el-todo-task-list {
    width: 100%;
    top: 0;
    .el-todo-task-item {
      width: 300px;
    }
    li {
      min-height: 40px;
      background: gray;
    }
  }

  .el-todo-add-button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 140px;
    height: 50px;
    cursor: pointer;
    border-radius: 30px;
    background: rgb(51, 51, 51);
    box-shadow: 1px 7px 19px 0px #888;
  }
</style>
