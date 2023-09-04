<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/users.store';
import { logout } from '@/modules/iam/authentication';


const store = useUserStore();

const { user, isAuthenticated } = storeToRefs(store);
</script> 


<template>
  <div v-if="isAuthenticated">
  <div class="flex items-center justify-between pt-8">
      <span class="font-semibold text-2xl">Profil</span>
  </div>
  <div class="pt-5">
      <span>Email</span>
  </div>
  <div class="pt-2">
      <span class="text-slate-400">{{ user.email }}</span>
  </div>
  <div class="pt-12">
      <span class="text-black/80 font-light text-sm">Meno</span>
  </div>
  <div class="pt-3 pb-2">
      <input v-model="user.firstName" class="focus:outline-none" type="text" disabled>
  </div>
  <div class="h-px bg-gray-300"></div>
  <div class="pt-6">
      <span class="text-black/80 font-light  text-sm">Priezvisko</span>
  </div>
  <div class="pt-3 pb-2">
      <input v-model="user.lastName" class="focus:outline-none" type="text" disabled>
  </div>
  <div class="h-px bg-gray-300"></div>
  <div class="pt-8">
    <button @click="logout" class="text-red-600">Odhlásiť sa</button>
  </div>
  </div>

</template>