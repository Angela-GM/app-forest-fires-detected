import { getRecordsTwoYearsAgo } from "@/services/lib/records";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { formatteddateTwoYearsAgo } from "@/lib/dateTwoYearsAgo";




function TableComponent() {
  const [records, setRecords] = useState([])
  useEffect(() => {
    // Definir una función asincrónica dentro del useEffect para poder usar 'await'
    const fetchRecords = async () => {
      try {
        const response: AxiosResponse = await getRecordsTwoYearsAgo();
        console.log(response);
        setRecords(response.data.data);
      } catch (error) {
        console.error("Error al obtener los cursos:", error);
      }
    };

    fetchRecords();
    console.log(records);
  }, [records]);

console.log(formatteddateTwoYearsAgo);

  return (
    <div>Table Component</div>
  )
}

export default TableComponent