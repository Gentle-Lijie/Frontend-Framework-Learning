import { ref } from 'vue'

export function useTodos() {
  // const todos = ref([
  //   { id: 1, text: 'Learn Vue 3', completed: true },
  //   { id: 2, text: 'Build a Todo App', completed: false },
  //   { id: 3, text: 'Master Composition API', completed: false }
  // ])
  const todos = ref([])
  if (!localStorage.getItem('todos')) {
    todos.value = [
      { id: 1, text: 'Learn Vue 3', importance: 1, completed: true },
      { id: 2, text: 'Build a Todo App', importance: 2, completed: false },
      { id: 3, text: 'Master Composition API', importance: 3, completed: false }
    ]
    localStorage.setItem('todos', JSON.stringify(todos.value))
  }
  else {
    console.log('Todos loaded from localStorage:', JSON.parse(localStorage.getItem('todos')))
    todos.value = JSON.parse(localStorage.getItem('todos'))
  }

  return {
    todos
  }
}