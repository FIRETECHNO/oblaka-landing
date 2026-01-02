<script setup lang="ts">
import type { IPosterDb } from '~/types/IPoster.interface';
const router = useRouter()
const posterAdminStore = useAdminPoster()
const props = defineProps<
    { poster: IPosterDb }
>()
function goToEdit(_id: string) {
    router.push(`/admin/poster/edit?_id=${_id}`)
}
</script>
<template>
    <div class="slide mr-2 ml-2">
        <v-img :src="poster.images[0]" :draggable="false" loading="lazy" height="100%" cover></v-img>
        <div class="w-100 d-flex justify-space-around">
            <v-btn icon="mdi-pencil-outline" @click="goToEdit(poster._id)" v-if="poster.eventDate == ''"></v-btn>
            <v-btn icon="mdi-trash-can-outline" @click="posterAdminStore.deletePoster(poster._id)"></v-btn>
        </div>
    </div>
</template>
<style scoped></style>