<template lang="">
    <div class = "countSub">
        <h3>Count Submodule Component</h3>
        <ul>
            <li v-for="(toy, index) in toys" :key="index">{{ toy }}</li>
        </ul>
        <br/>
        <h3>{{ car.brand }} {{ car.model }} ({{ car.year }})</h3>
        <button @click="sendToy(toys)">Send Toys to Parent</button>
    </div>
</template>
<script setup lang="ts" name="CountSub">
    import { ref } from 'vue';
    let toys = ref(['Car', 'Doll', 'Puzzle', 'Action Figure']);
    defineProps(['car', 'sendToy']);
</script>
<style lang="">

</style>