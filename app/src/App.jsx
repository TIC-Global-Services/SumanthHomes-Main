import { useState, useEffect } from "react"
import { NavBar } from "./Components/NavBar"
import { Footer } from "./Components/Footer"
import { HomePage } from "./PageComponents/HomePage"
import { AboutPage } from "./PageComponents/AboutPage"
import { ProjectsPage } from "./PageComponents/ProjectsPage"
import { ContactPage } from "./PageComponents/ContactPage"
import {createBrowserRouter, RouterProvider} from "react-router"



function App() {


   const router = createBrowserRouter([
    {
      path:'/',
      element:<HomePage/>,
    }, 
    {
      path:'/about',
      element:<AboutPage/>
    },
    {
      path:'/projects',
      element:<ProjectsPage/>
    },
    {
      path:"/contact",
      element:<ContactPage/>
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

