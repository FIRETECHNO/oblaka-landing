<script setup lang="ts">
let partners = ref<{ link: string, image: string, bgColor?: string }[]>([
  {
    "image": "https://oblaka-images.storage.yandexcloud.net/partners/romantic.png",
    "link": "https://t.me/romantic_perm"
  },
  {
    "image": "https://oblaka-images.storage.yandexcloud.net/partners/lepacentre.png",
    "link": "https://t.me/pacantre_rus"
  },
  {
    "image": "https://oblaka-images.storage.yandexcloud.net/partners/room-bar.jpg",
    "link": "https://t.me/RoomBarPerm"
  },
  {
    "image": "https://oblaka-images.storage.yandexcloud.net/partners/escobar.jpg",
    "link": "https://t.me/escobarperm59",
    bgColor: "white"
  },
  {
    "image": "https://oblaka-images.storage.yandexcloud.net/partners/magic-project.png",
    "link": "https://vk.com/litmagicproject"
  },
  {
    "image": "https://oblaka-images.storage.yandexcloud.net/partners/sever-hodba.jpg",
    "link": "https://vk.com/severhodba"
  },
  {
    "image": "https://oblaka-images.storage.yandexcloud.net/partners/connect.jpg",
    "link": "https://www.connectperm.ru/"
  },
  {
    "image": "https://oblaka-images.storage.yandexcloud.net/partners/med-dent.png",
    "link": "https://vk.com/med_dent",
    bgColor: "white"
  },
  {
    "image": "https://oblaka-images.storage.yandexcloud.net/partners/rollin.jpg",
    "link": "https://rollin159.ru/park"
  },
  {
    "image": "https://oblaka-images.storage.yandexcloud.net/partners/kaifa.svg",
    "link": "https://dostavkakaifa.ru/",
    bgColor: "white"
  },
  {
    "image": "https://oblaka-images.storage.yandexcloud.net/partners/ch-perm.jpg",
    "link": "https://t.me/s/chp_59_perm"
  },
  {
    "image": "https://oblaka-images.storage.yandexcloud.net/partners/ezhik.svg",
    "link": "https://vk.com/v_gostyah_y_ezhika"
  },
  {
    "image": "https://oblaka-images.storage.yandexcloud.net/partners/centr-auto.jpg",
    "link": "https://autocenter59.ru/"
  },
  {
    "image": "https://oblaka-images.storage.yandexcloud.net/partners/forrest.jpg",
    "link": "https://vk.com/forrest_run_team"
  },
  {
    "image": "https://oblaka-images.storage.yandexcloud.net/partners/perm-print-studio.png",
    "link": "https://permprintstudio.ru/"
  },
  {
    "image": "https://oblaka-images.storage.yandexcloud.net/partners/persik.jpg",
    "link": "https://persik59.ru/"
  },
  {
    "image": "https://oblaka-images.storage.yandexcloud.net/partners/sv-consult.jpg",
    "link": ""
  },
  {
    "image": "https://oblaka-images.storage.yandexcloud.net/partners/green-line.png",
    "link": "https://greenlinestudio.ru/",
    bgColor: "white"
  },
  {
    "image": "https://oblaka-images.storage.yandexcloud.net/partners/var-var.png",
    "link": "https://varvar59.ru"
  },
  {
    "image": "https://storage.yandexcloud.net/oblaka-images/partners/firetechno.svg",
    "link": "https://firetechno.ru"
  },
  {
    "image": "https://storage.yandexcloud.net/oblaka-images/partners/rus-lazer.jpg",
    "link": "https://vk.com/rus.laser"
  },
  {
    "image": "https://storage.yandexcloud.net/oblaka-images/partners/radisson.jpg",
    "link": "https://www.radissonhotels.com/ru-ru/hotels/radisson-perm"
  },
  {
    "image": "https://storage.yandexcloud.net/oblaka-images/partners/level.png",
    "link": "https://level-mens.ru/"
  },
  {
    "image": "https://storage.yandexcloud.net/oblaka-images/partners/mol-parlament.jpg",
    "link": "https://vk.ru/molparlamentperm"
  },
])

function open(link: string) {
  if (process.client)
    window.open(link, "_blank")
}
</script>
<template>
  <v-row>
    <v-col cols="6" sm="4" md="3" lg="2" v-for="(o, index) in partners" :key="index"
      class="d-flex justify-center align-center">
      <div :style="{ backgroundColor: o.bgColor ?? '' }" class="w-100 h-90" style="border-radius: 6px;">
        <v-img :src="o.image" class="ma-5 pa-5 cursor-pointer" style="border-radius: 6px;" @click="open(o.link)" />
      </div>
    </v-col>
  </v-row>
</template>