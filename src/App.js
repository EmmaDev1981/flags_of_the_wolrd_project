import './App.css';
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CardList from './components/cardList';
import NavBar from './components/NavBar';
import Error404 from './components/Error404';
import About from './components/About';
import Detalles from './components/Detalles';

export default function App() {
  const [cities, setCities] = useState([])
  const [detalle, setDetalles] = useState({})
  
  function onClose(id) {
    let nuevos = cities.filter(c => c.area !== id)
    setCities(nuevos)
  }

  function onFilter(paisId) {
    let filtrado = cities.filter(c => c.area === paisId);
    if(filtrado.length > 0) {
        setDetalles (filtrado[0]);
    }
  }

  useEffect(() => {
    fetch(`https://restcountries.com/v3/all`)
    .then(r => r.json())
    .then((paises) => {
      setCities(paises);
    });
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <CardList cities={cities} onClose={onClose} onFilter={onFilter}/>}
          />
            <Route
            exact
            path="/detalles"
            render={() => <Detalles detalle={detalle} />}
          />
          <Route path="/about" component={About} />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
