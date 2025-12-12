<!--
TodoItem.vue: 单个任务

实现方法：
1. 接收 todo 对象作为 prop
2. 显示任务文本，支持双击编辑
3. 复选框切换完成状态
4. 删除按钮
5. 编辑模式：
   - 双击进入编辑
   - input 绑定 v-model
   - 回车保存，ESC 取消
6. 使用 emit 发送事件：
   - 'toggle': 切换完成状态
   - 'edit': 编辑任务
   - 'delete': 删除任务
7. 模板结构：
   - input[type="checkbox"]
   - span 或 input（编辑时）
   - button 删除
-->
<template>
  <ul>
    <li v-for="todo in displayTodos" :key="todo.id" class="todo-item">
      <input type="checkbox" v-model="todo.completed" />
      <span @dblclick="modifytodo(todo.id)" :class="{ completed: todo.completed }">{{ todo.text }}</span>
      <span :class="{ ['importance-' + todo.importance]: true }">{{ '!'.repeat(todo.importance) }}</span>
      <button @click="emitter.emit('delete-todo', todo.id)">×</button>
    </li>
  </ul>
</template>

<script setup lang="ts" name="TodoItem">
  // Props and emits would be defined here
  import { ref, watch, computed } from 'vue';
  import emitter from '../utils/emitter';
  const props = defineProps(['todos']);
  console.log(props.todos);
  const todos = computed(() => props.todos);
  const currentFilter = ref(1);
  // const displayTodos = computed(() => todos.value);
  const displayTodos = ref(todos.value);
  function modifytodo(id: number) {
    console.log(`modify todo Number ${id}`);
    todos.value.map(todo => {
      if (todo.id === id) {
        const newText = prompt('Edit todo text:', todo.text);
        if (newText !== null) {
          todo.text = newText;
        }
      }
      return todo;
    });
  }

  function applyFilter() {
    if (currentFilter.value === 1) {
      displayTodos.value = todos.value;
    } else if (currentFilter.value === 2) {
      displayTodos.value = todos.value.filter(todo => !todo.completed);
    } else if (currentFilter.value === 3) {
      displayTodos.value = todos.value.filter(todo => todo.completed);
    }
  }

  emitter.on('filter-change', (filter: number) => {
    console.log('Filter change received in TodoItem:', filter);
    currentFilter.value = filter;
    applyFilter();
  })

  watch(() => todos.value, (newVal) => {
    console.log('TodoItem received updated todos:', newVal);
    // Here, AI made a change: on watch change, update the filter.
    applyFilter();
  }, { deep: true });
</script>

<style scoped>
  .todo-item span.importance-1 {
    color: green;
    font-weight: bold;
    margin-left: 8px;
  }

  .todo-item span.importance-2 {
    color: orange;
    font-weight: bold;
    margin-left: 8px;
  }

  .todo-item span.importance-3 {
    color: red;
    font-weight: bold;
    margin-left: 8px;
  }
</style>