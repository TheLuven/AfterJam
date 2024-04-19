<template>
  <n-space vertical align="center" justify="center" class="container">
    <img src="../../../public/assets/LogoInversed.svg" alt="Logo" class="logo"/>
    <n-card style="width: 300px;" class="background">

      <template #header>
        <span class="title">Rejoindre une Jam Session</span>
      </template>
      <n-space vertical>
        <n-input placeholder="Entrer le Jam Code"></n-input>
        <n-button type="primary">Valider</n-button>
      </n-space>
    </n-card>
    <n-button class="jam" type="success" round ghost @click="router.push('/login')">Se connecter</n-button>
  </n-space>
</template>

<script setup lang="ts">
import {NCard, NInput, NButton, NSpace} from 'naive-ui'
import router from "../../router.ts";
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust as needed */
  width: 100vw;
  background-color: var(--secondaryBackground);
}

.background {
  background-color: var(--backgroundColor);
}

.jam {
  margin-top: 20px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  color: #fff;
}

.logo {
  width: 100%;
  height: 25vh;
  margin-bottom: 20px;
}
</style>