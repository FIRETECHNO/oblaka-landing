<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

let cleanup: (() => void) | null = null

onMounted(() => {
  import('gsap').then(({ gsap }) => {
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger)

      const section = document.querySelector('.cloud-section')
      const left = section?.querySelector('.cloud-left')
      const right = section?.querySelector('.cloud-right')

      if (!section || !left || !right) return

      // Начальное состояние
      gsap.set([left, right], { width: '100vw' })

      // Анимация с пином
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',       // когда секция касается верха viewport
          end: '+=300vh',         // анимация длится 100vh скролла
          pin: true,              // замирает на экране
          pinSpacing: true,       // сохраняет пространство (не "прыгает" контент)
          scrub: true,            // плавная привязка к скроллу
          invalidateOnRefresh: true,
        },
      })

      tl.to([left, right], {
        width: '32vw',
        ease: 'none',
      })

      cleanup = () => {
        tl.scrollTrigger?.kill()
        tl.kill()
      }
    })
  })
})

onBeforeUnmount(() => {
  if (cleanup) cleanup()
})
</script>

<template>
  <div class="cloud-section">
    <img src="/images/clouds.png" class="cloud cloud-left" alt="Left cloud" />
    <img src="/images/clouds.png" class="cloud cloud-right" alt="Right cloud" />

    <!-- Опционально: текст поверх -->
    <div class="content">
      <v-row class="d-flex justify-center">
        <v-col cols="9" sm="8" md="7" lg="6">
          <p>
            Самый высокий бар-ресторан города с летней террасой. <br>
            Мы предлагаем вам обширную карту коктейльной классики,
            изысканные блюда средиземноморской, паназиатской и
            европейской кухни.
          </p>
          <br>
          <p>
            Ночью вас ждёт самая яркая тусовка в городе. <br>
            Мы знамениты проведением громких мероприятий, при участии
            известных гостей, и способностью собрать самую искушенную
            публику.
          </p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cloud-section {
  position: relative;
  height: 100vh;
  /* С пином высота не важна — он заменяется пином */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cloud {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  pointer-events: none;
  z-index: 1;
}

.cloud-left {
  left: 0;
  transform: rotate(180deg);
}

.cloud-right {
  right: 0;
}

.content {
  position: relative;
  z-index: 0;
  text-align: center;
  // background: rgba(255, 255, 255, 0.85);
  // padding: 1.5rem;
  // border-radius: 12px;
}

p {
  font-size: clamp(1.375rem, 0.9773rem + 1.1364vw, 1.875rem);
}
</style>