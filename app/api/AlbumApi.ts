import type { IAlbumEvade, IAlbumDb } from "~/types/IAlbum.interface"

export default {
  createAlbumToEvade(album: IAlbumEvade): Promise<any> {
    const { $apiFetch } = useNuxtApp()

    return $apiFetch<any>('/album/create', { method: 'POST', body: { album } })
  },
  getAlbumsToEvade(): Promise<any> {
    const { $apiFetch } = useNuxtApp()

    return $apiFetch<any>('/album/all', { method: 'GET'})
  },
  deleteAlbumToEvade(_id:string): Promise<any> {
    const { $apiFetch } = useNuxtApp()

    return $apiFetch<any>('/album/delete', { method: 'POST', body: { _id } })
  },

  getAlbums(cursor: Number): Promise<any> {
    return $fetch('/api/vk-api/get-group-album', {
      method: 'GET',
      query: { cursor }
    })
  }
}