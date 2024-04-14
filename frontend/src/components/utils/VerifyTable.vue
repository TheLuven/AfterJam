<template>
  <n-layout class="background">
    <n-p>
      You have selected {{ checkedRowKeys.length }} row{{
        checkedRowKeys.length < 2 ? '' : 's'
      }}.
    </n-p>
    <n-data-table
        :checked-row-keys="checkedRowKeys"
        :row-key="(song: Song) => song.key"
        :columns="columns"
        :data="data"
        :pagination="pagination"
        :bordered="true"
        class="table"
        @update:checked-row-keys="handleCheckedRowKeys"
    />
  </n-layout>
</template>

<script lang="ts">
import {defineComponent, h, ref} from 'vue'
import {DataTableColumns } from 'naive-ui'
import {Clock,Check,X} from '@vicons/tabler'

type Song = {
  key: number
  album: string
  title: string
  artist: string
  length: string
  state: string
}
const checkedRowKeysRef = ref<Array<string | number>>([])
const createColumns = (): DataTableColumns<Song> => {
  return [
    {
      type: 'selection',
      options: [
        'all',
        'none'
      ],
      width: 50
    },
    {
      title: 'No',
      key: 'key',
      width: 50
    },
    {
      title : 'Pochette',
      key: 'cover',
      width: 100,
      render() {
        return h('img', {
          src: 'https://via.placeholder.com/150',
          style: {
            width: '58px',
            height: '58px',
            borderRadius: '5%'
          }
        })
      }
    },
    {
      title : 'Album',
      key: 'album',
      width: 400
    },
    {
      title: 'Titre',
      key: 'title',
      width: 400
    },
    {
      title: 'Artiste',
      key: 'artist',
      width: 300
    },
    {
      title: 'Durée',
      key: 'length',
      width: 150
    },
    {
      title: 'Etat',
      key: 'state',
      width: 80,
      render(row: Song) {
        switch (row.state) {
          case 'verified':
            return h(Check, { width: '20', height: '20' });
          case 'refused':
            return h(X, { width: '20', height: '20' });
          case 'waiting':
            return h(Clock, { width: '20', height: '20' });
          default:
            return null;
        }
      }
    }
  ]
}

const data: Song[] = [
  {key: 3, album : 'Whats the story',title: 'Wonderwall',artist:'Oasis', length: '4:18',state: 'verified'},
  {key: 4, album : 'The Wall',title: 'Another brick in the wall',artist:'Pink Floyd', length: '3:12',state: 'refused'},
  {key: 5, album : 'The Wall',title: 'Comfortably numb',artist:'Pink Floyd', length: '6:22',state: 'waiting'},
  {key: 6, album : 'The Wall',title: 'Hey you',artist:'Pink Floyd', length: '4:40',state: 'verified'},
  {key: 7, album : 'The Wall',title: 'Mother',artist:'Pink Floyd', length: '5:32',state: 'verified'},
  {key: 8, album : 'The Wall',title: 'Run like hell',artist:'Pink Floyd', length: '4:20',state: 'verified'},
  {key: 9, album : 'The Wall',title: 'The trial',artist:'Pink Floyd', length: '5:13',state: 'verified'},
  {key: 10, album : 'The Wall',title: 'Waiting for the worms',artist:'Pink Floyd', length: '4:04',state: 'verified'},
  {key: 11, album : 'The Wall',title: 'Young lust',artist:'Pink Floyd', length: '3:25',state: 'verified'},
  {key: 12, album : 'The Wall',title: 'One of my turns',artist:'Pink Floyd', length: '3:41',state: 'verified'},
  {key: 13, album : 'The Wall',title: 'Don\'t leave me now',artist:'Pink Floyd', length: '4:08',state: 'verified'},



]

export default defineComponent({
  setup() {
    const handleCheckedRowKeys = (newCheckedRowKeys: Array<string | number>) => {
      checkedRowKeysRef.value = newCheckedRowKeys;
    };
    return {
      data,
      columns: createColumns(),
      pagination: {
        pageSize: 7
      },
      Clock,
      Check,
      X,
      checkedRowKeys: checkedRowKeysRef.value,
      handleCheckedRowKeys
    }
  }
})
</script>

<style scoped>
.icon {
  font-size: 2px; /* Adjust this value to change the size of the icons */
}

.table {
  height: 78vh; /* Adjust this value to change the height of the table */
  overflow-x: clip; /* Add this line to enable scrolling if the content exceeds the height */
  overflow-y: auto; /* Add this line to enable scrolling if the content exceeds the height */
}
.background {
  background-color: var(--backgroundColor);
}
</style>