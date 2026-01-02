import { toast } from "vue3-toastify";
import BookFormApi from "~/api/BookFormApi";

export default function useBookForm() {
  let submitCount = useState<number>(() => 0)

  return {
    // functions
    async sendForm(name: string, phone: string, date: string, eventType?: string) {
      if (submitCount.value > 2) {
        toast.error("Слишком много отправленных форм!")
        return
      }
      try {
        await BookFormApi.sendForm(name, phone, date, eventType)
        submitCount.value += 1;

        toast("Заявка отправлена!", { type: "success", autoClose: 2200 })
      } catch (error) {
        console.log("error useBookForm/sendForm", error);
      }
    }
  }
}