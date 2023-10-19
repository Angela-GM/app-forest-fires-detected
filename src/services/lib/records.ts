import { formatteddateTwoYearsAgo } from "@/lib/dateTwoYearsAgo";
import axiosClient from "../apiClient";

export function getRecordsTwoYearsAgo() {
    const limit = 100
    const offset = 1
    return axiosClient.get(`?where=fecha_del_parte>=date'${formatteddateTwoYearsAgo}'&offset=${offset}&limit=${limit}`);
}