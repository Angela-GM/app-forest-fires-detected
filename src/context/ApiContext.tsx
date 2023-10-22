import { Reports } from "@/interfaces/reports";
import { getAllRecords, searchRecordsByLocation } from "@/services/lib/records";
import { createContext, useContext, useEffect, useState } from "react";


interface ApiContextType {
  apiData: Reports[];
  searchByLocation: (lon: number, lat: number) => Promise<Reports[]>;

}

// eslint-disable-next-line react-refresh/only-export-components
const ApiContext = createContext<ApiContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export function useApi() {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error("useApi debe usarse dentro de un ApiProvider");
  }
  return context;
}

interface ApiProviderProps {
  children: React.ReactNode;
}

export function ApiProvider({ children }: ApiProviderProps) {
  const [apiData, setApiData] = useState<Reports[]>([]);


  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response: Reports[] = await getAllRecords();
        setApiData(response);
      } catch (error) {
        console.error("error getting data:", error);
      }
    };

    fetchRecords();
  }, []);

const searchByLocation = async (lon: number, lat: number) => {
    try {
      const response: Reports[] = await searchRecordsByLocation(lon, lat);
      return response;
    } catch (error) {
      console.error("error searching by location:", error);
      return [];
    }
  };

  

  return (
    <ApiContext.Provider value={{ apiData, searchByLocation}}>
        {children}
    </ApiContext.Provider>
  )
}
