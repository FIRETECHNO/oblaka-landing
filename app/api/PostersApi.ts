import type { Poster } from "~/types/posters.interface"

export default {
  fetch(variant: string, cursor: number): Poster[] {
    // return useApiFetch('/posters/fetch', { method: 'GET', body: { query, cursor } })  Promise<any>
    if (cursor % 9 == 0) {
      return [
        {
          images: ["/images/1.png"],
          eventDate: "09.08.2025",
          label: "Lorem"
        },
        {
          images: ["/images/2.png"],
          eventDate: "09.08.2025",
          label: "Ipsum"
        },
        {
          images: ["/images/3.png"],
          eventDate: "09.08.2025",
          label: "Dolor"
        },
      ]
    }
    else if (cursor % 9 == 3) {
      return [
        {
          images: ["/images/4.png"],
          eventDate: "09.08.2025",
          label: "Lorem"
        },
        {
          images: ["/images/5.png"],
          eventDate: "09.08.2025",
          label: "Ipsum"
        },
        {
          images: ["/images/6.png"],
          eventDate: "09.08.2025",
          label: "Dolor"
        },
      ]
    }
    else {
      return [
        {
          images: ["/images/7.png"],
          eventDate: "09.08.2025",
          label: "Lorem"
        },
        {
          images: ["/images/8.png"],
          eventDate: "09.08.2025",
          label: "Ipsum"
        },
        {
          images: ["/images/9.png"],
          eventDate: "09.08.2025",
          label: "Dolor"
        },
      ]
    }
  },
}
