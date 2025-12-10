<template>
    <div class="app">
        <h1>Hello Vue3 + TypeScript + Vite</h1>
        <!-- <Person /> -->
        <Person_Response />
    </div>
</template>

<script>
import Person from './components/Person.vue';
import Person_Response from './components/Person_DataResponse.vue';
export default {
    name: "App",
    components: {
        Person,
        Person_Response
    }
}
</script>

<style>
.app {
    text-align: center;
    margin-top: 50px;

}
</style>