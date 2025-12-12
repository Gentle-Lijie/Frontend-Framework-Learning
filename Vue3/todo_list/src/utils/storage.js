// localStorage 封装

export function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

export function readTodos() {
    return JSON.parse(localStorage.getItem('todos')) || [];
}