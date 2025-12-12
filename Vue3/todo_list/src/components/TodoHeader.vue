<!--
TodoHeader.vue: 标题和统计

实现方法：
1. 显示应用标题 "Todo List"
2. 显示任务统计信息：
   - 总任务数
   - 已完成任务数
   - 待完成任务数
3. 使用 props 接收 todos 数组
4. 使用 computed 计算统计数据
5. 模板结构：
   - h1 标题
   - p 或 div 显示统计信息，如 "3 / 5 完成"
-->
<template>
  <h1>Todo List</h1>
  <div class="stats">
    <div class="card" id="total-todos"> 总任务数: <span class="number">{{ totalTodos }}</span></div>
    <div class="card" id="total-done"> 已完成任务数: <span class="number completed">{{ totalDone }}</span></div>
    <div class="card" id="total-pending"> 待完成任务数: <span class="number pending">{{ totalPending }}</span></div>
  </div>
</template>

<script lang="ts" setup name="TodoHeader">
  import { computed } from 'vue';
  import Todo from '../types/TodoInter';
  const props = defineProps<{ todos: Todo[] }>();
  console.log(props)
  const totalTodos = computed(() => props.todos.length);
  const totalDone = computed(() => props.todos.filter((todo: { completed: boolean }) => todo.completed).length);
  const totalPending = computed(() => totalTodos.value - totalDone.value);
</script>

<style scoped>
  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2rem;
    color: #333;
  }

  .stats {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
  }

  .card {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
    min-width: 120px;
  }

  .number {
    font-weight: bold;
    color: #007bff;
  }

  .completed {
    color: #28a745;
  }

  .pending {
    color: #dc3545;
  }
</style>