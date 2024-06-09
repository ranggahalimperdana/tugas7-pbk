<template>
    <div class="todo-container">
      <h1>Todo List</h1>
      <TaskInput @add-task="addNewTodo" />
      <TaskList :todos="todos" :toggleStatus="toggleTodoStatus" :removeTask="removeTodoItem" />
      <p>Total unfinished tasks: {{ unfinishedTodosCount }}</p>
    </div>
  </template>
  
  <script>
  import { useTodoStore } from '../stores/todoStore';
  import TaskInput from './TaskInput.vue';
  import TaskList from './TaskList.vue';
  import { computed } from 'vue';
  
  export default {
    components: { TaskInput, TaskList },
    setup() {
      const todoStore = useTodoStore();
  
      const addNewTodo = (task) => {
        todoStore.addTodo(task);
      };
  
      const removeTodoItem = (index) => {
        todoStore.removeTodo(index);
      };
  
      const toggleTodoStatus = (index) => {
        todoStore.toggleTodoStatus(index);
      };
  
      const unfinishedTodosCount = computed(() => todoStore.unfinishedTodosCount);
  
      return {
        addNewTodo,
        removeTodoItem,
        toggleTodoStatus,
        todos: todoStore.todos,
        unfinishedTodosCount
      };
    }
  };
  </script>
  
  <style>
  .todo-container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: left;
  }
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    color: #888;
  }
  </style>
  