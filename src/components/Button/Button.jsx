import React from 'react';
import { useState } from 'react';
import "./ButtonAccueil.css"

export default function Button(props) {
    const [buttonText, setButtonText] = useState(props.text);
    function handleClick() {
        // Ajoutez ici le code à exécuter lors du clic sur le bouton
    }

    return (
        <button onClick={handleClick} className='Button'>
            {buttonText}
        </button>
    );
}