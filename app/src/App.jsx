import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { lazy, Suspense } from "react"
import HomePage from "./PageComponents/HomePage";
import Layout from "./layout";
const AboutPage = lazy(()=>import('./PageComponents/AboutPage'));
const ProjectsPage = lazy(()=>import('./PageComponents/ProjectsPage'));
const ContactPage = lazy(()=>import('./PageComponents/ContactPage'));
const ExplorePage = lazy(()=>import('./PageComponents/ExplorePage'));
const NotFound404 = lazy(()=>import('./PageComponents/NotFound404'));
import { SkeletonLayout } from "./Layout/SkeletonLayout";
import Urbanscaps from "./PageComponents/urbanscaps";
const LotusSereneVillas = lazy(() => import('./PageComponents/lotusSereneVillas'));
const KbrBrindavanam = lazy(() => import('./PageComponents/KbrBrindavanam'));

   const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      errorElement: <NotFound404/>,
      children: [
        {
          path:'/',
          element:<HomePage/>,
        }, 
        {
          path:'/about',
          element:(
          <Suspense fallback={<SkeletonLayout/>}>
            <AboutPage/>
          </Suspense>),
        },
        {
          path:'/projects',
          element:(
          <Suspense fallback={<SkeletonLayout/>}>
            <ProjectsPage/>
          </Suspense>),
        },
        {
          path:"/contact",
          element:(
          <Suspense fallback={<SkeletonLayout/>}>
            <ContactPage/>
          </Suspense>),
        },
        {
          path:"/projects/:slug",
          element:(
          <Suspense fallback={<SkeletonLayout/>}>
            <ExplorePage/>
          </Suspense>),
        },
        {
          path:"/urbanscapes",
          element:(
          <Suspense fallback={<SkeletonLayout/>}>
            <Urbanscaps/>
          </Suspense>),
        },
        {
          path:"/lotus-serene-villas",
          element:(
          <Suspense fallback={<SkeletonLayout/>}>
            <LotusSereneVillas/>
          </Suspense>),
        },
        {
          path:"/lotus-villas",
          element:(
          <Suspense fallback={<SkeletonLayout/>}>
            <LotusSereneVillas/>
          </Suspense>),
        },
        {
          path:"/kbr-brindavanam",
          element:(
          <Suspense fallback={<SkeletonLayout/>}>
            <KbrBrindavanam/>
          </Suspense>),
        },
        {
          path:"/kbr-brindhavan",
          element:(
          <Suspense fallback={<SkeletonLayout/>}>
            <KbrBrindavanam/>
          </Suspense>),
        }
      ]
    }
   ])
function App() {
  return <RouterProvider router={router}/>
}

export default App

