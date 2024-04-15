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
            <component v-if="!collapsed" :is="renderSettingsIcon()" class="icon pointer"/>
            <n-avatar
                v-if="isLoggedIn && !collapsed"
                round
                size="medium"
                src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                class="pointer"
            />
            <n-button v-if="!isLoggedIn && !collapsed && showButton" type="success" round ghost @click="router.push('/login')">S'inscrire</n-button>
            <n-icon v-if="collapsed" :component="renderRegisterIcon()" @click="router.push('/login')" class="icon-register pointer"/>
          </div>
        </n-layout-footer>
      </n-layout-sider>
</template>
<script setup lang="ts">
import router from "../../router.ts";
import {h, ref, watch} from 'vue'
import {MenuOption, NBadge, NIcon} from 'naive-ui'
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

import { SignInAlt as RegisterIcon } from '@vicons/fa';
const showButton = ref(false);
const value = ref(5); // Initialize it with a default value, for example, 0

// Add this function to render the register icon
function renderRegisterIcon() {
  return h(NIcon, null, { default: () => h(RegisterIcon) })
}
const isLoggedIn = ref(false);
function renderIcon(icon: any) {
  return () => h(NIcon, null, {default: () => h(icon)})
}
function renderSettingsIcon() {
  return h(NIcon, null, { default: () => h(SettingsIcon) })
}
const collapsed = ref(true);
const inverted = ref(false);
watch(collapsed, (newValue, oldValue) => {
  if (oldValue && !newValue) {
    setTimeout(() => {
      showButton.value = true;
    }, 75); // Adjust this value to match the duration of your uncollapse animation
  } else if (!oldValue && newValue) {
    showButton.value = false;
  }
});
const menuOptions: MenuOption[] = [
  {
    label: 'Accueil',
    key: 'home',
    icon: renderIcon(Home),
    onClick: () => router.push('/home')
  },
  {
    label: 'Vérifier',
    key: 'verified',
    icon: () => h(NBadge, { value: value.value, max: 99 }, { default: () => h(NIcon, null, { default: () => h(ListIcon) }) }),
    onClick: () => router.push('/verify')
  },
  {
    label: 'Jam Session',
    key: 'configure',
    icon: renderIcon(PeopleSettingsIcon),
    onClick: () => router.push('/jam-config')
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
.icon-register {
  font-size: 25px;
  color: #1DB954;
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