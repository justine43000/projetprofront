import React from 'react'
import "../assets/css/MdpOublie.css"

export default function MdpOublie() {
    return (
        <div className='mdp'>
            <h1>
                <a href="/"><img src="/src/assets/SimplIEF.png" alt="" /></a>
            </h1>

            <div className='coco'>
                <div className='bo'>
                    <h2>Mot de passe oublié ? Ça arrive.</h2>
                    <span className='span'>Changeons le !</span>
                </div>
                <div className='form'>
                    <label>adresse e-mail</label>
                    <input type="text" />
                </div>
                <div className='btn'>
                    <button type='Submit'>Valider</button>
                </div>
            </div>
        </div>
    )
}