<script setup lang="ts">
import { toast } from 'vue3-toastify'
import CropImageDialog from '~/components/CropImageDialog.vue'
import { MdEditor, config } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import RU from '@vavt/cm-extension/dist/locale/ru';
config({
  editorConfig: {
    languageUserDefined: {
      'ru': RU
    }
  }
})

definePageMeta({
  layout: "admin",
  middleware: "admin"
})

const adminPosterStore = useAdminPoster()
const router = useRouter()

const file = ref<File | null>(null)
const previewUrl = ref<string | null>(null)
const croppedBlob = ref<Blob | null>(null)
const posterText = ref<string>("")
const cropping = ref(false)
const uploading = ref(false)

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files?.[0]) {
    file.value = target.files[0]
    if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
    previewUrl.value = URL.createObjectURL(file.value)
    // Сбрасываем кроп, так как загружен новый файл
    croppedBlob.value = null
  }
}

const openCropper = () => {
  if (!previewUrl.value) return
  cropping.value = true
}

const onCrop = (blob: Blob) => {
  croppedBlob.value = blob
  cropping.value = false
  // Обновляем превью на обрезанное изображение
  if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
  previewUrl.value = URL.createObjectURL(blob)
}
const uploadPoster = async () => {
  if (!file.value) {
    toast.error('Файл не выбран')
    return
  }

  uploading.value = true

  const blobToUpload = croppedBlob.value ?? file.value

  const uploadFile = blobToUpload instanceof File
    ? blobToUpload
    : new File([blobToUpload], 'poster.jpg', { type: 'image/jpeg' })

  const formData = new FormData()
  formData.append('file', uploadFile)

  try {
    const response = await $fetch<{ success: boolean; key: string; url: string }>('/api/ya-cloud/upload-poster', {
      method: 'POST',
      body: formData,
    })

    if (response.success) {
      await adminPosterStore.createPoster({
        images: [response.url],
        markdownText: posterText.value,
      })
      toast.success('Постер успешно загружен!')
    }
  } catch (error) {
    console.error('Upload failed', error)
    toast.error('Ошибка при загрузке!')
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
          <v-card-title>Предпросмотр (соотношение 585/591)</v-card-title>
          <v-card-text>
            <v-img :src="previewUrl" class="rounded" :aspect-ratio="585 / 591" cover />
          </v-card-text>
          <!-- Кнопка "Обрезать" под превью -->
          <v-card-actions>
            <v-btn color="primary" variant="tonal" block @click="openCropper" :disabled="uploading">
              Обрезать *необязательно
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <MdEditor :toolbars="['bold', 'italic', 'underline', 'quote']" v-model="posterText" theme="dark"
          language="ru" />
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

    <!-- Кроппер -->
    <CropImageDialog v-model="cropping" :image-src="previewUrl" :aspect-ratio="585 / 591" @crop="onCrop" />
  </v-container>
</template>

<style scoped>
</style>