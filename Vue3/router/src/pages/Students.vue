<template>
    <div class="container">
        <div class="left">
            <h2>Students</h2>
            <ul>
                <li v-for="student in studentList" :key="student.name">
                    <button @click="showDetail(student)">查看信息</button>
                    <RouterLink :to="{
                        path: '/students/detail', query: {
                            name: student.name,
                            email: student.email,
                            phone: student.phone,
                            address: student.address,
                        }
                    }">{{ student.name }}</RouterLink>
                </li>
            </ul>
            <button @click="router.push('/students/detail')">查看默认信息</button>

        </div>
        <div class="right">
            <RouterView />
        </div>
    </div>
</template>

<script lang="ts" setup name="Students">

    import { reactive } from 'vue';
    import { useRouter, RouterLink, RouterView } from 'vue-router';

    const studentList = reactive([
        {
            name: 'Alice Johnson',
            email: 'alice.johnson@example.com',
            phone: '(123) 456-7890',
            address: '123 Main St, Anytown, USA'
        },
        {
            name: 'Bob Smith',
            email: 'bob.smith@example.com',
            phone: '(234) 567-8901',
            address: '456 Elm St, Somewhere, USA'
        },
        {
            name: 'Charlie Brown',
            email: 'charlie.brown@example.com',
            phone: '(345) 678-9012',
            address: '789 Oak St, Elsewhere, USA'
        },
        {
            name: 'Diana Prince',
            email: 'diana.prince@example.com',
            phone: '(456) 789-0123',
            address: '101 Pine St, Nowhere, USA'
        }
    ]);

    let router = useRouter();

    function showDetail(student: any) {
        router.push({
            path: '/students/detail',
            query: {
                name: student.name,
                email: student.email,
                phone: student.phone,
                address: student.address,
            }
        })
    }
</script>

<style scoped>
    .container {
        display: flex;
        height: 100vh;
    }

    .left {
        width: 30%;
        padding: 20px;
        border-right: 1px solid #ccc;
    }

    .left ul {
        list-style-type: none;
        padding: 0;
    }

    .left li {
        padding: 10px;
        cursor: pointer;
        border-bottom: 1px solid #eee;
    }

    .left li:hover {
        background-color: #f0f0f0;
    }

    .active {
        background-color: #e0e0e0;
        font-weight: bold;
    }

    .right {
        width: 70%;
        padding: 20px;
    }

    .detail img {
        height: 100px;
        object-fit: cover;
        margin-bottom: 10px;
    }

    .detail p {
        margin: 5px 0;
    }

    button {
        margin-right: 10px;
        padding: 5px 10px;
        background-color: #42b983;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
</style>