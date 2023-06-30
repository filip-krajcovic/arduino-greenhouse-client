<script setup lang="ts">
import TheHeader from './Header.vue'
import TheFooter from './Footer.vue';
</script>

<template>
    <div class="container mx-auto">
        <header>
            <TheHeader />
        </header>
        <main class="min-h-screen px-4">
            <RouterView />
        </main>
    </div>
</template>
  
<style>

</style>
