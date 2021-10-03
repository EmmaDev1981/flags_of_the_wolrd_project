import React from "react";
import Card from "./card";
import './styles/cardList.css'
import SerachBar from "./SerachBar";



function CardList({cities, onClose, onFilter}) {

    console.log(cities)

    return (
        <>
        <SerachBar />
        <div className="container">
            {cities.map((c) => <Card 
            id={c.alpha3Code}
            key={c.alpha3Code}
            name={c.name}
            capital={c.capital}
            flag={c.flags[0]}
            population={c.population}
            subregion={c.subregion}
            onFilter={() => onFilter(c.area)}
            onClose={() => onClose(c.area)}
            />)}
        </div>
        </>
    )
}

export default CardList