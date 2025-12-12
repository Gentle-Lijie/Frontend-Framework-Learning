<template lang="">
  <div>
    <input class="custom-input" :value="name" @input="emit('update:name', $event.target.value)" placeholder="Input Username" type="text" />
    <input class="custom-input" :value="pwd" @input="emit('update:pwd', $event.target.value)" placeholder="Input Password" type="password" />
  </div>
</template>
<script setup lang="ts" name="CustomInput">
    import { ref } from "vue";
    let props = defineProps(['name', 'pwd']);
    const emit = defineEmits(['update:name', 'update:pwd']);
</script>
<style lang="css">
    .custom-input {
        margin: 1em 1em 1em 1em;
        padding: 8px 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
        outline: none;
        transition: border-color 0.3s;
    }

    .custom-input:focus {
        border-color: #007bff;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);

    }
</style>
