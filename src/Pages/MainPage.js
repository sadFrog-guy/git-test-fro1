import React, { useState } from 'react'
import ImageOfBus from '../Components/ImageOfBus/ImageOfBus'
import "../global.css"
import Button from '../Components/MyButton/Button'
import { Link } from 'react-router-dom';
import transition from '../transitions';
import getMobileOperatingSystem from '../Services/checkOS';
import ManualAndroid from './../Components/ManualAndroid/ManualAndroid';
import ManualIOS from '../Components/ManualIOS/ManualIOS';
import whatsapp from '../Assets/whatsapp (1).png';
import instagram from '../Assets/instagram.png';
import telegram from '../Assets/telegram.png';

function MainPage() {
  const [active, setActive] = useState(false)

  const renderInstruction = () => {
    const os = getMobileOperatingSystem()

    console.log(os)
    if (os === 'Android') {
      return (
        <>
          <ManualAndroid active={active} setActive={setActive}/>
          <Button onClick={() => {
            setActive(true)
          }}>
            Установить
          </Button>
        </>
      )
    } else if (os === 'iOS') {
      return (
        <>
          <ManualIOS active={active} setActive={setActive}/>
          <Button onClick={() => {
            setActive(true)
          }}>
            Установить
          </Button>
        </>
      )
    }
  }

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

        {renderInstruction()}

        <div className='socials'>
          <a href='https://www.instagram.com/code.01.kg/'>
            <img src={instagram} alt='social'/>
          </a>
          
          <a href='https://wa.link/0siv3l'>
            <img src={whatsapp} alt='social'/>
          </a>
          
          <a href='https://t.me/codejalalabad'>
            <img src={telegram} alt='social'/>
          </a>
        </div>
    </div>
  )
}

export default transition(MainPage);