import React, { useState } from 'react';
import axios from 'axios';
import { connectToken } from "../utils/connectToken";

import "../assets/css/Enfant.css"

export default function Enfant() {
    const config = connectToken();

    const [prenom, setPrenom] = useState('');
    const [birthday, setBirthday] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://projetproback.projets.lecoledunumerique.fr/apip/children', {
            name: prenom,
            birthdate: birthday,
            idUser: `/apip/users/4`
        }, config)
            .then(response => {
                console.log(response);
                setSuccessMessage('L\'enfant a été ajouté avec succès.');
                setErrorMessage('');
            })
            .catch(error => {
                console.log(error);
                setSuccessMessage('');
                setErrorMessage('Une erreur est survenue, veuillez réessayer.');
            });
    }

    return (
        <div className='ajout'>
            <h1>
                <a href="/"><img src="/src/assets/SimplIEF.png" alt="" /></a>
            </h1>

            <div className='coco'>
                <div className='bo'>
                    <h2>Un nouvel enfant ? Bienvenue à lui !</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='form'>
                        <label>Prénom de l'enfant</label>
                        <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                    </div>
                    <div className='form'>
                        <label>Date de naissance</label>
                        <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                    </div>
                    <div className='btn'>
                        <button type='submit'>Ajouter l'enfant</button>
                    </div>
                </form>
                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
        </div>
    )
}
