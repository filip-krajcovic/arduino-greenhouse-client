import { defineStore } from 'pinia'
import { computed, ref, type Ref } from 'vue'

export type User = {
  id?: string
  uuid?: string
  username?: string
  firstName?: string
  lastName?: string
  email?: string
  emailVerified?: boolean
}

export const useUserStore = defineStore('user', () => {
  const user: Ref<User | undefined> = ref(undefined)

  const displayName = computed(() =>
    user.value && user.value.firstName && user.value.lastName
      ? `${user.value.firstName} ${user.value.lastName}`
      : ''
  )

  const isAuthenticated = computed(() => !!(user.value && user.value.username))

  const initials = computed(() => {
    return user.value?.firstName && user.value?.lastName
      ? `${user.value?.firstName?.slice(0, 1).toUpperCase()}. ${user.value?.lastName
          ?.slice(0, 1)
          .toUpperCase()}.`
      : undefined
  })

  return {
    user,
    initials,
    displayName,
    isAuthenticated,
  }
})
