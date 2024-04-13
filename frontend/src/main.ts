import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router.ts";

// Utiliser le routeur avec l'application Vue
createApp(App).use(router).mount('#app')
