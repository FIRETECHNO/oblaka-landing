import PosterApi from "~/api/PosterApi";
import type { IPosterDb } from "~/types/IPoster.interface";

export default function usePoster() {
  let posters = useState<IPosterDb[]>("posters", () => [])

  async function getAllPosters() {
    try {

      let res = await PosterApi.getPostersForMainPage()

      posters.value = res
    } catch (error) {
      console.log("error usePoster/getAllPosters", error);

    }
  }

  return {
    // vars
    posters,
    // funcs
    getAllPosters
  }
}