<script setup lang="ts">
import TheHeader from './Header.vue'
import Menu from './Menu.vue'
import { ref } from 'vue'

const menuOpened = ref(false)

const openMenu = () => {
    menuOpened.value = true;
}

const closeMenu = () => {
    menuOpened.value = false;
}
</script>

<template>
    <div class="container mx-auto overflow-hidden relative bg-white dark:bg-cyan-950 dark:text-white">
        <header>
            <TheHeader @menu-open="openMenu"/>
        </header>
        <main class="min-h-screen px-4">
            <RouterView />
        </main>
        <Menu :opened="menuOpened" @menu-close="closeMenu"/>
    </div>
</template>
  
<style>

</style>
