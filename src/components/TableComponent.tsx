import { getRecordsTwoYearsAgo } from "@/services/lib/records";
import { useEffect, useState } from "react";
import { DataTable } from "./table/data-table";
import { columns } from "./table/columns";
import { Reports } from "@/interfaces/reports";
// import * as tasks from "../components/data/tasks.json"

function TableComponent() {
  const [records, setRecords] = useState<Reports[] | null>(null);
  // const [offset, setOffset] = useState(1);
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response: Reports[] = await getRecordsTwoYearsAgo();
        setRecords(response);
      } catch (error) {
        console.error("error getting data:", error);
      }
    };

    fetchRecords();
  }, []);

  return (
    <div>
      {records !== null ? ( // Verifica si 'records' no es null
        <DataTable data={records} columns={columns} />
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default TableComponent;
