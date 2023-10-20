import { formatteddateTwoYearsAgo } from "@/lib/dateTwoYearsAgo";
import axiosClient from "../apiClient";
import { Reports } from "@/interfaces/reports";

export function getRecordsTwoYearsAgo(): Promise<Reports[]> {
    const limit = 100
    const offset = 1
    return axiosClient.get(`?where=fecha_del_parte>=date'${formatteddateTwoYearsAgo}'&offset=${offset}&limit=${limit}`)
    .then((response) => {
      console.log('API Response:', response.data.results);
      const responseData: Reports[] = response.data.results;
      return responseData;
    })
    .catch((error) => {
      console.error('Error al obtener datos de la API:', error);
      throw error;
    });
}
