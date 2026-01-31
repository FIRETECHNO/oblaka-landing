<script setup lang="ts">
useHead({
  title: 'Облака — бар-ресторан в Перми | Летняя терраса, коктейли, вечеринки',
  meta: [
    {
      name: 'description',
      content: 'Самый высокий бар-ресторан Перми с панорамным видом, летней террасой, коктейлями и яркими вечеринками. Средиземноморская, паназиатская и европейская кухня.'
    },
    // Open Graph
    { property: 'og:title', content: 'Облака — бар-ресторан в Перми' },
    {
      property: 'og:description',
      content: 'Самый высокий бар-ресторан Перми с летней террасой, коктейлями и громкими вечеринками. Изысканная кухня и панорамный вид на город.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://oblaka-perm.ru/' },
    { property: 'og:image', content: 'https://oblaka-perm.ru/images/icons/logo.png' },
    { property: 'og:image:width', content: '640' },
    { property: 'og:image:height', content: '640' },
    { property: 'og:locale', content: 'ru_RU' },
    // Twitter (опционально, но полезно)
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Облака — бар-ресторан в Перми' },
    {
      name: 'twitter:description',
      content: 'Панорамный вид, коктейли, летняя терраса и самые яркие вечеринки в Перми.'
    },
    { name: 'twitter:image', content: 'https://oblaka-perm.ru/images/icons/logo.png' }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://oblaka-perm.ru/'
    }
  ]
})

</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
/* .layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
} */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(2px);
}
</style>