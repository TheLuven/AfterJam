<script setup lang="ts">
import Menu from '../permanent/Menu.vue';
import Carousel from '../utils/Carousel.vue'
</script>

<template>
  <div id="home">
    <n-space vertical>
      <n-layout has-sider>
        <Menu/>
        <n-flex justify="center" class="background-content">
          <Carousel/>
        </n-flex>
      </n-layout>
    </n-space>
  </div>
</template>

<style scoped>
.background-content {
  background-color: var(--backgroundColor);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>