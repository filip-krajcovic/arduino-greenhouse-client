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
    <div class="container mx-auto">
        <header>
            <TheHeader @menu-open="openMenu"/>
        </header>
        <main class="min-h-screen px-4">
            <RouterView />
        </main>
    </div>
    <Menu :opened="menuOpened" @menu-close="closeMenu"/>
</template>
  
<style>

</style>
