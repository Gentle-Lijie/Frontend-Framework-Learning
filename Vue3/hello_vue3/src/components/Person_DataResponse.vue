<template>
    <div class="person">
        <h2>{{ name }}</h2>
        <h2>{{ a }}</h2>
        <p>Age: {{ age }}</p>
        <button @click="showTel">Show Tel</button>
        <button @click="editName">Edit Name</button>
        <button @click="editAge">Edit Age</button>
        <hr />
        <h3>Car Information</h3>
        <p>Brand: {{ car.brand }}</p>
        <p>Model: {{ car.model }}</p>
        <p>Year: {{ car.year }}</p>
        <button @click="car.brand += ' edited'">Edit Brand</button>
        <button @click="car.model += ' edited'">Edit Model</button>
        <button @click="car.year += 1">Edit Year</button>
        <button @click="modifyCar">Change Entire Car</button>
        <hr />
    </div>
</template>

<script lang="ts">
    export default {
        name: "Person_Response",
    }
</script>

<script setup lang="ts">
    import { ref, toRefs, reactive } from 'vue';
    let a = 666;

    // IF a data needs to be edited externally, use ref to make it reactive
    let name = ref("John Doe");
    let age = ref(30)
    let tel = "123-456-7890";

    // IF an object need to be reactive, use reactive()

    let car = reactive({
        brand: "Toyota",
        model: "Corolla",
        year: 2020
    });

    let games = [
        { title: "The Legend of Zelda", genre: "Action-Adventure" },
        { title: "Super Mario Bros.", genre: "Platformer" },
        { title: "Minecraft", genre: "Sandbox" }
    ]
    // Methods
    const showTel = function () {
        alert(`Tel: ${tel}`);
    }
    const editName = function () {
        // Within JS, accessing a ref()ed variable requires .value
        const newName = prompt("Enter new name:", name.value);
        if (newName) {
            name.value = newName;
        }
    }
    const editAge = function () {
        const newAge = prompt("Enter new age:", age.value.toString());
        if (newAge) {
            age.value = parseInt(newAge);
        }
    }
    const modifyCar = function () {
        // car = { brand: "Honda", model: "Civic", year: 2021 }; // This won't work as car is reactive
        Object.assign(car, { brand: "Honda", model: "Civic", year: 2021 });
    }
</script>

<style scoped>
    .person {
        font-family: Arial, sans-serif;
        color: #333;
    }
</style>