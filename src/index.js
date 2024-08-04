import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./views/Home/Home.js"
import {Toaster} from 'react-hot-toast'
import AddPlant from './views/AddPlant/AddPlant.js';
import UpdatePlant from './views/UpdatePlant/UpdatePlant.js';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/add",
    element:<AddPlant/>
  },
  {
    path: "/update/:id",
    element: <UpdatePlant/>
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>
  }
])


root.render((<div>
  <RouterProvider router={router}/>
  <Toaster/>
  
  </div>));