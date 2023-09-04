<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { login, logout } from '@/modules/iam/authentication';
import { useUserStore } from '@/stores/users.store';

const store = useUserStore();

const { isAuthenticated } = storeToRefs(store);
</script> 

<template>
  <button v-if="isAuthenticated" @click="logout">Odhlásiť</button>
  <button v-else @click="login">Prihlásiť</button>
</template>