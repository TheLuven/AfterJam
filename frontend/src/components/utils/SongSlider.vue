<script lang="ts">
import {defineComponent, ref} from 'vue'
import {Pause} from '@vicons/carbon'
import {Next20Regular as Next,
  HeartCircle24Filled as Heart} from '@vicons/fluent'
import {DotsVertical} from '@vicons/tabler'

export default defineComponent({
  setup() {
    return {
      value: ref(50),
      Pause,
      Next,
      DotsVertical,
      Heart
    }
  }
})
</script>

<template>
  <n-layout class="background">
    <n-space vertical >
      <n-space justify="space-between">
        <n-space vertical>
          <span>Proposé par :</span>
          <span>Jean-Luc92</span>
        </n-space>
        <div>
          <n-icon :component="Next" class="iconReversed"/>
          <n-icon :component="Pause" class="icon"/>
          <n-icon :component="Next" class="icon"/>
        </div>
        <div>
          <n-icon :component="DotsVertical" class="icon"/>
          <n-icon :component="Heart" class="icon"/>
          <span>100</span>
        </div>
      </n-space>
      <div class="slider-container">
        <n-text class="timer">00:15</n-text>
        <n-slider v-model:value="value" :step="0.1" class="slider"/>
        <n-text class="timer">02:10</n-text>
      </div>
    </n-space>
  </n-layout>
</template>

<style scoped>
.slider-container {
  display: flex;
  align-items: center; /* This will vertically align the items if they have different heights */
  justify-content: space-between; /* This will put some space between the items */
}

.background {
  background-color: var(--backgroundColor);
  height: 13vh;
}

.timer {
  padding: 1px;
}

.slider {
  width: 93%;
  border-radius: 5px;
}

.icon {
  color: var(--textColor);
  font-size: 4vh;
  padding: 8px;
}

.iconReversed {
  color: var(--textColor);
  font-size: 4vh;
  transform: scaleX(-1) !important; /* Add this line */
  padding: 8px;
}
</style>