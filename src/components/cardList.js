import React from "react";
import Card from "./card";
import './cardList.css'



function CardList({cities}) {
    console.log(cities)

    return (
        <div className="container">
            {cities.map((c) => <Card 
            key={c.id}
            name={c.name}
            capital={c.capital}
            flag={c.flag}
            population={c.population}
            subregion={c.subregion}
            />)}
        </div>
    )
}

export default CardList