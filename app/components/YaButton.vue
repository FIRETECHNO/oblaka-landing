<script setup>

useHead({
  script: [{ src: "https://yastatic.net/taxi-widget/ya-taxi-widget-v2.js", defer: true }],
});
</script>
<template>
  <div class="ya-taxi-widget" data-ref="localhost"
    data-proxy-url="https://{app}.redirect.appmetrica.yandex.com/route?start-lat={start-lat}&amp;start-lon={start-lon}&amp;end-lat={end-lat}&amp;end-lon={end-lon}&amp;tariffClass={tariff}&amp;ref={ref}&amp;appmetrica_tracking_id={redirect}&amp;lang={lang}&amp;erid={erid}"
    data-tariff="business" data-app="3" data-lang="ru" data-redirect="1178268795219780156" data-size="xs"
    data-theme="dark" data-title="Вызвать такси" data-use-location="true" data-point-a=""
    data-point-b="56.209450,58.005749">
  </div>
</template>