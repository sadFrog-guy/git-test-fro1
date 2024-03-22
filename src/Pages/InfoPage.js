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

function InfoPage() {
  const { id } = useParams();
  const route = routes.filter(item => item.number === id)[0]
  
  return (
    <div className="App">
        <ImageOfBus/>
        <p className='heading-info'>Маршрут <span style={{color: '#80BCBD'}}>{route.number}</span></p>

        <ImageOfMap image={route.route_image}/>
        <div className='streets'>
          {route.street_list.map((item, index) => {
            if(index === route.street_list.length - 1) {
              return (
                <>
                  <Street>⦿ ул. {item}</Street>
                </>
              )
            } else {
              return (
                <>
                  <Street>⦿ ул. {item}</Street>
                  <img src={arrowLogo} alt="arrow icon" style={{alignSelf: 'flex-start', marginLeft: '15px'}}/>
                </>
              )
            }
          })}
        </div>
        <div className='texts'>
          <p className="text">Стартовая и конечная остановки:</p>
          <p className="text-2">
            ул. {route.start}
            <br/>
            ул. {route.last}
          </p>
        </div>
        
        <Link to='/routes'>
          <Button>Назад</Button>
        </Link>
    </div>
  )
}

export default transition(InfoPage);