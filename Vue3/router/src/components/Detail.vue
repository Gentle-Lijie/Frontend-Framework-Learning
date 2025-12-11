<template>
    <div class="StudentDetail">
        <h2>Student Detail</h2>
        <h3>{{ query.name }}</h3>
        <p><strong>Email:</strong> {{ query.email }}</p>
        <p><strong>Phone:</strong> {{ query.phone }}</p>
        <p><strong>Address:</strong> {{ query.address }}</p>
    </div>
</template>

<script lang="ts" setup name="Detail">

    import { reactive, toRefs } from 'vue';
    import { useRoute } from 'vue-router';

    let route = useRoute();
    let { query } = toRefs(route);
    console.log('Query parameters:', query);


    // import { studentListDetail } from "@/pages/Students.vue";

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
</style>