import React from "react";
import Card from "./card";
import './styles/cardList.css'
import SerachBar from "./SerachBar";



function CardList({cities, onClose, onFilter}) {

    return (
        <>
        <SerachBar />
        <div className="container">
            {cities.map((c) => <Card 
            id={c.alpha3Code}
            key={c.alpha3Code}
            name={c.name}
            capital={c.capital}
            flag={c.flag}
            population={c.population}
            subregion={c.subregion}
            onFilter={() => onFilter(c.alpha3Code)}
            onClose={() => onClose(c.alpha3Code)}
            />)}
        </div>
        </>
    )
}

export default CardList