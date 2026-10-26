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
const LotusVillaPhase1 = lazy(() => import('./PageComponents/LotusVillaPhase1'));
const KbrBrindavanam = lazy(() => import('./PageComponents/KbrBrindavanam'));
const PadmavathiGarden = lazy(() => import('./PageComponents/padavathiGarden'));
const GarudanGateWay = lazy(() => import('./PageComponents/GarudanGateWay'));
const PearlAbode = lazy(() => import('./PageComponents/PearlAbode'));
const JasmineRidge = lazy(() => import('./PageComponents/JasmineRidge'));

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
          path:"/lotus-villas-phase-2",
          element:(
          <Suspense fallback={<SkeletonLayout/>}>
            <LotusSereneVillas/>
          </Suspense>),
        },
        {
          path:"/lotus-villas-phase-1",
          element:(
          <Suspense fallback={<SkeletonLayout/>}>
            <LotusVillaPhase1/>
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
          path:"/padmavathi-garden",
          element:(
          <Suspense fallback={<SkeletonLayout/>}>
            <PadmavathiGarden/>
          </Suspense>),
        },
        {
          path:"/garudan-gateway",
          element:(
          <Suspense fallback={<SkeletonLayout/>}>
            <GarudanGateWay/>
          </Suspense>),
        },
        {
          path:"/pearl-abode",
          element:(
          <Suspense fallback={<SkeletonLayout/>}>
            <PearlAbode/>
          </Suspense>),
        },
        {
          path:"/jasmine-ridge",
          element:(
          <Suspense fallback={<SkeletonLayout/>}>
            <JasmineRidge/>
          </Suspense>),
        }
      ]
    }
   ])
function App() {
  return <RouterProvider router={router}/>
}

export default App

