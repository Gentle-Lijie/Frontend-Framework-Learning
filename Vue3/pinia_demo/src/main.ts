import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import emitter from "@/utils/emitter";

const app = createApp(App);
app.use(createPinia());
app.mount("#app");
