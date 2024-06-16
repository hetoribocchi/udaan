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
import Canada from './Pages/Canada/Canada';
import { UK } from './Pages/UK/UK';
import TestPreparation from './Pages/TestPreparation/TestPreparation';
import { USA } from './Pages/USA/USA';
import Australia from './Pages/Australia/Australia';
import ContactUs from './Pages/ContactUs/ContactUs';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },{
    path: "/apply-now",
    element: <ApplyNow/>,
  },
  {
    path: "/programs",
    element: <ProgramPage/>,
  },
  {
    path: "/test-preparation",
    element: <TestPreparation/>,
  },
  {
    path: "/contact-us",
    element: <ContactUs/>,
  },
  {
    path: "/about-us",
    element: <AboutUs/>,
  },
  {
    path: "/canada",
    element: <Canada/>,
  },
  {
    path: "/uk",
    element: <UK/>,
  },
  {
    path: "/usa",
    element: <USA/>,
  },
  {
    path: "/australia",
    element: <Australia/>,
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
