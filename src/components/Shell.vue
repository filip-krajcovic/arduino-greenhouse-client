<script setup lang="ts">
import TheHeader from './Header.vue'
import TheFooter from './Footer.vue';
</script>

<template>
    <div class="container mx-auto">
        <header class="absolute top-1 h-8">
            <TheHeader />
        </header>
        <main class="min-h-screen py-8">
            <RouterView />
        </main>
    </div>
</template>
  
<style>

</style>
