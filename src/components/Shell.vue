<script setup lang="ts">
import TheHeader from './Header.vue'
import Menu from './Menu.vue'
import { ref } from 'vue'

</script>

<template>
    <div class="container mx-auto overflow-hidden relative bg-white dark:bg-cyan-950 dark:text-white">
        <header>
            <TheHeader />
        </header>
        <main class="min-h-screen px-4">
            <RouterView />
        </main>
        <Menu />
    </div>
</template>
  
<style>

</style>
