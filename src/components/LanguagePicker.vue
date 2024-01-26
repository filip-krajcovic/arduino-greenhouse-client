<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale } from '@/plugins/i18n'

import Dropdown from 'primevue/dropdown'
import IconFlagEn from '@/icons/IconFlagEn.vue'
import IconFlagSk from '@/icons/IconFlagSk.vue'

const languages = ref([
  { code: 'en-US', icon: IconFlagEn },
  { code: 'sk-SK', icon: IconFlagSk },
])

const { locale }  = useI18n()

watch(locale, (value) => {
  setLocale(value)
})

const langCodes = languages.value.map(lang => lang.code)

const language = (code: string) => languages.value.find(v => v.code == code)

const langIcon = (code: string) => language(code)?.icon

</script>

<template>
  <label class="block mb-1">{{$t('language') }}</label>
  <Dropdown v-model="locale" :options="langCodes" optionLabel="name" class="w-full">
    <template #value="slotProps">
      <div v-if="slotProps.value" class="flex items-center">
        <component :is="langIcon(slotProps.value)" class="w-4 h-4"></component>
        <div class="pl-2">{{ $t(slotProps.value) }}</div>
      </div>
      <span v-else>
        {{ slotProps.placeholder }}
      </span>
    </template>
    <template #option="slotProps">
      <div class="flex items-center">
        <component :is="langIcon(slotProps.option)" class="w-4 h-4"></component>
        <div class="pl-2">{{ $t(slotProps.option) }}</div>
      </div>
    </template>
  </Dropdown>
</template>

