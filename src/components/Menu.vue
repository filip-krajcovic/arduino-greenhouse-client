<script setup lang="ts">
import IconBook from '@/icons/IconBook.vue';
import IconClose from '@/icons/IconClose.vue';
import IconHistory2 from '@/icons/IconHistory2.vue';
import IconNotification from '@/icons/IconNotification.vue';
import IconProfile from '@/icons/IconProfile.vue';
import IconRight from '@/icons/IconRight.vue';
import IconSettings from '@/icons/IconSettings.vue';
import { computed } from 'vue';

const props = defineProps(['opened'])
const emit = defineEmits(['menu-close'])

const close = () => {
  emit('menu-close')
}

const closed = computed(()=> !props.opened)

</script>

<template>
  <aside class="absolute top-0 bottom-0 left-0 right-0 bg-white transition-all transform duration-500" :class="{ closed }">
    <button class="absolute top-0 right-0 pt-8 pr-6" @click="close">
      <IconClose class="w-8 h-8"/>
    </button>
    <h1 class="font-bold text-2xl pl-8 pb-5 pt-20">Ahoj, Filip!</h1>
    <div class="flex items-center justify-between px-8 pb-8">
      <div class="flex">
        <IconProfile class="w-6 h-6"/>
        <p class="pl-3 text-black/80 font-light">Môj účet</p>
      </div>
      <IconRight/>
    </div>
    <div class="h-px bg-gray-300"></div>
    <div class="flex items-center justify-between px-8 pt-8">
      <div class="flex">
        <IconSettings class="w-6 h-6"/>
        <p class="pl-3 text-base text-black/80 font-light">Nastavenia</p>
      </div>
      <IconRight/>
    </div>
    <div class="flex justify-between items-center pt-10 px-8">
      <div class="flex">
        <IconHistory2 class="w-6 h-6"/>
        <p class="pl-3 text-base text-black/80 font-light">História</p>
      </div>
      <IconRight/>
    </div>
    <div class="flex items-center justify-between pt-10 px-8">
      <div class="flex">
        <IconNotification class="w-6 h-6"/>
        <p class="pl-3 text-base text-black/80 font-light">Notifikácie</p>
      </div>
      <IconRight/>
    </div>
    <div class="flex items-center justify-between pt-10 px-8">
      <div class="flex">
        <IconBook class="w-6 h-6"/>
        <p class="pl-3 text-base text-black/80 font-light">Katalóg</p>
      </div>
      <IconRight/>
    </div>
  
  </aside>
</template>

<style>
.closed {
  transform: translateX(-100%);
}
</style>