<script setup lang="ts">
import { reactive, computed, ref } from 'vue'

const bookFormStore = useBookForm()

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

      <v-text-field v-model="form.eventType" variant="solo-filled" bg-color="primary" placeholder="Тематика мероприятия"
        rounded :error="form.eventType.trim().length === 0 && form.eventType !== ''"
        :error-messages="form.eventType.trim().length === 0 && form.eventType !== '' ? 'Укажите тематику' : ''"
        class="w-100">
        <template v-slot:prepend-inner>
          <div class="mr-8"></div>
        </template>
      </v-text-field>

      <v-text-field v-model="form.date" variant="solo-filled" bg-color="primary" placeholder="Дата" rounded
        :error="!isDateValid && form.date !== ''"
        :error-messages="!isDateValid && form.date !== '' ? 'Введите дату' : ''" class="w-100">
        <template v-slot:prepend-inner>
          <div class="mr-8"></div>
        </template>
      </v-text-field>

      <v-checkbox v-model="agreement" label="Согласие на обработку персональных данных" hide-details="auto" />

      <v-btn :disabled="!canSubmit" base-color="primary" class="rounded-xl" block min-height="100"
        @click="handleSubmit">
        <h2>Отправить заявку</h2>
      </v-btn>
    </v-col>
  </v-row>
</template>