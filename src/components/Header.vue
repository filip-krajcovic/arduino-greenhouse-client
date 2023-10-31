<script setup lang="ts">
import ThemeButton from './ThemeButton.vue'
import MenuButton from './MenuButton.vue'
import { useStatusStore } from '@/stores/status.store';
import { storeToRefs } from 'pinia'


const store = useStatusStore()

const { on: state } = storeToRefs(store)
</script>


<template>
	<div class="bg-cyan-800 dark:bg-neutral-800 text-white py-4 px-4 flex">
		<div class="flex flex-auto justify-between">
			<div class="flex">
				<MenuButton />
				<RouterLink to="/">
					<span class="text-xl pl-3">Arduino</span>
					<span class="rounded-full w-3 h-3 ml-2 border bg-red-500 inline-block" :class="{'bg-red-500 border-red-600': !state, 'bg-green-500 border-green-600': state }"></span>
				</RouterLink>
			</div>
			<div class="flex">
				<ThemeButton />
			</div>
		</div>
	</div>
</template>