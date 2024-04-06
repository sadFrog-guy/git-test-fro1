import React from 'react'
import transition from '../transitions'
import "../global.css"
import DevLogo from '../Components/DevLogo/DevLogo';
import phone from '../../src/Assets/phone.png'
import location from '../../src/Assets/location.png'
import main from '../../src/Assets/main.png'
import react from '../../src/Assets/react.png'
import html from '../../src/Assets/html.png'
import python from '../../src/Assets/python.png'
import design from '../../src/Assets/design.png'
import others from '../../src/Assets/others.png'
import Button from '../Components/MyButton/Button';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div class="about">
      <div className='ab-container'>
        <h1 className='header-h1'>О нас</h1>
        <p className='sub-heading'>
          Современные IT-курсы по веб-разработке в г.
          Джалал-Абад. 
          <br/>
          Мы создаем будущее!
        </p>
        <div className='number-phone'>
          <img src={phone}/>
          <p>+996 999 98 95 08</p>
        </div>
        <div className='location'>
          <img src={location}/>
          <p>Джалал-Абад, Токтогула 47А</p>
        </div>
        <h1 className='header-2'>Наша команда</h1>
        <div className='team'>
          <div className='team-box'>
            <img src={main}></img>
            <div className='tb-text'>
              <p className='user-name'>Адилет Касымбаев</p>
              <p className='user-info'>Team Lead - Front-end</p>
            </div>
          </div>
          <div className='team-box'>
            <img src={react}></img>
            <div className='tb-text'>
              <p className='user-name'>Бекболот Нурмаматов</p>
              <p className='user-info'>Junior - Front-end</p>
            </div>
          </div>
          <div className='team-box'>
            <img src={react}></img>
            <div className='tb-text'>
              <p className='user-name'>Аяна Ташбаева</p>
              <p className='user-info'>Junior - Front-end</p>
            </div>
          </div>
          <div className='team-box'>
            <img src={html}></img>
            <div className='tb-text'>
              <p className='user-name'>Арууке Капарова</p>
              <p className='user-info'>Junior - Front-end</p>
            </div>
          </div>
          <div className='team-box'>
            <img src={python}></img>
            <div className='tb-text'>
              <p className='user-name'>Айтегин Абдумананов</p>
              <p className='user-info'>Junior - Back-end</p>
            </div>
          </div>
          <div className='team-box'>
            <img src={python}></img>
            <div className='tb-text'>
              <p className='user-name'>Дастан Баиев</p>
              <p className='user-info'>Junior - Back-end</p>
            </div>
          </div>
          <div className='team-box'>
            <img src={python}></img>
            <div className='tb-text'>
              <p className='user-name'>Айгерим Борбугулова</p>
              <p className='user-info'>Junior - Back-end</p>
            </div>
          </div>
          <div className='team-box'>
            <img src={design}></img>
            <div className='tb-text'>
              <p className='user-name'>Адилет Касымбаев</p>
              <p className='user-info'>Wed-design</p>
            </div>
          </div>
          <div className='team-box'>
            <img src={others}></img>
            <div className='tb-text'>
              <p className='user-name'>Саид Мамаджанов</p>
              <p className='user-info'>Картограф</p>
            </div>
          </div>
          <div className='team-box'>
            <img src={others}></img>
            <div className='tb-text'>
              <p className='user-name'>Марлен Кочконбаев</p>
              <p className='user-info'>Картограф</p>
            </div>
          </div>
          <div className='team-box'>
            <img src={others}></img>
            <div className='tb-text'>
              <p className='user-name'>Жасур Сафаров</p>
              <p className='user-info'>Картограф</p>
            </div>
          </div>
          <div className='team-box'>
            <img src={others}></img>
            <div className='tb-text'>
              <p className='user-name'>Эрлан Асанов</p>
              <p className='user-info'>Картограф</p>
            </div>
          </div>
        </div>
        
        <div className='about-button'>
          <Link to='/routes'>
            <Button>Назад</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default transition(AboutPage);