// src/stores/todoStore.js
import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: JSON.parse(localStorage.getItem('todos') || '[]')
  }),
  actions: {
    addTodo(task) {
      this.todos.push({ task, completed: false });
      this.saveTodos();
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
      this.saveTodos();
    },
    toggleTodoStatus(index) {
      this.todos[index].completed = !this.todos[index].completed;
      this.saveTodos();
    },
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  },
  getters: {
    unfinishedTodosCount: (state) => {
      return state.todos.filter(todo => !todo.completed).length;
    }
  }
});
