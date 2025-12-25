import { toast } from "vue3-toastify"
import type { ICocktail } from "~/types/ICocktail.interface"

export function useCocktailAi() {
  const strengthOptions = [
    "лёгкий",
    "средней крепости",
    "крепкий",
  ]

  const tasteOptions = [
    "сладкий / десертный",
    "свежий / кисло-сладкий",
    "горький / пряный"
  ]

  const moodOptions = [
    "лёгкий вечер / освежающе",
    "празднично / вечеринка",
    "классика / вдумчиво"
  ]

  let resultCocktails = useState<ICocktail[]>(() => [])

  // preview, select, result
  let step = useState<string>(() => "preview")

  function nextStep(s: string) {
    step.value = s;
  }

  async function askAi(
    strength: number | null,
    taste: number | null,
    mood: number | null) {
    if (strength === null || taste === null || mood === null) return
    try {
      const prompt = `
        Крепость: ${strengthOptions[strength]}
        Вкус: ${tasteOptions[taste]}
        Настроение: ${moodOptions[mood]}
`.trim()

      let res = await $fetch<ICocktail[]>("/api/gigachat", {
        method: "POST",
        body: { prompt }
      })

      resultCocktails.value = res

      nextStep("result")
    } catch (error) {
      toast.error("Ошибка при запросе")
    }
  }

  return {
    // constants
    strengthOptions, tasteOptions, moodOptions,
    // vars
    step, resultCocktails,
    // functions
    nextStep, askAi
  }
}