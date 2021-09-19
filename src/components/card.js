import React from 'react'
import './card.css'

function Card({name, capital, population, flag, subregion}) {

    return (
    <div className="card">
        <img src={flag} alt=""/>
        <h2>{name}</h2>
        <p><strong>Capital: </strong>{capital}</p>
        <p><strong>Region: </strong>{subregion}</p>
        <p><strong>Population: </strong>{population}</p>
        {/* <button onClick={() => onClose(person.id)} className="btn-cerrar">Cerrar</button> */}
        {/* <button className="btn-info">Info</button> */}
    </div>
    )

}

export default Card
