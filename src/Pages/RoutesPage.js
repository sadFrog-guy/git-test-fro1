import React, {useState} from 'react'
import ImageOfBus from "../Components/ImageOfBus/ImageOfBus"
import Input from "../Components/MyInput/Input"
import Card from "../Components/MyCards/Card"
import Button from "../Components/MyButton/Button"
import { Link } from 'react-router-dom'
import "../global.css"
import transition from '../transitions'
import routes from '../Data/Data.json'

function RoutesPage() {
  const [number , setNumber] = useState("");
  const [current, setCurrent] = useState("");

  return (
    <div className="App">
      <ImageOfBus></ImageOfBus>
      <Link to="/about" className="heading">Выберите маршрут</Link>
      <Input setNumber={setNumber} number={number}>{number}</Input>
      <div className="Card-box">
        {routes.map(item => {
          if(item.number.includes(number) || item.street_list.some(street => street.includes(number))) {
            return <Card
                      setCurrent={setCurrent}
                      clicked={current === item.number ? true : false}
                      current={current.number}
                      type={item.type}
                      key={item.number}
                      color={item.color}
                    >
                      {item.number}
                    </Card>
          }
        })}
      </div>
      <Link to={`/routes/${current}`}>
        <Button disabled={current ? false : true}>Далее</Button>
      </Link>
    </div>
  )
}

export default transition(RoutesPage);