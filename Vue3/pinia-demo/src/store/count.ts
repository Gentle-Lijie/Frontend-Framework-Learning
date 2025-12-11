import { defineStore } from "pinia";

export const useCountStore = defineStore("count", {
  actions: {
    increment(value: number) {
      this.sum += value;
    },
    decrement(value: number) {
      this.sum -= value;
    },
  },
  state: () => ({
    sum: 0,
  }),
  getters: {
    bigSum(): number {
      return this.sum * 10;
    },
  },
});

// console.log(useCountStore);
