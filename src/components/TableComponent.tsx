import { getRecordsTwoYearsAgo } from "@/services/lib/records";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";


function TableComponent() {
  const [records, setRecords] = useState([])
  const [offset, setOffset] = useState(1);
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response: AxiosResponse = await getRecordsTwoYearsAgo();
        setRecords(response.data.data);
      } catch (error) {
        console.error("error getting data:", error);
      }
    };

    fetchRecords();
  }, [records]);


  return (
    <div>Table Component</div>
  )
}

export default TableComponent