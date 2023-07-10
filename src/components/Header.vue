<script setup lang="ts">
import IconMenu from '@/icons/IconMenu.vue'
import IconHistory from '@/icons/IconHistory.vue';

const emit = defineEmits(['menu-open'])

const openMenu = () => {
    emit('menu-open')
}
</script>

<template>
    <div class="bg-cyan-800 text-white py-4 px-4 flex">
        <div class="flex flex-auto justify-between">
            <div class="flex">
                <button type="button" @click="openMenu" aria-label="btn-open-menu">
                    <IconMenu class="inline" />
                </button>
                <span class="text-xl pl-2">Arduino</span>
            </div>
            <div class="flex">
                <RouterLink to="history">
                    <IconHistory />
                </RouterLink>
            </div>
        </div>
    </div>
</template>