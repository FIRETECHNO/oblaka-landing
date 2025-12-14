import { toast } from "vue3-toastify";
import PosterApi from "~/api/PosterApi";

import type { IPoster, IPosterDb } from "~/types/IPoster.interface";

export function useAdminPoster() {
  let posters = useState<IPosterDb[]>(() => [])


  const router = useRouter()

  async function createPoster(poster: IPoster) {
    try {
      let res = await PosterApi.createPoster(poster)
      posters.value.push(res)

      if (process.client)
        toast("Афиша создана!", {
          type: "success",
          autoClose: 400,
          onClose: () => { router.push("/admin/poster") }
        })
    } catch (error) {
      console.log(error);
    }
  }
  async function getPosters() {
    try {
      let res = await PosterApi.getPosters()
      posters.value = res
    } catch (error) {
      console.log(error);
    }
  }
  async function getPosterById(_id: any) {
    //ne nays realization
    try {
      let res = await PosterApi.getPosterById(_id)
      return res
    } catch (error) {
      console.log(error);
    }
  }
  async function edit(poster: IPoster, _id: any) {
    try {
      let res = await PosterApi.edit(poster, _id)
      posters.value = res
      if (process.client)
        toast("Афиша отредактирована!", {
          type: "success",
          autoClose: 400,
          onClose: () => { router.push("/admin/poster") }
        })
    } catch (error) {
      console.log(error);
    }
  }

  return {
    // vars
    posters,
    // functions
    createPoster,
    getPosters,
    getPosterById,
    edit
  }
}