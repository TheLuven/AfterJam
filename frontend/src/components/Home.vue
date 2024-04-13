<script setup lang="ts">
import Menu from './Menu.vue';
</script>

<template>
  <div id="home">
    <n-space vertical >
      <n-layout has-sider>
      <Menu />
      <n-layout-content class="background-content">
        <span>Home</span>
      </n-layout-content>
        </n-layout>
    </n-space>
  </div>
</template>

<style scoped>
.background-content {
  background-color: var(--backgroundColor);
}
</style>