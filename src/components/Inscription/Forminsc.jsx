import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ajouter cette ligne pour importer axios
import "./Forminsc.css"

export default function Inscription() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [nom, setNom] = useState(''); // Ajouter cette ligne pour la variable nom
  const [email, setEmail] = useState(''); // Ajouter cette ligne pour la variable email
  const [password, setPassword] = useState(''); // Ajouter cette ligne pour la variable password
  const [confirmPassword, setConfirmPassword] = useState(''); // Ajouter cette ligne pour la variable confirmPassword

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      nom,
      email,
      password,
      confirmPassword
    };

    axios.post('https://projetproback.projets.lecoledunumerique.fr/apip/users', formData)
      .then(response => {
        // Vérifier si la réponse de l'API indique une réussite
        if (response.status === 200) {
          // Rediriger vers la page de connexion
          navigate('/Connexion');
        } else {
          // Afficher un message d'erreur
          setError('Une erreur est survenue, veuillez réessayer.');
        }
      })
      .catch(error => {
        // Gestion des erreurs
        console.error('Erreur lors de la requête API:', error);
        // Afficher un message d'erreur
        setError('Une erreur est survenue, veuillez réessayer.');
      });
  };


  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className='insc'>
          <label className='labelinsc' htmlFor="nom">Nom :</label>
          <input
            className='inputinsc'
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div className='insc'>
          <label className='labelinsc' htmlFor="email">E-mail :</label>
          <input
            className='inputinsc'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='insc'>
          <label className='labelinsc' htmlFor="password">Mot de passe :</label>
          <input
            className='inputinsc'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='insc'>
          <label className='labelinsc' htmlFor="confirmPassword">Confirmation du mot de passe :</label>
          <input
            className='inputinsc'
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className='btni'>
          <button type="submit" className='btninsc'>S'inscrire</button>
        </div>
      </form>
    </div>
  );
}

