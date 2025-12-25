<script setup lang="ts">
import type { ICocktail } from '~/types/ICocktail.interface';

let props = defineProps<{
  cocktail: ICocktail,
  index: Number,
  isLast: Boolean
}>()


const isEven = computed(() => Number(props.index) % 2 === 0)

</script>
<template>
  <v-row>
    <v-col cols="12">
      <v-row class="d-none d-md-flex" style="height: 80vh;">
        <v-col cols="6" :order="isEven ? 1 : 2" class="pa-8 d-flex flex-column justify-space-between"
          :class="isEven ? 'align-end' : 'align-start'">
          <div>
            <div v-if="index == 0" class="d-flex justify-space-between">
              <BackButton :button-text="'На главную страницу'" />
              <img src="/icons/logo.png" class="logo" alt="">
            </div>
            <div v-else class="d-flex justify-end">
              <img src="/icons/logo.png" class="logo" alt="">
            </div>

            <h1>{{ cocktail.name }}</h1>

            <p>{{ cocktail.description }}</p>
            <br>
            <b>Ингредиенты: </b>
            <p>{{ cocktail.ingredients }}</p>
          </div>

          <img src="/icons/long-arrow.svg" v-if="!isLast" style="height: 150px;" alt="">
        </v-col>
        <v-col cols="6" style="height: 80vh;" :order="isEven ? 2 : 1">
          <v-img :src="cocktail.images[0]" alt="" cover position="center" />
        </v-col>
      </v-row>
      <v-row class="d-flex d-md-none">
        <v-col cols="12" class="pa-8 ">
          <v-row>
            <v-col cols="12" v-if="index == 0" class="py-5 d-flex align-center justify-space-between">
              <v-btn icon="mdi-arrow-left" to="/" variant="tonal"></v-btn>

              <img src="/icons/logo.png" class="logo" alt="">
            </v-col>
            <v-col cols="12" v-else class="py-5 d-flex justify-end">
              <img src="/icons/logo.png" class="logo" alt="">
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="10">
              <h1>{{ cocktail.name }}</h1>

              <p>{{ cocktail.description }}</p>
              <br>
              <b>Ингредиенты: </b>
              <p>{{ cocktail.ingredients }}</p>
            </v-col>
            <v-col cols="2" class="d-flex justify-end align-end">
              <img src="/icons/long-arrow.svg" style="height: 150px;" alt="">
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-img :src="cocktail.images[0]" alt="" cover position="center" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<style scoped>
.logo {
  height: 60px;
  width: 60px;
}

p {
  font-size: clamp(1.125rem, 0.7273rem + 1.1364vw, 1.625rem);
}
</style>