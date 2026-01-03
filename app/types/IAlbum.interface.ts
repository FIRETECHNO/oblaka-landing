export interface IAlbum {
  // name: string
  previewImage: string | undefined
  images: string[] // array of images urls at ya cloud
}
export interface IAlbumEvade {
  url:string
}

export interface IAlbumDb extends IAlbum {
  _id: string
}

export interface IAlbumEvadeDb extends IAlbumEvade {
  _id: string
}