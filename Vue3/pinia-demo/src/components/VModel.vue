<template lang="">
    <div>
        <h1>VModel Component</h1>
        <h2>Username: {{username}}</h2>
        <!-- <input v-model="username" placeholder="Enter your name" type="text"/> -->
        <CustomInput v-model="username"/>
        <!-- <CustomInput :modelValue ="username" @update:modelValue="username = $event"/> -->
        <CustomInput v-model:name="username" v-model:pwd="password"/>
</div>
</template>
<script setup lang="ts" name="VModel">
    import { ref } from 'vue';
    import CustomInput from './CustomInput.vue';
    let username = ref('username');
    let password = ref('password');
</script>
<style lang="">

</style>