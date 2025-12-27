<script setup lang="ts">
const adminAlbumStore = useAdminAlbum()
await adminAlbumStore.getAlbums()
let albums = adminAlbumStore.albums

definePageMeta({
  layout: "admin",
  middleware: "admin"
})


</script>
<template>
  <v-row>
    <v-col cols="4" v-for="album in albums">
      <AlbumCard :album="album"></AlbumCard>
    </v-col>
  </v-row>

</template>