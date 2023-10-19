import { getRecordsTwoYearsAgo } from "@/services/lib/records";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";


function TableComponent() {
  const [records, setRecords] = useState([])
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response: AxiosResponse = await getRecordsTwoYearsAgo();
        setRecords(response.data.data);
      } catch (error) {
        console.error("Error al obtener los cursos:", error);
      }
    };

    fetchRecords();
  }, [records]);


  return (
    <div>Table Component</div>
  )
}

export default TableComponent