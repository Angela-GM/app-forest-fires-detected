export interface Reports {
  causa_probable?: string | null;
  codigo_municipio_ine?: string | null;
  fecha_del_parte?: string | null;
  fecha_extinguido?: string | null;
  fecha_inicio?: string | null;
  hora_del_parte?: string | null;
  hora_extinguido?: string | null;
  hora_ini?: string | null;
  medios_de_extincion?: string | null;
  nivel?: string | null;
  nivel_maximo_alcanzado?: string | null;
  posicion?: { lon: number; lat: number } | null;
  provincia?: [string] | null;
  situacion_actual?: string | null;
  termino_municipal?: string | null;
  tipo_y_has_de_superficie_afectada?: string | null;
}
