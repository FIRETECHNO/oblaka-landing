import { toast } from "vue3-toastify";
import AlbumApi from "~/api/AlbumApi";
import type { IAlbum, IAlbumEvade, IAlbumDb } from "~/types/IAlbum.interface";
export function useAdminAlbum() {
  let albums = useState<IAlbumDb[]>(() => [])
  let cursor = useState<number>(() => 0)


  const router = useRouter()

  async function getAlbums() {
    try {
      if (albums.value.length == 0) {
        let res = await AlbumApi.getAlbums(cursor.value)
        cursor.value = cursor.value + 10
        albums.value = res;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function createAlbumToEvade(album: IAlbumEvade) {
    try {
      let res = await AlbumApi.createAlbumToEvade(album)

      if (process.client)
        toast("Успешно!", {
          type: "success",
          autoClose: 400,
          onClose: () => { router.push("/admin/album") }
        })
    } catch (error) {
      console.log(error);
    }
  }
  async function getAlbumsToEvade() {
    try {
      let res = await AlbumApi.getAlbumsToEvade()
      return res
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteAlbumToEvade(_id: string) {
    try {
      let res = await AlbumApi.deleteAlbumToEvade(_id)

      if (process.client)
        toast("Успешно!", {
          type: "success",
          autoClose: 400,
          onClose: () => { router.push("/admin/album") }
        })
    } catch (error) {
      console.log(error);
    }
  }

  return {
    // vars
    albums,
    // functions
    getAlbums,
    createAlbumToEvade,
    deleteAlbumToEvade,
    getAlbumsToEvade
  }
}