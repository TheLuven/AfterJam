<script lang="ts">
import SearchBar from "../utils/SearchBar.vue";
import VerifyTable from "../utils/VerifyTable.vue";
import SearchDrawer from "../utils/SearchDrawer.vue";
import {defineComponent, onMounted, ref} from "vue";
import JamConfigTab from "../utils/JamConfigTab.vue";
export default defineComponent({
  components: {SearchDrawer, VerifyTable, SearchBar, JamConfigTab},
  setup() {
    const isContainerReady = ref(false);
    const isDrawerOpen = ref(false);

    onMounted(() => {
      isContainerReady.value = true;
    });

    const openDrawer = () => {
      isDrawerOpen.value = true;
    };

    const updateDrawerActive = (newVal) => {
      isDrawerOpen.value = newVal;
    };

    return {
      isContainerReady,
      isDrawerOpen,
      openDrawer,
      updateDrawerActive
    }
  }
})
</script>

<template>
  <n-layout class="content-container" id="container">
    <n-flex direction="column" align="center" justify="center" class="flex">
      <SearchBar @openDrawer="openDrawer"/>
      <div class="table">
        <verify-table/>
      </div>
    </n-flex>
    <SearchDrawer v-if="isContainerReady" :active="isDrawerOpen" @update:active="updateDrawerActive"/>
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