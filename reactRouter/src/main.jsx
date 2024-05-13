import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/home/home.jsx'
import Outlet from './outlet.jsx'
import About from './components/about/about.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'




const router = createBrowserRouter([
  {
    path:'/',
    element: <Outlet/>,
    children:[
      {
        path:"home",
        element:<Home/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"contact",
        element:<ContactUs/> 
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
 
)
