import type { Poster, PosterDB, PosterCarousel } from "../types/posters.interface";
import PostersApi from "../api/PostersApi";

export function usePosters() {
    async function initializeCarousel(variant: string): Promise<PosterCarousel> {
        let carousel: PosterCarousel = {
            firstPosters: [],
            secondPosters: [],
            thirdPosters: [],
            cursor: 0,
            variant: variant
        }
        let newPosters = await PostersApi.fetch(carousel.variant, carousel.cursor);
        carousel.firstPosters = newPosters;
        carousel.cursor += 3
        carousel = await loadsecondPosters(carousel, 0)
        return carousel
    }
    async function loadsecondPosters(carousel: PosterCarousel, position: number): Promise<PosterCarousel> {
        let newPosters = await PostersApi.fetch(carousel.variant, carousel.cursor);
        if (position == 0) {
            carousel.secondPosters = newPosters
        }
        else if (position == 1) {
            carousel.thirdPosters = newPosters
        }
        else {
            carousel.firstPosters = newPosters
        }
        carousel.cursor += 3
        return carousel
    }
    return {
        initializeCarousel,
        loadsecondPosters
    };
}
