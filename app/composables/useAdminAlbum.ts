import { toast } from "vue3-toastify";
import AlbumApi from "~/api/AlbumApi";
import type { IAlbum, IAlbumDb } from "~/types/IAlbum.interface";
export function useAdminAlbum() {
  let albums = useState<IAlbumDb[]>(() => [])
  let cursor = useState<number>(() => 0)


  const router = useRouter()

  async function getAlbums() {
    try {
      if (albums.value.length==0){
        let res = await AlbumApi.getAlbums(cursor.value)
        cursor.value = cursor.value + 10
        albums.value = res;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function createAlbum(poster: IAlbum) {
    try {
      let res = await AlbumApi.createAlbum(poster)
      albums.value.push(res)

      if (process.client)
        toast("Альбом создан!", {
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
    createAlbum,
  }
}