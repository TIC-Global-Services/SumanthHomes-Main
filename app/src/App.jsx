import { useState, useEffect } from "react"
import { NavBar } from "./Components/NavBar"
import { Footer } from "./Components/Footer"
import { HomePage } from "./PageComponents/HomePage"
import { AboutPage } from "./PageComponents/AboutPage"
import { ProjectsPage } from "./PageComponents/ProjectsPage"
import { ContactPage } from "./PageComponents/ContactPage"
import {createBrowserRouter, RouterProvider} from "react-router"
import { NotFound404 } from "./PageComponents/NotFound404"



function App() {


   const router = createBrowserRouter([
    {
      path:'/',
      element:<HomePage/>,
      errorElement: <NotFound404/>
    }, 
    {
      path:'/about',
      element:<AboutPage/>,
      errorElement: <NotFound404/>
    },
    {
      path:'/projects',
      element:<ProjectsPage/>,
      errorElement: <NotFound404/>
    },
    {
      path:"/contact",
      element:<ContactPage/>,
      errorElement: <NotFound404/> 
    }
   ])

  return (

    <div className="bg-[#f6f6f6]" >

      <RouterProvider router={router}>
      </RouterProvider>
      
    </div>
  )
}

export default App

