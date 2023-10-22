import { table } from "console"
import unidecode from "unidecode"

interface PropsFilterComponent {
    value: string,
    option: string,
    
    
}


function FilterSelect() {
  return (
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
  )
}

export default FilterSelect