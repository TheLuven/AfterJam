<script lang="ts">
import {computed, defineComponent, ref} from 'vue'
import {Pause,UserProfile} from '@vicons/carbon'
import {
  Next20Regular as Next,
  HeartCircle24Filled as Heart
} from '@vicons/fluent'
import {DotsVertical} from '@vicons/tabler'

export default defineComponent({
  setup() {
    const value = ref(0);

    const formattedValue = computed(() => {
      const minutes = Math.floor(value.value / 60);
      const seconds = value.value % 60;
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    });

    const formatTooltip = (value: number) => {
      const minutes = Math.floor(value / 60);
      const seconds = value % 60;
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };
    const onNextClick = () => {
      console.log('Next icon clicked');
      // Add your logic here
    };

    const onPauseClick = () => {
      console.log('Pause icon clicked');
      // Add your logic here
    };

    const onHeartClick = () => {
      console.log('Heart icon clicked');
      // Add your logic here
    };

    const onBackClick = () => {
      console.log('Back icon clicked');
      // Add your logic here
    };
    return {
      value: ref(0),
      Pause,
      Next,
      DotsVertical,
      Heart,
      UserProfile,
      onBackClick,
      onNextClick,
      onPauseClick,
      onHeartClick,
      formattedValue,
      formatTooltip
    }
  }
})
</script>

<template>
  <n-layout class="background">
    <n-space vertical>
      <n-space justify="space-between">
        <div class="proposal-container">
          <n-icon :component="UserProfile" class="icon"/>
          <span>Jean-Luc</span>
        </div>
        <div>
          <n-icon :component="Next" class="iconReversed pointer" @click="onBackClick"/>
          <n-icon :component="Pause" class="icon pointer"  @click="onPauseClick"/>
          <n-icon :component="Next" class="icon pointer" @click="onNextClick"/>
        </div>
        <div class="like-container">
          <n-icon :component="DotsVertical" class="icon pointer"/>
          <n-icon :component="Heart" class="icon pointer" @click="onHeartClick"/>
          <span class="Like">100k</span>
        </div>
      </n-space>
      <div class="slider-container">
        <n-text class="timer">{{ formattedValue }}</n-text>
        <n-slider v-model:value="value" :step="1" :min="0" :max="120" :format-tooltip="formatTooltip" class="slider"/>
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

.like-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.proposal-container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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
.pointer{
  cursor: pointer;
}
</style>