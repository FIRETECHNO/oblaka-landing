<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: "admin"
})

const sections: any[] = [
  {
    title: 'Афиша',
    description: 'Загрузить новую афишу, запланировать загрузку',
    icon: 'mdi-post-outline',
    to: '/admin/poster',
    color: 'primary'
  },
  {
    title: 'Альбомы',
    description: 'Фото с предыдущих мероприятий',
    icon: 'mdi-image-multiple-outline',
    to: '/admin/album',
    color: 'primary'
  },
  {
    title: 'Меню кухни',
    description: 'Загрузить меню кухни',
    icon: 'mdi-image-multiple-outline',
    to: '/admin/upload-kitchen-menu',
    color: 'primary'
  },
  {
    title: 'Карта Бара',
    description: 'Загрузить страницы Бара',
    icon: 'mdi-image-multiple-outline',
    to: '/admin/upload-bar',
    color: 'primary'
  },
  {
    title: 'Банкетное меню',
    description: 'Загрузить страницы Банкетного меню',
    icon: 'mdi-image-multiple-outline',
    to: '/admin/upload-banquet',
    color: 'primary'
  },
  {
    title: 'Меню пара',
    description: 'Загрузить страницы Меню Пара',
    icon: 'mdi-image-multiple-outline',
    to: '/admin/upload-hookah',
    color: 'primary'
  },
]
</script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="(section, index) in sections" :key="index" cols="6" sm="6" md="6">
        <NuxtLink :to="section.to" class="text-decoration-none">
          <v-sheet class="clickable-sheet d-flex flex-column align-center justify-center ma-1 text-center" rounded="lg"
            elevation="4" height="350" color="surface">
            <v-icon :icon="section.icon" :color="section.color" size="80" class="mb-4"></v-icon>
            <p class="text-h5 text-md-h4 font-weight-bold text-high-emphasis">
              {{ section.title }}
            </p>
            <p class="text-body-1 text-medium-emphasis mt-2">
              {{ section.description }}
            </p>
          </v-sheet>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.clickable-sheet {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
  background-color: rgba(var(--v-theme-surface), 0.6) !important;
  border: 1px solid rgba(var(--v-border-color), 0.2);
}

.clickable-sheet:hover {
  transform: translateY(-8px);
  /* Тень для тёмной темы: используем --v-theme-on-surface с прозрачностью */
  box-shadow: 0 10px 20px -5px rgba(var(--v-theme-on-surface), 0.2) !important;
}
</style>