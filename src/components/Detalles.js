import React from 'react'
import { Link } from 'react-router-dom'
import './styles/detalles.css'

function Detalles({detalle}) {
    console.log(detalle)

    return (
        <div className="div-detalles">
            <h1>{detalle.name}</h1>
            <img src={detalle.flag} alt="" />
            <p><strong>Region:</strong> {detalle.region}</p>
            <p><strong>Area:</strong> {detalle.area} km2</p>
            <p><strong>Languaje:</strong> {detalle.languages[0].name}</p>
            <p><strong>Native Name:</strong> {detalle.nativeName}</p>
            <p><strong>Population:</strong> {detalle.population}</p>
            <p><strong>Time Zone:</strong> {detalle.timezones}</p>
            <br></br>
            <Link to="/"><span>volver</span></Link>
        </div>
    )
}

export default Detalles
