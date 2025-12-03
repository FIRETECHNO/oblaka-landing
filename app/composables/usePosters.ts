import type { Poster, PosterDB } from "../types/posters.interface";
import PostersApi from "../api/PostersApi";

export function usePosters() {
    const posters = useState<Poster[] | null>(() => null)
    async function loadPosters() {
        let newPosters = await PostersApi.fetch();
        posters.value = newPosters;
    }
    return {
        posters,
        loadPosters
    };
}
