<script setup lang="ts">
import Carousel from '../utils/Carousel.vue'
import SongSlider from "../utils/SongSlider.vue";
import SearchBar from "../utils/SearchBar.vue";
</script>

<template>
  <n-layout class="content-container">
    <n-flex direction="column" align="center" justify="center" class="flex">
      <SearchBar/>
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



.flex {
  width: 100vw;
}

.slider {
  width: 80%;
  padding-bottom: 5vh;
}



.carousel {
  width: 100%;
  padding-top: 5vh;
}

</style>