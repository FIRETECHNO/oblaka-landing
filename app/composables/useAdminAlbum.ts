import { toast } from "vue3-toastify";
import AlbumApi from "~/api/AlbumApi";
import type { IAlbum, IAlbumDb } from "~/types/IAlbum.interface";
export function useAdminAlbum() {
  let albums = useState<IAlbumDb[]>(() => [])


  const router = useRouter()

  async function getAlbums(){
    let albumsList = await AlbumApi.getAlbums()
    for (let album of albumsList.response.items){
      let res = await AlbumApi.fetchAlbumImage(album.id)
      albums.value.push({previewImage:res.response.items[0]?.orig_photo.url,_id:"1"})
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