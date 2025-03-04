import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js";
import { scheduleShow } from "./show.js";

const selectedDate = document.getElementById("date")

export async function schedulesDay(){
    
    const date = selectedDate.value

    // BUSCA NA API OS HORARIOS 
    console.log(date);
    
    const dailySchedules = await scheduleFetchByDay({date})

    scheduleShow({dailySchedules})
    

    hoursLoad({date, dailySchedules})
}