<script setup lang="ts">
import { toast } from 'vue3-toastify'

definePageMeta({
  layout: "admin",
  middleware: "admin"
})

const adminAlbumStore = useAdminAlbum()
const router = useRouter()

let name = ref<string>("")

const uploading = ref(false)


const uploadPoster = async () => {
  try {
    await adminAlbumStore.createAlbumToEvade({ url: name.value })
  }
  catch (error) {
    console.error('Upload failed', error)
    toast.error("Ошибка при загрузке!")
  } finally {
    uploading.value = false
  }
}
</script>
<template>
  <v-container class="py-8">
    <v-row>
      <v-col cols="12" md="6">
        <h2 class="font-bold mb-2">Ссылка на альбом</h2>
        <v-text-field v-model="name" variant="outlined" density="comfortable"></v-text-field>
      </v-col>
    </v-row>

    <!-- Upload button -->
    <v-row class="mt-4">
      <v-col>
        <v-btn color="secondary" :disabled="!name.includes('http')" @click="uploadPoster">
          Загрузить
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
/* Дополнительные стили при необходимости */
</style>