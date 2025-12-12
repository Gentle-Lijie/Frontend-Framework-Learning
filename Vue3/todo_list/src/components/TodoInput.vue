<!--
TodoInput.vue: 输入框

实现方法：
1. 提供输入框让用户输入新任务
2. 支持回车键添加任务
3. 可选：添加按钮点击添加
4. 输入验证：非空检查
5. 添加后清空输入框
6. 使用 emit 向父组件发送 'add-todo' 事件，传递任务文本
7. 模板结构：
   - input[type="text"] 
   - button（可选）
-->
<template>
  <div class="todo-input">
    <input type="text" placeholder="Add a new todo" v-model="newTodoContent" @keyup.enter="addTodo" />
    <button @click="addTodo">Update Event</button>
  </div>
</template>

<script lang="ts" setup name="TodoInput">
  import { ref } from 'vue';
  import emitter from '../utils/emitter';
  let newTodoContent = ref('');
  function addTodo() {
    // emitter.emit('test-event', 'Hello from TodoInput');
    emitter.emit('receive-todo', { id: Date.now(), text: newTodoContent.value, completed: false });
    newTodoContent.value = '';
  }
</script>

<style scoped>
  .todo-input {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }

  .todo-input input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  .todo-input button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  .todo-input button:hover {
    background-color: #369870;
  }
</style>