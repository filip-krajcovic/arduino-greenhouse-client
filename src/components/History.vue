<script setup lang="ts">
import { computed, ref, watch, type Ref } from 'vue'
import VirtualScroller from 'primevue/virtualscroller'
import Skeleton from 'primevue/skeleton'

import { API } from '@/constants'
import { callApi } from '@/services/api.service'
import type { IMeasurement } from '@/services/measurement.interface'
import { useMeasurementsStore } from '@/stores/measurements.store'

const measurementsStore = useMeasurementsStore()

const measurementsCount = ref(0)
measurementsCount.value = await measurementsStore.measurementsCount

type CacheItem = {
  data: IMeasurement[]
  skip: number
  limit: number
}

const lazyItems: Ref<IMeasurement[] | unknown[]> = ref(
  Array.from({ length: measurementsCount.value })
)
const lazyLoading = ref(false)

const skip = ref(0)
const limit = ref(0)

const _first = ref(0)
const _last = ref(0)

const cache = new Map<string, CacheItem>()

const controller = new AbortController()
const signal = controller.signal

const url = computed(
  () => `${API.baseUrl}/${API.messagesEndpoint}?skip=${skip.value}&limit=${limit.value}`
)

watch(url, async (endpoint) => {
  if (cache.has(endpoint)) {
    const cacheItem: CacheItem | undefined = cache.get(endpoint)
    if (cacheItem) {
      lazyLoading.value = false
    }
  } else {
    lazyLoading.value = true
    const result = await callApi<Array<IMeasurement>>(`${endpoint}`, { signal })

    const data = result.map((value: IMeasurement) => ({
      ...value,
      timestamp: new Date(value.timestamp),
    }))

    const cacheItem: CacheItem = {
      data,
      skip: skip.value,
      limit: limit.value,
    }

    cache.set(endpoint, cacheItem)

    lazyItems.value.splice(skip.value, limit.value, ...data)
    lazyLoading.value = false
  }
})

const onLazyLoad = (event: any) => {
  const { first, last } = event

  _first.value = first
  _last.value = last

  const moduloFirst = first % 10
  const moduloLast = last % 10

  const _skip = Math.min(first - moduloFirst, lazyItems.value.length)
  const _limit = last - moduloLast - _skip

  console.log(`_skip: ${_skip}`)
  console.log(`_limit: ${_limit}`)

  console.log(`first: ${first}, modulo first ${first % 10}`)
  console.log(`last: ${last}, modulo last ${last % 10}`)

  skip.value = _skip
  limit.value = _limit
}
</script>

<template>
  <h1 class="pl-4 py-4 text-xl font-bold">{{ $t('measurementsList') }}</h1>
  <VirtualScroller
    :items="lazyItems"
    :itemSize="72"
    :loading="lazyLoading"
    showLoader
    :delay="0"
    lazy
    @lazy-load="onLazyLoad"
    class="border-1 surface-border border-round"
    style="height: 100vh"
  >
    <template v-slot:item="{ item, options }">
      <div
        style="height: 72px"
        class="p-4 shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.15)] rounded-2xl dark:bg-neutral-800 text-sm"
      >
        <div class="flex items-center" v-if="item">
          {{ `${$t('dateAndTime')}: ${new Date(item.timestamp).toLocaleString('sk-SK')}` }}
        </div>
        <div class="flex items-center" v-if="item && item.temperature">
          {{ `${$t('temperature')}: ${item.temperature}` }}°C
        </div>
        <div class="flex items-center" v-if="item && item.humidity">
          {{ `${$t('humidity')}: ${item.humidity}` }}%
        </div>
        <div class="flex items-center" v-if="item && item.soilMoisture">
          {{ `${$t('soilMoisture')}: ${item.soilMoisture}` }}%
        </div>
      </div>
    </template>
    <template v-slot:loader="{ options }">
      <div
        style="height: 72px"
        class="p-4 shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.15)] rounded-2xl dark:bg-neutral-800 text-sm"
      >
        <div class="flex items-center h-5">
          <Skeleton />
        </div>
        <div class="flex items-center h-5">
          <Skeleton width="50%" />
        </div>
      </div>
    </template>
  </VirtualScroller>
</template>

<style lang="css">
.p-virtualscroller-content,
.p-virtualscroller-loader {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
}

.p-virtualscroller-content::-webkit-scrollbar {
  width: 0;
}

.p-virtualscroller-content > div:first-child {
  margin-top: 0.5rem;
}
</style>
