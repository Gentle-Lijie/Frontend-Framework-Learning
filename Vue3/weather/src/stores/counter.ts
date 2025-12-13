import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(parseInt(localStorage.getItem("counter_count") || "0"));
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  watch(count, (newVal) => {
    localStorage.setItem("counter_count", newVal.toString());
  });

  return { count, doubleCount, increment };
});

export const useFavsStore = defineStore("favs", () => {
  const favCities = ref<string[]>(
    JSON.parse(
      localStorage.getItem("favCities") ||
        '["Shanghai","Beijing","Ningbo","London","Tokyo","Paris","Kyoto"]'
    )
  );
  function add(city: string) {
    if (!favCities.value.includes(city)) {
      favCities.value.push(city);
    }
  }
  function remove(city: string) {
    favCities.value = favCities.value.filter((c) => c !== city);
  }

  watch(
    favCities,
    (newVal) => {
      localStorage.setItem("favCities", JSON.stringify(newVal));
    },
    { deep: true }
  );

  return { favCities, add, remove };
});
