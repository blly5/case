import { createApp } from "vue";
import Router from './router';
import Store from './store';
import App from "./App.vue";

const app = createApp(App);

app.use(Router).use(Store).mount('#app');
