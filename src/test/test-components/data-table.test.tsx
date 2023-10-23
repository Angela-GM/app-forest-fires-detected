import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import { ApiProvider } from "@/context/ApiContext";
import { Reports } from "@/interfaces/reports";
import { render, screen } from "@testing-library/react";

const apiDataMock: Reports[] = [
  {
    causa_probable: "INTENCIONADO",
    codigo_municipio_ine: "24142",
    fecha_del_parte: "2021-09-30",
    fecha_extinguido: "2021-09-29",
    fecha_inicio: "2021-09-29",
    hora_del_parte: "10:00",
    hora_extinguido: "20:24",
    hora_ini: "19:40",
    medios_de_extincion: "1 AUTOBOMBAS",
    nivel: "0",
    nivel_maximo_alcanzado: "0",
    posicion: {
      lon: -5.615482,
      lat: 42.61117299905991,
    },
    provincia: "LEÓN",
    situacion_actual: "EXTINGUIDO",
    termino_municipal: "BARRIO DE PINILLA(SAN ANDRES DEL RABANEDO)",
    tipo_y_has_de_superficie_afectada: "MATORRAL:0,01 HA. MATORRAL ;",
  },
];

describe("DataTable Component", () => {
  test("It has buttons", () => {
    render(
      <ApiProvider>
        <DataTable data={apiDataMock} columns={columns} />
      </ApiProvider>
    );

    const Buttons = screen.getAllByRole("button");
    expect(Buttons).toBeTruthy();

  });

  test("It has multiple options", () => {
    render(
      <ApiProvider>
        <DataTable data={apiDataMock} columns={columns} />
      </ApiProvider>
    );

    const AllSelect = screen.getAllByRole("option");
    expect(AllSelect).toBeTruthy();
  });
});
