<script setup lang="ts">
const adminAlbumStore = useAdminAlbum()
let albums = await adminAlbumStore.getAlbumsToEvade()

definePageMeta({
  layout: "admin",
  middleware: "admin"
})


</script>
<template>
  <v-row>
    <v-col cols="4" v-for="album in albums" class="d-flex justify-center">
      <AlbumCard :album="album"></AlbumCard>
    </v-col>
  </v-row>

</template>