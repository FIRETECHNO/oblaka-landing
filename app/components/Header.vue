<script setup lang="ts">
import { useSmoothScroll } from '~/composables/useSmoothScroll'

const { scrollToId } = useSmoothScroll()

function handleScroll(id: string) {
  scrollToId(id, 100)
}
</script>

<template>
  <v-app-bar flat height="80">
    <v-container class="d-flex justify-center">
      <v-row class="d-flex justify-center">
        <v-col cols="8" xl="6" lg="4" class="d-flex justify-space-between">
          <a href="#about-us" @click.prevent="handleScroll('about-us')">О нас</a>
          <a href="#menu" @click.prevent="handleScroll('menu')">Меню</a>
          <a href="#contacts" @click.prevent="handleScroll('contacts')">Контакты</a>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>