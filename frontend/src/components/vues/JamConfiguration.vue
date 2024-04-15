<script lang="ts">

import {defineComponent} from "vue";
import SearchBar from "../utils/SearchBar.vue";
import VerifyTable from "../utils/VerifyTable.vue";
import JamConfigTab from "../utils/JamConfigTab.vue";

export default defineComponent({
  components: {VerifyTable, SearchBar, JamConfigTab}
})
</script>

<template>
  <n-layout class="content-container">
    <n-flex direction="column" align="center" justify="center" class="flex">
      <SearchBar/>
      <div class="config">
        <n-scrollbar height="80vh" inset>
          <JamConfigTab/>
        </n-scrollbar>
      </div>
      <n-layout-footer class="background">
        <n-space justify="end" class="footer">
          <n-button type="default" strong>Configuration par défault</n-button>
          <n-button type="primary" strong>Save</n-button>
          <n-button type="error" strong>Cancel</n-button>
        </n-space>
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

.footer {
  width: 85vw;
}

.flex {
  width: 100vw;
}

.config {
  width: 85vw;
  height: 72vh;
  padding-top: 10vh;
}

.background {
  background-color: var(--backgroundColor);
}
</style>