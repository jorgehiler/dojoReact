import React from 'react'

import Card from './Cards/Card'

const cards = (props) => {
    return(
        <div>
            <Card titulo="Titulo"
            contenido="Contenido"
            responsable="Responsable"></Card>
        </div>
    )
}

export default cards;