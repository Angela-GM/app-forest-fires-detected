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
  const [initialSelectValues] = React.useState({
    provincia: "",
    causa_probable: "",
    situacion_actual: "",
    nivel: "",
    nivel_maximo_alcanzado: "",
  });

  const resetSelectValues = () => {
    console.log("reset");
    const resetValues = { ...initialSelectValues };
    table.getColumn("provincia")?.setFilterValue(resetValues.provincia);
    table
      .getColumn("causa_probable")
      ?.setFilterValue(resetValues.causa_probable);
    table
      .getColumn("situacion_actual")
      ?.setFilterValue(resetValues.situacion_actual);
    table.getColumn("nivel")?.setFilterValue(resetValues.nivel);
    table
      .getColumn("nivel_maximo_alcanzado")
      ?.setFilterValue(resetValues.nivel_maximo_alcanzado);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {/* Filtros */}

        <select
          value={
            (table.getColumn("provincia")?.getFilterValue() as
              | string
              | null
              | undefined) ?? ""
          }
          onChange={(event) =>
            table.getColumn("provincia")?.setFilterValue(event.target.value)
          }
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
          value={
            (table.getColumn("causa_probable")?.getFilterValue() as
              | string
              | null
              | undefined) ?? ""
          }
          onChange={(event) =>
            table
              .getColumn("causa_probable")
              ?.setFilterValue(event.target.value)
          }
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
          value={
            (table.getColumn("situacion_actual")?.getFilterValue() as
              | string
              | null
              | undefined) ?? ""
          }
          onChange={(event) =>
            table
              .getColumn("situacion_actual")
              ?.setFilterValue(event.target.value)
          }
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
          value={
            (table.getColumn("nivel")?.getFilterValue() as
              | string
              | null
              | undefined) ?? ""
          }
          onChange={(event) =>
            table.getColumn("nivel")?.setFilterValue(event.target.value)
          }
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
          value={
            (table.getColumn("nivel_maximo_alcanzado")?.getFilterValue() as
              | string
              | null
              | undefined) ?? ""
          }
          onChange={(event) =>
            table
              .getColumn("nivel_maximo_alcanzado")
              ?.setFilterValue(event.target.value)
          }
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
