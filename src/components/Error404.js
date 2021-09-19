import React from 'react'
import {Link} from 'react-router-dom'

function Error404() {
    return (
        <div>
            <h2>Eror 404 Page not found</h2>
            <Link to='/'>
              <span>volver</span>
              </Link>
        </div>
    )
}

export default Error404
