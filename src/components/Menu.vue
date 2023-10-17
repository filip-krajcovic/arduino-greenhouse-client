<script setup lang="ts">
import IconBook from '@/icons/IconBook.vue';
import IconHistory2 from '@/icons/IconHistory2.vue';
import IconNotification from '@/icons/IconNotification.vue';
import IconProfile from '@/icons/IconProfile.vue';
import IconRight from '@/icons/IconRight.vue';
import IconSettings from '@/icons/IconSettings.vue';
import { computed } from 'vue';
import UserTitle from './UserTitle.vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/users.store';
import { login } from '@/modules/iam/authentication';
import { useMenuStore } from '@/stores/menu.store';

const store = useUserStore()

const { isAuthenticated } = storeToRefs(store)

const menuStore = useMenuStore()

const { closed } = storeToRefs(menuStore)

const { close } = menuStore

</script>

<template>
  <aside class="absolute top-0 bottom-0 left-0 right-0 bg-white dark:bg-neutral-800 transition-all transform duration-500 will-change-transform" :class="{ closed }">
    <h1 class="font-bold text-2xl pl-8 pb-5 pt-8">
      <UserTitle />
    </h1>
    <RouterLink v-if="isAuthenticated" class="flex items-center justify-between mx-8 mb-4" to="profile" @click="close">
      <div class="flex items-center">
        <IconProfile class="w-5 h-5 mb-0.5"/>
        <p class="pl-3 text-black/80 dark:text-white font-light">Môj účet</p>
      </div>
      <IconRight/>
    </RouterLink>
    <div v-else class="flex items-center mx-8 mb-4">
      <button @click="login" class="px-4 py-2 bg-cyan-800 text-white rounded-lg w-full sm:w-auto">Prihlásiť</button>
    </div>
    <div class="h-px bg-neutral-300 dark:bg-neutral-600"></div>
    <!--<RouterLink class="flex items-center justify-between mx-8 mt-8" to="settings" @click="close">
      <div class="flex items-center">
        <IconSettings class="w-4 h-4"/>
        <p class="pl-3 text-base text-black/80 dark:text-white font-light">Nastavenia</p>
      </div>
      <IconRight/>
    </RouterLink>-->
    <RouterLink class="flex justify-between items-center mx-8 mt-8" to="history" @click="close">
      <div class="flex items-center">
        <IconHistory2 class="w-4 h-4"/>
        <p class="pl-3 text-base text-black/80 dark:text-white font-light">História</p>
      </div>
      <div class="flex">
      <IconRight/>
      </div>
    </RouterLink>
    <RouterLink class="flex items-center justify-between mx-8 mt-8" to="notifications" @click="close">
      <div class="flex items-center">
        <IconNotification class="w-4 h-4 mb-px"/>
        <p class="pl-3 text-base text-black/80 dark:text-white font-light">Notifikácie</p>
      </div>
      <IconRight/>
    </RouterLink>
    <RouterLink class="flex items-center justify-between mx-8 mt-8" to="catalogue" @click="close">
      <div class="flex items-center">
        <IconBook class="w-4 h-4 "/>
        <span class="pl-3 text-base text-black/80 dark:text-white font-light">Katalóg</span>
      </div>
      <IconRight/>
    </RouterLink>
    
  </aside>
</template>

<style scoped>
aside {
  margin-top: 60px;
}
aside.closed {
  transform: translateX(-110%);
}
aside:not(.closed) {
  transform: translateX(0%);
}
</style>
