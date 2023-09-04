<script setup lang="ts">
import IconMenu from '@/icons/IconMenu.vue'
import LoginButton from './LoginButton.vue'

const emit = defineEmits(['menu-open'])

const openMenu = () => {
    emit('menu-open')
}
</script>

<template>
    <div class="bg-cyan-800 text-white py-4 px-4 flex">
        <div class="flex flex-auto">
            <div class="flex">
                <button type="button" @click="openMenu" aria-label="btn-open-menu">
                    <IconMenu class="inline" />
                </button>
                <RouterLink to="/">
                    <span class="text-xl pl-2">Arduino</span>
                </RouterLink>
            </div>
        </div>
        <LoginButton />
    </div>
</template>