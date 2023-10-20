import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1 className="text-center font-bold text-2xl text-red-600">Incendios Forestales Detectados en Castilla León</h1>
        <nav className="py-4">
          <ul className="flex justify-around text-lg text-green-700 w-2/3 mx-auto">
            <li>
              <Link to={`table`}>Tabla</Link>
            </li>
            <li>
              <Link to={`map`}>Mapa</Link>
            </li>
            <li>
              <Link to={`search`}>Búsqueda</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
