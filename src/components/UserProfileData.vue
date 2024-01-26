<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/users.store'
import { logout } from '@/modules/iam/authentication'

const store = useUserStore()
const { user, isAuthenticated } = storeToRefs(store)
</script>

<template>
  <div v-if="user && isAuthenticated">
    <div class="flex items-center justify-between pt-8">
      <span class="font-semibold text-2xl">{{ $t('profile') }}</span>
    </div>
    <div class="pt-5">
      <span class="text-black/80 dark:text-neutral-300 font-light text-sm">{{ $t('email') }}</span>
    </div>
    <div class="pt-3 pb-1">
      <span
        class="focus:outline-none w-full bg-transparent text-black dark:text-white"
        type="text"
        >{{ user.email }}</span
      >
    </div>
    <div class="h-px bg-neutral-300 dark:bg-neutral-600"></div>
    <div class="pt-6">
      <span class="text-black/80 dark:text-neutral-300 font-light text-sm">{{ $t('name') }}</span>
    </div>
    <div class="pt-3 pb-1">
      <span
        class="focus:outline-none w-full bg-transparent text-black dark:text-white"
        type="text"
        >{{ user.firstName }}</span
      >
    </div>
    <div class="h-px bg-neutral-300 dark:bg-neutral-600"></div>
    <div class="pt-6">
      <span class="text-black/80 dark:text-neutral-300 font-light text-sm">{{
        $t('surname')
      }}</span>
    </div>
    <div class="pt-3 pb-1">
      <span
        class="focus:outline-none w-full bg-transparent text-black dark:text-white"
        type="text"
        >{{ user.lastName }}</span
      >
    </div>
    <div class="h-px bg-neutral-300 dark:bg-neutral-600"></div>
    <div class="pt-8">
      <button @click="logout" class="px-4 py-2 bg-cyan-800 text-white rounded-lg w-full sm:w-auto">
        {{ $t('logout') }}
      </button>
    </div>
  </div>
</template>
