<script setup lang="ts">
definePageMeta({
  layout: "ai"
})

import { useDisplay } from 'vuetify'

let display = useDisplay()
let direction = ref<"horizontal" | "vertical">("horizontal")

watch(display.mdAndDown, (isMdAndDown) => {
  if (isMdAndDown) {
    direction.value = "vertical"
  } else {
    direction.value = "horizontal"
  }
})


let {
  strengthOptions, tasteOptions, moodOptions,
  step, resultCocktails,
  nextStep, askAi
} = useCocktailAi()


const answers = ref<{
  strength: number | null
  taste: number | null
  mood: number | null
}>({
  strength: null,
  taste: null,
  mood: null,
})

function submitPrompt() {
  askAi(answers.value.strength, answers.value.taste, answers.value.mood)
}

onMounted(() => {
  if (display.mdAndDown.value) {
    direction.value = "vertical"
  } else {
    direction.value = "horizontal"
  }
})
</script>
<template>
  <v-row>
    <v-col v-if="step == 'preview'" cols="12">
      <v-row class="d-none d-md-flex" style="height: 100vh">
        <v-col cols="6">
          <v-row class="d-flex justify-center h-100">
            <v-col cols="6" md="8" lg="9" class="h-100 d-flex flex-column justify-space-around">
              <BackButton :button-text="'Вернуться на главную'" />
              <div class="my-3">
                <h1>Добро пожаловать в ресторан-бар «Облака»</h1>
                <br><br>
                <p>Здесь ваш идеальный коктейль подбирает умный сервис, который за минуту находит напиток именно под
                  ваше
                  настроение и вкус.</p>
                <br>
                <p>Просто ответьте на несколько коротких вопросов — хотите ли вы что-то лёгкое или покрепче, посвежее
                  или
                  послаще, для тихого вечера или шумной вечеринки</p>
              </div>

              <!-- <v-btn>К подбору коктейля</v-btn> -->
              <v-btn base-color="primary" class="rounded-pill" block min-height="70" max-height="70"
                @click="nextStep('select')">
                <h2>К подбору коктейля</h2>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="6" class="image-bg">
          <!-- <v-img src="/images/ai-cocktail-image.webp" cover></v-img> -->
        </v-col>
      </v-row>

      <v-row class="d-flex d-md-none" style="height: 100vh">
        <v-col cols="12" class="image-dark-bg">
          <v-row class="d-flex justify-center h-100">
            <v-col cols="11" sm="10" class=" d-flex flex-column justify-space-between">
              <div>
                <div class="d-flex justify-space-between align-center">
                  <v-btn icon="mdi-arrow-left" to="/" variant="tonal"></v-btn>
                  <img src="/icons/logo.png" style="width: 100px; height: 100px; user-select: none;"></img>
                </div>

                <h1>Добро пожаловать <br> в ресторан-бар «Облака»</h1>
                <p>Найди свой идеальный коктейль за пару кликов!</p>
              </div>


              <div class="d-flex flex-column justify-center">
                <p>Сначала выбери: лёгкий и освежающий или крепкий и насыщенный?
                  Ответь на пару простых вопросов — и наш ИИ мгновенно подберёт коктейль из 25 эксклюзивных рецептов
                  Облаков, который идеально подходит именно тебе!
                  <br><br>
                  Не упусти шанс открыть новый вкус — начни прямо сейчас!
                </p>

                <v-btn base-color="primary" class="rounded-pill ma-8" min-height="70" max-height="70"
                  @click="nextStep('select')">
                  <h2>Подобрать коктейль</h2>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" v-else-if="step == 'select'">
      <v-row class="d-flex justify-center align-center" style="min-height: 100vh; position: relative;">
        <img src="/icons/angels.webp" alt="" class="angels-image">
        <img src="/icons/star.webp" class="star1-image" alt="">
        <img src="/icons/star.webp" class="star2-image" alt="">

        <v-col cols="12" md="9" lg="8" class="pa-8">
          <BackButton :button-text="'На главную страницу'" class="mb-8" />
          <!-- Вопрос 1: Крепость -->
          <h2 class="mb-3">Какую крепость вы предпочитаете?</h2>
          <v-chip-group v-model="answers.strength" :direction="direction" class="mb-6" selected-class="selected-chip">
            <v-chip v-for="(s, i) in strengthOptions" :key="i" :value="i" style="width: fit-content !important;"
              size="x-large" variant="outlined">
              {{ s }}
            </v-chip>
          </v-chip-group>

          <!-- Вопрос 2: Вкус -->
          <h2 class="mb-3">Какой профиль вкуса вам ближе?</h2>
          <v-chip-group v-model="answers.taste" :direction="direction" class="mb-6" selected-class="selected-chip">
            <v-chip v-for="(t, i) in tasteOptions" :key="i" style="width: fit-content !important;" :value="i"
              size="x-large" variant="outlined">
              {{ t }}
            </v-chip>
          </v-chip-group>

          <!-- Вопрос 3: Настроение -->
          <h2 class="mb-3">Какое настроение вы хотите передать напитком?</h2>
          <v-chip-group v-model="answers.mood" :direction="direction" class="mb-6" selected-class="selected-chip">
            <v-chip v-for="(m, i) in moodOptions" :key="i" style="width: fit-content !important;" :value="i"
              size="x-large" variant="outlined">
              {{ m }}
            </v-chip>
          </v-chip-group>
        </v-col>

        <!-- Кнопка отправки -->
        <v-col cols="12" class="px-8 pb-8 d-flex justify-center">
          <v-btn base-color="primary" class="rounded-pill" min-height="70" max-height="70"
            :disabled="answers.strength === null || answers.taste === null || answers.mood === null"
            @click="submitPrompt">
            <h2 class="px-6">Подобрать коктейли</h2>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>

    <v-col v-else-if="step == 'result'" cols="12">
      <AiCocktail v-for="(cocktail, i) in resultCocktails" :cocktail="cocktail" :index="i"
        :is-last="i + 1 == resultCocktails.length" />
    </v-col>
  </v-row>
</template>
<style scoped>
.image-bg {
  background-image: url("/images/ai-cocktail-image.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.image-dark-bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/images/ai-cocktail-mobile.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

p {
  font-size: clamp(1.125rem, 0.7273rem + 1.1364vw, 1.625rem);
}

.selected-chip {
  background-color: white;
  color: black;
  /* background-color: rgba(255, 255, 255, 0.5); */
  /* box-shadow: 0 2px 2px rgba(255, 255, 255, 0.8); */
}

.angels-image {
  position: absolute;
  bottom: 0;
  right: 5%;
  width: 40vw;
}

.star1-image {
  position: absolute;
  top: 2%;
  right: 2%;
  width: 100px;
  height: 100px;
}

.star2-image {
  position: absolute;
  top: calc(2% + 100px + 20px);
  right: calc(2% + 100px + 20px);
  width: 150px;
  height: 150px;
}

@media (max-width: 860px) {
  .angels-image {
    width: 90vw;
  }

  .star1-image {
    position: absolute;
    top: 2%;
    right: 2%;
    width: 70px;
    height: 70px;
  }

  .star2-image {
    position: absolute;
    top: calc(2% + 70px + 20px);
    right: calc(2% + 70px + 20px);
    width: 110px;
    height: 110px;
  }
}
</style>