import './App.css';
import React, {useEffect, useState} from 'react';
import CardList from './components/cardList';
import NavBar from './components/NavBar';
import SerachBar from './components/SerachBar';

export default function App() {

  const [cities, setCities] = useState([])

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(r => r.json())
    .then((paises) => {
      setCities(paises);
    });
  }, [])

  return (
    <div className="App">
      <NavBar />
      <SerachBar />
      <CardList cities={cities}/>
    </div>
  );
}


