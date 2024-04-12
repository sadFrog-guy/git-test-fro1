import React from 'react'
import ImageOfBus from '../Components/ImageOfBus/ImageOfBus'
import ImageOfMap from '../Components/ImageOfMap/ImageOfMap'
import Street from '../Components/Streets/Street'
import Button from '../Components/MyButton/Button'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import "../global.css"
import transition from './../transitions';
import routes from '../Data/Data.json'
import arrowLogo from '../Assets/arrow.png'
import plug from '../Assets/plug.jpg';

function InfoPage() {
  const { id } = useParams();
  const route = routes.filter(item => item.number === id)[0]
  
  return (
    <div className="App">
        <ImageOfBus/>
        <p className='heading-info'>Маршрут <span style={{color: '#80BCBD'}}>{route.number}</span></p>

        <div class="plug">
          <img src={plug} />
          <a href={route.route_image}>
            <Button>Посмотреть маршрут</Button>
          </a>
        </div>

        <div className='streets'>
          {route.street_list.map((item, index) => {
            if(index === route.street_list.length - 1) {
              return (
                <>
                  <Street>⦿ {item}</Street>
                </>
              )
            } else {
              return (
                <>
                  <Street>⦿ {item}</Street>
                  <img src={arrowLogo} alt="arrow icon" style={{alignSelf: 'flex-start', marginLeft: '15px'}}/>
                </>
              )
            }
          })}
        </div>
        <div className='texts'>
          <p className="text">Стартовая и конечная остановки:</p>
          <p className="text-2">
            {route.start}
            <br/>
            {route.last}
          </p>
        </div>
        
        <Link to='/routes'>
          <Button>Назад</Button>
        </Link>
    </div>
  )
}

export default transition(InfoPage);