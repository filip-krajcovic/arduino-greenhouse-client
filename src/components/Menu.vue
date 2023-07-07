<script setup lang="ts">
import IconClose from '@/icons/IconClose.vue';
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
    <button class="absolute top-0 right-0 pt-2 pr-2" @click="close">
      <IconClose/>
    </button>
  </aside>
</template>

<style>
.closed {
  transform: translateX(-100%);
}
</style>