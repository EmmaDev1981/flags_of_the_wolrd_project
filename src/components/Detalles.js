import React from 'react'
import { Link } from 'react-router-dom'
import './styles/detalles.css'

function Detalles({detalle}) {
    console.log(detalle)

    return (
        <div className="container-details">
        <div className="div-detalles">
            <h1>{detalle.name.common}</h1>
            <img src={detalle.flags[0]} alt=""/>
            <p><strong>Region:</strong> {detalle.region}</p>
            <p><strong>Sub-Region: </strong>{detalle.subregion}</p>
            <p><strong>Capital: </strong>{detalle.capital}</p>
            <p><strong>Area:</strong> {detalle.area} km2</p>
            <p><strong>Population:</strong> {detalle.population} hab.</p>
            <p><strong>Status:</strong> {detalle.status}</p>
            <p><strong>Latitud:</strong> {detalle.latlng[0]}</p>
            <p><strong>Longitud:</strong> {detalle.latlng[1]}</p>
            <br></br>
            <Link to="/"><button>volver</button></Link>
        </div>
        </div>
    )
}

export default Detalles
