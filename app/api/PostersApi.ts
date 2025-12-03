import type { Poster } from "~/types/posters.interface"

export default {
  fetch(): Poster[] {
    // return useApiFetch('/posters/fetch', { method: 'GET', body: { query, cursor } })  Promise<any>
    return [
      {
        images: ["/images/1.png"],
        eventDate: "09.08.2025",
        markdownText: "Lorem"
      },
      {
        images: ["/images/2.png"],
        eventDate: "09.08.2025",
        markdownText: "Ipsum"
      },
      {
        images: ["/images/3.png"],
        eventDate: "09.08.2025",
        markdownText: "Dolor"
      },
      {
        images: ["/images/4.png"],
        eventDate: "09.08.2025",
        markdownText: "Lorem"
      },
      {
        images: ["/images/5.png"],
        eventDate: "09.08.2025",
        markdownText: "Ipsum"
      },
      {
        images: ["/images/6.png"],
        eventDate: "09.08.2025",
        markdownText: "Dolor"
      },
      {
        images: ["/images/7.png"],
        eventDate: "09.08.2025",
        markdownText: "Lorem"
      },
      {
        images: ["/images/8.png"],
        eventDate: "09.08.2025",
        markdownText: "Ipsum"
      },
      {
        images: ["/images/9.png"],
        eventDate: "09.08.2025",
        markdownText: "Dolor"
      },
    ]
  }
}
