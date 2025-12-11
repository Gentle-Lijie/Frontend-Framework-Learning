<template>
    <div class="person" v-for="person in personListApp" :key="person.id">
        <h2>{{ person.name }}</h2>
        <p>Age: {{ person.age }}</p>
        <!-- <button @click="showTel">Show Tel</button>
        <button @click="editName">Edit Name</button>
        <button @click="editAge">Edit Age</button> -->
    </div>
</template>

<script setup name="Person" lang="ts">
    import { type PersonInterface } from '@/types';

    withDefaults(defineProps<{ personListApp?: PersonInterface[] }>(), {
        personListApp: [
            { id: "1", name: "Default Name", age: 30, tel: "123-456-7890" },

        ]
    });
</script>


<style scoped>
    .person {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #333;
        max-width: 400px;
        margin: 20px auto;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        text-align: center;
    }

    .person h2 {
        margin: 10px 0;
        color: #2c3e50;
        font-weight: bold;
    }

    .person p {
        margin: 15px 0;
        font-size: 1.1em;
        color: #34495e;
    }

    .person button {
        margin: 5px;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        background-color: #3498db;
        color: white;
        font-size: 1em;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .person button:hover {
        background-color: #2980b9;
    }
</style>