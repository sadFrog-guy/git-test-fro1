import React from 'react'
import ImageOfBus from '../Components/ImageOfBus/ImageOfBus'
import "../global.css"
import Button from '../Components/MyButton/Button'
import { Link } from 'react-router-dom';
import transition from '../transitions';

function MainPage() {
  return (
    <div className="App Main">
        <div className='first-image'>
            <ImageOfBus isBig={true}/>
        </div>
        <p className="heading-route">route.kg</p>
        <Link to="/routes">
          <Button>
            Продолжить
          </Button>
        </Link>
    </div>
  )
}

export default transition(MainPage);