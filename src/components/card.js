import React from 'react'
import './styles/card.css'
import {Link} from 'react-router-dom'

function Card(props) {    
    
    const {name, capital, flag, subregion, onClose, onFilter} = props


    return (
    <div className="card">
        <img src={flag} alt=""/>
        <h2>{name.common}</h2>
        <p><strong>Capital: </strong>{capital}</p>
        <p><strong>Region: </strong>{subregion}</p>
        <div>
        <Link to="/detalles"><button onClick={onFilter} className="btn-info">Detalles</button></Link>
        <button onClick={onClose} className="btn-cerrar">Cerrar</button>
        </div>
    </div>
    )
}

export default Card
