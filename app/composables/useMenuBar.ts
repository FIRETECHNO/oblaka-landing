export function useMenuBar() {
  let carouselImages = useState<string[]>(() => [])

  async function getCarouselImages() {
    carouselImages.value = [
      "images/menu-bar/1.jpg",
      "images/menu-bar/2.jpg",
      "images/menu-bar/3.jpg",
      "images/menu-bar/4.jpg",
      "images/menu-bar/5.webp",
    ]
  }

  return {
    // vars
    carouselImages,
    // functions
    getCarouselImages
  }
}