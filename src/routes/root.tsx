import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>Forest Fires Detected</h1>
          {/* <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div> */}
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