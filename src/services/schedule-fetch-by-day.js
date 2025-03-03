import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetchByDay({ date }) {
  try {
    // Fazendo a requisição para a API
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    // Verifica se a requisição foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status} ${response.statusText}`);
    }

    // Converte a resposta para JSON
    const data = await response.json(); // <-- Aqui estava o erro: "data" não existia antes

    // Filtra os agendamentos pela data fornecida
    const dailySchedules = data.filter((schedule) => 
      dayjs(date).isSame(schedule.when, "date")
    );

    return dailySchedules;
  } catch (error) {
    console.error("Erro ao buscar agendamentos:", error);
    return []; // Retorna um array vazio para evitar erros no código que chama essa função
  }
}
