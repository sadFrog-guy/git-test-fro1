import React, { useState } from 'react';
import ImageOfBus from "../Components/ImageOfBus/ImageOfBus";
import Input from "../Components/MyInput/Input";
import Card from "../Components/MyCards/Card";
import Button from "../Components/MyButton/Button";
import { Link } from 'react-router-dom';
import "../global.css";
import transition from '../transitions';
import routes from '../Data/Data.json';
import Fuse from 'fuse.js'; // Import Fuse.js

function RoutesPage() {
  const [number, setNumber] = useState("");
  const [current, setCurrent] = useState("");
  
  // Set up fuzzy search options
  const options = {
    keys: ['number', 'street_list'], // Search by 'number' and 'street_list',
    includeScore: true, // Include score in search results
    minMatchCharLength: 3, // Minimum character length to start showing search results
    threshold: 0.4 // Set threshold for fuzzy matching
  };
  const fuse = new Fuse(routes, options);

  // Perform fuzzy search
  const results = number ? fuse.search(number) : routes;

  // Filter results to only show the best relevant ones
  const bestResults = results.filter(({ score }) => score < 0.6);

  return (
    <div className="App">
      <ImageOfBus></ImageOfBus>
      <h1 to="/about" className="heading">Выберите маршрут</h1>
      <Input setNumber={setNumber} number={number}>{number}</Input>
      <div className="Card-box">
        {number === "" ? (
          // Render all routes if there's no search input
          routes.map((item) => (
            <Card
              setCurrent={setCurrent}
              clicked={current === item.number ? true : false}
              current={current.number}
              type={item.type}
              key={item.number}
              color={item.color}
            >
              {item.number}
            </Card>
          ))
        ) : (
          // Render filtered search results if there's a search input
          bestResults.map(({ item }) => (
            <Card
              setCurrent={setCurrent}
              clicked={current === item.number ? true : false}
              current={current.number}
              type={item.type}
              key={item.number}
              color={item.color}
            >
              {item.number}
            </Card>
          ))
        )}
      </div>
      <Link to={`/routes/${current}`}>
        <Button disabled={current ? false : true}>Далее</Button>
      </Link>
    </div>
  )
}

export default transition(RoutesPage);
