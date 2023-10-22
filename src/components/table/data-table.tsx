"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
// import { DataTablePagination } from "./data-table-pagination";
import { useApi } from "@/context/ApiContext";
import unidecode from "unidecode";
import { DataTablePagination } from "./data-table-pagination";
import { Button } from "../ui/button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

type UserFilters = {
  provincia: string;
  causa_probable: string;
  situacion_actual: string;
  nivel: string;
  nivel_maximo_alcanzado: string;
};

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 50,
      },
    },
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  const { apiData } = useApi();

  const loadUserFilters = () => {
    try {
      const userFilters = localStorage.getItem("userFilters");
      if (userFilters) {
        return JSON.parse(userFilters);
      }
    } catch (error) {
      console.error("Error al cargar los filtros del usuario:", error);
    }
    return null;
  };

  const saveUserFilters = (filters: UserFilters) => {
    try {
      const userFilters = JSON.stringify(filters);
      localStorage.setItem("userFilters", userFilters);
    } catch (error) {
      console.error("Error al guardar los filtros del usuario:", error);
    }
  };

  const storedFilters = loadUserFilters();
  const [initialSelectValues, setInitialSelectValues] =
    React.useState<UserFilters>(
      storedFilters || {
        provincia: "",
        causa_probable: "",
        situacion_actual: "",
        nivel: "",
        nivel_maximo_alcanzado: "",
      }
    );

  const resetSelectValues = () => {
    // Restablecer los valores en la tabla
    table.getColumn("provincia")?.setFilterValue("");
    table.getColumn("causa_probable")?.setFilterValue("");
    table.getColumn("situacion_actual")?.setFilterValue("");
    table.getColumn("nivel")?.setFilterValue("");
    table.getColumn("nivel_maximo_alcanzado")?.setFilterValue("");

    // Actualizar initialSelectValues con los valores reseteados
    const updatedFilters = {
      provincia: "",
      causa_probable: "",
      situacion_actual: "",
      nivel: "",
      nivel_maximo_alcanzado: "",
    };
    setInitialSelectValues(updatedFilters);

    // Guardar los valores reseteados en el localStorage
    saveUserFilters(updatedFilters);
  };

  React.useEffect(() => {
    const storedFilters = loadUserFilters();
    if (storedFilters) {
      // Restaurar los valores de los filtros en la tabla
      table.getColumn("provincia")?.setFilterValue(storedFilters.provincia);
      table
        .getColumn("causa_probable")
        ?.setFilterValue(storedFilters.causa_probable);
      table
        .getColumn("situacion_actual")
        ?.setFilterValue(storedFilters.situacion_actual);
      table.getColumn("nivel")?.setFilterValue(storedFilters.nivel);
      table
        .getColumn("nivel_maximo_alcanzado")
        ?.setFilterValue(storedFilters.nivel_maximo_alcanzado);
    }
  }, [table]); // Esto se ejecutará una vez al cargar el componente

  return (
    <div className="space-y-4 justify-between flex flex-col  ">
      <div className="flex gap-2 items-center justify-between my-2 w-screen sm:max-w-sm ">
        {/* Filtros */}
        <select
          className="max-w-xs items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground"
          value={
            (table.getColumn("provincia")?.getFilterValue() as
              | string
              | null
              | undefined) ?? ""
          }
          onChange={(event) => {
            const selectedValue = event.target.value;
            // Guardar el valor seleccionado
            const updatedFilters = {
              ...initialSelectValues,
              provincia: selectedValue,
            };
            setInitialSelectValues(updatedFilters);
            // Guardar en el localStorage
            saveUserFilters(updatedFilters);
            // Aplicar el filtro
            table.getColumn("provincia")?.setFilterValue(selectedValue);
          }}
        >
          <option value="">Provincia</option>
          {[...new Set(apiData.map((option) => option.provincia))]
            .filter(
              (provincia) => provincia !== null && provincia !== undefined
            )
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .sort((a: any, b: any) => unidecode(a).localeCompare(unidecode(b)))
            .map((provincia, index) => (
              <option key={index} value={provincia}>
                {provincia}
              </option>
            ))}
        </select>

        <select
          className="max-w-xs items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground"
          value={
            (table.getColumn("causa_probable")?.getFilterValue() as
              | string
              | null
              | undefined) ?? ""
          }
          onChange={(event) => {
            const selectedValue = event.target.value;
            // Guardar el valor seleccionado
            const updatedFilters = {
              ...initialSelectValues,
              causa_probable: selectedValue,
            };
            setInitialSelectValues(updatedFilters);
            // Guardar en el localStorage
            saveUserFilters(updatedFilters);
            // Aplicar el filtro
            table.getColumn("causa_probable")?.setFilterValue(selectedValue);
          }}
        >
          <option value="">Causa probable</option>
          {[...new Set(apiData.map((option) => option.causa_probable))]
            .filter((causa) => causa !== null && causa !== undefined)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .sort((a: any, b: any) => unidecode(a).localeCompare(unidecode(b)))
            .map((causa, index) => (
              <option key={index} value={causa}>
                {causa}
              </option>
            ))}
        </select>

        <select
          className="max-w-xs items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground"
          value={
            (table.getColumn("situacion_actual")?.getFilterValue() as
              | string
              | null
              | undefined) ?? ""
          }
          onChange={(event) => {
            const selectedValue = event.target.value;
            // Guardar el valor seleccionado
            const updatedFilters = {
              ...initialSelectValues,
              situacion_actual: selectedValue,
            };
            setInitialSelectValues(updatedFilters);
            // Guardar en el localStorage
            saveUserFilters(updatedFilters);
            // Aplicar el filtro
            table.getColumn("situacion_actual")?.setFilterValue(selectedValue);
          }}
        >
          <option value="">Situación actual</option>
          {[...new Set(apiData.map((option) => option.situacion_actual))]
            .filter(
              (situacion) => situacion !== null && situacion !== undefined
            )
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .sort((a: any, b: any) => unidecode(a).localeCompare(unidecode(b)))
            .map((situacion, index) => (
              <option key={index} value={situacion}>
                {situacion}
              </option>
            ))}
        </select>

        <select
          className="max-w-xs items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground"
          value={
            (table.getColumn("nivel")?.getFilterValue() as
              | string
              | null
              | undefined) ?? ""
          }
          onChange={(event) => {
            const selectedValue = event.target.value;
            // Guardar el valor seleccionado
            const updatedFilters = {
              ...initialSelectValues,
              nivel: selectedValue,
            };
            setInitialSelectValues(updatedFilters);
            // Guardar en el localStorage
            saveUserFilters(updatedFilters);
            // Aplicar el filtro
            table.getColumn("nivel")?.setFilterValue(selectedValue);
          }}
        >
          <option value="">Nivel</option>
          {[...new Set(apiData.map((option) => option.nivel))]
            .filter((nivel) => nivel !== null && nivel !== undefined)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .sort((a: any, b: any) => unidecode(a).localeCompare(unidecode(b)))
            .map((nivel, index) => (
              <option key={index} value={nivel}>
                {nivel}
              </option>
            ))}
        </select>

        <select
          className="max-w-xs items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground"
          value={
            (table.getColumn("nivel_maximo_alcanzado")?.getFilterValue() as
              | string
              | null
              | undefined) ?? ""
          }
          onChange={(event) => {
            const selectedValue = event.target.value;
            // Guardar el valor seleccionado
            const updatedFilters = {
              ...initialSelectValues,
              nivel_maximo_alcanzado: selectedValue,
            };
            setInitialSelectValues(updatedFilters);
            // Guardar en el localStorage
            saveUserFilters(updatedFilters);
            // Aplicar el filtro
            table
              .getColumn("nivel_maximo_alcanzado")
              ?.setFilterValue(selectedValue);
          }}
        >
          <option value="">Nivel máximo</option>
          {[...new Set(apiData.map((option) => option.nivel_maximo_alcanzado))]
            .filter((nivelMax) => nivelMax !== null && nivelMax !== undefined)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .sort((a: any, b: any) => unidecode(a).localeCompare(unidecode(b)))
            .map((nivelMax, index) => (
              <option key={index} value={nivelMax}>
                {nivelMax}
              </option>
            ))}
        </select>

        <Button variant={"secondary"} onClick={resetSelectValues}>
          Reset
        </Button>
      </div>

      <div className="rounded-md border">
        <Table className="text-s">
          <TableHeader className="text-s">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className="text-s" key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.index}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="text-xs">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.index}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
