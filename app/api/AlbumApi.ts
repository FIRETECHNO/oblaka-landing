import type { IAlbum, IAlbumDb } from "~/types/IAlbum.interface"

export default {
  createAlbum(album: IAlbum): Promise<any> {
    const { $apiFetch } = useNuxtApp()

    return $apiFetch<IAlbumDb>('/album/create', { method: 'POST', body: { album } })
  }
}