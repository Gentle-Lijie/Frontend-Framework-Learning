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
    <CountSubmodule :car="car" :sendToy="getToy" />
    <h3 v-show="toy">{{ toy }}</h3>
</template>

<script setup lang="ts" name="App">
    import { ref } from 'vue';
    import { useCountStore } from '@/store/count';
    import { storeToRefs } from 'pinia';
    import CountSubmodule from './CountSubmodule.vue';

    const countStore = useCountStore();
    let { sum, bigSum } = storeToRefs(countStore);
    console.log(countStore)
    let step = ref(1);
    let car = ref({
        brand: 'Toyota',
        model: 'Corolla',
        year: 2020
    });
    let toy: any = ref('');
    function getToy(value: string[]) {
        console.log('Received toy from submodule:', value);
        toy.value = value;
    }
    function decrement() {
        sum.value -= step.value;
    }
    function increment() {
        // sum.value += step.value;
        countStore.increment(step.value);
        sum.value = countStore.sum;
    }

</script>