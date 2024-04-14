<template>
      <n-layout-sider
          bordered
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :collapsed="collapsed"
          show-trigger
          @collapse="collapsed = true"
          @expand="collapsed = false"
          :class="['background', 'custom-slider']"
      >
        <n-layout-header class="background">
          <img src="../../../public/assets/LogoInversed.svg" alt="Logo" :class="collapsed ? 'logo-collapsed' : 'logo'"/>
        </n-layout-header>
        <n-divider class="divider"/>
        <n-menu
            :inverted="inverted"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
            class="custom-menu"
        />
        <n-layout-footer
            class="background"
            position="absolute"
        >
          <n-divider class="divider"/>
          <div class="settings-icon">
            <component :is="renderSettingsIcon()" class="icon"/>
            <n-avatar
                round
                size="medium"
                src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            />
          </div>
        </n-layout-footer>
      </n-layout-sider>
</template>
<script setup lang="ts">

import {h, ref} from 'vue'
import {MenuOption, NIcon} from 'naive-ui'
import {
  SettingsOutline as SettingsIcon,
} from '@vicons/ionicons5'
import {
  PeopleSettings20Regular as PeopleSettingsIcon
} from '@vicons/fluent'
import {
  ChecklistRtlSharp as ListIcon,
} from '@vicons/material'
import {
  Home as Home
} from '@vicons/carbon'

function renderIcon(icon: any) {
  return () => h(NIcon, null, {default: () => h(icon)})
}
function renderSettingsIcon() {
  return h(NIcon, null, { default: () => h(SettingsIcon) })
}
const collapsed = ref(false);
const inverted = ref(false);
const menuOptions: MenuOption[] = [
  {
    label: 'Acceuil',
    key: 'home',
    icon: renderIcon(Home)
  },
  {
    label: 'Vérifier',
    key: 'verified',
    icon: renderIcon(ListIcon),
  },
  {
    label: 'Jam Session',
    key: 'configure',
    icon: renderIcon(PeopleSettingsIcon)
  }
]
</script>
<style scoped>
.custom-slider {
  height: 100vh;
  position: relative;
}
.background {
  background-color: var(--secondaryBackground);
}
.settings-icon {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 15px;
}
.icon {
  font-size: 34px;
 }
.logo {
  width: 60px; /* Adjust as needed */
  height: auto; /* This will maintain the aspect ratio */
  margin-top: 10px;
}

.logo-collapsed {
  width: 30px;
  height: auto;
  margin-top: 10px;
}
.divider {
  margin-top: 7px;
  margin-bottom: 7px;
}
</style>