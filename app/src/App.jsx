import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { lazy, Suspense } from "react"
import HomePage from "./PageComponents/HomePage";
const AboutPage = lazy(()=>import('./PageComponents/AboutPage'));
const ProjectsPage = lazy(()=>import('./PageComponents/ProjectsPage'));
const ContactPage = lazy(()=>import('./PageComponents/ContactPage'));
const ExplorePage = lazy(()=>import('./PageComponents/ExplorePage'));
const NotFound404 = lazy(()=>import('./PageComponents/NotFound404'))

function App() {


   const router = createBrowserRouter([
    {
      path:'/',
      element:<HomePage/>,
      errorElement: <NotFound404/>
    }, 
    {
      path:'/about',
      element:(
      <Suspense fallback={<div>Loading...</div>}>
        <AboutPage/>
      </Suspense>),
      errorElement: <NotFound404/>
    },
    {
      path:'/projects',
      element:(
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsPage/>
      </Suspense>),
      errorElement: <NotFound404/>
    },
    {
      path:"/contact",
      element:(
      <Suspense fallback={<div>Loading...</div>}>
        <ContactPage/>
      </Suspense>),
      errorElement: <NotFound404/> 
    },
    {
      path:"/projects/:slug",
      element:(
      <Suspense fallback={<div>Loading...</div>}>
        <ExplorePage/>
      </Suspense>),
      errorElement:<NotFound404/>
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

