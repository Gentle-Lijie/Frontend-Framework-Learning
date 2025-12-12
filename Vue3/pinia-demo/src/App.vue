<template>
  <link rel="stylesheet" href="@/style.css" />
  <!-- <VModel /> -->
  <Communication />
  <Count />
  <Word />
</template>

<script setup lang="ts" name="App">
  import Count from "@/components/Count.vue";
  import Word from "@/components/Word.vue";
  import Communication from "./components/Communication.vue";
  import VModel from "@/components/VModel.vue";
</script>