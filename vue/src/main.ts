import { createApp } from "vue";
import Router from './router';
import Store from './store';
import App from "./App.vue";
import Dialog from "../src/components/dialog";

const app = createApp(App);

app.use(Dialog).use(Router).use(Store).mount('#app');
