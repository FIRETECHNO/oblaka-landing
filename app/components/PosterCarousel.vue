<script setup lang="ts">
const {
  initializeCarousel,
  loadsecondPosters
} = usePosters()
let { variant } = defineProps<
  { variant: string }
>()
let carousel = ref()
let position = ref(0)
carousel.value = await initializeCarousel(variant) //props needed
watch(position, async (newValue) => {
  position.value = newValue
  carousel.value = await loadsecondPosters(carousel.value, position.value)
})
</script>
<template>
  <v-carousel cycle :show-arrows="false" interval="5000" hide-delimiters v-model="position">
    <v-carousel-item transition="cross-scale" reverse-transition="cross-scale">
      <v-row class="flex-nowrap h-100">
        <PosterCard :variant="variant" :posters="carousel.firstPosters"></PosterCard>
      </v-row>
    </v-carousel-item>
    <v-carousel-item transition="cross-scale" reverse-transition="cross-scale">
      <v-row class="flex-nowrap h-100">
        <PosterCard :variant="variant" :posters="carousel.secondPosters"></PosterCard>
      </v-row>
    </v-carousel-item>
    <v-carousel-item transition="cross-scale" reverse-transition="cross-scale">
      <v-row class="flex-nowrap h-100">
        <PosterCard :variant="variant" :posters="carousel.thirdPosters"></PosterCard>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>
<style>
.cross-scale-enter-active {
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s;
  z-index: 2;
}

.cross-scale-leave-active {
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  position: absolute;
  width: 100%;
  z-index: 1;
}

.cross-scale-leave-from {
  transform: translateX(0);
}

.cross-scale-leave-to {
  transform: translateX(-100%);
}

.cross-scale-enter-from {
  transform: translateX(100%);
}

.cross-scale-enter-to {
  transform: translateX(0);
}
</style>