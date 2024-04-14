<script lang="ts">
import { defineComponent } from 'vue'
import { ListSearch } from '@vicons/tabler'

export default defineComponent({
  setup () {
    return {
      ListSearch
    }
  }
})
</script>

<template>
  <n-input round placeholder="Rechercher une musique">
    <template #suffix>
      <n-icon :component="ListSearch" class="icon"/>
    </template>
  </n-input>
</template>

<style scoped>

</style>