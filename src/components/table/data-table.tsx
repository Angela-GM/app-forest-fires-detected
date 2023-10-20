"use client"

import * as React from "react"
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
} from "@tanstack/react-table"


// import { DataTablePagination } from "../components/data-table-pagination"
// import { DataTableToolbar } from "../components/data-table-toolbar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { DataTablePagination } from "./data-table-pagination"
import { Input } from "../ui/input"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
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
  })

  return (
    
    <div className="space-y-4">
      <div className="flex gap-1">

      {/* Filtros */}
      <Input
          placeholder={`Provincia`}
          value={(table.getColumn('provincia')?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn('provincia')?.setFilterValue(event.target.value)
          }
        />
         <Input
          placeholder={`Causa Probable`}
          value={(table.getColumn('causa_probable')?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn('causa_probable')?.setFilterValue(event.target.value)
          }
        />
          <Input
          placeholder={`Situacion actual`}
          value={(table.getColumn('situacion_actual')?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn('situacion_actual')?.setFilterValue(event.target.value)
          }
        />
         <Input
          placeholder={`Nivel`}
          value={(table.getColumn('nivel')?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn('nivel')?.setFilterValue(event.target.value)
          }
          />
         <Input
          placeholder={`Nivel máximo alcanzado`}
          value={(table.getColumn('nivel_maximo_alcanzado')?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn('nivel_maximo_alcanzado')?.setFilterValue(event.target.value)
          }
          />
          </div>
        

      <div className="rounded-md border">
        
        <Table className="text-s">
          <TableHeader className="text-s" >
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className="text-s" key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead  key={header.index}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
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
  )
}