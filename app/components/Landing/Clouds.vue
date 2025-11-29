<script setup lang="ts"></script>
<template>
  <div class="cloud-wrapper"> <img src="/images/clouds.png" alt="left cloud" class="cloud cloud-left" /> <img
      src="/images/clouds.png" alt="right cloud" class="cloud cloud-right" />
    <!-- <v-row class="d-flex justify-center align-center"> 
      <v-col cols="11" sm="10" md="8" lg="6" class="d-flex justify-center align-center flex-column text-center"> 
        <p> Самый высокий бар-ресторан города с летней террасой Мы предлагаем вам обширную карту коктейльной классики, изысканные блюда 
          средиземноморской, паназиатской и европейской кухни. </p> 
        <p> Ночью вас ждёт самая яркая тусовка в городе. Мы знамениты проведением громких мероприятий, при участии известных гостей,
           и способностью собрать самую искушенную публику. </p> 
      </v-col> 
    </v-row> -->
  </div>
</template>
<style scoped lang="scss">
p {
  font-size: clamp(1.375rem, 0.9773rem + 1.1364vw, 1.875rem);
}

.cloud-wrapper {
  position: relative;
  overflow: hidden;
  height: 200vh;
}

.cloud {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  transition: transform 0.05s linear;

}

.cloud-left {
  left: 0;
  transform: rotate(180deg);
}

.cloud-right {
  right: 0;
}
</style>
