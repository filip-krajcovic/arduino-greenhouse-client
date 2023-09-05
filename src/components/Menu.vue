<script setup lang="ts">
import IconBook from '@/icons/IconBook.vue';
import IconClose from '@/icons/IconClose.vue';
import IconHistory2 from '@/icons/IconHistory2.vue';
import IconNotification from '@/icons/IconNotification.vue';
import IconProfile from '@/icons/IconProfile.vue';
import IconRight from '@/icons/IconRight.vue';
import IconSettings from '@/icons/IconSettings.vue';
import { computed } from 'vue';
import UserTitle from './UserTitle.vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/users.store';
import { login, logout } from '@/modules/iam/authentication';

const store = useUserStore();

const { isAuthenticated } = storeToRefs(store);

const props = defineProps(['opened'])
const emit = defineEmits(['menu-close'])

const close = () => {
  emit('menu-close')
}

const closed = computed(()=> !props.opened)

</script>

<template>
  <aside class="absolute top-0 bottom-0 left-0 right-0 bg-white transition-all transform duration-500 will-change-transform" :class="{ closed }">
    <button class="absolute top-0 right-0 mt-8 mr-6" @click="close" type="button" aria-label="btn-close-menu">
      <IconClose class="w-8 h-8"/>
    </button>
    <h1 class="font-bold text-2xl pl-8 pb-5 pt-20">
      <UserTitle />
    </h1>
    <RouterLink v-if="isAuthenticated" class="flex items-center justify-between mx-8 mb-4" to="profile" @click="close">
      <div class="flex items-center">
        <IconProfile class="w-5 h-5 mb-0.5"/>
        <p class="pl-3 text-black/80 font-light">Môj účet</p>
      </div>
      <IconRight/>
    </RouterLink>
    <div v-else class="flex items-center mx-8 mb-4">
      <button @click="login" class="px-4 py-2 bg-cyan-800 text-white rounded-lg w-full sm:w-auto">Prihlásiť</button>
    </div>
    <div class="h-px bg-gray-300"></div>
    <RouterLink class="flex items-center justify-between mx-8 mt-8" to="settings" @click="close">
      <div class="flex items-center">
        <IconSettings class="w-5 h-5"/>
        <p class="pl-3 text-base text-black/80 font-light">Nastavenia</p>
      </div>
      <IconRight/>
    </RouterLink>
    <RouterLink class="flex justify-between items-center mx-8 mt-8" to="history" @click="close">
      <div class="flex items-center">
        <IconHistory2 class="w-5 h-5"/>
        <p class="pl-3 text-base text-black/80 font-light">História</p>
      </div>
      <div class="flex">
      <IconRight/>
      </div>
    </RouterLink>
    <RouterLink class="flex items-center justify-between mx-8 mt-8" to="notifications" @click="close">
      <div class="flex items-center">
        <IconNotification class="w-5 h-5 mb-px"/>
        <p class="pl-3 text-base text-black/80 font-light">Notifikácie</p>
      </div>
      <IconRight/>
    </RouterLink>
    <RouterLink class="flex items-center justify-between mx-8 mt-8" to="catalogue" @click="close">
      <div class="flex items-center">
        <IconBook class="w-5 h-5 "/>
        <span class="pl-3 text-base text-black/80 font-light">Katalóg</span>
      </div>
      <IconRight/>
    </RouterLink>
    <div v-if="isAuthenticated" class="flex items-center mx-8 mb-4 mt-8">
      <div class="h-px bg-gray-300"></div>
      <button @click="logout" class="px-4 py-2 bg-cyan-800 text-white rounded-lg w-full sm:w-auto">Odhlásiť</button>
    </div>
  </aside>
</template>

<style scoped>
aside.closed {
  transform: translateX(-110%);
}
aside:not(.closed) {
  transform: translateX(0%);
}
</style>
