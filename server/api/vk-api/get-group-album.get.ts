export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const access_token = config.vkAccessToken;
  const owner_id = -50103584;
  const v = 5.199;
  const rev = 1;
  const count = 10;
  const need_covers = 1;
  const query = getQuery(event);
  const offset = query.cursor || 0;

  // VKScript with proper boolean condition syntax
  const vkScript = `
    var albums = API.photos.getAlbums({
      "owner_id": ${owner_id},
      "offset": ${offset},
      "count": ${count},
      "need_covers": ${need_covers},
      "rev": ${rev},
      "v": "${v}"
    });
    
    var items = albums.items;
    var result = [];
    var i = 0;
    var items_count = items.length;
    
    while (i < items_count) {
      var album = items[i];
      var album_id = album.id;
      
      var photos = API.photos.get({
        "owner_id": ${owner_id},
        "album_id": album_id,
        "count": 1,
        "rev": ${rev},
        "v": "${v}"
      });
      
      var preview_url = "";
      if (photos.items != null && photos.items.length > 0) {
        var first_photo = photos.items[0];
        if (first_photo.orig_photo != null && first_photo.orig_photo.url != null) {
          preview_url = first_photo.orig_photo.url;
        }
      }
      
      result.push({
        "previewImage": preview_url,
        "_id": album_id,
        "name": album.title
      });
      
      i = i + 1;
    }
    
    return result;
  `;

  try {
    const response: any = await $fetch('https://api.vk.ru/method/execute', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      },
      body: {
        v: v,
        code: vkScript
      }
    });

    // console.log("1",response)
    return response?.response || [];
  } catch (error) {
    console.error('VK API error:', error);
    return [];
  }
});
