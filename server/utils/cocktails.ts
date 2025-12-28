import type { ICocktail } from "../../app/types/ICocktail.interface"

export function getById(_id: number): ICocktail | null {
  for (let c of oblakaCocktails) {
    if (c._id == _id) return c
  }
  return null
}

export const oblakaCocktails: ICocktail[] = [
  {
    _id: 1,
    name: "Дайкири",
    images: ["https://storage.yandexcloud.net/oblaka-images/cocktails/daikiri.png"],
    ingredients: "светлый ром, лайм, сахарный сироп",
    description: "Крепкий классический коктейль с яркой цитрусовой кислотой и лёгкой сладостью. Чистый и освежающий вкус."
  },
  {
    _id: 2,
    name: "Мохито",
    images: ["https://storage.yandexcloud.net/oblaka-images/cocktails/daikiri.png"],
    ingredients: "ром, лайм, мята, сахар, содовая",
    description: "Лёгкий и освежающий коктейль с мятой и лаймом. Идеален для долгого вечера."
  },
  {
    _id: 3,
    name: "Джин Физз",
    images: ["https://storage.yandexcloud.net/oblaka-images/cocktails/gin-fizz.png"],
    ingredients: "джин, лимон, сахар, содовая",
    description: "Свежий цитрусовый коктейль с лёгкой газированной текстурой."
  },
  {
    _id: 4,
    name: "Лонг Айленд",
    images: ["https://storage.yandexcloud.net/oblaka-images/cocktails/long-island.png"],
    ingredients: "водка, ром, текила, джин, трипл сек, кола",
    description: "Очень крепкий и обманчиво сладкий коктейль с фруктовыми нотами и вкусом колы."
  },
  {
    _id: 5,
    name: "Май Тай",
    images: ["https://storage.yandexcloud.net/oblaka-images/cocktails/muai-thai.png"],
    ingredients: "светлый ром, тёмный ром, миндальный сироп, ананас, лайм",
    description: "Тропический кисло-сладкий коктейль с насыщенным фруктовым характером."
  },
  {
    _id: 6,
    name: "Маргарита",
    images: ["https://storage.yandexcloud.net/oblaka-images/cocktails/margarita.png"],
    ingredients: "текила, лайм, апельсиновый ликёр",
    description: "Классический цитрусовый коктейль с балансом кислоты и сладости и солёной кромкой."
  },
  {
    _id: 7,
    name: "Пина Колада",
    images: ["https://storage.yandexcloud.net/oblaka-images/cocktails/pina-colada.png"],
    ingredients: "ром, кокос, ананас, сливки",
    description: "Сладкий десертный коктейль с кремовой текстурой и тропическим вкусом."
  },
  {
    _id: 8,
    name: "Кровавая Мэри",
    images: ["https://storage.yandexcloud.net/oblaka-images/cocktails/bloody-mary.png"],
    ingredients: "водка, томат, специи, табаско",
    description: "Пикантный солёно-острый коктейль с насыщенным пряным вкусом."
  },
  {
    _id: 9,
    name: "Порнстар Мартини",
    images: ["https://storage.yandexcloud.net/oblaka-images/cocktails/pornstar.png"],
    ingredients: "водка, маракуйя, ваниль, игристое",
    description: "Сладкий фруктовый коктейль с маракуйей и отдельным шотом игристого."
  },
  {
    _id: 10,
    name: "Белый Русский",
    images: ["https://storage.yandexcloud.net/oblaka-images/cocktails/white-russian.png"],
    ingredients: "водка, кофейный ликёр, сливки",
    description: "Десертный коктейль с кофейно-ванильным вкусом и кремовой текстурой."
  },
  {
    _id: 11,
    name: "Негрони",
    images: ["https://storage.yandexcloud.net/oblaka-images/cocktails/negroni.png"],
    ingredients: "джин, вермут, кампари",
    description: "Горько-травянистый классический коктейль с глубоким и насыщенным характером."
  },
  {
    _id: 12,
    name: "Апероль Шприц",
    images: ["https://storage.yandexcloud.net/oblaka-images/cocktails/aperol-spritz.png"],
    ingredients: "апероль, просекко, апельсин",
    description: "Лёгкий и освежающий аперитив с фруктово-горькими нотами."
  },
  {
    _id: 13,
    name: "Табаско Стравберри",
    images: ["https://storage.yandexcloud.net/oblaka-images/cocktails/tabasko-strawberry.png"],
    ingredients: "джин, клубника, табаско",
    description: "Ягодный коктейль с острой пряной ноткой и кисло-горьким вкусом."
  },
  {
    _id: 14,
    name: "Черничный Мохито",
    images: ["https://storage.yandexcloud.net/oblaka-images/cocktails/ch-mojito.png"],
    ingredients: "ром, черника, мята, лайм, содовая",
    description: "Освежающий ягодный вариант классического мохито."
  },
  {
    _id: 15,
    name: "Лавандовый Бабл Гам",
    images: ["https://storage.yandexcloud.net/oblaka-images/cocktails/lav-bubblegum.png"],
    ingredients: "джин, лаванда, ананас",
    description: "Сладкий цветочный коктейль с необычным ароматом и лёгкой кислинкой."
  },
  {
    _id: 16,
    name: "Персиковый Визг",
    images: ["https://storage.yandexcloud.net/oblaka-images/cocktails/peach-v.png"],
    ingredients: "текила, персик, цитрус",
    description: "Фруктовый и яркий коктейль с персиковым вкусом и цветочным оттенком."
  },
  {
    _id: 17,
    name: "Манговый Протеин",
    images: ["https://storage.yandexcloud.net/oblaka-images/cocktails/mango-protein.png"],
    ingredients: "водка, апероль, манго, белок",
    description: "Плотный фруктово-сливочный коктейль с воздушной текстурой."
  },
  {
    _id: 18,
    name: "Ваша Остановочка",
    images: ["https://storage.yandexcloud.net/oblaka-images/cocktails/your-d.png"],
    ingredients: "водка, егерь, абсент",
    description: "Насыщенный травянисто-горький коктейль с анисовым характером."
  },
  {
    _id: 19,
    name: "Егерь Бомбино",
    images: ["https://storage.yandexcloud.net/oblaka-images/cocktails/eger-bombino.png"],
    ingredients: "егерь, текила, вишня, лимон",
    description: "Ягодный кисло-горький коктейль с пряным послевкусием."
  },
  {
    _id: 20,
    name: "Облака",
    images: ["https://storage.yandexcloud.net/oblaka-images/cocktails/clouds.png"],
    ingredients: "джин, апероль, игристое, анчан",
    description: "Лёгкий цветочно-фруктовый коктейль с эффектным визуалом."
  }
]