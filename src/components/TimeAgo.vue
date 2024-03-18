<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { sk, enUS } from 'date-fns/locale'
import { computed } from 'vue'

const props = defineProps({
  datetime: Date,
})

const { locale } = useI18n()

const loc = computed(() => (locale.value === 'sk-SK' ? sk : enUS))
</script>

<template>
  <timeago v-if="datetime" :datetime="datetime" :locale="loc" />
</template>
