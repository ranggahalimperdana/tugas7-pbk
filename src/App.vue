<template>
  <div id="app">
    <TodoList />
    <footer>
      Tugas Di kerjakan oleh Rangga Untuk Memenuhi Tugas Praktikum Terakhir PBK Semester 4
    </footer>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoList
  }
};
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  background-color: #f4f4f4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

footer {
  margin-top: auto;
  padding: 10px 0;
  width: 100%;
  background-color: #007bff;
  color: white;
  text-align: center;
  font-size: 14px;
  position: fixed;
  bottom: 0;
}
</style>
<!-- Code Di kerjakan Oleh rangga -->