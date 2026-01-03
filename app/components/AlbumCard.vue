<script setup lang="ts">
import type { IAlbumEvadeDb } from '~/types/IAlbum.interface';
const adminAlbumStore = useAdminAlbum()

const router = useRouter()
const props = defineProps<
    { album: IAlbumEvadeDb }
>()

</script>
<template>
    <div class="slide mr-2 ml-2 w-75 text-center border-lg">
        <h2>{{ album.url }}</h2>
        <div class="w-100 d-flex justify-space-around">
            <v-btn icon="mdi-trash-can-outline" @click="adminAlbumStore.deleteAlbumToEvade(album._id)"></v-btn>
        </div>
    </div>
</template>
<style scoped>
</style>