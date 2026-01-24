<script setup lang="ts">
import { useSmoothScroll } from '~/composables/useSmoothScroll'

const videoRef = ref<HTMLVideoElement | null>(null)

const { scrollToId } = useSmoothScroll()

const bookFormStore = useBookForm()
const router = useRouter()

let form = reactive<{
  name: string,
  phone: string,
  date: string
}>({
  name: '',
  phone: '',
  date: '',
})

let agreement = ref(false)

// ===== ВАЛИДАЦИЯ =====
const isPhoneValid = computed(() => {
  // Простой паттерн: +7 или 8 и 10 цифр
  const phone = form.phone.replace(/\D/g, '')
  return phone.length === 11 && (phone.startsWith('7') || phone.startsWith('8'))
})

const isDateValid = computed(() => {
  if (!form.date) return false
  const date = new Date(form.date)
  // Проверка на корректность даты + будущее время
  return date instanceof Date && !isNaN(date.getTime()) && date >= new Date()
})

const isFormValid = computed(() => {
  return (
    form.name.trim().length > 0 &&
    isPhoneValid.value &&
    isDateValid.value
  )
})

const canSubmit = computed(() => agreement.value && isFormValid.value)

function handleScroll(id: string) {
  console.log(id);

  scrollToId(id, 100)
}

async function sendForm() {
  await bookFormStore.sendForm(form.name, form.phone, form.date)
}



onMounted(() => {
  const io = new IntersectionObserver(([entry]) => {
    if (entry?.isIntersecting) {
      videoRef.value?.load()
      io.disconnect()
    }
  })

  if (videoRef.value) io.observe(videoRef.value)
})
</script>

