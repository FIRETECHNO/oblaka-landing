<script setup lang="ts">
const router = useRouter()

function goToAi() {
  router.push("cocktail-ai")
}
</script>
<template>
  <v-row class="full-height-block">
    <!-- big devices -->
    <v-col cols="12" class="d-none d-md-flex">
      <v-row class="d-md-flex align-center justify-space-around h-100">
        <v-col cols="11" md="4" lg="5" class="d-flex align-center h-100">
          <div class="d-flex flex-column justify-center h-100">
            <div>
              <h1>Не знаешь, что заказать?</h1>
              <h2>Подберем тебе "тот самый" напиток</h2>
            </div>

            <v-btn base-color="primary" class="rounded-xl"
              style="width: fit-content !important; margin-top: 15%; margin-bottom: 15%;" min-height="90"
              @click="goToAi">
              <h2>Подобрать коктейль</h2>
            </v-btn>

            <p class="caption">
              На основе искусственного интеллекта подберем напиток из раздела “Бар”, учитывая ваши предпочтения
            </p>
          </div>
        </v-col>
        <v-col cols="11" md="4" class="d-flex align-center justify-center h-100">
          <div class="image-container">
            <!-- <v-img src="images/ai-cocktail-image.webp" :aspect-ratio="802 / 1206" :draggable="false" cover
              class="image-cropped" /> -->
          </div>
        </v-col>
      </v-row>
    </v-col>
    <!-- big devices -->

    <!-- small devices -->
    <v-col cols="12" class="d-flex d-md-none cocktail-bg">
      <v-row class="d-flex justify-center h-100">
        <v-col cols="11">
          <div class="pt-12">
            <h1>Не знаешь, что заказать?</h1>
            <h2>Подберем тебе "тот самый" напиток</h2>
            <p class="caption">
              На основе искусственного интеллекта подберем напиток из раздела “Бар”, учитывая ваши предпочтения
            </p>
          </div>
        </v-col>
        <v-col cols="11" class="d-flex justify-center align-end">
          <v-btn base-color="primary" class="rounded-lg mb-8" style="width: fit-content !important;" min-height="70"
            @click="goToAi">
            <h2>Подобрать коктейль</h2>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <!-- small devices -->
  </v-row>
</template>
<style scoped lang="scss">
.caption {
  color: #AEAEAE;
  font-size: clamp(1.125rem, 0.6278rem + 1.4205vw, 1.75rem);
}

.image-container {
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  /* ← ключевой момент: обрезаем всё, что вылезает */
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/images/ai-cocktail-image.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.cocktail-bg {
  background-image: url("/images/ai-cocktail-image.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

// .image-cropped {
//   width: 100%;
//   height: 100%;

//   object-fit: cover;
//   /* Vuetify использует background, но на всякий — явно */
//   flex-shrink: 0;
// }</style>