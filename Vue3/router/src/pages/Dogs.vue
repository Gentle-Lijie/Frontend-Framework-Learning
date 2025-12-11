<template>
    <div>
        <h1>My Dogs</h1>
        <img v-for="(dog, index) in dogs" :src="dog" :key="index" />
        <button @click="nextDog">Next Dog</button>
    </div>
</template>

<script setup lang="ts" name="Dogs">
    import axios from "axios";
    import { reactive, ref, onMounted, onBeforeMount } from "vue";

    const dogs = reactive([]);

    async function nextDog() {
        try {
            let result = await axios.get("https://dog.ceo/api/breeds/image/random");
            console.log(result.data.message);
            dogs.push(result.data.message);
        } catch (error) {
            alert(error);
        }
    }

    onMounted(() => {
        nextDog();
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