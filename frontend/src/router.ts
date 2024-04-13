import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import Home from './components/Home.vue';
// Importez d'autres composants de route nécessaires

const routes = [
    { path: '/login', component: Login },
    { path: '/home', component: Home },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
