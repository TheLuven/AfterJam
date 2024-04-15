<script setup lang="ts">
import Menu from '../permanent/Menu.vue';
import Carousel from '../utils/Carousel.vue'
import SongSlider from "../utils/SongSlider.vue";
import SearchBar from "../utils/SearchBar.vue";
</script>

<template>
  <n-layout class="content-container">
    <n-flex direction="column" align="center" justify="center" class="flex">
      <n-layout-header position="absolute">
        <n-flex direction="column" align="center" justify="center" class="flex-header">
          <div class="header">
            <n-space justify="space-between">
              <n-space vertical align="start">
                <span style="font-weight: bold; font-size: 1.4vw; color: #18a058">Nom de la Jam Session</span>
                <span style=" font-size: 1.1vw">Jam Code</span>
              </n-space>
              <SearchBar/>
            </n-space>
          </div>
        </n-flex>
      </n-layout-header>
      <div class="carousel">
        <Carousel/>
      </div>
      <n-layout-footer position="absolute">
        <n-flex direction="column" align="center" justify="center" class="flex-slider">
          <div class="slider">
            <SongSlider/>
          </div>
        </n-flex>
      </n-layout-footer>
    </n-flex>
  </n-layout>
</template>

<style scoped>

.content-container {
  padding-top: 10vh;
  background-color: var(--backgroundColor);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.flex-slider {
  background-color: var(--backgroundColor);
}

.flex-header {
  background-color: var(--backgroundColor);
  padding-top: 4vh;
}

.flex {
  width: 100vw;
}

.slider {
  width: 80%;
  padding-bottom: 5vh;
}

.header {
  width: 95%;
}

.carousel {
  width: 100%;
  padding-top: 5vh;
}

</style>