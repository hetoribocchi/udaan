import React from 'react'
import { createRoot } from "react-dom/client";
import Home from './Pages/Home/Home'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import ApplyNow from './Pages/ApplyNow/ApplyNow';
import Campus from './components/Campus/Campus';
import StudyAbroad from './Pages/StudyAbroad/StudyAbroad';
import ProgramPage from './Pages/ProgramePage/ProgramPage';
import AboutUs from './Pages/AboutUs/AboutUs';
import Canada from './Pages/Canada/Canada';
import { UK } from './Pages/UK/UK';
import { USA } from './Pages/USA/USA';
import Australia from './Pages/Australia/Australia';
import ContactUs from './Pages/ContactUs/ContactUs';
import IELTS from './Pages/TestPreparation/IELTS/IELTS';
import PTE from './Pages/TestPreparation/PTE/PTE';
import SAT from './Pages/TestPreparation/SAT/SAT';
import TOEFL from './Pages/TestPreparation/TOEFL/TOEFL';
import GRE from './Pages/TestPreparation/GRE/GRE';
import ScrollToTop from './ScrollToTop';



const App = () => {
 
  
  return (
    
    <div>
      <ScrollToTop/>
      <Outlet/>

    </div>

  )
}

export default App
