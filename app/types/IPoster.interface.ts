export interface IPoster {
  images: string[] // array of images urls at ya cloud
  markdownText: string
}

export interface IPosterDb extends IPoster {
  _id: string
}