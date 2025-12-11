<template>
    <div class="person-card">
        <h2 class="person-name" ref="sum_h2">Current Sum is {{ sum }}</h2>
        <h2 class="person-name" ref="sum2_h2">Current Sum2 is {{ sum2 }}</h2>
        <button @click="changeSum">Increase Sum</button>
        <button @click="changeSum2">Increase Sum2</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Person_WatchEffect",
    }
</script>
<script setup lang="ts">
    import { ref, watch, watchEffect } from 'vue';
    let sum = ref(0);
    let sum2 = ref(0);

    let sum_h2 = ref()
    let sum2_h2 = ref()

    console.log("sum_h2", sum_h2.value);
    console.log("sum2_h2", sum2_h2.value);

    let changeSum = () => {
        ++sum.value;
        console.log("Sum changed to:", sum.value);
        console.log("sum_h2", sum_h2.value);
    }
    let changeSum2 = () => {
        ++sum2.value;
        console.log("Sum2 changed to:", sum2.value);
        console.log("sum2_h2", sum2_h2.value);
    }

    // watch([sum, sum2], (value) => {
    //     console.log(`Watch: sum or sum2 changed to `, value);
    //     let updated_sum = value[0];
    //     let updated_sum2 = value[1];
    //     if (updated_sum >= 5) {
    //         console.log("Sum reached 5, resetting to 0");
    //         sum.value = 0;
    //     }
    // });

    watchEffect(() => {
        console.log('@')
        if (sum.value >= 5) {
            console.log("Sum reached 5, resetting to 0");
            sum.value = 0;
        }
    });

</script>
<style scoped>
    .person-card {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        margin: 16px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .person-name {
        font-size: 1.2em;
        font-weight: bold;
        color: #333;
    }

    button {
        margin: 10px 10px 10px 10px;
        padding: 8px 12px;
        font-size: 1em;
        border: none;
        border-radius: 4px;
        background-color: #42b983;
        color: white;
        cursor: pointer;
    }
</style>