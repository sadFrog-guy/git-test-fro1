import React, { useState } from 'react'
import ImageOfBus from '../Components/ImageOfBus/ImageOfBus'
import "../global.css"
import Button from '../Components/MyButton/Button'
import { Link } from 'react-router-dom';
import transition from '../transitions';
import step1 from '../Assets/step1.jpg';
import step2 from '../Assets/step2.jpg';
import step3 from '../Assets/step3.jpg';

function MainPage() {
  const [active, setActive] = useState(false)

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

        <Button onClick={() => {
          setActive(true)
          console.log(active)
        }}>
          Установить
        </Button>

        
        <div className="modal" style={active ? {} : {display: 'none'}}>
          <div className='modal-bg' onClick={() => setActive(false)}/>

          <div className='modal-inner'>
            <p className='modal-step'>
              1. Нажмите на три точки в правом верхнем углу вашего браузера
            </p>
            <img src={step1} alt="first-step"/>
            <p className='modal-step'>
              2. В появившемся меню нажмите кнопку "Установить приложение"
            </p>
            <img src={step2} alt="second-step"/>
            <p className='modal-step'>
              3. В появившемся окне нажмите кнопку "Установить"
            </p>
            <img src={step3} alt="third-step"/>
          </div>
        </div>
    </div>
  )
}

export default transition(MainPage);