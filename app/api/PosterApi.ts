import type { IPoster, IPosterDb } from "~/types/IPoster.interface"

export default {
  createPoster(poster: IPoster): Promise<any> {
    const { $apiFetch } = useNuxtApp()

    return $apiFetch<IPosterDb>('/poster/create', { method: 'POST', body: { poster } })
  }
}