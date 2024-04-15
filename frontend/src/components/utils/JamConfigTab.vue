<script setup lang="ts">
import PlaylistGrid from "./playlistGrid/PlaylistGrid.vue";
</script>

<template>
  <n-collapse>
    <n-collapse-item title="Sélectionner une Playlist." name="1">
      <n-space class="param-space" style="padding-bottom: 10px" align="center">
        <n-space vertical align="start">
          <span class="param"> Désactriver les Playlists</span>
          <span class="param-desc"> La Jam Session ne jouera que les musiques proposées par les utilisateurs.</span>
        </n-space>
        <n-switch/>
      </n-space>
        <PlaylistGrid/>
      <template #header-extra>
        Sélectionner la playlist qui sera joué lors de la Jam Session.
      </template>
    </n-collapse-item>
    <n-collapse-item title="Configuration des propositions." name="2">
      <n-space vertical align="start" class="param-space">
        <n-space align="center">
          <n-space vertical align="start">
            <span class="param"> Validation automatique</span>
            <span class="param-desc"> Les musiques seront validées et ajoutées automatiquement à la playlist sans intervention du Jam Leader.</span>
          </n-space>
          <n-switch/>
        </n-space>
        <n-space align="center">
          <n-space vertical align="start">
            <span class="param"> Désactriver les musiques explicites</span>
            <span class="param-desc"> Les musiques explicites ne seront pas ajoutées automatiquement même si la validation automatique est activée.</span>
          </n-space>
          <n-switch/>
        </n-space>
      </n-space>
      <template #header-extra>
        Configurations des propositions des utilisateurs de la Jam Session.
      </template>
    </n-collapse-item>
    <n-collapse-item title="Caractéristiques de la Jam Session." name="3">
      <n-space vertical align="start" class="param-space">
        <n-space align="center">
          <n-space vertical align="start">
            <span class="param"> Nom de la Jam Session</span>
            <span class="param-desc"> Nom affiché aux utilisateurs présent dans la Jam Session.</span>
          </n-space>
          <n-input type="text" placeholder="Jam Name"/>
        </n-space>
        <n-space align="center">
          <n-space vertical align="start">
            <span class="param"> Code de la Jam Session</span>
            <span class="param-desc"> Ce code sera utilisé par les utilisateurs pour rejoindre la Jam Session.</span>
          </n-space>
          <n-input type="text" placeholder="Jam Code"/>
        </n-space>
        <n-space align="center">
          <n-space vertical align="start">
            <span class="param"> Conserver la Jam</span>
            <span class="param-desc"> Cette Jam Session sera conservée et réutilisée pour vos prochaines soirée. Le nom et le code restera identique.</span>
          </n-space>
          <n-switch/>
        </n-space>
        <n-space align="center">
          <n-space vertical align="start">
            <span class="param"> Fréquence des musiques ajoutées</span>
            <span class="param-desc"> Plus cette valeur sera élevée plus les musiques jouée seront celles des utilisateurs. Exemple : 50% revient à une musique sur deux.</span>
            <n-space>
              <n-text>0%</n-text>
              <n-slider class="slider"/>
              <n-text>100%</n-text>
            </n-space>
          </n-space>
        </n-space>
      </n-space>
      <template #header-extra>
        Configurations des caractéristiques de la Jam Session.
      </template>
    </n-collapse-item>
  </n-collapse>
</template>

<style scoped>
.param {
  font-size: 1.2em;
  font-weight: bold;
  color: #fff;
}

.param-desc {
  font-size: 1em;
  color: rgba(255, 255, 255, 0.43);
}

.param-space {
  padding-left: 2em;
  padding-right: 2em;
}

.slider {
  width: 40vw;
}
</style>