import { formatteddateTwoYearsAgo } from "@/lib/dateTwoYearsAgo";
import axiosClient from "../apiClient";

export function getRecordsTwoYearsAgo() {
    return axiosClient.get(`?where=fecha_del_parte>=date'${formatteddateTwoYearsAgo}'`);
}