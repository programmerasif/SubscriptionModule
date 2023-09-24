import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Deteils from './Card/Deteils/Deteils.jsx';
import Payment from './Pyament/Payment.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  },
  {
    path: "deteils/:id",
    element: <Deteils />,
    loader: ({params}) => {return params}
  },
  {
    path: "payment/:id",
    element: <Payment />,
    loader: ({params}) => {return params}
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
