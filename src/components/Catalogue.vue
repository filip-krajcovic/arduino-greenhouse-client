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
    class: 'w-20 h-22'
  },
  {
    url: paprikaImageUrl,
    name: {
      sk: 'Paprika ročná',
      latin: 'Capsicum annuum',
    },
    class: 'w-20 h-26'
  },
  {
    url: chilliImageUrl,
    name: {
      sk: 'Chilli',
      latin: 'Capsicum',
    },
    class: 'h-28'
  },
  {
    url: rajcinaImageUrl,
    name: {
      sk: 'Rajčiak jedlý',
      latin: 'Solanum lycopersicum',
    },
    class: 'w-20 h-22'
  },
  {
    url: paprikaImageUrl,
    name: {
      sk: 'Paprika ročná',
      latin: 'Capsicum annuum',
    },
    class: 'w-20 h-26'
  },
  {
    url: chilliImageUrl,
    name: {
      sk: 'Chilli',
      latin: 'Capsicum',
    },
    class: 'h-28'
  },
]


</script>


<template>
    <div class="pt-8 pb-10">
        <span class="font-bold text-2xl text-gray-950/80">Katalóg</span>
    </div>
    <div class="grid grid-cols-2 grid-rows-3 gap-3 px-2">
      <div v-for="item in items" class="grid  items-center flex-col shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.15)] rounded-2xl">
        <div class="flex justify-center pt-2">
          <img :src="item.url" :class="item.class ?? 'w-24 h-26'" />
        </div>
        <div class="flex flex-col self-end pb-2 px-4">
          <h2 class="font-black text-black/90">{{ item.name.sk }}</h2>
          <i class="text-black/70">{{ item.name.latin }}</i>
        </div>
      </div>
    </div>

</template>