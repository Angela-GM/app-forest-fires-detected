import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div
        id="sidebar"
        className="bg-gradient-to-r from-red-600 to-red-400 my-4 py-2 px-4 rounded shadow-lg"
      >
        <h1 className="text-center text-4xl font-extrabold text-white ">
          Incendios Forestales Detectados en Castilla León
        </h1>
        <nav className="py-4">
          <ul className="flex justify-around text-lg w-2/3 mx-auto">
            <li>
              <Link to={`table`} className="text-white hover:text-red-200 transition duration-300">Tabla</Link>
            </li>
            <li>
              <Link to={`map`} className="text-white hover:text-red-200 transition duration-300">Mapa</Link>
            </li>
            <li>
              <Link to={`search`} className="text-white hover:text-red-200 transition duration-300">Búsqueda</Link>
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
