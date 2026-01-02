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
  <v-row class="d-flex justify-center">
    <v-col cols="10">
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="poster in posters">
          <PosterCard :poster="poster"></PosterCard>
        </v-col>
      </v-row>
    </v-col>
  </v-row>

</template>