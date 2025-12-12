<template>
    <div>
        <h2>Data Communication Demo</h2>
        <h3 v-show="toy">{{ toy }}</h3>
        <!-- <ChildA :toy="toy" :str="str" /> -->
        <ChildA v-bind="{ toy, str }" />
    </div>
</template>

<script setup lang="ts" name="Communication">
    import ChildA from './ChildA.vue';

    import { ref } from 'vue';

    let str = ref('Hello from Parent');

    let toy = ref(['Car', 'Doll', 'Ball']);

</script>

<style scoped></style>