<script setup lang="ts">

import Menu from "../permanent/Menu.vue";
</script>

<template>
  <div class="background">
    <n-layout has-sider class="background-content">
      <Menu v-if="$route.path !== '/login' && $route.path !== '/join-jam' "/>
      <router-view></router-view>
    </n-layout>
  </div>
</template>

<style scoped>
.background-content {
  background-color: var(--backgroundColor);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}
</style>