import React from "react"
import ImageOfBus from "./Components/ImageOfBus/ImageOfBus"
import Input from "./Components/MyInput/Input"
import Card from "./Components/MyCards/Card"
import Button from "./Components/MyButton/Button"
import "./global.css"
import RoutesPage from "./Pages/RoutesPage"
import MainPage from "./Pages/MainPage"
import InfoPage from "./Pages/InfoPage"

function App() {

  return (
    <div className="App">
      <MainPage/>
      <RoutesPage/>
      <InfoPage/>
    </div>
  )
}

export default App

