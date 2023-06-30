<script setup lang="ts">
import IconLogo from '@/icons/IconLogo.vue'
import IconHistory from '@/icons/IconHistory.vue';
</script>

<template>
    <div class="bg-cyan-800 text-white py-4 px-4 flex">
        <div class="flex flex-auto justify-between">
            <div class="flex">
                <IconLogo class="inline"/>
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