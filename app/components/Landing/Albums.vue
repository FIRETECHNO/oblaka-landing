<script setup lang="ts"></script>
<template>
  <div class="d-flex overflow-x-auto pb-2 w-100">
    <div v-for="i in 20" :key="i" class="flex-shrink-0" style="width: calc(100% / 4 - 20px); padding: 0 4px">
      <div class="bg-grey-lighten-3 rounded text-center py-4">колонка {{ i }}</div>
    </div>
  </div>
</template>
