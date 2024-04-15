<script setup lang="ts">
import SearchBar from "../utils/SearchBar.vue";
import VerifyTable from "../utils/VerifyTable.vue";
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
      <div class="table">
        <verify-table/>
      </div>
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

.flex-header {
  background-color: var(--backgroundColor);
  padding-top: 4vh;
}

.flex {
  width: 100vw;
}

.header {
  width: 95%;
}

.table {
  width: 80%;
  padding-top: 5vh;
}

</style>