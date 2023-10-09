<script setup lang="ts">
import { items } from '@/services/catalogue.service';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
import { watch, ref, onMounted } from 'vue'
import IconLeaf from "@/icons/IconLeaf.vue"
const route = useRoute()
const data = ref()

const fetchCatalogueItem = (id: number) => {
    console.log('id', id)
    const i = items.find((item => item.id === id))
    console.log('item', i)
    data.value = i
}

onMounted(()=>{
    
    fetchCatalogueItem(+route.params.id)
})


</script>

<template>
    <div class="px-4">
        <div v-if="data">
            <div class="flex justify-center pt-20 pb-14">
                <img :src="data.url" class="w-6/12 md:w-3/12" />
            </div>
            <h1 class="font-bold text-3xl tracking-wide text-black/90 pb-1 dark:text-white ">{{ data.name.sk }}</h1>
            <span class="text-black/60 italic dark:text-white ">{{data.name.latin}}</span>
            <div class="pt-8">
                <div v-for="condition in data.conditions" class="flex pt-2"> 
                    <div><IconLeaf class="mr-2"/></div> 
                    <span>{{ condition }}</span>
                </div>
                    
                    <!--<div v-for="condition in data.conditions">{{ condition }} </div>-->
                
            </div>
        </div>
    </div>
</template>