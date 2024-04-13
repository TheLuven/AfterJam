import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router.ts";
import naive from "naive-ui";

// Utiliser le routeur avec l'application Vue
createApp(App).use(router).use(naive).mount('#app')
