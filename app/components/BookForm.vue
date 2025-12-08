<script setup lang="ts"></script>
<template>
  <v-row>
    <v-col cols="12">
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

      <v-text-field variant="solo-filled" bg-color="primary" placeholder="Тематика мероприятия" rounded class="w-100">
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
    </v-col>
  </v-row>
</template>