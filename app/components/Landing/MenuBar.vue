<script setup>
import { useDisplay } from 'vuetify'
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const router = useRouter()
const { smAndDown } = useDisplay()
const menuBarStore = useMenuBar()
const slider = ref(null)

const slideWidth = computed(() => smAndDown.value ? 240 : 400)
const slideHeight = computed(() => smAndDown.value ? 250 : 410)

const duplicatedCarouselImages = computed(() => {
  const list = menuBarStore.carouselImages.value
  return [...list, ...list]
})

let scrollInterval = null
let isUserInteracting = false

const startAutoScroll = () => {
  if (scrollInterval) clearInterval(scrollInterval)
  scrollInterval = setInterval(() => {
    if (!slider.value || isUserInteracting) return
    const current = slider.value.scrollLeft
    const max = slider.value.scrollWidth - slider.value.clientWidth
    if (current >= max) {
      slider.value.scrollTo({ left: 0, behavior: 'auto' })
    } else {
      slider.value.scrollBy({ left: slideWidth.value + 16, behavior: 'smooth' })
    }
  }, 5000)
}

const stopAutoScroll = () => {
  isUserInteracting = true
  // Возобновим авто-прокрутку через 3 сек после окончания взаимодействия
  clearTimeout(window.autoScrollResumeTimer)
  window.autoScrollResumeTimer = setTimeout(() => {
    isUserInteracting = false
  }, 3000)
}

onMounted(async () => {
  await menuBarStore.getCarouselImages()
  if (menuBarStore.carouselImages.length === 0) return
  startAutoScroll()

  // Отключаем авто-скролл при взаимодействии
  const el = slider.value
  if (el) {
    el.addEventListener('touchstart', stopAutoScroll)
    el.addEventListener('mousedown', stopAutoScroll)
  }
})

onBeforeUnmount(() => {
  if (scrollInterval) clearInterval(scrollInterval)
  clearTimeout(window.autoScrollResumeTimer)
  const el = slider.value
  if (el) {
    el.removeEventListener('touchstart', stopAutoScroll)
    el.removeEventListener('mousedown', stopAutoScroll)
  }
})
</script>

<template>
  <v-row>
    <v-col cols="12" style="margin-top: 100px !important;">
      <div ref="slider" class="slider" :style="{ height: slideHeight + 'px' }">
        <div class="slide-track">
          <div v-for="(image, index) in duplicatedCarouselImages" :key="index" class="slide">
            <v-img :src="image" :draggable="false" :aspect-ratio="585 / 591" cover loading="lazy" height="100%" />
          </div>
        </div>
      </div>
    </v-col>

    <v-col cols="12" class="d-flex justify-center mt-6">
      <span class="clickable-link" style="margin-right: 10%" @click="router.push('/kitchen-menu')">Меню Кухни</span>
      <span class="clickable-link" style="margin-left: 10%">Бар</span>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.slider {
  overflow-x: auto;
  /* ← включаем скролл, в т.ч. на тач */
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  /* плавный скролл на iOS */
  width: 100%;
  position: relative;
  -ms-overflow-style: none;
  /* скрыть скроллбар в IE/Edge */
  scrollbar-width: none;
  /* скрыть в Firefox */
}

.slider::-webkit-scrollbar {
  display: none;
  /* скрыть в WebKit */
}

.slide-track {
  display: flex;
  height: 100%;
  gap: 16px;
  padding: 0 8px;
  width: fit-content;
  flex-shrink: 0;
}

.slide {
  flex: 0 0 v-bind('slideWidth + "px"');
  height: 100%;
  background-color: black;
}

.clickable-link {
  cursor: pointer;
  text-decoration: underline;
  font-size: clamp(1.125rem, 0.6278rem + 1.4205vw, 1.75rem);
}
</style>