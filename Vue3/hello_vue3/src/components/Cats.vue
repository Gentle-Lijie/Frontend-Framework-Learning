<template>
  <div>
    <h1>My Cats</h1>
    <img v-for="(cat, index) in cats" :src="cat" :key="index" />
    <button @click="nextCat">Next Cat</button>
  </div>
</template>

<script setup lang="ts" name="Cats">
  import axios from "axios";
  import { reactive, onMounted } from "vue";

  const cats = reactive([]);

  async function nextCat() {
    try {
      let result = await axios.get("https://api.thecatapi.com/v1/images/search");
      console.log(result.data[0].url);
      cats.push(result.data[0].url);
    } catch (error) {
      alert(error);
    }
  }

  onMounted(() => {
    nextCat();
  });
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }

  img {
    height: 100px;
    object-fit: cover;
    margin: 10px;
  }

  button {
    display: block;
    margin-top: 20px;
    color: #333;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
</style>