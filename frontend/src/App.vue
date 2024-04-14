<script>
import customTheme from "./customTheme.ts";
import { defineComponent } from 'vue'
import { NThemeEditor } from 'naive-ui'

export default defineComponent({
  computed: {
    customTheme() {
      return customTheme
    }
  },
  components: {
    NThemeEditor
  }
})

</script>

<template>
  <n-config-provider :theme-overrides="customTheme">
  <n-theme-editor>
    <div id="app" class="app">
      <router-view> </router-view>
    </div>
  </n-theme-editor>
  </n-config-provider>
</template>

<style scoped>

</style>
