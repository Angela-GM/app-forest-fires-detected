"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Reports } from "@/interfaces/reports";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

export const columns: ColumnDef<Reports>[] = [
  {
    accessorKey: "fecha_del_parte",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fecha parte
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize text-center">{row.getValue("fecha_del_parte")}</div>
    ),
  },

  {
    accessorKey: "hora_del_parte",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Hora parte
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("hora_del_parte")}</div>
    ),
  },
  {
    accessorKey: "provincia",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Provincia <CaretSortIcon className="text-center ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("provincia")}</div>,
  },
  {
    accessorKey: "causa_probable",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Causa Probable <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("causa_probable")}</div>
    ),
  },
  {
    accessorKey: "termino_municipal",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Término Municipal <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("termino_municipal")}</div>
    ),
  },
  {
    accessorKey: "nivel",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nivel <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("nivel")}</div>,
  },
  {
    accessorKey: "fecha_inicio",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fecha inicio <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("fecha_inicio")}</div>
    ),
  },
  {
    accessorKey: "hora_ini",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Hora inicio <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("hora_ini")}</div>
    ),
  },
  {
    accessorKey: "medios_de_extincion",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Medios de extinción <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("medios_de_extincion")}</div>
    ),
  },
  {
    accessorKey: "situacion_actual",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Situación actual <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("situacion_actual")}</div>
    ),
  },
  {
    accessorKey: "tipo_y_has_de_superficie_afectada",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tipo y has superficie afectada
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">
        {row.getValue("tipo_y_has_de_superficie_afectada")}
      </div>
    ),
  },
  {
    accessorKey: "fecha_extinguido",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fecha extinguido <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("fecha_extinguido")}</div>
    ),
  },
  {
    accessorKey: "hora_extinguido",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Hora extinguido <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("hora_extinguido")}</div>
    ),
  },
  {
    accessorKey: "nivel_maximo_alcanzado",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nivel máximo <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("nivel_maximo_alcanzado")}</div>
    ),
  },
  {
    accessorKey: "posicion",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Posición <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }): React.ReactNode => {
      const coordenadas = row.getValue("posicion") as {
        lat: number;
        lon: number;
      };

      
      

      if (
        coordenadas &&
        typeof coordenadas === "object" &&
        "lat" in coordenadas &&
        "lon" in coordenadas
      ) {
        const { lat, lon } = coordenadas;

        return (
          <div>
            <div>Lat: {lat}</div>
            <div>Lon: {lon}</div>
          </div>
        );
      }

      return <></>;
    },
  },
];
