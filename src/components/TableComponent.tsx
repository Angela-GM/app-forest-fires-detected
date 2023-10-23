import { DataTable } from "./table/data-table";
import { columns } from "./table/columns";
import { useApi } from "@/context/ApiContext";
import { useEffect, useState } from "react";
import { Reports } from "@/interfaces/reports";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

function TableComponent() {
  const { apiData, searchByLocation } = useApi();
  const [results, setResults] = useState<Reports[]>([]);
  const [lon, setLon] = useState(0);
  const [lat, setLat] = useState(0);

  useEffect(() => {
    setResults(apiData);
  }, [apiData]);

  const handleLonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lonValue = parseFloat(e.target.value);
    if (!isNaN(lonValue)) {
      setLon(lonValue);
    }
  };

  const handleLatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const latValue = parseFloat(e.target.value);
    if (!isNaN(latValue)) {
      setLat(latValue);
    }
  };

  const searchByCoordinates = async () => {
    try {
      const data = await searchByLocation(lon, lat);
      setResults(data);
    } catch (error) {
      console.error("Error searching by coordinates:", error);
    }
  };

  const resetCoordinates = () => {
    setLon(0);
    setLat(0);
    setResults(apiData);
    console.log(apiData);
  };

  return (
    <div>
      <div className="flex gap-2 items-end">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="longitud">Longitud</Label>
          <Input
            type="number"
            placeholder="Longitud (lon)"
            value={lon}
            onChange={handleLonChange}
            step="0.1"
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="latitud">Latitud</Label>
          <Input
            type="number"
            placeholder="Latitud (lat)"
            value={lat}
            onChange={handleLatChange}
            step="0.1"
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Button variant={"outline"} onClick={searchByCoordinates}>
            Buscar por coordenadas (10km)
          </Button>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Button variant={"secondary"} onClick={resetCoordinates}>
            Reset coordenadas
          </Button>
        </div>
      </div>

      <DataTable
        data={
          results.length > 0 || (lon === 0 && lat === 0) ? results : apiData
        }
        columns={columns}
        />
    </div>
  );
}

export default TableComponent;
