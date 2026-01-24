<script setup lang="ts">
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
// Опционально: тема (можно удалить и писать свою)
// import 'flatpickr/dist/themes/material_blue.css'

// Локаль для русского языка
import { Russian } from 'flatpickr/dist/l10n/ru.js'

const dateConfig = {
  locale: Russian,
  dateFormat: 'd F Y', // отображение: "25 января 2026"
  altInput: true,      // создаёт скрытый input с ISO-датой, а показывает красивую
  altFormat: 'Y-m-d',  // формат для v-model (если altInput: true)
  allowInput: false,
  clickOpens: true,
  wrap: false
}

const eventTypeItems = [
  "День рождения",
  "Свадьба",
  "Конференция",
  "Клуб",
  "Выпускной",
  "Мальчишник",
  "Другое",
]

import { reactive, computed, ref } from 'vue'

const bookFormStore = useBookForm()
const router = useRouter()

const form = reactive({
  name: '',
  phone: '',
  eventType: '',
  date: '',
})

const agreement = ref(false)

const isPhoneValid = computed(() => {
  if (!form.phone) return true
  const digits = form.phone.replace(/\D/g, '')
  return digits.length === 11 && (digits.startsWith('7') || digits.startsWith('8'))
})

const isDateValid = computed(() => {
  if (!form.date) return true
  return form.date.trim().length > 0
})

const isFormValid = computed(() => {
  return (
    form.name.trim().length > 0 &&
    form.eventType.trim().length > 0 &&
    isPhoneValid.value &&
    isDateValid.value
  )
})

const canSubmit = computed(() => agreement.value && isFormValid.value)

async function handleSubmit() {
  if (!canSubmit.value) return
  await bookFormStore.sendForm(form.name, form.phone, form.date, form.eventType)
}
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-text-field v-model="form.name" variant="solo-filled" bg-color="primary" base-color="#000000" placeholder="Имя"
        rounded :error="form.name.trim().length === 0 && form.name !== ''"
        :error-messages="form.name.trim().length === 0 && form.name !== '' ? 'Укажите имя' : ''" class="w-100">
        <template v-slot:prepend-inner>
          <div class="mr-8"></div>
        </template>
      </v-text-field>

      <v-text-field v-model="form.phone" variant="solo-filled" bg-color="primary" placeholder="Телефон" rounded
        :error="!isPhoneValid && form.phone !== ''"
        :error-messages="!isPhoneValid && form.phone !== '' ? 'Неверный формат телефона' : ''" class="w-100">
        <template v-slot:prepend-inner>
          <div class="mr-8"></div>
        </template>
      </v-text-field>

      Тематика мероприятия
      <v-select v-model="form.eventType" variant="solo-filled" bg-color="primary" placeholder="Тематика мероприятия"
        rounded :error="form.eventType.trim().length === 0 && form.eventType !== ''"
        :error-messages="form.eventType.trim().length === 0 && form.eventType !== '' ? 'Укажите тематику' : ''"
        class="w-100" :items="eventTypeItems" style="height: 80px;">
        <template v-slot:prepend-inner>
          <div class="mr-8"></div>
        </template>
      </v-select>

      <ClientOnly>
        <flat-pickr v-model="form.date" :config="dateConfig" class="custom-datepicker w-100" placeholder="Дата"
          :error="!isDateValid && form.date !== ''" />
      </ClientOnly>

      <!-- <v-text-field v-model="form.date" variant="solo-filled" bg-color="primary" placeholder="Дата" rounded
        :error="!isDateValid && form.date !== ''"
        :error-messages="!isDateValid && form.date !== '' ? 'Введите дату' : ''" class="w-100">
        <template v-slot:prepend-inner>
          <div class="mr-8"></div>
        </template>
      </v-text-field> -->

      <div class="d-flex align-center cursor-pointer" @click="agreement = !agreement">
        <v-checkbox v-model="agreement" hide-details="auto" class="mr-2" />
        <p class="personal-data-agreement-link" @click.stop="router.push('/personal-data')">
          Согласие на обработку персональных
          данных
        </p>
      </div>

      <v-btn :disabled="!canSubmit" base-color="primary" class="rounded-xl" block min-height="100"
        @click="handleSubmit">
        <h2>Отправить заявку</h2>
      </v-btn>
    </v-col>
  </v-row>
</template>
