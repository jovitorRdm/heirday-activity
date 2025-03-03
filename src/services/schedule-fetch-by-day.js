import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetchByDay({date}) {
  try {
    //fazendo  requisição
    const response = await fetch(`${apiConfig.baseURL}/schedules`)
    const date = await response.json()
    const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

    return dailySchedules
  } catch (error) {
    console.log(error);
    console.log("Não foi possível buscar os agendamentos do dia selecionado!");
    
  }
}