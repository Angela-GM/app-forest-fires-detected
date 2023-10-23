import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './error-page';
import TablePage from './pages/TablePage';
import MapPage from './pages/MapPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <TablePage />
      },
      {
        path: "/map",
        element: <MapPage />
      }

    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

        <RouterProvider router={router} />


    
  </React.StrictMode>,
)
