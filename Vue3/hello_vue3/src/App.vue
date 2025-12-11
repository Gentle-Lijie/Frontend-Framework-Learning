<template>
    <div class="app">
        <h1>Hello Vue3 + TypeScript + Vite</h1>
        <!-- <Person :personListApp="personList" /> -->
        <hr />
        <Dogs />
        <!-- <Person_Response /> -->
        <!-- <Person_Computed /> -->
        <!-- <Person_Watch /> -->
        <!-- <Person_WatchEffect /> -->
    </div>
</template>

<script setup lang="ts">
    import Person from './components/Person.vue';
    import Person_Response from './components/Person_DataResponse.vue';
    import Person_Computed from './components/Person_Computed.vue';
    import Person_Watch from './components/Person_Watch.vue';
    import Person_WatchEffect from './components/Person_WatchEffect.vue';

    import { reactive } from 'vue';
    import { type PersonInterface, type Persons } from '@/types';
    import Dogs from './components/Dogs.vue';

    let personList: Persons = reactive<Persons>([
        { id: "1", name: "John Doe", age: 30, tel: "123-456-7890" },
        { id: "2", name: "Jane Smith", age: 25, tel: "987-654-3210" },
        { id: "3", name: "Alice Johnson", age: 28, tel: "555-555-5555" },
        { id: "4", name: "Bob Brown", age: 35, tel: "444-444-4444" },
        { id: "5", name: "Charlie Davis", age: 22, tel: "333-333-3333" }
    ])

</script>

<style>
    .app {
        text-align: center;
        margin-top: 50px;

    }
</style>