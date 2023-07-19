import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>
        <img src="/src/assets/SimplIEF.png" alt="SimplIEF" className="SimplIEF" />
      </h1>
      <ul>
        <li>
          <a href="/#presentation">Présentation</a>
        </li>
        <li>
          <a href="/#projet">Pourquoi ce projet ?</a>
        </li>
        <li>
          <a href="/#simpl">Pourquoi Simpl'IEF ?</a>
        </li>
        <li>
          <a href="/Contact">Nous contacter</a>
        </li>
        <li className="button">
          <a href="/Connexion" >Se connecter</a>
        </li>
        <li className="button">
          <a href="/Inscription" >S'inscrire</a>
        </li>
      </ul>
    </nav>
  );
}
