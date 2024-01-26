<script setup lang="ts">
import LanguagePicker from './LanguagePicker.vue'
</script>

<template>
  <div class="pt-8 pb-8">
    <span class="font-bold text-2xl pl-2">{{ $t('settings') }}</span>
  </div>
  <LanguagePicker />
</template>
