<template>
  <div class="pt-4">
		<h1 class="text-2xl text-black/70 font-bold">Harmonogram</h1>
	</div>
	<div class="grid grid-cols-2 pt-4 ">
		<div class="flex flex-col">
			<h3 class="text-xl text-black/70 pb-2">Zapnúť</h3>
			<input class="text-black/70 text-2xl rounded-2xl bg-gray-300 px-4 py-1 " type="time" value="00:00">
		</div>

		<div class="flex flex-col">
			<h3 class="text-xl text-black/70 pb-2">Vypnúť</h3>
			<input class="text-black/70 text-2xl bg-gray-300 rounded-2xl px-4 py-1" type="time" value="00:00">
		</div>
	</div>
</template>