<template>
  <div id="app">
    <Home />
    <div class="navigate">
      <RouterLink to="/students">Student</RouterLink>
      <RouterLink to="/dogs">Dogs</RouterLink>
      <!-- <RouterLink to="/cats">Cats</RouterLink> -->
      <RouterLink :to="{ path: '/cats' }">Cats</RouterLink>
    </div>
    <div class="content">
      <!-- <RouterView :to="{ name: 'HomePage' }" /> -->
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { RouterView, RouterLink } from 'vue-router';
  import Home from './components/Home.vue';
  import type HomeVue from './components/Home.vue';

</script>

<style>
  #app {
    font-family: Aptos;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .navigate {
    margin: 20px;
    gap: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #42b883;
    height: 100px;
  }


  router-link {
    padding: 10px 15px;
  }

  content {
    margin-top: 30px;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    height: 400px;
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    background-color: #f9f9f9;
  }

  a {
    text-decoration: none;
    font-size: 18px;
    color: #42b883;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s, background-color 0.3s;
    border: 1px solid #42b883;
    margin: 0 10px;
    border-radius: 4px;
    padding: 10px 15px;
  }

  a:hover {
    color: #fff;
    background-color: #42b883;
  }

  .router-link-active {
    background-color: #42b883;
    color: #fff;
  }
</style>
