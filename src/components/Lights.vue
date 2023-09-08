<script setup lang="ts">

const emits = defineEmits(['lights-turn-on', 'lights-turn-off'])

</script>

<template>
  <div class="flex flex-col">
    <h1 class="text-2xl text-black/70 dark:text-white font-bold pb-2">Svetlá</h1>
    <div class="inline-flex drop-shadow-[0_2px_4px_rgba(0,0,0,0.18)] pt-2">
      <button @click="emits('lights-turn-off')" class="bg-gray-300 dark:bg-cyan-800 rounded-l-lg  py-3 px-3 hover:bg-red-500 dark:hover:bg-red-500 hover:text-white">Vypnúť</button>
      <button @click="emits('lights-turn-on')" type="button" class="bg-gray-300 dark:bg-cyan-800 rounded-r-lg py-3 px-3 hover:bg-green-600 dark:hover:bg-green-600 hover:text-white">Zapnúť</button>
    </div>
    <h3 class="text-black/70 dark:text-slate-200 font-extralight pt-3">Svetlá sú <span class="text-green-600 dark: text-green-300 font-bold pt-1"> zapnuté</span>
    </h3>
  </div>
</template>