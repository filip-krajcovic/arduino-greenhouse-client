<script setup lang="ts">

import { items } from '@/services/catalogue.service';




</script>


<template>
    <div class="pt-8 pb-8">
        <span class="font-bold text-2xl pl-2">{{ $t('catalogue') }}</span>
    </div>
    <div class="grid grid-cols-2 grid-rows-3 gap-3 px-2">
      <RouterLink v-for="item in items" :to="{ name: 'cataloguedetail', params: { id: item.id } }" class="grid items-center px-5 py-5 flex-col shadow-[0px_0px_15px_1px_rgba(0,0,0,0.15)] rounded-lg dark:bg-neutral-800">
        <div class="flex justify-center pb-6">
          <img :src="item.url" :class="item.class ??'w-24 h-26'" />
        </div>
        <div class="flex flex-col self-end">
          <h2 class="font-black text-black/90 dark:text-white">{{ item.name.sk }}</h2>
          <i class="text-sm text-black/70 dark:text-neutral-200">{{ item.name.latin }}</i>
        </div>
      </RouterLink>
    </div>

</template>