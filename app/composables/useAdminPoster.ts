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

  return {
    // vars

    // functions
    createPoster,
  }
}