<template>
<div class="el-todo">
  <div @click="addTodo" class="el-todo-add-button">添加Todo</div>
  <div class="el-todo-task-list">
    <div class="el-todo-task-item">
      <div class="el-todo-task-desc">待办</div>
      <ul>
        <li v-for="(item, index) in todos" :key="index" v-show="item.status === 0">
          <input v-model="item.detail" />
          <i @click="item.status = 1" class="el-todo-task-item-check"></i>
        </li>
      </ul>
    </div>
    <div class="el-todo-task-item">
      <div class="el-todo-task-desc el-todo-task-desc--done">完成</div>
      <ul>
        <li v-for="(item, index) in todos" :key="index" v-show="item.status === 1">
          <input disabled :placeholder="item.detail" />
          <i @click="item.status = 0" class="el-todo-task-item-check el-todo-task-item-check--mask">
            <svg t="1593747823121" class="icon" viewBox="0 0 1317 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2111" width="30" height="30">
              <path d="M438.857143 782.628571 131.657143 475.428571 29.257143 577.828571 438.857143 987.428571 1316.571429 109.714286 1214.171429 7.314286 438.857143 782.628571Z" p-id="2112" fill="#bfbfbf"></path>
            </svg>
          </i>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      todos: [{
        id: 1,
        detail: 'NnowForver',
        status: 0
      }]
    }
  },
  methods: {
    showAddTask() {
      this.$refs.addTask.show();
    },
    addTodo() {
      this.todos.push({
        id: new Date() + 10086,
        detail: null,
        status: 0
      })
    }
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
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 20px 10px;
  top: 0;

  .el-todo-task-item {
    width: 300px;
    margin-right: 30px;
  }

  .el-todo-task-desc {
    &.el-todo-task-desc--done {
      color: #00e200;
    }

    font-size:28px;
    font-weight: bold;
    padding: 20px 14px;
    color: rgb(85, 85, 85);
  }

  li {
    position: relative;
    width: 260px;
    background: rgb(233, 233, 233);
    border-radius: 30px;
    padding: 18px 20px;
    margin-bottom: 10px;

    input {
      outline: none;
      border: none;
      width: 200px;
      font-weight: 500;
      background: rgb(233, 233, 233);
      font-size: 18px;
      color: #333;
    }

    .el-todo-task-item-check--mask:hover {
      border-color: none !important;
    }

    .el-todo-task-item-check {
      &:hover {
        border-color: #999;
      }

      & svg {
        width: 95%;
        margin-top: -5px;
      }

      position: absolute;
      @include boxCenter;
      right: 5px;
      top: 50%;
      width: 20px;
      height: 20px;
      border:2px solid #bbb;
      border-radius: 2px;
      @include animation;
    }
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
