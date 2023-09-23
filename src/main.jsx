import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Deteils from './Card/Deteils/Deteils.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  },
  {
    path: "deteils",
    element: <Deteils />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
