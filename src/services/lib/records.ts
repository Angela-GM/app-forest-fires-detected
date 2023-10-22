import { formatteddateTwoYearsAgo } from "@/lib/dateTwoYearsAgo";
import axiosClient from "../apiClient";
import { Reports } from "@/interfaces/reports";

export async function getRecordsTwoYearsAgo(): Promise<Reports[]> {
  const limit = 100;
  const offset = 0;
  return axiosClient
    .get(
      `?where=fecha_del_parte>=date'${formatteddateTwoYearsAgo}'&offset=${offset}&limit=${limit}`
    )
    .then((response) => {
      console.log("API Response:", response.data.results);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const responseData: Reports[] = response.data.results.map(
        (report: Reports) => {
          if (Array.isArray(report.provincia)) {
            report.provincia = report.provincia.join(", ");
          }
          return report;
        }
      );
      return responseData;
    })
    .catch((error) => {
      console.error("Error al obtener datos de la API:", error);
      throw error;
    });
}

export async function getAllRecords() {
  const limit = 100;
  let offset = 0;
  let allRecords: Reports[] = [];

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const response = await axiosClient.get(
      `?where=fecha_del_parte>=date'${formatteddateTwoYearsAgo}'&offset=${offset}&limit=${limit}`
    );

    const responseData: Reports[] = response.data.results.map(
      (report: Reports) => {
        if (Array.isArray(report.provincia)) {
          report.provincia = report.provincia.join(", ");
        }
        return report;
      }
    );

    allRecords = allRecords.concat(responseData);

    if (responseData.length < limit) {
      break;
    }

    offset += limit;
  }
  console.log(allRecords);

  return allRecords;
}

export async function getAllRecordsSearh() {
  const limit = 100;
  let offset = 0;
  const lon = -5.57032;
  const lat = 42.60003;
  let allRecords: Reports[] = [];

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const response = await axiosClient.get(
      `?where=fecha_del_parte>=date'${formatteddateTwoYearsAgo}'&offset=${offset}&limit=${limit}&distance(posicion%2C%20geom%27POINT(${lon}%20${lat})%27%2C%2010km)`
    );

    const responseData: Reports[] = response.data.results.map(
      (report: Reports) => {
        if (Array.isArray(report.provincia)) {
          report.provincia = report.provincia.join(", ");
        }
        return report;
      }
    );

    allRecords = allRecords.concat(responseData);

    if (responseData.length < limit) {
      break;
    }

    offset += limit;
  }
  console.log(allRecords);

  return allRecords;
}
