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
</style>