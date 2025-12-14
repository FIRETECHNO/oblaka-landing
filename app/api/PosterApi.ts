import type { IPoster, IPosterDb } from "~/types/IPoster.interface"

export default {
  createPoster(poster: IPoster): Promise<any> {
    const { $apiFetch } = useNuxtApp()

    return $apiFetch<IPosterDb>('/poster/create', { method: 'POST', body: { poster } })
  },
  getPosters(): Promise<any> {
    const { $apiFetch } = useNuxtApp()

    return $apiFetch<IPosterDb[]>('/poster/all', { method: 'GET' })
  },
  getPosterById(_id: string): Promise<any> {
    const { $apiFetch } = useNuxtApp()

    return $apiFetch<IPosterDb>('/poster/by-id', { method: 'GET', query: { _id } })
  },
  edit(poster: IPoster, _id: string): Promise<any> {
    const { $apiFetch } = useNuxtApp()

    return $apiFetch<IPosterDb>('/poster/edit', { method: 'POST', body: { poster, _id } })
  },
}