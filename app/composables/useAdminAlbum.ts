import { toast } from "vue3-toastify";
import PosterApi from "~/api/PosterApi";
import type { IAlbum, IAlbumDb } from "~/types/IAlbum.interface";


export function useAdminAlbum() {
  let albums = useState<IAlbumDb[]>(() => [])


  const router = useRouter()

  async function createAlbum(poster: IAlbum) {
    try {
      let res = await PosterApi.createPoster(poster)
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

    // functions
    createAlbum,
  }
}