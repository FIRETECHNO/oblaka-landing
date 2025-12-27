function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function fetchAlbumImage(album_id: number): Promise<any> {
  const config = useRuntimeConfig()
  const owner_id = -50103584;
  const v = 5.199;
  const rev = 1;
  const count = 1;
  const access_token = config.vkAccessToken

  await delay(200)

  return await $fetch("https://api.vk.ru/method/photos.get", {
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

  let res: any;
  try {
    res = await $fetch('https://api.vk.ru/method/photos.getAlbums',
      {
        method: 'GET',
        query: { access_token, owner_id, v, rev, count, offset }
      })
  } catch (error) {

  }

  let albums = []
  for (let album of res?.response?.items) {
    let image_res: any = await fetchAlbumImage(album.id)
    // console.log(image_res);

    albums.push({ previewImage: image_res.response.items[0]?.orig_photo.url, _id: album.id, name: album.title })
  }
  return albums
})