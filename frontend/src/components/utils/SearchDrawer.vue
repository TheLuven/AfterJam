<script lang="ts">
import {defineComponent, h, watch} from "vue";
import {ListSearch} from "@vicons/tabler";
import {ArrowBackFilled} from "@vicons/material";
import {Plus as PlusIcon} from "@vicons/tabler";
import {NButton} from 'naive-ui';

const data: Song[] = [
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '1.jpg'
  },
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '../../public/assets/albumcovers/1.jpg'
  },
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '../../public/assets/albumcovers/1.jpg'
  },
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '../../public/assets/albumcovers/1.jpg'
  },
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '../../public/assets/albumcovers/1.jpg'
  },
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '../../public/assets/albumcovers/1.jpg'
  },
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '../../public/assets/albumcovers/1.jpg'
  },
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '../../public/assets/albumcovers/1.jpg'
  },
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '../../public/assets/albumcovers/1.jpg'
  },
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '../../public/assets/albumcovers/1.jpg'
  },
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '../../public/assets/albumcovers/1.jpg'
  },
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '../../public/assets/albumcovers/1.jpg'
  },
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '../../public/assets/albumcovers/1.jpg'
  },
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '../../public/assets/albumcovers/1.jpg'
  },
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '../../public/assets/albumcovers/1.jpg'
  },
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '../../public/assets/albumcovers/1.jpg'
  },
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '../../public/assets/albumcovers/1.jpg'
  },
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '../../public/assets/albumcovers/1.jpg'
  },
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '../../public/assets/albumcovers/1.jpg'
  },
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '../../public/assets/albumcovers/1.jpg'
  },
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '../../public/assets/albumcovers/1.jpg'
  },
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '../../public/assets/albumcovers/1.jpg'
  },
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '../../public/assets/albumcovers/1.jpg'
  },
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '../../public/assets/albumcovers/1.jpg'
  },
  {
    key: 3,
    album: 'Whats the story',
    title: 'Wonderwall',
    artist: 'Oasis',
    length: '4:18',
    cover: '../../public/assets/albumcovers/1.jpg'
  },
]

type Song = {
  key: number
  album: string
  title: string
  artist: string
  length: string
  cover: string
}
export default defineComponent({
  props: {
    active: Boolean
  },
  setup(props, {emit}) {
    const closeDrawer = () => {
      emit('update:active', false);
    };
    watch(() => props.active, (newVal) => {
      emit('update:active', newVal);
    });
    const columns = [
      {
        title: '',
        width: 150,
        key: 'cover',
        render() {
          return h('img', {
            src: 'https://via.placeholder.com/150',
            style: {
              width: '100px',
              height: '100px',
              borderRadius: '5%'
            }
          })
        }
      },
      {
        title: '',
        key: 'title',
        width: 400,
        render: (row: Song) => h('div', {}, [
          h('div', row.title),
          h('div', row.artist)
        ])
      },
      {
        title: '',
        key: 'length',
        width: 100
      },
      {
        title: '',
        key: 'actions',
        width: 50,
        render: () => h(NButton, {type: 'primary'}, {default: () => h(PlusIcon)})
      }
    ];
    return {
      columns,
      data,
      ListSearch,
      ArrowBackFilled,
      PlusIcon,
      closeDrawer
    }
  }
})
</script>

<template>
  <n-drawer v-model:show="active" :width="800" placement="right" class="drawer" :trap-focus="false" to="#container">
    <n-drawer-content class="background">
      <n-space>
        <n-space class="background">
          <n-button type="success" @click="closeDrawer">
            <n-icon>
              <n-icon :component="ArrowBackFilled"/>
            </n-icon>
            Retour
          </n-button>
          <n-input round placeholder="Rechercher une musique" class="input">
            <template #suffix>
              <n-icon :component="ListSearch" class="icon"/>
            </template>
          </n-input>
        </n-space>
        <n-scrollbar style="max-height: 90vh">
          <n-space class="background">
            <n-data-table
                :columns="columns"
                :data="data"
                :bordered="false"
                :showHeader="false"
                class="background tab"
            />
          </n-space>
        </n-scrollbar>
      </n-space>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped>

.background {
  background-color: var(--backgroundColor);
}

.space {
  padding: 30px;
}

.tab {
  width: 750px;
}
</style>