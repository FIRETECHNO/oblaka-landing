export interface Poster {
  images: string[];
  eventDate: string;
  label: string;
}
export interface PosterDB {
  images: string[];
  eventDate: string;
  label: string;
  _id: string
}
export interface PosterCarousel {
  firstPosters: Poster[];
  secondPosters: Poster[];
  thirdPosters: Poster[];
  cursor: number;
  variant: string;
}
