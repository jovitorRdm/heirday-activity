import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours")


export function hoursLoad({date}){
    // limpa a lista de horários
    hours.innerHTML = ""
    
    const opening = openingHours.map((hour) => {
        const [scheduleHour] = hour.split(":")

        // adicionar a data e verificar se não está no passado. 
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
        
        return {
            hour,
            available: isHourPast,
        }
    })

    opening.forEach(({hour, available})=>{
        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add(available ? "hour-available": "hour-unavailable")
        li.textContent = hour
        if(hour === "9:00"){
            hourHeaderAdd("Manhã")
        }else if(hour === "13:00"){
            hourHeaderAdd("Tarde")
        }else if(hour === "22:00"){
            hourHeaderAdd("Noite")
        }
        hours.append(li)
    })

    hoursClick()
}

function hourHeaderAdd(title){
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}