<script setup lang="ts">
const route = useRoute()

let _id = route.params._id as string;
</script>
<template>
  <v-row class="d-flex justify-center">
    <v-col cols="11" md="10">
      <BackButton :button-text="'На главную'" />
      <h1>
        Название альбома
      </h1>
    </v-col>
    <v-col cols="12" class="mt-10">
      {{ _id }}

    </v-col>
  </v-row>
</template>