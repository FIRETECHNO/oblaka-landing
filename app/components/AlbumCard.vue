<script setup lang="ts">
import type { IAlbumDb } from '~/types/IAlbum.interface';

const router = useRouter()
const props = defineProps<
    { album: IAlbumDb }
>()
function goToEdit(_id:string){
    router.push(`/admin/poster/edit?_id=${_id}`)
}
</script>
<template>
    <div class="slide mr-2 ml-2">
        <v-img :src="album.previewImage" :draggable="false" loading="lazy" height="100%" cover></v-img>
        <div class="w-100 d-flex justify-space-around">
            <v-btn icon="mdi-pencil-outline" @click="goToEdit(album._id)"></v-btn>
            <v-btn icon="mdi-trash-can-outline"></v-btn>
        </div>
    </div>
</template>
<style scoped></style>