<template>
  <div id="">
    <TodoHeader :todos="todos" />
    <TodoInput />
    <TodoFooter :todos="todos" />
    <TodoItem :todos="todos" />
    <!-- <button @click="addTodo('New Task')">Add Todo</button> -->
  </div>
</template>

<script name="App" setup lang="ts">
  import { ref, watch } from 'vue';
  import TodoHeader from './components/TodoHeader.vue';
  import TodoInput from './components/TodoInput.vue';
  import Todo from './types/TodoInter';
  import TodoItem from './components/TodoItem.vue';
  import emitter from './utils/emitter';
  import TodoFooter from './components/TodoFooter.vue';

  import { useTodos } from './composables/useTodos';
  import { saveTodos, readTodos } from './utils/storage';
  const { todos } = useTodos();


  function addTodo(value: Todo) {
    todos.value.unshift(value);
  }
  emitter.on('receive-todo', (value: Todo) => {
    console.log('Received todo from emitter:', value);
    addTodo(value);
  })
  emitter.on('delete-todo', (value: number) => {
    if (confirm(`Delete todo with id: ${value}`)) {
      console.log('Delete todo with id from emitter:', value);
      todos.value = todos.value.filter(todo => todo.id !== value);
    }
  })
  emitter.on('clear-completed', () => {
    if (confirm('Clear all completed todos?')) {
      console.log('Clear completed todos');
      todos.value = todos.value.filter(todo => !todo.completed);
    }
  })
  watch(todos, (value) => {
    console.log('Todos updated:', value);
    saveTodos(value);
  }, { deep: true });

</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }

  #app {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin-top: 50px;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #42b883;
  }

  .todo-input {
    margin: 1em 1em 1em 1em;
    width: 100%-2em;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 20px;
    font-size: 16px;
  }

  .todo-list {
    list-style: none;
  }

  .todo-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }

  .todo-item.completed {
    text-decoration: line-through;
    color: #999;
  }

  .todo-item input[type="checkbox"] {
    margin-right: 10px;
  }

  .todo-item span {
    flex: 1;
  }

  .todo-item button {
    background: none;
    border: none;
    color: #ff6b6b;
    cursor: pointer;
    font-size: 18px;
  }

  .todo-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding-top: 10px;
    border-top: 1px solid #eee;
  }

  .todo-footer button {
    background-color: #42b883;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 8px;
    cursor: pointer;
  }

  .todo-footer button:hover {
    background-color: #369870;
  }

  .todo-footer button.active {
    background-color: #2c6e58;
  }

  .filters {
    display: flex;
    gap: 10px;
  }

  .filters button {
    color: #333;
    background: none;
    border: 1px solid #ddd;
    padding: 5px 10px;
    border-radius: 8px;
    cursor: pointer;
  }

  .filters button:hover {
    background-color: #f0f0f0;
  }

  .filters button.active {
    background-color: #42b883;
    color: white;
    border-color: #42b883;
  }
</style>