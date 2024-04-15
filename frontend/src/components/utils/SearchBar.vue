<script lang="ts">
import {defineComponent, ref} from 'vue'
import {ListSearch} from '@vicons/tabler'
import {UserData} from '@vicons/carbon'

export default defineComponent({
  setup() {
    const jamLeader = ref(false);

    return {
      ListSearch,
      UserData,
      jamLeader
    }
  }
})
</script>

<template>
  <n-layout-header position="absolute">
    <n-flex direction="column" align="center" justify="center" class="flex-header">
      <div class="header">
        <n-space justify="space-between" align="center">
          <n-space vertical align="start">
            <span style="font-weight: bold; font-size: 1.1vw; color: #18a058">Nom de la Jam Session</span>
            <span style=" font-size: 1.1vw">Jam Code</span>
          </n-space>
          <n-space align="center" justify="center">
              <n-icon :component="UserData" class="icon-jam-user pointer"/>
              <span>153</span>
          </n-space>
          <n-space vertical align="end">
            <n-input round placeholder="Rechercher une musique" class="input">
              <template #suffix>
                <n-icon :component="ListSearch" class="icon"/>
              </template>
            </n-input>
            <n-button round type="error" v-if="!jamLeader">Quitter la Jam</n-button>
          </n-space>
        </n-space>
      </div>
    </n-flex>
  </n-layout-header>

</template>

<style scoped>
.flex-header {
  background-color: var(--backgroundColor);
  padding-top: 4vh;
}

.header {
  width: 95%;
}

.input {
  width: 13vw;
}
.icon-jam-user{
  color: #18a058;
  font-size: 1.5vw;
}
</style>