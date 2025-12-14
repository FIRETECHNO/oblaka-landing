export default defineNuxtPlugin(async (nuxtApp: any) => {
  const route = nuxtApp.$router.currentRoute.value

  // Не выполняем на /
  if (route.path === '/') return

  await useAuth().checkAuth()
})