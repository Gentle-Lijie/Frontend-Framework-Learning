<template>
    <!-- SearchBar component template placeholder -->
    <!-- TODO: Add markup for search input and suggestions -->
    <div class="search-bar">
        <input type="text" placeholder="Search for a city..." v-model="query" />
        <button @click="emitter.emit('change-city', query)">Search</button>
        <!-- Suggestions dropdown could go here -->
    </div>
</template>

<script lang="ts" setup name="SearchBar">
    import { ref } from 'vue';
    import emitter from '../utils/emitter.ts';

    // TODO: SearchBar component logic (use Composition API)
    let query = ref('');

</script>

<style scoped>
    .search-bar {
        display: flex;
        align-items: center;
        gap: var(--spacing-md);
        max-width: 500px;
        margin: 0 auto;
        background-color: var(--bg-primary);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius-lg);
        padding: var(--spacing-sm);
        box-shadow: var(--shadow-light);
        transition: box-shadow 0.2s ease;
    }

    .search-bar:focus-within {
        box-shadow: var(--shadow-medium);
    }

    .search-bar input {
        flex: 1;
        border: none;
        outline: none;
        font-size: var(--font-size-base);
        background: transparent;
        color: var(--text-primary);
    }

    .search-bar input::placeholder {
        color: var(--text-light);
    }

    .search-bar button {
        background-color: var(--primary-color);
        color: white;
        border: none;
        padding: var(--spacing-sm) var(--spacing-md);
        border-radius: var(--border-radius-md);
        cursor: pointer;
        font-size: var(--font-size-base);
        font-weight: 500;
        transition: background-color 0.2s ease, transform 0.2s ease;
    }

    .search-bar button:hover {
        background-color: var(--secondary-color);
        transform: translateY(-1px);
    }

    .search-bar button:active {
        transform: translateY(0);
    }
</style>
