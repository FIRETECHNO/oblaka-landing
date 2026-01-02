import { toast } from "vue3-toastify";
import BookFormApi from "~/api/BookFormApi";

export default function useBookForm() {
  return {
    // functions
    async sendForm(name: string, phone: string, date: string, eventType?: string) {
      try {
        await BookFormApi.sendForm(name, phone, date, eventType)

        toast("Заявка отправлена!", { type: "success", autoClose: 2200 })
      } catch (error) {
        console.log("error useBookForm/sendForm", error);
      }
    }
  }
}