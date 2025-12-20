<script setup lang="ts">
const adminPosterStore = useAdminPoster()
await adminPosterStore.getPosters()
let posters = adminPosterStore.posters

definePageMeta({
  layout: "admin",
  middleware: "admin"
})


</script>
<template>
  <v-row>
    <v-col :span="4" v-for="poster in posters">
      <PosterCard :poster="poster"></PosterCard>
    </v-col>
  </v-row>

</template>