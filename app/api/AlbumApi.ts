import { queue } from "vue3-toastify";
import type { IAlbum, IAlbumDb } from "~/types/IAlbum.interface"

export default {
  createAlbum(album: IAlbum): Promise<any> {
    const { $apiFetch } = useNuxtApp()

    return $apiFetch<IAlbumDb>('/album/create', { method: 'POST', body: { album } })
  },
  getAlbums() {
    // const { $useFetch } = useNuxtApp()
    const owner_id = -50103584;
    const v = 5.199;
    // return useFetch('https://api.vk.ru/method/photos.getAlbums',
    //   {
    //     method: 'GET',
    //     query: { access_token, owner_id, v }
    //   })
    return {"response":{"count":6,"items":[{"id":307853950,"owner_id":-50103584,"size":119,"title":"ГАНВЕСТ 6.12.2025","feed_disabled":0,"feed_has_pinned":0,"can_upload":1,"created":1765344152,"description":"","can_delete":false,"can_include_to_feed":false,"thumb_id":457240402,"thumb_is_last":1,"updated":1765344380},{"id":307622860,"owner_id":-50103584,"size":100,"title":"8.11.2025 SAMOEL&Arik","feed_disabled":0,"feed_has_pinned":0,"can_upload":0,"created":1763465842,"description":"","can_delete":false,"can_include_to_feed":false,"thumb_id":457240186,"thumb_is_last":1,"updated":1763466168},{"id":307519630,"owner_id":-50103584,"size":2,"title":"Банкетное меню","feed_disabled":0,"feed_has_pinned":0,"can_upload":0,"created":1762594567,"description":"","can_delete":false,"can_include_to_feed":false,"thumb_id":457240193,"thumb_is_last":1,"updated":1763557372},{"id":307329915,"owner_id":-50103584,"size":10,"title":"Меню","feed_disabled":0,"feed_has_pinned":0,"can_upload":0,"created":1761036258,"description":"","can_delete":false,"can_include_to_feed":false,"thumb_id":457239802,"thumb_is_last":1,"updated":1761036279},{"id":307424094,"owner_id":-50103584,"size":131,"title":"Grand opening 18.10.2025","feed_disabled":0,"feed_has_pinned":0,"can_upload":0,"created":1761756720,"description":"","can_delete":false,"can_include_to_feed":false,"thumb_id":457239965,"thumb_is_last":1,"updated":1761757075},{"id":220166272,"owner_id":-50103584,"size":0,"title":"gamer","feed_disabled":0,"feed_has_pinned":0,"can_upload":0,"created":1440594642,"description":"","can_delete":false,"can_include_to_feed":false,"thumb_id":0,"thumb_is_last":1,"updated":1497814002}]}}
  },
  fetchAlbumImage(album_id:number){
    const owner_id = -50103584;
    const v = 5.199;
    const rev = 1;
    const count = 1;
    return {
    "response": {
        "count": 119,
        "items": [
            {
                "album_id": 307853950,
                "date": 1765344380,
                "id": 457240402,
                "owner_id": -50103584,
                "sizes": [
                    {
                        "height": 48,
                        "type": "s",
                        "width": 72,
                        "url": "https://sun9-62.userapi.com/s/v1/ig2/_MWcQivwHpF6suuL6oikhHBUii8Z4hnReH4CuX2_CohWpQ0hRTVAqi3aDB31lJtnnsx7xd7OFbk45n907Im0kk2D.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x106,240x160,360x239,480x319,540x359,640x426,720x479,1080x718,1280x851,1440x958,2560x1703&from=bu&u=cUoRc_5w2gBEIlUaBN4spqSyoXZlv-Y-2fqyV-YG2P8&cs=72x0"
                    },
                    {
                        "height": 106,
                        "type": "m",
                        "width": 160,
                        "url": "https://sun9-62.userapi.com/s/v1/ig2/_MWcQivwHpF6suuL6oikhHBUii8Z4hnReH4CuX2_CohWpQ0hRTVAqi3aDB31lJtnnsx7xd7OFbk45n907Im0kk2D.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x106,240x160,360x239,480x319,540x359,640x426,720x479,1080x718,1280x851,1440x958,2560x1703&from=bu&u=cUoRc_5w2gBEIlUaBN4spqSyoXZlv-Y-2fqyV-YG2P8&cs=160x0"
                    },
                    {
                        "height": 426,
                        "type": "x",
                        "width": 640,
                        "url": "https://sun9-62.userapi.com/s/v1/ig2/_MWcQivwHpF6suuL6oikhHBUii8Z4hnReH4CuX2_CohWpQ0hRTVAqi3aDB31lJtnnsx7xd7OFbk45n907Im0kk2D.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x106,240x160,360x239,480x319,540x359,640x426,720x479,1080x718,1280x851,1440x958,2560x1703&from=bu&u=cUoRc_5w2gBEIlUaBN4spqSyoXZlv-Y-2fqyV-YG2P8&cs=640x0"
                    },
                    {
                        "height": 718,
                        "type": "y",
                        "width": 1080,
                        "url": "https://sun9-62.userapi.com/s/v1/ig2/_MWcQivwHpF6suuL6oikhHBUii8Z4hnReH4CuX2_CohWpQ0hRTVAqi3aDB31lJtnnsx7xd7OFbk45n907Im0kk2D.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x106,240x160,360x239,480x319,540x359,640x426,720x479,1080x718,1280x851,1440x958,2560x1703&from=bu&u=cUoRc_5w2gBEIlUaBN4spqSyoXZlv-Y-2fqyV-YG2P8&cs=1080x0"
                    },
                    {
                        "height": 851,
                        "type": "z",
                        "width": 1280,
                        "url": "https://sun9-62.userapi.com/s/v1/ig2/_MWcQivwHpF6suuL6oikhHBUii8Z4hnReH4CuX2_CohWpQ0hRTVAqi3aDB31lJtnnsx7xd7OFbk45n907Im0kk2D.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x106,240x160,360x239,480x319,540x359,640x426,720x479,1080x718,1280x851,1440x958,2560x1703&from=bu&u=cUoRc_5w2gBEIlUaBN4spqSyoXZlv-Y-2fqyV-YG2P8&cs=1280x0"
                    },
                    {
                        "height": 1703,
                        "type": "w",
                        "width": 2560,
                        "url": "https://sun9-62.userapi.com/s/v1/ig2/_MWcQivwHpF6suuL6oikhHBUii8Z4hnReH4CuX2_CohWpQ0hRTVAqi3aDB31lJtnnsx7xd7OFbk45n907Im0kk2D.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x106,240x160,360x239,480x319,540x359,640x426,720x479,1080x718,1280x851,1440x958,2560x1703&from=bu&u=cUoRc_5w2gBEIlUaBN4spqSyoXZlv-Y-2fqyV-YG2P8&cs=2560x0"
                    },
                    {
                        "height": 72,
                        "type": "o",
                        "width": 108,
                        "url": "https://sun9-62.userapi.com/s/v1/ig2/_MWcQivwHpF6suuL6oikhHBUii8Z4hnReH4CuX2_CohWpQ0hRTVAqi3aDB31lJtnnsx7xd7OFbk45n907Im0kk2D.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x106,240x160,360x239,480x319,540x359,640x426,720x479,1080x718,1280x851,1440x958,2560x1703&from=bu&u=cUoRc_5w2gBEIlUaBN4spqSyoXZlv-Y-2fqyV-YG2P8&cs=108x0"
                    },
                    {
                        "height": 160,
                        "type": "p",
                        "width": 240,
                        "url": "https://sun9-62.userapi.com/s/v1/ig2/_MWcQivwHpF6suuL6oikhHBUii8Z4hnReH4CuX2_CohWpQ0hRTVAqi3aDB31lJtnnsx7xd7OFbk45n907Im0kk2D.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x106,240x160,360x239,480x319,540x359,640x426,720x479,1080x718,1280x851,1440x958,2560x1703&from=bu&u=cUoRc_5w2gBEIlUaBN4spqSyoXZlv-Y-2fqyV-YG2P8&cs=240x0"
                    },
                    {
                        "height": 239,
                        "type": "q",
                        "width": 360,
                        "url": "https://sun9-62.userapi.com/s/v1/ig2/_MWcQivwHpF6suuL6oikhHBUii8Z4hnReH4CuX2_CohWpQ0hRTVAqi3aDB31lJtnnsx7xd7OFbk45n907Im0kk2D.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x106,240x160,360x239,480x319,540x359,640x426,720x479,1080x718,1280x851,1440x958,2560x1703&from=bu&u=cUoRc_5w2gBEIlUaBN4spqSyoXZlv-Y-2fqyV-YG2P8&cs=360x0"
                    },
                    {
                        "height": 359,
                        "type": "r",
                        "width": 540,
                        "url": "https://sun9-62.userapi.com/s/v1/ig2/_MWcQivwHpF6suuL6oikhHBUii8Z4hnReH4CuX2_CohWpQ0hRTVAqi3aDB31lJtnnsx7xd7OFbk45n907Im0kk2D.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x106,240x160,360x239,480x319,540x359,640x426,720x479,1080x718,1280x851,1440x958,2560x1703&from=bu&u=cUoRc_5w2gBEIlUaBN4spqSyoXZlv-Y-2fqyV-YG2P8&cs=540x0"
                    },
                    {
                        "height": 1703,
                        "type": "base",
                        "width": 2560,
                        "url": "https://sun9-62.userapi.com/s/v1/ig2/_MWcQivwHpF6suuL6oikhHBUii8Z4hnReH4CuX2_CohWpQ0hRTVAqi3aDB31lJtnnsx7xd7OFbk45n907Im0kk2D.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x106,240x160,360x239,480x319,540x359,640x426,720x479,1080x718,1280x851,1440x958,2560x1703&from=bu&u=cUoRc_5w2gBEIlUaBN4spqSyoXZlv-Y-2fqyV-YG2P8"
                    }
                ],
                "text": "ГАНВЕСТ 6.12.2025",
                "user_id": 100,
                "web_view_token": "f57be75e25efef45eb",
                "has_tags": false,
                "orig_photo": {
                    "height": 1703,
                    "type": "base",
                    "url": "https://sun9-62.userapi.com/s/v1/ig2/_MWcQivwHpF6suuL6oikhHBUii8Z4hnReH4CuX2_CohWpQ0hRTVAqi3aDB31lJtnnsx7xd7OFbk45n907Im0kk2D.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x106,240x160,360x239,480x319,540x359,640x426,720x479,1080x718,1280x851,1440x958,2560x1703&from=bu&u=cUoRc_5w2gBEIlUaBN4spqSyoXZlv-Y-2fqyV-YG2P8",
                    "width": 2560
                }
            }
        ],
        "next_from": ""
    }
}
    // return useFetch("https://api.vk.ru/method/photos.get",{
    //   method: 'GET',
    //   query:{
    //     access_token, owner_id,album_id,rev,count,v
    //   }
    // })
  }
}
// use for auth maybe =)
//   return useFetch('https://oauth.vk.com/authorize?client_id=' + app + '&scope=' + scope + '&redirect_uri=https://oauth.vk.com/blank.html&display=page&response_type=token' + '&revoke=1')
//     {
//       method: 'GET',
//     })
// }