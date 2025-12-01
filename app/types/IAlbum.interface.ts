export interface IAlbum {
  name: string
  previewImage: string
  images: string[] // array of images urls at ya cloud
}

export interface IAlbumDb extends IAlbum {
  _id: string
}