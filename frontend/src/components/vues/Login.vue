<script lang="ts">
import {defineComponent} from 'vue'
import {NIcon} from "naive-ui";
import {BrandSpotify} from "@vicons/tabler";
import router from "../../router.ts";
export default defineComponent({
  data() {
    return {
      router: router
    }
  },
  setup() {
    return {
      BrandSpotify
    }
  }
})
</script>

<template>
  <n-card class="card" >
    <img src="../../../public/assets/LogoInversed.svg" alt="Logo" class="logo"/>
    <n-tabs default-value="signin" size="large" justify-content="space-evenly">
      <n-tab-pane name="signin" tab="Se connecter">
        <n-form>
          <n-form-item-row label="Nom d'utilisateur">
            <n-input />
          </n-form-item-row>
          <n-form-item-row label="Mot de passe">
            <n-input />
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block secondary strong>
          Se connecter
        </n-button>
      </n-tab-pane>
      <n-tab-pane name="signup" tab="S'inscrire">
        <n-form>
          <n-form-item-row label="Nom d'utilisateur">
            <n-input />
          </n-form-item-row>
          <n-form-item-row label="Mot de passe">
            <n-input />
          </n-form-item-row>
          <n-form-item-row label="Confirmer le mot de passe">
            <n-input />
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block secondary strong>
          S'inscrire
        </n-button>
      </n-tab-pane>
    </n-tabs>
    <n-divider/>
    <n-button type="primary" class="spotify" block secondary strong @click="">
      <n-icon :component="BrandSpotify" class="icon pointer"/>
      Se connecter avec Spotify
    </n-button>
  </n-card>
  <n-button type="text" class="jam" @click="router.push('/home')">Rejoindre une Jam Session</n-button>
</template>

<style scoped>
.card {
  width: 30vw;
  margin: 0 auto;
  margin-top: 100px;
  background-color: var(--secondaryBackground);
}
.logo {
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
}
.icon {
  color: var(--textColor);
  font-size: 5vh;
  padding: 8px;
}

.pointer{
  cursor: pointer;
}
.spotify {
  background-color: #1DB954;
  color: white;
  padding: 10px;
  margin-top: 20px;
  height: 8vh;
}
.jam {
  margin-top: 20px;
  color: #fff;
  font-size: 15px;
}
</style>