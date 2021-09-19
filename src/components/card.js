import React from 'react'
import './styles/card.css'
import {Link} from 'react-router-dom'

function Card({name, capital, population, flag, subregion, onClose, onFilter}) {
    return (
    <div className="card">
        <img src={flag} alt=""/>
        <h2>{name}</h2>
        <p><strong>Capital: </strong>{capital}</p>
        <p><strong>Region: </strong>{subregion}</p>
        <button onClick={onClose} className="btn-cerrar">Cerrar</button>
        <Link to="/detalles"><button onClick={onFilter} className="btn-info">Detalles</button></Link>
    </div>
    )
}

export default Card
