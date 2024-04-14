<script setup lang="ts">

</script>

<template>
  <n-layout class="carousel">
    <n-carousel
        effect="card"
        prev-slide-style="transform: translateX(-125%) translateZ(-400px) translateY(-10%);"
        next-slide-style="transform: translateX(25%) translateZ(-400px) translateY(-10%);"
        :show-dots="false"
        :show-arrow="false"
        manual="false"
        :touchable="false"
    >
      <n-carousel-item :style="{ width: '25vw' }">
        <div class="carousel-content">
          <img
              class="carousel-img"
              src="../../../public/assets/albumcovers/1.jpg"
          >
          <div class="carousel-title">Under the Bridge</div>
          <div class="carousel-group">Red Hot Chili Peppers</div>
        </div>
      </n-carousel-item>
      <n-carousel-item :style="{ width: '25vw' }">
        <div class="carousel-content">
          <img
              class="carousel-img"
              src="../../../public/assets/albumcovers/2.jpg"
          >
          <div class="carousel-title">Bring Me To Life</div>
          <div class="carousel-group">Evanescence</div>
        </div>
      </n-carousel-item>
      <n-carousel-item :style="{ width: '25vw' }">
        <div class="carousel-content">
          <img
              class="carousel-img"
              src="../../../public/assets/albumcovers/3.png"
          >
          <div class="carousel-title">Borderline</div>
          <div class="carousel-group">Tam Impala</div>
        </div>
      </n-carousel-item>
      <n-carousel-item :style="{width: '25vw' }">
        <div class="carousel-content">
          <img
              class="carousel-img"
              src="../../../public/assets/albumcovers/4.png"
          >
          <div class="carousel-title">Do I Wanna Know?</div>
          <div class="carousel-group">Arctic Monkeys</div>
        </div>
      </n-carousel-item>
      <n-carousel-item :style="{ width: '25vw' }">
        <div class="carousel-content">
          <img
              class="carousel-img"
              src="../../../public/assets/albumcovers/5.jpg"
          >
          <div class="carousel-title">Californication</div>
          <div class="carousel-group">Red Hot Chili Peppers</div>
        </div>
      </n-carousel-item>
      <n-carousel-item :style="{width: '25vw' }">
        <div class="carousel-content">
          <img
              class="carousel-img"
              src="../../../public/assets/albumcovers/6.jpg"
          >
          <div class="carousel-title">American Idiot</div>
          <div class="carousel-group">Green Day</div>
        </div>
      </n-carousel-item>
    </n-carousel>
    <div class="carousel-overlay"></div>
  </n-layout>
</template>

<style scoped>
.carousel-img {
  width: 80%;
  height: auto;
  object-fit: cover;
  border-radius: 15px;
  aspect-ratio: 1/1;
}
.carousel {
  position: relative;
  background-color: var(--backgroundColor);
  width: 100vw;
  height: 50vw;
}
.carousel-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel-title {
  width: 100%;
  color: white;
  text-align: left;
  padding-left: 5.5vw;
  padding-top: 0.5vw;
  font-weight: bold;
  font-size: 1.2vw;
}
.carousel-group {
  width: 100%;
  color: white;
  text-align: left;
  padding-left: 5.5vw;
  font-size: 1vw;
}
.carousel-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>