import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Layout from './layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import ContactUs from '../../reactRouter/src/components/ContactUs/ContactUs.jsx'
import User from './components/user/user.jsx'
import Github from './components/github/github.jsx'

//Now we need to create that router
const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"home",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>

      },
      {
        path:"contactUs",
        element:<ContactUs/>

      },
      {
        path:"user/:userId",
        element:<User/>

      },
      {
        path:"github",
        element:<Github/>

      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>,
)
