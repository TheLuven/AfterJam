<script setup lang="ts">
import SearchBar from "../utils/SearchBar.vue";
import VerifyTable from "../utils/VerifyTable.vue";
</script>

<template>
  <n-layout class="content-container">
    <n-flex direction="column" align="center" justify="center" class="flex">
      <SearchBar/>
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

.flex {
  width: 100vw;
}

.table {
  width: 80%;
  padding-top: 5vh;
}

</style>