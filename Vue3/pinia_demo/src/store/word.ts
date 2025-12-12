import { defineStore } from "pinia";

export const useWordStore = defineStore("word", {
  actions: {
    async getQuote() {
      try {
        const response = await fetch("https://api.kanye.rest/");
        const data = await response.json();
        console.log(data);
        this.quote.unshift(data.quote);
      } catch (error) {
        console.error("Error fetching quote:", error);
        this.quote = ["Failed to fetch quote"];
      }
      if (this.quote.length > 5) {
        this.quote.pop();
      }
    },
  },
  state: () => ({
    quote:
      localStorage.getItem("wordStore") == null
        ? []
        : JSON.parse(localStorage.getItem("wordStore")),
  }),
});

// console.log(useCountStore);
