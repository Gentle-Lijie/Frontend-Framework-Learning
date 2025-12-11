<template>
    <div class="person" First Name: <input type="text" v-model="firstName" /><br />
    Last Name: <input type="text" v-model="lastName" /><br />
    <!-- The :xx="" determines that the content within the quotas are a string -->
    Full Name: <span>{{ fullName }}</span><br />
    <button @click="changeFullName">Change Full Name to 'Li Si'</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Person_Computed",
    }
</script>

<script setup lang="ts">
    // Your code for Person_Computed.vue goes here
    import { ref, computed } from 'vue';
    let firstName = ref("Zhang")
    let lastName = ref("San")

    function fullName2() {
        console.log("fullName2 called");
        return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + " " + lastName.value;
    }


    let fullName = computed({
        get() {
            console.log("fullName computed called");
            return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + " " + lastName.value;
        },
        set(val) {
            console.log("fullName computed set called");
            let names = val.split(" ");
            if (names.length === 2) {
                // The '!' is the TypeScript non-null assertion operator.
                // It asserts that 'names[0]' is not null or undefined, bypassing TypeScript's strict null checks.
                // This is useful when you are certain the value exists, but TypeScript cannot infer it from the type.
                firstName.value = names[0]!;
                lastName.value = names[1]!;
            }
        }
    })

    function changeFullName() {
        fullName.value = "Li Si";
    }

    // Note that fullName cannot be edited externally and directly, because it is computed from firstName and lastName
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

    body p {
        margin: 5px 0;
    }
</style>