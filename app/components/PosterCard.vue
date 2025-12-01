<script setup lang="ts">
import type { Poster } from '../types/posters.interface';
let { variant, posters } = defineProps<{
    variant: String,
    posters: Poster[],
}>()

</script>
<template>
    <v-col v-for="(poster, index) in posters" :key="index" class="">

        <v-img :src="poster.images[0]" contain class="rounded-lg mr-2 ml-2">
            <h2 v-if="variant == 'past'" class="text">{{ poster.label }}</h2>
        </v-img>
    </v-col>
</template>
<style scoped>
.text{
    text-align: center;
}
</style>