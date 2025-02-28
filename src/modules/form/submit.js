import dayjs from "dayjs";
const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

//data atual para formatar o input 
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//carrega a data atual
selectedDate.value = inputToday

//DEFINIR A DATA MINIMA COMO A DATA ATUAL
selectedDate.min = inputToday

form.onsubmit = (event) => {
    //previne o comportamento padrão de recarragar a pagina
    event.preventDefault()
    console.log("enviado.");
    
}