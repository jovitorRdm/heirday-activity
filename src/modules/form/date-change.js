import {schedulesDay} from "../schedules/load.js"

//selecionar o input de data
const  selectedDate = document.getElementById("date")

//recarregar o 
selectedDate.onchange = () => schedulesDay()