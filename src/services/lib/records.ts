import { formatteddateTwoYearsAgo } from "@/lib/dateTwoYearsAgo";
import axiosClient from "../apiClient";
import { Reports } from "@/interfaces/reports";

export async function getRecordsTwoYearsAgo(): Promise<Reports[]> {
    const limit = 100
    const offset = 500
    return axiosClient.get(`?where=fecha_del_parte>=date'${formatteddateTwoYearsAgo}'&offset=${offset}&limit=${limit}`)
    .then((response) => {
      console.log('API Response:', response.data.results);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const responseData: Reports[] = response.data.results.map((report:any) => {
        if (Array.isArray(report.provincia)) {
          report.provincia = report.provincia.join(", ");
        }
        return report;
      });
      return responseData;
    })
    .catch((error) => {
      console.error('Error al obtener datos de la API:', error);
      throw error;
    });
}
