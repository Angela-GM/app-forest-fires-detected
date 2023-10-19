import { getRecordsTwoYearsAgo } from "@/services/lib/records";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { DataTable } from "./table/data-table";
import { columns } from "./table/columns";
import * as tasks from "../components/data/tasks.json"


function TableComponent() {
  const [records, setRecords] = useState([])
  // const [offset, setOffset] = useState(1);
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
    <div>
      <DataTable data={tasks} columns={columns} />
    </div>
  )
}

export default TableComponent