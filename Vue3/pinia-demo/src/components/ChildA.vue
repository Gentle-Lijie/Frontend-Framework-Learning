<template>
    <div>
        <h3>Child A</h3>
        <!-- <h3 v-show="toy">{{ toy }}</h3> -->
        <ChildB v-bind="$attrs" />
        <!-- <h3>{{ $attrs }}</h3> -->
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import ChildB from './ChildB.vue';
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
    }
</style>