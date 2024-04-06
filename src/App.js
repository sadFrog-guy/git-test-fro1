import React from "react"
import "./global.css"
import RoutesPage from "./Pages/RoutesPage"
import MainPage from "./Pages/MainPage"
import InfoPage from "./Pages/InfoPage"
import AboutPage from "./Pages/AboutPage"
import {
  Route,
  Routes,
  useLocation,
  Link
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import DevLogo from './Components/DevLogo/DevLogo'

function App() {
  const location = useLocation();

  return (
    <>
      <div className="pc-plug">
        <DevLogo isBig={true}/>

        В разработке...
      </div>

      {location.pathname !== '/about'
        && <Link to="/about"><DevLogo className="logo-pinned"/></Link>
      }

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<MainPage/>}/>
          <Route path="/routes" element={<RoutesPage/>}/>
          <Route path="/routes/:id" element={<InfoPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App

