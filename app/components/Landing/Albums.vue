<script setup>
import { useDisplay } from 'vuetify'
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRouter } from 'vue-router'

const { smAndDown } = useDisplay()
const albumStore = useAdminAlbum()
const slider = ref(null)
const router = useRouter()

const slideWidth = computed(() => smAndDown.value ? 280 : 585)
const slideHeight = computed(() => smAndDown.value ? 300 : 598)

const duplicatedAlbums = computed(() => {
  const list = albumStore.albums.value
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
  clearTimeout(window.autoScrollResumeTimer)
  window.autoScrollResumeTimer = setTimeout(() => {
    isUserInteracting = false
  }, 3000)
}

const viewAlbum = (id) => {
  router.push(`/album/${id}`)
}

function next() {
  slider.value.scrollBy(
    {
      left: smAndDown.value ? 280 * 3 : 585 * 3,
      behavior: 'smooth'
    }
  )
}

function prev() {
  slider.value.scrollBy(
    {
      left: smAndDown.value ? -280 * 3 : -585 * 3,
      behavior: 'smooth'
    }
  )
}

onMounted(async () => {
  await albumStore.getAlbums()
  if (albumStore.albums.value.length === 0) return
  startAutoScroll()

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
  <div style="position: relative; width: 95vw;">
    <v-btn icon="mdi-arrow-left" class="back-button" @click="prev"></v-btn>
    <div ref="slider" class="slider" :style="{ height: slideHeight + 'px' }">
      <div class="slide-track">
        <div v-for="album in duplicatedAlbums" :key="album._id" class="slide">
          <a class="slide-content" :href="`https://vk.com/album-50103584_${album._id}`" target="_blank">
            <v-img :src="album.previewImage" :draggable="false" :aspect-ratio="585 / 591" cover class="slide-image"
              loading="lazy" />
            <div class="album-title">
              {{ album.name }}
            </div>
            <NuxtLink class="view-link">
              Смотреть фото
            </NuxtLink>
          </a>
        </div>
      </div>
    </div>
    <v-btn icon="mdi-arrow-right" class="next-button" @click="next"></v-btn>
  </div>
</template>

<style scoped lang="scss">
.slider {
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  position: relative;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.next-button {
  position: absolute;
  right: 10px;
  z-index: 1000;
  top: calc(50% - 24px);
}

.back-button {
  position: absolute;
  left: 10px;
  z-index: 1000;
  top: calc(50% - 24px);
}

.slider::-webkit-scrollbar {
  display: none;
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
  position: relative;
}

.slide-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.slide-image {
  border-radius: 8px;
  // filter: grayscale(100%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.album-title {
  position: relative;
  z-index: 1;
  font-size: clamp(1.125rem, 0.7273rem + 1.1364vw, 1.625rem);
  font-weight: 500;
  text-align: center;
  max-width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  pointer-events: none;
  margin: 0;
  padding-top: 16px;
  color: white;
}

.view-link {
  position: relative;
  z-index: 1;
  text-decoration: underline !important;
  font-size: clamp(0.875rem, 0.3778rem + 1.4205vw, 1.5rem);
  font-weight: 500;
  cursor: pointer;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  padding-bottom: 20px;
  color: white;
}
</style>