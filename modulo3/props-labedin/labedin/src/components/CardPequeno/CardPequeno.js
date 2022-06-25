import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="image-button-container-cardpequeno">
            <img className="image-configs" src={ props.imagem }/>
            <p>{ props.texto }</p>
        </div>

    )
}

export default CardPequeno;