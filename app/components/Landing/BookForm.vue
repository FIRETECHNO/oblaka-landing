<script setup lang="ts"></script>
<template>
  <!-- big devices -->
  <v-row class="d-none d-md-flex full-height-block">
    <v-col cols="5">
      <v-row class="d-flex justify-center h-100">
        <v-col cols="9" class="h-100 d-flex flex-column justify-space-around">
          <h2 class="mt-4">Вы можете забронировать помещение&nbsp;“Облака”<br>
            для проведения своих мероприятий</h2>
          <v-spacer></v-spacer>
          <BookForm />
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="7" class="image-bg">
    </v-col>
  </v-row>
  <!-- big devices -->

  <!-- small devices -->
  <v-row class="d-flex d-md-none py-8 justify-center image-bg full-height-block">
    <v-col cols="11" class="d-flex flex-column justify-space-between full-height-block">
      <v-row>
        <v-col cols="12">
          <h2 style="font-weight: 600;">Вы можете забронировать помещение&nbsp;“Облака”<br>
            для проведения своих мероприятий</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <BookForm />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  <!-- small devices -->
</template>
<style scoped lang="scss">
.image-bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url("/images/book-form-happy-bday.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>