<template>
    <div class="input-container">
      <input v-model="task" @keyup.enter="addTask" placeholder="Add a new task" />
      <button @click="addTask">Add</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        task: ''
      };
    },
    methods: {
      addTask() {
        if (this.task.trim()) {
          this.$emit('add-task', this.task.trim());
          this.task = '';
        }
      }
    }
  };
  </script>
  
  <style>
  .input-container {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
  }
  
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  <!-- Code Di kerjakan Oleh Rangga -->