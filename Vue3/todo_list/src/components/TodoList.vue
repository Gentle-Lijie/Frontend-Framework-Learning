<!--
TodoList.vue: 任务列表

实现方法：
1. 接收 todos 数组和 filter 作为 props
2. 根据 filter 过滤任务：
   - 'all': 显示所有
   - 'active': 只显示未完成
   - 'completed': 只显示已完成
3. 渲染 TodoItem 组件列表
4. 传递必要的 props 给 TodoItem（todo, index 等）
5. 监听 TodoItem 的 emit 事件，转发给父组件
6. 模板结构：
   - ul.todo-list
     - li(v-for) TodoItem
-->
<template>
  <p>This is Todo List</p>
</template>

<script>
  export default {
    name: 'TodoList'
  }
</script>

<style scoped></style>