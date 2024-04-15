<script>
import customTheme from "./customTheme.ts";
import { defineComponent } from 'vue'
import { NThemeEditor } from 'naive-ui'
import Blank from "./components/vues/Blank.vue";

export default defineComponent({
  computed: {
    customTheme() {
      return customTheme
    }
  },
  components: {
    Blank,
    NThemeEditor
  }
})

</script>

<template>
  <n-config-provider :theme-overrides="customTheme">
  <n-theme-editor>
    <div id="app" class="app">
      <Blank/>
    </div>
  </n-theme-editor>
  </n-config-provider>
</template>

<style scoped>

</style>
