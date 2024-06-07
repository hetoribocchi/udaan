import React from 'react'
import { createRoot } from "react-dom/client";
import Home from './Pages/Home/Home'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ApplyNow from './Pages/ApplyNow/ApplyNow';
import Campus from './components/Campus/Campus';
import StudyAbroad from './Pages/StudyAbroad/StudyAbroad';
import ProgramPage from './Pages/ProgramePage/ProgramPage';
import AboutUs from './Pages/AboutUs/AboutUs';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },{
    path: "/apply-now",
    element: <ApplyNow/>,
  },{
    path: "/study-abroad",
    element: <StudyAbroad/>,
  },{
    path: "/programs",
    element: <ProgramPage/>,
  },{
    path: "/about-us",
    element: <AboutUs/>,
  },
])

  


const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>

  )
}

export default App
