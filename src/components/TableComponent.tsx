import { DataTable } from "./table/data-table";
import { columns } from "./table/columns";
import { useApi } from "@/context/ApiContext";

function TableComponent() {
  const {apiData} = useApi();  
  return (
    <div>
      {apiData !== null ? ( 
        <DataTable data={apiData} columns={columns} />
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default TableComponent;
