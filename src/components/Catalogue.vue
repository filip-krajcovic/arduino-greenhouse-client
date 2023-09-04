<script setup lang="ts">
import IconLeft from '@/icons/IconLeft.vue'
import rajcinaImageUrl from '../assets/RAJCINA.png'
import paprikaImageUrl from '../assets/PAPRIKA.png'
import chilliImageUrl from '../assets/Chilli2.png'
import bazalkaImageUrl from '../assets/Bazalka.png'
import mataImageUrl from '../assets/Mata.png'
import redkovkaImageUrl from '../assets/Redkovka.png'


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
    class: 'w-28 h-22 pt-3'
  },
  {
    url: redkovkaImageUrl,
    name: {
      sk: 'Reďkev siata',
      latin: 'Raphanus sativus',
    },
    class: 'h-28 w-22' 
  },
  {
    url: mataImageUrl,
    name: {
      sk: 'Mäta pieporná',
      latin: 'Mentha piperita ',
    },
    class: 'w-28 h-20'
  },
  {
    url: bazalkaImageUrl,
    name: {
      sk: 'Bazalka pravá',
      latin: 'Ocimum basilicum',
    },
    class: 'w-28 h-20'
  },
]


</script>


<template>
    <div class="pt-8 pb-8">
        <span class="font-bold text-2xl text-gray-950/80 pl-2">Katalóg</span>
    </div>
    <div class="grid grid-cols-2 grid-rows-3 gap-3 px-2">
      <div v-for="item in items" class="grid  items-center px-5 py-5 flex-col shadow-[0px_0px_15px_1px_rgba(0,0,0,0.15)] rounded-lg">
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