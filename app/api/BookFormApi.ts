export default {
  sendForm(name: string, phone: string, date: string, eventType?: string): Promise<any> {
    const { $apiFetch } = useNuxtApp()

    return $apiFetch<any>('/telegram/send-book-form', { method: 'POST', body: { name, phone, date, eventType } })
  },
}