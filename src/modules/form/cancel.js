import { schedulesDay } from "../schedules/load.js"
import { scheduleCancel } from "../../services/schedule-cancel"
const periods = document.querySelectorAll(".period")

periods.forEach((periods) => {
    periods.addEventListener("click", async (event) => {
        if (event.target.classList.contains("cancel-icon")) {
            //resgata o li
            const item = event.target.closest("li")

            // pega o id do li selecionado
            const { id } = item.dataset

            console.log(id);
            

            if (id) {
                const isConfirm = confirm(
                    "Tem certeza que deseja cancelar esse agendamento?"
                )

                if (isConfirm) {
                    await scheduleCancel({id})
                    schedulesDay()
                }
            }
        }

    })
})



