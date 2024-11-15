import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import { store } from "./store/index.ts";

const app = createApp(App);
app.use(store);
app.mount("#app");
