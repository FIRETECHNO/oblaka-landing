<script setup lang="ts">

import { ref, onMounted, nextTick } from 'vue'

const showSplash = ref(true)

onMounted(async () => {
  // Дожидаемся, пока DOM обновится после монтирования
  await nextTick()

  // Опционально: добавить минимальную задержку для "эффекта"
  await new Promise(resolve => setTimeout(resolve, 500))

  // Скрываем splash
  showSplash.value = false
})
</script>

<template>
  <div v-if="showSplash" class="splash-screen">
    <img src="/icons/logo.png" alt="Логотип" class="splash-logo" />
  </div>
  <v-app v-else>
    <Header />

    <!-- Основное приложение -->
    <v-main>
      <slot />
    </v-main>

    <Footer />
  </v-app>
</template>
<style scoped>
.splash-screen {
  position: fixed;
  inset: 0;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
}

.splash-logo {
  max-width: 80vw;
  max-height: 80vh;
  opacity: 0;
  animation: fadeInScale 0.8s forwards;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>