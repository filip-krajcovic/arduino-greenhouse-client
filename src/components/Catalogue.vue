<script setup lang="ts">
import IconLeft from '@/icons/IconLeft.vue'
import rajcinaImageUrl from '../assets/RAJCINA.png'
import paprikaImageUrl from '../assets/PAPRIKA.png'
import chilliImageUrl from '../assets/CHILLI.png'

const items = [
  {
    url: rajcinaImageUrl,
    name: {
      sk: 'Rajčiak jedlý',
      latin: 'Solanum lycopersicum',
    },
    class: 'w-20 h-22 pt-4'
  },
  {
    url: paprikaImageUrl,
    name: {
      sk: 'Paprika ročná',
      latin: 'Capsicum annuum',
    },
    class: 'w-18 h-24'
  },
  {
    url: chilliImageUrl,
    name: {
      sk: 'Chilli',
      latin: 'Capsicum',
    },
    class: 'h-24'
  },
  {
    url: rajcinaImageUrl,
    name: {
      sk: 'Rajčiak jedlý',
      latin: 'Solanum lycopersicum',
    },
    class: 'w-20 h-22 pt-4'
  },
  {
    url: paprikaImageUrl,
    name: {
      sk: 'Paprika ročná',
      latin: 'Capsicum annuum',
    },
    class: 'w-18 h-24'
  },
  {
    url: chilliImageUrl,
    name: {
      sk: 'Chilli',
      latin: 'Capsicum',
    },
    class: 'h-24'
  },
]


</script>


<template>
    <div class="pt-8 pb-10">
        <span class="font-bold text-2xl text-gray-950/80">Katalóg</span>
    </div>
    <div class="grid grid-cols-2 grid-rows-3 gap-3 px-2">
      <div v-for="item in items" class="grid  items-center px-4 py-4 flex-col shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.15)] rounded-lg">
        <div class="flex justify-center pb-6">
          <img :src="item.url" :class="item.class ?? 'w-24 h-26'" />
        </div>
        <div class="flex flex-col self-end">
          <h2 class="font-black text-black/90">{{ item.name.sk }}</h2>
          <i class="text-sm text-black/70">{{ item.name.latin }}</i>
        </div>
      </div>
    </div>

</template>