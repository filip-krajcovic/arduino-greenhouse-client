<script setup lang="ts">
import { useMenuStore } from '@/stores/menu.store'
import { storeToRefs } from 'pinia'
import IconMenu from '@/icons/IconMenu.vue'
import IconClose from '@/icons/IconClose.vue'

const menuStore = useMenuStore()

const { closed } = storeToRefs(menuStore)

const { open, close } = menuStore

const toggleMenu = () => (closed.value ? open() : close())
</script>

<template>
  <button type="button" @click="toggleMenu" aria-label="btn-open-menu">
    <IconMenu v-if="closed" class="inline" />
    <IconClose v-else class="inline" />
  </button>
</template>
