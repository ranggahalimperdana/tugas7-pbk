<template>
    <ul class="todo-list">
      <li v-for="(todo, index) in todos" :key="index" :class="{ completed: todo.completed }">
        <div class="checkbox-container">
          <input type="checkbox" :checked="todo.completed" @change="toggleStatus(index)">
        </div>
        <span>{{ todo.task }}</span>
        <button @click="removeTask(index)">Remove</button>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: ['todos', 'toggleStatus', 'removeTask']
  };
  </script>
  
  <style>
  .todo-list {
    list-style-type: none;
    padding: 0;
  }
  
  .todo-list li {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
    transition: all 0.3s ease;
  }
  
  .todo-list li.completed span {
    text-decoration: line-through;
    color: #888;
  }
  
  .todo-list li span {
    flex-grow: 1;
    margin-left: 10px;
  }
  
  .checkbox-container {
    flex: 0 0 30px;
    display: flex;
    justify-content: center;
  }
  
  input[type="checkbox"] {
    cursor: pointer;
  }
  
  input[type="checkbox"]:checked {
    accent-color: orange;
  }
  
  button {
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: #ff5c5c;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #ff1a1a;
  }
  </style>
<!-- Code Di kerjakan Oleh Rangga -->  