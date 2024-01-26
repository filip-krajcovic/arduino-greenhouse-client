<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/users.store'

const store = useUserStore()

const { user, isAuthenticated } = storeToRefs(store)
</script>

<template>
  <span v-if="isAuthenticated && user">{{ `${$t('hello')}, ${user?.firstName}!` }}</span>
  <span v-else>{{ $t('youAreNotLoggedIn') }}</span>
</template>
