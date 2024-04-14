<script setup lang="ts">
import Menu from '../permanent/Menu.vue';
import SearchBar from "../utils/SearchBar.vue";
import VerifyTable from "../utils/VerifyTable.vue";
</script>

<template>
  <div id="home" class="background">
    <n-layout has-sider class="background-content">
      <Menu/>
      <n-layout class="content-container">
        <n-flex direction="column" align="center" justify="center" class="flex">
          <n-layout-header position="absolute">
            <n-flex direction="column" align="center" justify="center" class="flex-header">
              <div class="header">
                <n-space justify="space-between">
                  <n-space vertical align="start" >
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
    </n-layout>
  </div>
</template>

<style scoped>
.background-content {
  background-color: var(--backgroundColor);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.content-container {
  padding-top: 10vh;
  background-color: var(--backgroundColor);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.flex-slider{
  background-color: var(--backgroundColor);
}
.flex-header{
  background-color: var(--backgroundColor);
  padding-top: 4vh;
}
.flex {
  width: 100vw;
}

.slider{
  width: 80%;
  padding-bottom: 5vh;
}
.header{
  width: 95%;
}
.table{
  width: 80%;
  padding-top: 5vh;
}

</style>