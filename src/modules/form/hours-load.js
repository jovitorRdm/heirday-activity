import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";

export function hoursLoad({date}){
    const opening = openingHours.map((hour) => {
        const [scheduleHour] = hour.split(":")
        
        
        // adicionar a data e verificar se não está no passado. 
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
        console.log(isHourPast);
        
    })
}