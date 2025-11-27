<script setup lang="ts"></script>
<template>
  <v-row>
    <v-col class="d-flex flex-column align-space-between full-height-block" cols="12">
      <v-img src=" /images/first-section.gif" class="h-100 d-flex justify-center align-center" draggable="false" cover>
        <v-row class="d-flex justify-start align-center">
          <v-col cols="4" class="d-flex justify-space-around">
            <div class="d-flex align-start flex-column w-50">
              <span>Режим работы:</span>
              <span>ПТ-СБ – с 23:00 до 6:00</span><br />
              <span>С 1 декабря – ежедневно</span>
            </div>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center align-center">
          <v-col cols="12" class="d-flex justify-center align-center mb-16">
            <v-img src="/icons/logo.png" height="415px" draggable="false" class="user-select-none"></v-img>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-space-between align-center">
          <v-col cols="4" class="d-flex justify-center">
            <div class="d-flex align-start flex-column w-50">
              <span>ул. Ленина, 88</span>
              <span>6 этаж</span>
              <YaButton />
            </div>
          </v-col>
          <v-col cols="4" class="d-flex justify-center align-center">
            <v-btn min-width="500" min-height="100" class="rounded-xl">
              <h2><b>Хочу в облака!</b></h2>
            </v-btn>
          </v-col>
          <v-col cols="4" class="d-flex justify-center">
            <div class="d-flex align-end flex-column w-50">
              <span>Бронь столов:</span>
              <span>288-81-89</span>
              <span>Telegram</span>
            </div>
          </v-col>
        </v-row>
      </v-img>
    </v-col>

    <v-col cols="12">
      <v-row>
        <v-col cols="12" md="12" class="d-flex justify-center align-center pa-8">
          <v-col cols="12" md="9" class="d-flex justify-center align-center flex-column">
            <span>Самый высокий бар-ресторан города с летней террасой</span>
            <span>Мы предлагаем вам обширную карту коктейльной классики,</span>
            <span>изысканные блюда средиземноморской, паназиатской и</span>
            <span>европейской кухни.</span>
            <span>Ночью вас ждёт самая яркая тусовка в городе.</span>
            <span>Мы знамениты проведением громких мероприятий, при участии</span>
            <span>известных гостей, и способностью собрать самую искушенную</span>
            <span>публику.</span>
          </v-col>
        </v-col>
      </v-row>
    </v-col>
  </v-row>

  <v-col class="d-flex flex-column align-space-between full-height-block" cols="12">
    <v-img src=" /images/booking.png" class="h-100 d-flex justify-center align-center" draggable="false" cover>
      <v-row class="d-flex justify-space-around align-center full-height-block">
        <v-col cols="4" class="d-flex justify-center">
          <v-img src=" /images/bar.png" draggable="false" cover></v-img>
        </v-col>
        <v-col cols="4" class="d-flex justify-space-around flex-column h-100">
          <div>
            <h2>Забронируйте стол</h2>
            <h2> в Облаках</h2>
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
            <v-btn base-color="primary" class="rounded-xl w-100" min-height="100">
              <h2>Отправить заявку</h2>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-img>
  </v-col>
  <v-col class="d-flex align-space-between full-height-block" cols="12">
    <v-row class="d-flex justify-center align-center">
      <v-col cols="8" class="d-flex justify-space-around align-center flex-column h-100">
      <span class="mt-16 large-text">
        Афиша
      </span>
      <h2>
        Предстоящие события
      </h2>
      <PosterCarousel></PosterCarousel>
      <v-btn base-color="primary" class="rounded-xl mt-16" min-height="100" max-width="400px">
        <h2>Забронировать стол</h2>
      </v-btn>
      </v-col>
    </v-row>
  </v-col>
    <v-col class="d-flex align-space-between full-height-block" cols="12">
    <v-row class="d-flex justify-center align-center">
      <v-col cols="8" class="d-flex justify-space-around align-center flex-column h-100">
      <h2>
        Прошедшие события
      </h2>
      <PosterCarousel></PosterCarousel>
      </v-col>
    </v-row>
  </v-col>
</template>
<style scoped lang="scss">
.full-height-block {
  height: calc(100vh - 100px);
}

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
.large-text{
  font-weight: 800;
  font-size: clamp(3rem, 0.7528rem + 1.4205vw, 4rem);
}
</style>