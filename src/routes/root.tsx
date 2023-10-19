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
                <a href={`/table`}>Table</a>
              </li>
              <li>
                <a href={`/map`}>Map</a>
              </li>
              <li>
                <a href={`/search`}>Search</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }