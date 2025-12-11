<template>
    <div>
        <h1>My Students</h1>
        <div v-for="(student, index) in students" :key="index">
            <img :src="student.picture.large" />
            <p>{{ student.name.first }} {{ student.name.last }}</p>
            <p>{{ student.email }}</p>
        </div>
        <button @click="nextStudent">Next Student</button>
    </div>
</template>

<script setup lang="ts" name="Students">
    import axios from "axios";
    import { reactive, onMounted } from "vue";

    interface Student {
        name: {
            first: string;
            last: string;
        };
        email: string;
        picture: {
            large: string;
        };
    }

    const students = reactive<Student[]>([]);

    async function nextStudent() {
        try {
            let result = await axios.get("https://randomuser.me/api/");
            console.log(result.data.results[0]);
            students.push(result.data.results[0]);
        } catch (error) {
            alert(error);
        }
    }

    onMounted(() => {
        nextStudent();
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