<script lang="ts">
import {defineComponent, h, watch} from "vue";
import {ListSearch} from "@vicons/tabler";
import {ArrowBackFilled} from "@vicons/material";
import { Plus as PlusIcon } from "@vicons/tabler";
import { NButton } from 'naive-ui';

const data: Song[] = [
  {key: 3, album : 'Whats the story',title: 'Wonderwall',artist:'Oasis', length: '4:18',cover: '../../public/assets/albumcovers/1.jpg'},
  {key: 3, album : 'Whats the story',title: 'Wonderwall',artist:'Oasis', length: '4:18',cover: '../../public/assets/albumcovers/1.jpg'},
  {key: 3, album : 'Whats the story',title: 'Wonderwall',artist:'Oasis', length: '4:18',cover: '../../public/assets/albumcovers/1.jpg'},
  {key: 3, album : 'Whats the story',title: 'Wonderwall',artist:'Oasis', length: '4:18',cover: '../../public/assets/albumcovers/1.jpg'},
  {key: 3, album : 'Whats the story',title: 'Wonderwall',artist:'Oasis', length: '4:18',cover: '../../public/assets/albumcovers/1.jpg'},
  {key: 3, album : 'Whats the story',title: 'Wonderwall',artist:'Oasis', length: '4:18',cover: '../../public/assets/albumcovers/1.jpg'},
  {key: 3, album : 'Whats the story',title: 'Wonderwall',artist:'Oasis', length: '4:18',cover: '../../public/assets/albumcovers/1.jpg'},
  {key: 3, album : 'Whats the story',title: 'Wonderwall',artist:'Oasis', length: '4:18',cover: '../../public/assets/albumcovers/1.jpg'},
  {key: 3, album : 'Whats the story',title: 'Wonderwall',artist:'Oasis', length: '4:18',cover: '../../public/assets/albumcovers/1.jpg'},
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
  setup(props, { emit }) {
    const closeDrawer = () => {
      emit('update:active', false);
    };
    watch(() => props.active, (newVal) => {
      emit('update:active', newVal);
    });
    const columns = [
      {
        title: '',
        key: 'cover',
        render: (row: Song) => h('n-image', { src: row.cover, width: '100', height: '100' })
      },
      {
        title: '',
        key: 'title',
        render: (row: Song) => h('div', {}, [
          h('div', row.title),
          h('div', row.artist)
        ])
      },
      {
        title: '',
        key: 'length'
      },
      {
        title: '',
        key: 'actions',
        render: () => h(NButton, { type: 'primary' }, { default: () => h(PlusIcon) })
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
  <n-drawer v-model:show="active" :width="500" placement="right" class="drawer" :trap-focus="false" to="#container" >
    <n-space class="background space">
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
    <n-drawer-content class="background">
      <n-space class="background">
        <n-data-table
            :columns="columns"
            :data="data"
            :bordered="false"
            class="background"
        />
      </n-space>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped>
.drawer {
  background-color: var(--backgroundColor);
}
.background {
  background-color: var(--backgroundColor);
}
.space {
  padding: 20px;
}
</style>