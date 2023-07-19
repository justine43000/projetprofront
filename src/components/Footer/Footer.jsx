import React, { useState, useEffect } from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <nav className="footer">
            <h1>
                <img src="/src/assets/SimplIEF.png" alt="SimplIEF" className="SimplIEF" />
            </h1>
            <div className="navfooter">
                <ul>
                    <li>
                        <a href="/Donnees">Politique des données</a>
                    </li>

                </ul>
                <div className="btn">
                    <a href="/Ressources" className="btnressource">Ressources</a>
                    <a className="btncontact" href="/Contact" >Nous contacter</a>
                </div>
            </div>
        </nav>
    );
}
