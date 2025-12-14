<script setup lang="ts">
const dialog = ref(true)

setTimeout(() => {
  dialog.value = false
}, 2000)
</script>

<template>
  <v-dialog v-model="dialog" persistent fullscreen hide-overlay :scrim="false" style="z-index: 10000">
    <div class="intro-dialog">
      <v-img src="/icons/logo.png" alt="Логотип" class="intro-logo" />
    </div>
  </v-dialog>
</template>

<style scoped>
.intro-dialog {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  width: 100vw;
  height: 100vh;
}

.intro-logo {
  max-width: 80vw;
  max-height: 80vh;
  opacity: 0;
  animation: logoFadeIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards;
}

@keyframes logoFadeIn {
  from {
    opacity: 0;
    transform: scale(0.7);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>