import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const opened = ref(false)
  const closed = computed(() => !opened.value)

  const open = () => opened.value = true

  const close = () => opened.value = false

  return {
    opened,
    closed,
    open,
    close,
  }
})
