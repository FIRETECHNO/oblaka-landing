<script setup lang="ts"></script>
<template>
  <v-row class="d-flex justify-center" style="background-color: black; margin-top: 100px !important;">
    <v-col cols="11">
      <v-row class="h-100">
        <v-col cols="12" md="6" class="d-flex justify-center align-center">
          <span class="info-text">
            г. Пермь
            ул. Ленина, 88
            6 этаж
            <br><br>
            Режим работы: <br>
            ПТ-СБ – с 23:00 до 6:00. <br>
            С 1 декабря - сборные корпоративы
            <br><br>
            Контакты <br>
            288-81-89 <br>
            Telegram
            <br><br>
            Партнеры
          </span>

        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-center align-center">
          <v-img src="/icons/logo.png" style="height: 300px" :draggable="false"></v-img>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<style scoped lang="scss">
.info-text {
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: clamp(1.125rem, 0.8267rem + 0.8523vw, 1.5rem);
}
</style>