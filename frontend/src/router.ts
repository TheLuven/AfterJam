import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/vues/Home.vue';
import Verify from "./components/vues/Verify.vue";
import Login from "./components/vues/Login.vue";
import JamConfiguration from "./components/vues/JamConfiguration.vue";

const routes = [
    { path: '/home', component: Home },
    { path: '/verify', component: Verify },
    { path: '/login', component: Login },
    { path: '/jam-config', component: JamConfiguration }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
