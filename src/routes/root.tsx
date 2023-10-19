import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Forest Fires Detected</h1>
        <nav className="py-4">
          <ul className="flex justify-around">
            <li>
              <Link to={`table`}>Table</Link>
            </li>
            <li>
              <Link to={`map`}>Map</Link>
            </li>
            <li>
              <Link to={`search`}>Search</Link>
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
