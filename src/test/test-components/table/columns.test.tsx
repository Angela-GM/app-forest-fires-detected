import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import { ApiProvider } from "@/context/ApiContext";
import { Reports } from "@/interfaces/reports";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

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

describe("Table columns", () => {
  test("has the input field for searching by selected filter", () => {
    render(
      <ApiProvider>
        <DataTable data={apiDataMock} columns={columns} />
      </ApiProvider>
    );

    // Verifica que el texto de tu componente se renderiza correctamente
    expect(screen.getByText("INTENCIONADO")).toBeInTheDocument();
  });
  test("It has the headers", () => {
    render(
      <ApiProvider>
        <DataTable data={apiDataMock} columns={columns} />
      </ApiProvider>
    );

    expect(
      screen.getByRole("columnheader", { name: /Fecha parte/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Hora parte/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Provincia/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Causa Probable/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Término Municipal/i })
    ).toBeInTheDocument();

    const nivelHeaders = screen.getAllByRole("columnheader", { name: /Nivel/i }); //Y Nivel máximo
    expect(nivelHeaders.length).toBe(2);
    expect(
      screen.getByRole("columnheader", { name: /Fecha inicio/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Hora inicio/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Medios de extinción/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Situación actual/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", {
        name: /Tipo y has superficie afectada/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Fecha extinguido/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Hora extinguido/i })
    ).toBeInTheDocument();
    // expect(
    //   screen.getByRole("columnheader", { name: /Nivel máximo/i })
    // ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Posición/i })
    ).toBeInTheDocument();
  });
});
