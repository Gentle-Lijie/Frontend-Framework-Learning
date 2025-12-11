<template>
    <div class="count">
        <h2>Current Value is: {{ sum }}</h2>
        <h2>Current Bigger Value is: {{ bigSum }}</h2>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
        <select v-model="step" default="1">
            <option v-for="n in [1, 5, 10]" :key="n" :value="n">{{ n }}</option>
        </select>
    </div>
</template>

<script setup lang="ts" name="App">
    import { ref } from 'vue';
    import { useCountStore } from '@/store/count';
    import { storeToRefs } from 'pinia';

    const countStore = useCountStore();
    let { sum, bigSum } = storeToRefs(countStore);
    console.log(countStore)
    let step = ref(1);

    function decrement() {
        sum.value -= step.value;
    }
    function increment() {
        // sum.value += step.value;
        countStore.increment(step.value);
        sum.value = countStore.sum;
    }

</script>