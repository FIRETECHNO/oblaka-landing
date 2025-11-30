<script setup lang="ts">
import { toast } from 'vue3-toastify'

definePageMeta({
  layout: "admin",
  middleware: "admin"
})

const adminPosterStore = useAdminPoster()
const router = useRouter()

const file = ref<File | null>(null)
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

const uploadPoster = async () => {
  if (!file.value) return

  uploading.value = true
  const formData = new FormData()
  formData.append('file', file.value)

  try {
    const response = await $fetch<{ success: boolean, key: string, url: string }>('/api/ya-cloud/upload-poster', {
      method: 'POST',
      body: formData,
    })

    if (response.success) {
      await adminPosterStore.createPoster({ images: [response.url] })
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
        <v-file-input v-model="file" label="Загрузить обложку" accept="image/*" prepend-icon="mdi-image"
          @change="handleFileChange" variant="outlined" density="comfortable" :disabled="uploading" />
      </v-col>
    </v-row>

    <!-- Preview -->
    <v-row v-if="previewUrl" class="mt-6">
      <v-col cols="12" md="6" lg="5">
        <v-card>
          <v-card-title>Предпросмотр, соотношение ширины к высоте 585/591</v-card-title>
          <v-card-text>
            <v-img :src="previewUrl" class="rounded" :aspect-ratio="585 / 591" cover />
          </v-card-text>
        </v-card>
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