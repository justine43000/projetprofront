import React from 'react'
import "../assets/css/NouveauMdp.css"

export default function NouveauMdp() {

    return (
        <div className='mdp'>
            <h1>
                <a href="/"><img src="/src/assets/SimplIEF.png" alt="" /></a>
            </h1>

            <div className='coco'>
                <div className='bo'>
                    <h2>Enregistrez votre nouveau mot de passe</h2>
                </div>
                <div className='form'>
                    <label>Nouveau mot de passe</label>
                    <input type="text" />
                </div>
                <div className='form'>
                    <label>Confirmation du nouveau mot de passe</label>
                    <input type="text" />
                </div>
                <div className='btnMDP'>
                    <button type='Submit'>Enregistrer</button>
                </div>
            </div>
        </div>
    )

}