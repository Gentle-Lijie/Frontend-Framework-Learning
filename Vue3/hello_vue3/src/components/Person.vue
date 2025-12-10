<template>
    <div class="person">
        <h2>{{ name }}</h2>
        <h2>{{ a }}</h2>
        <p>Age: {{ age }}</p>
        <button @click="showTel">Show Tel</button>
        <button @click="editName">Edit Name</button>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script lang="ts">
export default {
    name: "Person",
    data() {
        return {
            name: "John Doe Data",
            age: 300,
            tel: "123-456-78900"
        };
    },
    methods: {
        showTel() {
            alert(`TelMethod: ${this.tel}`);
        },
        editName() {
            this.name = prompt("Enter new name:", this.name) || this.name;
        },
        editAge() {
            const newAge = prompt("Enter new age:", this.age.toString());
            if (newAge !== null) {
                this.age = parseInt(newAge) || this.age;
            }
        }
    }
}
</script>

<script setup lang="ts">
let a = 666;
let name = "John Doe";
let age = 30;
let tel = "123-456-7890";
// Methods
const showTel = function () {
    alert(`Tel: ${tel}`);
}
const editName = function () {
    const newName = prompt("Enter new name:", name);
    if (newName) {
        name = newName;
    }
}
const editAge = function () {
    const newAge = prompt("Enter new age:", age.toString());
    if (newAge) {
        age = parseInt(newAge);
    }
}
</script>

<style scoped>
.person {
    font-family: Arial, sans-serif;
    color: #333;
}
</style>