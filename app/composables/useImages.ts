export const useImages = () => {
  const getImages = () => ["/images/1.png","/images/2.png","/images/3.png","/images/4.png","/images/5.png"];
  // return UseState(links);
  return { getImages };
}