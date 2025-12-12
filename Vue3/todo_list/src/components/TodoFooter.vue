<!--
TodoFooter.vue: 过滤和清除

实现方法：
1. 显示过滤按钮：全部、进行中、已完成
2. 高亮当前激活的过滤器
3. 显示剩余未完成任务数
4. 清除已完成任务按钮
5. 使用 props 接收 todos 和 currentFilter
6. 使用 emit 发送事件：
   - 'filter-change': 切换过滤器
   - 'clear-completed': 清除已完成
7. 模板结构：
   - span 显示剩余任务数
   - div.filters 过滤按钮
   - button 清除按钮
-->
<template>

  <div class="todo-footer">
    <div class="filters">
      <button @click="emitter.emit('filter-change', 1), active = 1" :class="{ active: active === 1 }">All</button>
      <button @click="emitter.emit('filter-change', 2), active = 2" :class="{ active: active === 2 }">Active</button>
      <button @click="emitter.emit('filter-change', 3), active = 3" :class="{ active: active === 3 }">Completed</button>
      <button @click="emitter.emit('clear-completed')">Clear Completed</button>
    </div>
  </div>

</template>

<script setup lang="ts" name="TodoFooter">
  // Props and emits would be defined here
  import { ref } from 'vue';
  import emitter from '../utils/emitter';
  const props = defineProps(['todos']);
  const todos = ref(props.todos);
  const active = ref(1);
</script>

<style scoped></style>
