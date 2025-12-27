import type { IAlbum, IAlbumDb } from "~/types/IAlbum.interface"

export default {
  createAlbum(album: IAlbum): Promise<any> {
    const { $apiFetch } = useNuxtApp()

    return $apiFetch<IAlbumDb>('/album/create', { method: 'POST', body: { album } })
  },

  getAlbums(cursor:Number): Promise<any> {
    return $fetch('/api/vk-api/get-group-album', {
      method: 'GET',
      query: { cursor }
    })
  }
}