<template>
    <div class="home">
        <h1>Welcome to the Home Page</h1>
        <p>This is a basic Vue 3 component.</p>
    </div>
</template>

<script setup lang="ts" name="Home">
    // Add any reactive data or logic here if needed
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter()

    onMounted(() => {
        setTimeout(() => {
            router.push('/students')
        }, 3000);
    })
</script>

<style scoped>
    .home {
        text-align: center;
        padding: 20px;
    }
</style>