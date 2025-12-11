<template lang="">
    <div>
        <h2>Word Component</h2>
        <button @click="wordStore.getQuote">Get Random Quote</button>
        <ul>
            <li v-for="(word, index) in quote" :key="index">{{ word }}</li>
        </ul>
    </div>
</template>
<script setup lang="ts" name="Word">
    import { ref } from 'vue';

    import { useWordStore } from '@/store/word';

    const wordStore = useWordStore();
    let quote = ref<string[]>(wordStore.quote);

    wordStore.$subscribe((mutation, state) => {
        console.log('Word Store changed:', mutation, state);
        localStorage.setItem('wordStore', JSON.stringify(state.quote));
    });
    // fetchQuote();
</script>
<style lang="">

</style>