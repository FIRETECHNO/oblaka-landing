<script setup lang="ts">
import { useSmoothScroll } from '~/composables/useSmoothScroll'

const { scrollToId } = useSmoothScroll()
const route = useRoute()
const router = useRouter()

let routes = computed(() => {
  if (route.path != "/") return [
    { name: "О нас", url: "/", scrollTo: "about-us" },
    { name: "Главная", url: "/", },
    { name: "Контакты", url: "/", scrollTo: "contacts" },
  ]

  return [
    { name: "О нас", url: "/", scrollTo: "about-us" },
    { name: "Меню", url: "/", scrollTo: "menu" },
    { name: "Контакты", url: "/", scrollTo: "contacts" },
  ]
})

async function handleScroll(url: string, scrollTo?: string) {
  if (route.path === "/") {
    scrollToId(scrollTo ?? "", 100)
  } else {
    await router.push(url)  // ждём перехода
    scrollToId(scrollTo ?? "", 100)  // теперь элемент точно есть
  }
}

</script>

<template>
  <v-app-bar flat height="80">
    <v-container class="d-flex justify-center">
      <v-row class="d-flex justify-center">
        <v-col cols="8" xl="6" lg="4" class="d-flex justify-space-between">
          <a v-for="(route, index) of routes" :key="index" class="cursor-pointer"
            @click="handleScroll(route.url, route.scrollTo)">
            {{ route.name }}</a>
          <!-- <a href="#menu" @click.prevent="handleScroll('menu')">Меню</a>
          <a href="#contacts" @click.prevent="handleScroll('contacts')">Контакты</a> -->
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>