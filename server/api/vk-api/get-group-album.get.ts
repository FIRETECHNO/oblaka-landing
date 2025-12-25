async function fetchAlbumImage(album_id: number): Promise<string> {
  const config = useRuntimeConfig()
  const owner_id = -50103584;
  const v = 5.199;
  const rev = 1;
  const count = 1;
  const access_token = config.vkAccessToken
  return $fetch("https://api.vk.ru/method/photos.get", {
    method: 'GET',
    query: {
      access_token, owner_id, album_id, rev, count, v
    }
  })
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const access_token = config.vkAccessToken
  const owner_id = -50103584;
  const v = 5.199;
  const rev = 1;
  const count = 30;
  const query = getQuery(event)
  const offset = query.cursor
  const res: any = await $fetch('https://api.vk.ru/method/photos.getAlbums',
    {
      method: 'GET',
      query: { access_token, owner_id, v, rev,count,offset }
    })
    let albums = []
    for (let album of res?.response?.items) {
      let image_res:any = await fetchAlbumImage(album.id)
      albums.push({ previewImage: image_res.response.items[0]?.orig_photo.url, _id: album.id })
    }
    return albums
  })