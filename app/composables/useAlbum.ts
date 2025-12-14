import type { IAlbumDb } from "~/types/IAlbum.interface";

export function useAlbum() {
  let albums = useState<IAlbumDb[]>(() => [])

  async function getAlbums() {
    albums.value = [
      {
        name: "test",
        // туту пока постер, нужно будет убрать
        previewImage: "https://storage.yandexcloud.net/oblaka-images/album-previews/13.webp",
        images: [],
        _id: "asdadefrk33m3dm"
      },
      {
        name: "test",
        // туту пока постер, нужно будет убрать
        previewImage: "https://storage.yandexcloud.net/oblaka-images/album-previews/13.webp",
        images: [],
        _id: "asdadefrk133m3dm"
      },
      {
        name: "test",
        // туту пока постер, нужно будет убрать
        previewImage: "https://storage.yandexcloud.net/oblaka-images/album-previews/13.webp",
        images: [],
        _id: "asdad3efrk33m3dm"
      },
      {
        name: "test",
        // туту пока постер, нужно будет убрать
        previewImage: "https://storage.yandexcloud.net/oblaka-images/album-previews/13.webp",
        images: [],
        _id: "asdade324frk33m3dm"
      },
      {
        name: "test",
        // туту пока постер, нужно будет убрать
        previewImage: "https://storage.yandexcloud.net/oblaka-images/album-previews/13.webp",
        images: [],
        _id: "asdadef234rk33m3dm"
      }
    ]
  }

  return {
    // vars
    albums,
    // functions
    getAlbums
  }
}