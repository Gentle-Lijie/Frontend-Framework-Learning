<template>
    <div class="person-watch">
        <h2>Person Watch Component</h2>
        <p>Sum: {{ sum }}</p>
        <button @click="changeSum">Increment Sum</button>
        <hr />
        <p>Ref Object: {{ ref_object }}</p>
        <button @click="ref_object.a += 1">Increment ref_object.a</button>
        <button @click="ref_object.b += 1">Increment ref_object.b</button>
        <button @click="ref_object.object.nested += 1">Increment ref_object.object.nested</button>
        <button @click="ref_object = { a: 10, b: 20, object: { nested: 30 } }">Change ref_object completely</button>
        <hr />
        <p>Reactive Object: {{ reactive_object }}</p>
        <button @click="reactive_object.x += 10">Increment reactive_object.x</button>
        <button @click="reactive_object.y += 20">Increment reactive_object.y</button>
        <button @click="reactive_object.object.nested += 20">Increment reactive_object.object.nested</button>
        <button @click="Object.assign(reactive_object, { x: 300, y: 400, object: { nested: 500 } })">Change
            reactive_object completely</button>
    </div>
</template>
<script lang="ts">
    export default {
        name: "Person_Watch",
    }
</script>
<script setup lang="ts">
    // Your code for Person_Watch.vue goes here
    import { ref, watch, reactive } from 'vue';

    let sum = ref(0);

    function changeSum() {
        ++sum.value;
        console.log("Sum changed to:", sum.value);
    }

    const stopWatch = watch(sum, (newValue, oldValue) => {
        console.log(`Watch: Sum changed from ${oldValue} to ${newValue}`);
        if (sum.value >= 5) {
            console.log("Sum reached 5, resetting to 0");
            stopWatch(); // Stop watching to prevent infinite loop
        }
    });

    // console.log("Watch return value:", return_value);

    let ref_object = ref({ a: 1, b: 2, object: { nested: 10 } });

    const stopWatchRefObject = watch(ref_object, (newValue, oldValue) => {
        console.log(`Watch: ref_object changed`, newValue, oldValue);
    });

    const stopWatchRefObjectDeep = watch(ref_object, (newValue, oldValue) => {
        console.log(`Deep Watch: ref_object changed deeply`, newValue, oldValue);
    }, { deep: true });

    let reactive_object = reactive({ x: 100, y: 200, object: { nested: 20 } });
    const stopWatchReactiveObject = watch(reactive_object, (newValue, oldValue) => {
        console.log(`Watch: reactive_object changed`, newValue, oldValue);
    });

    const ref_object_element_watch = watch(() => ref_object.value.a, (newValue, oldValue) => {
        console.log(`Watch: ref_object.a changed`, newValue, oldValue);
    }, { deep: true });

    const ref_object_object_watch = watch(() => ref_object.value.object, (newValue, oldValue) => {
        console.log(`Watch: ref_object.object changed`, newValue, oldValue);
    }, { deep: true });

    const reactive_object_object_watch = watch(() => reactive_object.object, (newValue, oldValue) => {
        console.log(`Watch: reactive_object.object changed`, newValue, oldValue);
    }, { deep: true });

    const reactive_object_xy_watch = watch(() => [reactive_object.x, ref_object.value.a], (newValue, oldValue) => {
        console.log(`Watch: reactive_object x or ref_object.a changed`, newValue, oldValue);
    }); 
</script>

<style scoped>
    body {
        font-family: Arial, sans-serif;
        color: #333;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        max-width: 300px;
    }

    body h2 {
        margin-top: 0;
    }
</style>