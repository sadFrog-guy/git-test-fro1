import React from 'react'
import ImageOfBus from '../Components/ImageOfBus/ImageOfBus'
import "../global.css"
import Button from '../Components/MyButton/Button'
import { Link } from 'react-router-dom';
import transition from '../transitions';
import PWAInstall from '../Components/PWAInstall/PWAInstall';

function MainPage() {
  return (
    <div className="App Main">
        <div className='first-image'>
            <ImageOfBus isBig={true}/>
        </div>
        <p className="heading-route">route.kg</p>
        <p className="subheading-route">г. Джалал-Абад</p>
        <Link to="/routes">
          <Button>
            Продолжить
          </Button>
        </Link>
        <PWAInstall/>
    </div>
  )
}

export default transition(MainPage);