<template>
  <v-row>
    <v-col class="d-flex flex-column align-space-between full-height-block-strict" cols="12">

      <!-- ======== ВИДЕО ФОН вместо GIF ======== -->
      <div class="hero">
        <ClientOnly>
          <video ref="videoRef" autoplay loop muted playsinline preload="none" poster="/images/first-section-poster.png"
            class="hero-video">
            <source src="https://storage.yandexcloud.net/oblaka-images/first-section.mp4" type="video/mp4" />
            <!-- <source src="/videos/first-section.webm" type="video/webm" /> -->
          </video>
        </ClientOnly>

        <!-- ======== СОДЕРЖИМОЕ поверх видео ======== -->
        <div class="hero-content">
          <v-row class="d-flex justify-center">
            <v-col cols="11" md="10" lg="9" xl="8">
              <!-- Режим работы -->
              <v-row class="d-flex justify-start align-center">
                <v-col cols="12" class="d-flex">
                  <div class="d-flex align-start flex-column w-50">
                    <span>Режим работы:</span>
                    <span>ПТ-СБ – с 23:00 до 5:00</span><br />
                  </div>
                </v-col>
              </v-row>

              <!-- Логотип -->
              <v-row class="d-flex justify-start align-center">
                <v-col cols="12" class="d-flex justify-start align-center">
                  <v-img src="/icons/logo.png" draggable="false" class="user-select-none main-logo pa-2" />
                </v-col>
              </v-row>

              <!-- Адрес + кнопка + бронь -->
              <v-row class="d-flex justify-space-between align-center">
                <v-col cols="6" md="4" class="d-flex justify-start">
                  <div class="d-flex align-start flex-column w-100 w-lg-50 pa-2">
                    <span>ул. Ленина, 88</span>
                    <span>6 этаж</span>
                    <ClientOnly>
                      <YaButton />
                    </ClientOnly>
                  </div>
                </v-col>

                <v-col cols="4" class="d-lg-flex d-none justify-center">
                  <v-btn class="rounded-xl" min-height="100" @click="handleScroll('book-form-oblaka-scheme')" block>
                    <h2><b>Хочу в облака!</b></h2>
                  </v-btn>
                </v-col>

                <v-col cols="6" md="4" class="d-flex justify-end">
                  <div class="d-flex justify-start align-end flex-column w-100 w-lg-50 pa-2">
                    <span>Бронь столов:</span>
                    <NuxtLink to="tel:+7342288-81-89" target="_blank" class="text-underline">288-81-89</NuxtLink>
                    <NuxtLink to="https://t.me/oblaka_perm_help" target="_blank" class="text-underline">
                      @oblaka_perm_help</NuxtLink>
                  </div>
                </v-col>

                <v-col cols="12" class="d-flex d-lg-none justify-center">
                  <v-btn class="rounded-xl" min-height="100" @click="handleScroll('book-form-oblaka-scheme')" block>
                    <h2><b>Хочу в облака!</b></h2>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-col>

    <!-- ===== Clouds ===== -->
    <div id="about-us"></div>
    <v-col cols="12">
      <LandingClouds />
    </v-col>
  </v-row>

  <!-- ===== Галереи ===== -->
  <v-col class="d-flex flex-column align-space-between justify-space-around" cols="12">
    <GalleryCarousel :variant="1" />
    <GalleryCarousel :variant="2" class="mb-16" />
  </v-col>

  <!-- ===== Бронирование секция ===== -->
  <v-col class="d-flex flex-column align-space-between full-height-block" cols="12">
    <v-img src="/images/booking.png" class="h-100 d-flex justify-center align-center" draggable="false" cover>
      <v-row class="d-flex justify-space-around align-center my-8 my-md-0 full-height-block">
        <v-col cols="11" md="5" lg="4" class="d-flex justify-center">
          <v-img src="/images/map.svg" draggable="false" cover class="ma-2" />
        </v-col>

        <v-col cols="11" md="6" lg="4" id="book-form-oblaka-scheme">
          <div class="d-flex justify-space-around flex-column h-100 ma-2">
            <div>
              <h2>Забронируйте стол <br /> в Облаках</h2>
            </div>

            <div class="d-flex flex-column align-center">
              <v-text-field v-model="form.name" variant="solo-filled" bg-color="primary" base-color="#000000"
                placeholder="Имя" rounded class="w-100" />

              <v-text-field v-model="form.phone" variant="solo-filled" bg-color="primary" placeholder="Телефон" rounded
                class="w-100" :error="form.phone !== '' && !isPhoneValid"
                :error-messages="form.phone !== '' && !isPhoneValid ? 'Неверный формат телефона' : ''" />

              <v-text-field v-model="form.date" variant="solo-filled" bg-color="primary" placeholder="Дата" rounded
                class="w-100" />

              <div class="d-flex align-center cursor-pointer w-100 my-2" @click="agreement = !agreement">
                <v-checkbox v-model="agreement" hide-details="auto" class="mr-2" />
                <p class="personal-data-agreement-link" @click.stop="router.push('/personal-data')">
                  Согласие на обработку персональных
                  данных
                </p>
              </div>

              <v-btn :disabled="!canSubmit" base-color="primary" class="rounded-xl" block min-height="100"
                @click="sendForm">
                <h2>Отправить заявку</h2>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-img>
  </v-col>

  <!-- ===== Афиша ===== -->
  <v-col class="d-flex flex-column" cols="12">
    <v-row class="mt-16 d-flex justify-center align-center">
      <v-col cols="8" class="d-flex justify-space-around align-center flex-column h-100">
        <span class="large-text">Афиша</span>
        <h2>Предстоящие события</h2>
        <PosterCarousel />
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center mt-16">
      <v-col cols="11" md="6" lg="4" xl="3">
        <v-btn base-color="primary" class="rounded-xl" min-height="100" block
          @click="handleScroll('book-form-oblaka-scheme')">
          <h2>Забронировать стол</h2>
        </v-btn>
      </v-col>
    </v-row>
  </v-col>

  <!-- ===== Прошедшие события ===== -->
  <v-col class="d-flex flex-column align-center" cols="12">
    <h2 style="margin-top: 50px; margin-bottom: 50px;">Прошедшие события</h2>
    <LandingAlbums />
  </v-col>

  <!-- ===== AI коктейль ===== -->
  <LandingAiCocktail />

  <div id="menu"></div>
  <!-- ===== Меню ===== -->
  <LandingMenuBar />

  <!-- Спейсер -->
  <div style="margin-top: 100px;"></div>

  <!-- Форма бронирования -->
  <LandingBookForm />
  <div id="contacts"></div>
</template>

<style scoped lang="scss">
.text-underline {
  text-decoration: underline !important;
}

/* ===== Видео фон ===== */
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
}

/* ===== UI ===== */
.user-select-none {
  user-select: none;
}

.large-text {
  font-weight: 800;
  font-size: clamp(3rem, 0.7528rem + 1.4205vw, 4rem);
}

.main-logo {
  height: clamp(11.875rem, 4.5188rem + 21.0177vw, 23.75rem);
}

.reception-img {
  position: relative;
  overflow: hidden;
  min-height: 300px;
}

.reception-img::after {
  content: "";
  position: absolute;
  inset: 0;
  background: #010345;
  pointer-events: none;
}
</style>
