import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js"
 
const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clienteName = document.getElementById("client");

//data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//carrega a data atual
selectedDate.value = inputToday;

//DEFINIR A DATA MINIMA COMO A DATA ATUAL
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  //previne o comportamento padrão de recarragar a pagina
  event.preventDefault();

  try {
    //Recuperando o nome do cliente.
    const name = clienteName.value.trim();

    if (!name) {
      return alert("informe o nome do cliente!");
    }

    const hourSelected = document.querySelector(".hour-selected");
    console.log(hourSelected.textContent);

    if (!hourSelected) {
      return alert("informe a hora!");
    }

    const [hour] = hourSelected.innerText.split(":")
    
    const when = dayjs(selectedDate.value).add(hour, "hour")

    const id = new Date().getTime()

    await scheduleNew({
        id,
        name,
        when,
    });
    
  } catch (error) {
    alert("Não foi possível realizar o agendamento!");
  }
};
