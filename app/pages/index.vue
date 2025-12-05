<script setup lang="ts">


</script>

<template>
  <v-row>
    <v-col class="d-flex flex-column align-space-between full-height-block-strict" cols="12">
      <v-img src=" /images/first-section.gif" class="h-100 d-flex justify-center align-center" draggable="false" cover>
        <v-row class="d-flex justify-center">
          <v-col cols="11" md="10" lg="9" xl="8">
            <v-row class="d-flex justify-start align-center">
              <v-col cols="12" class="d-flex">
                <div class="d-flex align-start flex-column w-50">
                  <span>Режим работы:</span>
                  <span>ПТ-СБ – с 23:00 до 6:00</span><br />
                  <span>С 1 декабря – ежедневно</span>
                </div>
              </v-col>
            </v-row>
            <v-row class="d-flex justify-start align-center">
              <v-col cols="12" class="d-flex justify-start align-center">
                <v-img src="/icons/logo.png" draggable="false" class="user-select-none main-logo pa-2"></v-img>
              </v-col>
            </v-row>
            <v-row class="d-flex justify-space-between align-center">
              <v-col cols="6" md="4" class="d-flex justify-start">
                <div class="d-flex align-start flex-column w-50 pa-2">
                  <span>ул. Ленина, 88</span>
                  <span>6 этаж</span>
                  <YaButton />
                </div>
              </v-col>
              <v-col cols="4" class="d-lg-flex d-none justify-center">
                <v-btn class="rounded-xl" min-height="100" block>
                  <h2><b>Хочу в облака!</b></h2>
                </v-btn>
              </v-col>
              <v-col cols="6" md="4" class="d-flex justify-end">
                <div class="d-flex justify-start align-end flex-column w-50 pa-2">
                  <span>Бронь столов:</span>
                  <span>288-81-89</span>
                  <span>Telegram</span>
                </div>
              </v-col>
              <v-col cols="12" class="d-flex d-lg-none justify-center">
                <v-btn class="rounded-xl" min-height="100" block>
                  <h2><b>Хочу в облака!</b></h2>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-img>
    </v-col>

    <v-col cols="12">
      <LandingClouds />
    </v-col>
  </v-row>
  <v-col class="d-flex flex-column align-space-between justify-space-around" cols="12">
    <GalleryCarousel :variant="1"></GalleryCarousel>
    <GalleryCarousel :variant="2" class="mb-16"></GalleryCarousel>
  </v-col>

  <v-col class="d-flex flex-column align-space-between full-height-block" cols="12">
    <v-img src="/images/booking.png" class="h-100 d-flex justify-center align-center" draggable="false" cover>
      <v-row class="d-flex justify-space-around align-center full-height-block">
        <v-col cols="11" md="5" lg="4" class="d-flex justify-center">
          <v-img src="/images/map.svg" draggable="false" cover class="ma-2"></v-img>
        </v-col>
        <v-col cols="11" md="6" lg="4">
          <div class="d-flex justify-space-around flex-column h-100 ma-2">
            <div>
              <h2>Забронируйте стол <br> в Облаках</h2>
            </div>
            <div class="d-flex flex-column align-center">
              <v-text-field variant="solo-filled" bg-color="primary" base-color="#000000" placeholder="ФИО" rounded
                class="w-100">
                <template v-slot:prepend-inner>
                  <div class="mr-8"></div>
                </template>
              </v-text-field>
              <v-text-field variant="solo-filled" bg-color="primary" placeholder="Телефон" rounded class="w-100">
                <template v-slot:prepend-inner>
                  <div class="mr-8"></div>
                </template>
              </v-text-field>
              <v-text-field variant="solo-filled" bg-color="primary" placeholder="Дата" rounded class="w-100">
                <template v-slot:prepend-inner>
                  <div class="mr-8"></div>
                </template>
              </v-text-field>
              <v-checkbox label="Согласие на обработку персональных данных"></v-checkbox>

              <v-btn base-color="primary" class="rounded-xl" block min-height="100">
                <h2>Отправить заявку</h2>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-img>
  </v-col>
  <v-col class="d-flex flex-column " cols="12">
    <v-row class="mt-16 d-flex justify-center align-center">
      <v-col cols="8" class="d-flex justify-space-around align-center flex-column h-100">
        <span class=" large-text">
          Афиша
        </span>
        <h2>
          Предстоящие события
        </h2>
        <PosterCarousel></PosterCarousel>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center mt-16">
      <v-col cols="11" md="6" lg="4" xl="3">
        <v-btn base-color="primary" class="rounded-xl " min-height="100" block>
          <h2>Забронировать стол</h2>
        </v-btn>
      </v-col>
    </v-row>
  </v-col>
  <v-col class="d-flex flex-column align-center" cols="12">
    <h2>
      Прошедшие события
    </h2>

    <LandingAlbums />
  </v-col>
</template>
<style scoped lang="scss">
.user-select-none {
  user-select: none;
}

.telegram-link {
  text-decoration: underline !important;
  text-decoration-thickness: 1px !important;
  text-underline-offset: 2px !important;
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
  // background: rgba(0, 0, 0, 0.3);
  background: #010345;
  pointer-events: none;
}

.large-text {
  font-weight: 800;
  font-size: clamp(3rem, 0.7528rem + 1.4205vw, 4rem);
}

.main-logo {
  height: clamp(12.5rem, 0.3577rem + 32.3795vw, 25.9375rem);
}
</style>