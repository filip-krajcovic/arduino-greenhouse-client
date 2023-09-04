<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/users.store';

const store = useUserStore();

const { user, isAuthenticated } = storeToRefs(store);
</script> 

<template>
  <div>
    Nahradit JSON data naformatovanim udajov v tvare, napr. 
    <div>Meno: {{ user?.firstName }}</div>
    ...
  </div>
  <div v-if="isAuthenticated">
    {{ user }}
  </div>
</template>