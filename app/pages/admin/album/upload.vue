<script setup lang="ts">
import { toast } from 'vue3-toastify'

definePageMeta({
  layout: "admin",
  middleware: "admin"
})

const adminAlbumStore = useAdminAlbum()
const router = useRouter()

let name = ref<string>("")

const file = ref<File | null>(null)
const archiveFile = ref<File | null>(null)

const previewUrl = ref<string | null>(null)
const uploading = ref(false)

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files?.[0]) {
    file.value = target.files[0]
    if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
    previewUrl.value = URL.createObjectURL(file.value)
  }
}

const handleArchiveUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files?.[0]) {
    archiveFile.value = target.files[0]
    console.log('Выбран архив:', archiveFile.value.name)
    // Здесь можно вызвать API для отправки архива на сервер
  }
}

const uploadAlbumArchive = async () => {
  if (!archiveFile.value) {
    toast.error("Выберите архив с фотографиями")
    return false
  }

  const formData = new FormData()
  formData.append('archive', archiveFile.value)

  try {
    const response = await $fetch<{ success: boolean; imageUrls: string[] }>('/api/ya-cloud/upload-album-archive', {
      method: 'POST',
      body: formData,
    })

    if (response.success && response.imageUrls?.length) {
      toast.success(`Успешно загружено ${response.imageUrls.length} фото`)
      return response.imageUrls
    } else {
      toast.error("Архив пустой или не содержит изображений")
      return null
    }
  } catch (error) {
    console.error('Archive upload failed', error)
    toast.error("Ошибка при загрузке архива")
    return null
  }
}

const uploadPoster = async () => {
  if (!file.value) return

  uploading.value = true
  const formData = new FormData()
  formData.append('file', file.value)

  try {
    const imageUrls = await uploadAlbumArchive()
    if (!imageUrls) return

    const response = await $fetch<{ success: boolean, key: string, url: string }>('/api/ya-cloud/upload-album-preview', {
      method: 'POST',
      body: formData,
    })

    if (response.success) {
      await adminAlbumStore.createAlbum({ name: name.value, previewImage: response.url, images: imageUrls })
    }
  } catch (error) {
    console.error('Upload failed', error)
    toast.error("Ошибка при загрузке!")
  } finally {
    uploading.value = false
  }
}

onBeforeUnmount(() => {
  if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
})
</script>
<template>
  <v-container class="py-8">
    <v-row>
      <v-col cols="12" md="6">
        <h2 class="font-bold mb-2">Название</h2>
        <v-text-field v-model="name" variant="outlined" density="comfortable"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <h2 class="font-bold mb-2">Обложка альбома</h2>
        <v-file-input v-model="file" label="Загрузить" accept="image/*" prepend-icon="mdi-image"
          @change="handleFileChange" variant="outlined" density="comfortable" :disabled="uploading" />
      </v-col>
    </v-row>

    <!-- Preview -->
    <v-row v-if="previewUrl" class="mt-6">
      <v-col cols="6" md="4" lg="3">
        <v-card>
          <v-card-title class="word-all">Предпросмотр</v-card-title>
          <v-card-text>
            соотношение ширины к высоте 585/591
            <v-img :src="previewUrl" class="rounded" :aspect-ratio="585 / 591" cover />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <h2 class="font-bold mb-2">Фотографии</h2>
        <v-file-input v-model="archiveFile" label="Загрузить архив с фотографиями" accept=".zip,.rar,.7z"
          prepend-icon="mdi-archive-arrow-up-outline" variant="outlined" density="comfortable"
          @change="handleArchiveUpload" />
      </v-col>
    </v-row>

    <!-- Upload button -->
    <v-row class="mt-4">
      <v-col>
        <v-btn color="secondary" :loading="uploading" :disabled="!file || uploading" @click="uploadPoster">
          Загрузить
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
/* Дополнительные стили при необходимости */
</style>