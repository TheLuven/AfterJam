<script setup lang="ts">
import { ref } from 'vue'
import { NGrid, NGridItem, NImage } from 'naive-ui'

const playSpotify = ref([
{ id :1, name: 'Playlist 1', cover: '../../public/assets/albumcovers/1.jpg' },
{ id :2, name: 'Playlist 1', cover: '../../public/assets/albumcovers/1.jpg' },
{ id :3, name: 'Playlist 1', cover: '../../public/assets/albumcovers/1.jpg' },
{ id :4, name: 'Playlist 1', cover: '../../public/assets/albumcovers/1.jpg' },
{ id :5, name: 'Playlist 1', cover: '../../public/assets/albumcovers/1.jpg' },
{ id :6, name: 'Playlist 1', cover: '../../public/assets/albumcovers/1.jpg' },
{ id :7, name: 'Playlist 1', cover: '../../public/assets/albumcovers/1.jpg' },

])
const playUser = ref([
{ id :8,name: 'Playlist 2', cover: '../../public/assets/albumcovers/2.jpg' },
{ id :9,name: 'Playlist 2', cover: '../../public/assets/albumcovers/2.jpg' },
{ id :10,name: 'Playlist 2', cover: '../../public/assets/albumcovers/2.jpg' },
{ id :11,name: 'Playlist 2', cover: '../../public/assets/albumcovers/2.jpg' },
{ id :12,name: 'Playlist 2', cover: '../../public/assets/albumcovers/2.jpg' },
{ id :13,name: 'Playlist 2', cover: '../../public/assets/albumcovers/2.jpg' },
{ id :14,name: 'Playlist 2', cover: '../../public/assets/albumcovers/2.jpg' },
{ id :15,name: 'Playlist 2', cover: '../../public/assets/albumcovers/2.jpg' },

])
const playFavorite = ref([
{ id :3,name: 'Playlist 3', cover: '../../public/assets/albumcovers/3.png' },
{ id :10,name: 'Playlist 3', cover: '../../public/assets/albumcovers/3.png' },
{ id :18,name: 'Playlist 3', cover: '../../public/assets/albumcovers/3.png' },
{ id :19,name: 'Playlist 3', cover: '../../public/assets/albumcovers/3.png' },
{ id :20,name: 'Playlist 3', cover: '../../public/assets/albumcovers/3.png' },
{ id :21,name: 'Playlist 3', cover: '../../public/assets/albumcovers/3.png' },
{ id :22,name: 'Playlist 3', cover: '../../public/assets/albumcovers/3.png' },
{ id :23,name: 'Playlist 3', cover: '../../public/assets/albumcovers/3.png' },
{ id :24,name: 'Playlist 3', cover: '../../public/assets/albumcovers/3.png' },
])

const selectedPlaylistId = ref(null)

const selectPlaylist = (playlist) => {
  selectedPlaylistId.value = playlist.id
}
</script>

<style scoped>
.playlist-name {
  color: white;
}
/* ... */
.selected {
  border: 4px solid #fff;
}
.image {
  border-radius: 10px;
}
</style>

<template>
  <n-collapse>
    <n-collapse-item title="Vos Playlists favorites." name="1">
      <div class="param-space">
        <n-grid :cols="6" gap="lg">
          <n-grid-item v-for="(playlist, index) in playFavorite" :key="index" @click="selectPlaylist(playlist)" :class="{ selected: playlist.id === selectedPlaylistId }">
            <n-image :src="playlist.cover" width="100%" height="auto" preview-disabled class="image"/>
            <span class="playlist-name">{{ playlist.name }}</span>
          </n-grid-item>
        </n-grid>
      </div>
    </n-collapse-item>
  </n-collapse>
  <n-collapse>
    <n-collapse-item title="Vos Playlists" name="2">
      <div class="param-space">
        <n-grid :cols="6" gap="lg">
          <n-grid-item v-for="(playlist, index) in playUser" :key="index" @click="selectPlaylist(playlist)" :class="{ selected: playlist.id === selectedPlaylistId }">
            <n-image :src="playlist.cover" width="100%" height="auto" preview-disabled/>
            <span class="playlist-name">{{ playlist.name }}</span>
          </n-grid-item>
        </n-grid>
      </div>
    </n-collapse-item>
  </n-collapse>
  <n-collapse>
    <n-collapse-item title="Playlists de Spotify" name="2">
      <div class="param-space">
        <n-grid :cols="6" gap="lg">
          <n-grid-item v-for="(playlist, index) in playSpotify" :key="index" @click="selectPlaylist(playlist)" :class="{ selected: playlist.id === selectedPlaylistId }">
            <n-image :src="playlist.cover" width="100%" height="auto" preview-disabled/>
            <span class="playlist-name">{{ playlist.name }}</span>
          </n-grid-item>
        </n-grid>
      </div>
    </n-collapse-item>
  </n-collapse>
</template>