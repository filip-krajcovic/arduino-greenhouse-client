import { ref, reactive, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'

interface Notification {
  type: 'INFO' | 'WARN' | 'ERROR' | 'SUCCES'
  message: string
}

const messages = reactive([])
