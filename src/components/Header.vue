<script setup lang="ts">
import ThemeButton from './ThemeButton.vue'
import MenuButton from './MenuButton.vue'
</script>

<template>
	<div class="bg-cyan-800 dark:bg-neutral-800 text-white py-4 px-4 flex">
		<div class="flex flex-auto justify-between">
			<div class="flex">
				<MenuButton />
				<RouterLink to="/">
					<span class="text-xl pl-3">Arduino</span>
				</RouterLink>
			</div>
			<div class="flex">
				<ThemeButton />
			</div>
		</div>
	</div>
</template>